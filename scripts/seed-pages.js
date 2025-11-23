/**
 * Örnek Page içerikleri oluşturur
 * 
 * Kullanım:
 *   npm run seed:pages
 *   veya
 *   node scripts/seed-pages.js
 */

const fs = require('fs-extra');
const path = require('path');
const mime = require('mime-types');

function getFileSizeInBytes(filePath) {
  const stats = fs.statSync(filePath);
  return stats['size'];
}

function getFileData(fileName) {
  const filePath = path.join('data', 'uploads', fileName);
  const size = getFileSizeInBytes(filePath);
  const ext = fileName.split('.').pop();
  const mimeType = mime.lookup(ext || '') || '';

  return {
    filepath: filePath,
    originalFileName: fileName,
    size,
    mimetype: mimeType,
  };
}

async function uploadFile(file, name) {
  return strapi
    .plugin('upload')
    .service('upload')
    .upload({
      files: file,
      data: {
        fileInfo: {
          alternativeText: `An image uploaded to Strapi called ${name}`,
          caption: name,
          name,
        },
      },
    });
}

async function checkFileExistsBeforeUpload(files) {
  const existingFiles = [];
  const uploadedFiles = [];
  const filesCopy = Array.isArray(files) ? [...files] : [files];

  for (const fileName of filesCopy) {
    if (!fileName) continue;
    
    // Check if the file already exists in Strapi
    const fileWhereName = await strapi.query('plugin::upload.file').findOne({
      where: {
        name: fileName.replace(/\..*$/, ''),
      },
    });

    if (fileWhereName) {
      existingFiles.push(fileWhereName);
    } else {
      // File doesn't exist, upload it
      const fileData = getFileData(fileName);
      const fileNameNoExtension = fileName.split('.').shift();
      const [file] = await uploadFile(fileData, fileNameNoExtension);
      uploadedFiles.push(file);
    }
  }
  
  const allFiles = [...existingFiles, ...uploadedFiles];
  return allFiles.length === 1 ? allFiles[0] : allFiles;
}

async function createPage(pageData) {
  try {
    // Check if page already exists
    const existingPage = await strapi.documents('api::page.page').findOne({
      filters: { slug: pageData.slug },
      locale: pageData.locale || 'tr-TR',
    });

    if (existingPage) {
      console.log(`  ⏭️  Sayfa zaten mevcut: ${pageData.title} (${pageData.slug})`);
      return existingPage;
    }

    // Process SEO share image
    let processedSeo = pageData.seo;
    if (processedSeo && processedSeo.shareImage) {
      const uploadedFile = await checkFileExistsBeforeUpload([processedSeo.shareImage]);
      processedSeo = {
        ...processedSeo,
        shareImage: uploadedFile,
      };
    }

    // Process content blocks
    const processedContent = [];
    
    for (const block of pageData.content || []) {
      const processedBlock = { ...block };
      
      // Handle media files
      if (block.__component === 'shared.media' && block.file) {
        const uploadedFile = await checkFileExistsBeforeUpload([block.file]);
        processedBlock.file = uploadedFile;
      }
      
      // Handle slider files
      if (block.__component === 'shared.slider' && block.files) {
        const uploadedFiles = await checkFileExistsBeforeUpload(block.files);
        processedBlock.files = uploadedFiles;
      }
      
      // Handle hero image
      if (block.__component === 'shared.hero' && block.image) {
        const uploadedFile = await checkFileExistsBeforeUpload([block.image]);
        processedBlock.image = uploadedFile;
      }
      
      // Handle gallery images
      if (block.__component === 'shared.gallery' && block.images) {
        const uploadedFiles = await checkFileExistsBeforeUpload(block.images);
        processedBlock.images = uploadedFiles;
      }
      
      // Handle video embed poster
      if (block.__component === 'shared.video-embed' && block.poster) {
        const uploadedFile = await checkFileExistsBeforeUpload([block.poster]);
        processedBlock.poster = uploadedFile;
      }
      
      processedContent.push(processedBlock);
    }

    // Create the page
    const createdPage = await strapi.documents('api::page.page').create({
      data: {
        title: pageData.title,
        slug: pageData.slug,
        description: pageData.description,
        seo: processedSeo,
        content: processedContent,
        publishedAt: new Date(),
      },
      locale: pageData.locale || 'tr-TR',
    });

    // Publish the page
    if (createdPage.documentId) {
      await strapi.documents('api::page.page').publish({
        documentId: createdPage.documentId,
        locale: pageData.locale || 'tr-TR',
      });
    }

    console.log(`  ✅ Sayfa oluşturuldu: ${pageData.title} (${pageData.slug})`);
    return createdPage;
  } catch (error) {
    console.error(`  ❌ Hata: ${pageData.title}`, error.message);
    throw error;
  }
}

async function seedPages() {
  console.log('📄 Örnek sayfalar oluşturuluyor...\n');

  const pages = [
    {
      title: 'Ana Sayfa',
      slug: 'ana-sayfa',
      description: 'Hoş geldiniz sayfası',
      locale: 'tr-TR',
      seo: {
        metaTitle: 'Ana Sayfa - Türk Hava Yolları',
        metaDescription: 'Türk Hava Yolları resmi web sitesi ana sayfası',
        shareImage: 'default-image.png',
      },
      content: [
        {
          __component: 'shared.hero',
          title: 'Hoş Geldiniz',
          description: 'Türk Hava Yolları ile dünyayı keşfedin',
          image: 'beautiful-picture.jpg',
          buttonText: 'Rezervasyon Yap',
          buttonLink: '/rezervasyon',
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>Neden Türk Hava Yolları?</h2><p>Türk Hava Yolları, dünya çapında 300\'den fazla destinasyona uçan, modern filo ve mükemmel hizmet kalitesi ile öne çıkan bir havayoludur. Yılların deneyimi ve güvenilirliği ile yolcularımıza en iyi seyahat deneyimini sunuyoruz.</p>',
        },
        {
          __component: 'shared.gallery',
          title: 'Hizmetlerimiz',
          images: ['coffee-art.jpg', 'coffee-beans.jpg', 'coffee-shadow.jpg'],
          columns: 3,
        },
        {
          __component: 'shared.cta',
          title: 'Hemen Rezervasyon Yapın',
          description: 'En iyi fiyatları kaçırmayın',
          buttonText: 'Rezervasyon',
          buttonLink: '/rezervasyon',
          buttonStyle: 'primary',
        },
      ],
    },
    {
      title: 'Hakkımızda',
      slug: 'hakkimizda',
      description: 'Şirketimiz hakkında bilgiler',
      locale: 'tr-TR',
      seo: {
        metaTitle: 'Hakkımızda - Türk Hava Yolları',
        metaDescription: 'Türk Hava Yolları hakkında bilgiler ve şirket tarihçesi',
        shareImage: 'default-image.png',
      },
      content: [
        {
          __component: 'shared.hero',
          title: 'Hakkımızda',
          description: 'Türk Hava Yolları olarak 90 yılı aşkın deneyimimizle havacılık sektöründe öncüyüz',
          image: 'beautiful-picture.jpg',
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>Tarihçemiz</h2><p>Türk Hava Yolları, 1933 yılında kurulmuş ve o günden bu yana sürekli büyüyen bir havayoludur. Bugün dünya çapında 300\'den fazla destinasyona uçuyoruz ve her yıl milyonlarca yolcuya hizmet veriyoruz.</p><h2>Misyonumuz</h2><p>Misyonumuz, müşterilerimize güvenli, konforlu ve unutulmaz bir seyahat deneyimi sunmaktır. Modern filomuz, deneyimli personelimiz ve kaliteli hizmet anlayışımızla havacılık sektöründe öncü konumdayız.</p>',
        },
        {
          __component: 'shared.quote',
          title: 'Vizyonumuz',
          body: 'Dünya çapında en çok tercih edilen havayolu olmak ve müşterilerimize her zaman en iyi hizmeti sunmak.',
        },
        {
          __component: 'shared.gallery',
          title: 'Filo ve Hizmetlerimiz',
          images: ['coffee-art.jpg', 'coffee-beans.jpg', 'coffee-shadow.jpg', 'we-love-pizza.jpg'],
          columns: 2,
        },
        {
          __component: 'shared.cta',
          title: 'Bizimle İletişime Geçin',
          description: 'Sorularınız için bize ulaşın',
          buttonText: 'İletişim',
          buttonLink: '/iletisim',
          buttonStyle: 'primary',
        },
      ],
    },
    {
      title: 'Hizmetlerimiz',
      slug: 'hizmetlerimiz',
      description: 'Sunduğumuz hizmetler',
      locale: 'tr-TR',
      seo: {
        metaTitle: 'Hizmetlerimiz - Türk Hava Yolları',
        metaDescription: 'Türk Hava Yolları sunduğu tüm hizmetler hakkında bilgi',
        shareImage: 'default-image.png',
      },
      content: [
        {
          __component: 'shared.hero',
          title: 'Hizmetlerimiz',
          description: 'Size sunduğumuz geniş hizmet yelpazesi',
          image: 'beautiful-picture.jpg',
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>Uçuş Hizmetleri</h2><p>Ekonomi, Business ve First Class koltuk seçenekleri ile konforlu bir seyahat deneyimi sunuyoruz. Tüm uçaklarımızda Wi-Fi, eğlence sistemi ve lezzetli yemek seçenekleri bulunmaktadır.</p>',
        },
        {
          __component: 'shared.media',
          file: 'coffee-art.jpg',
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>Miles&Smiles Programı</h2><p>Miles&Smiles üyeleri, uçuşlarında biriken millerle ücretsiz bilet kazanabilir, özel kampanyalardan yararlanabilir ve VIP salonları kullanabilir.</p>',
        },
        {
          __component: 'shared.quote',
          title: 'Müşteri Memnuniyeti',
          body: 'Müşterilerimizin memnuniyeti bizim için en önemli önceliktir. Her zaman en iyi hizmeti sunmak için çalışıyoruz.',
        },
        {
          __component: 'shared.slider',
          files: ['coffee-beans.jpg', 'coffee-shadow.jpg', 'we-love-pizza.jpg'],
        },
        {
          __component: 'shared.cta',
          title: 'Hizmetlerimizi Keşfedin',
          description: 'Detaylı bilgi için tıklayın',
          buttonText: 'Daha Fazla Bilgi',
          buttonLink: '/hizmetler',
          buttonStyle: 'secondary',
        },
      ],
    },
    {
      title: 'İletişim',
      slug: 'iletisim',
      description: 'Bize ulaşın',
      locale: 'tr-TR',
      seo: {
        metaTitle: 'İletişim - Türk Hava Yolları',
        metaDescription: 'Türk Hava Yolları iletişim bilgileri',
        shareImage: 'default-image.png',
      },
      content: [
        {
          __component: 'shared.hero',
          title: 'İletişim',
          description: 'Sorularınız, önerileriniz veya şikayetleriniz için bize ulaşabilirsiniz',
          image: 'beautiful-picture.jpg',
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>İletişim Bilgileri</h2><p><strong>Telefon:</strong> +90 212 444 0 849</p><p><strong>E-posta:</strong> info@thy.com</p><p><strong>Adres:</strong> Atatürk Havalimanı, Yeşilköy, 34149 İstanbul, Türkiye</p><h2>Çalışma Saatleri</h2><p>Müşteri hizmetlerimiz 7/24 hizmetinizdedir. Rezervasyon ve bilgi için her zaman bize ulaşabilirsiniz.</p>',
        },
        {
          __component: 'shared.media',
          file: 'coffee-art.jpg',
        },
        {
          __component: 'shared.cta',
          title: 'Online Destek',
          description: 'Canlı destek hattımızdan anında yardım alın',
          buttonText: 'Canlı Destek',
          buttonLink: '/destek',
          buttonStyle: 'primary',
        },
      ],
    },
    {
      title: 'Galeri',
      slug: 'galeri',
      description: 'Fotoğraf galerisi',
      locale: 'tr-TR',
      seo: {
        metaTitle: 'Galeri - Türk Hava Yolları',
        metaDescription: 'Türk Hava Yolları fotoğraf galerisi',
        shareImage: 'default-image.png',
      },
      content: [
        {
          __component: 'shared.hero',
          title: 'Fotoğraf Galerisi',
          description: 'Uçaklarımız, hizmetlerimiz ve destinasyonlarımızdan kareler',
        },
        {
          __component: 'shared.gallery',
          title: 'Uçaklarımız',
          images: ['coffee-art.jpg', 'coffee-beans.jpg', 'coffee-shadow.jpg'],
          columns: 3,
        },
        {
          __component: 'shared.rich-text',
          body: '<h2>Modern Filo</h2><p>Genç ve modern filomuz ile dünya çapında güvenli ve konforlu seyahat imkanı sunuyoruz.</p>',
        },
        {
          __component: 'shared.gallery',
          title: 'Hizmetlerimiz',
          images: ['we-love-pizza.jpg', 'beautiful-picture.jpg'],
          columns: 2,
        },
        {
          __component: 'shared.video-embed',
          title: 'Tanıtım Videosu',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          poster: 'default-image.png',
          autoplay: false,
        },
      ],
    },
  ];

  // Create pages
  for (const page of pages) {
    try {
      await createPage(page);
    } catch (error) {
      console.error(`Sayfa oluşturma hatası: ${page.title}`, error);
    }
  }

  console.log('\n✅ Tüm sayfalar oluşturuldu!\n');
}

async function main() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';
  global.strapi = app;

  await seedPages();
  await app.destroy();

  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

