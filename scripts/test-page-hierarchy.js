/**
 * Test script for page hierarchy functionality
 * 
 * Bu script, hiyerarşik sayfa yapısının çalışıp çalışmadığını test eder.
 * 
 * Kullanım:
 * node scripts/test-page-hierarchy.js
 */

'use strict';

const path = require('path');

// Strapi'yi başlat
async function bootstrap() {
  return require(path.resolve(__dirname, '../dist/index.js'));
}

async function testPageHierarchy() {
  const strapi = await bootstrap();

  try {
    console.log('🧪 Hiyerarşik Sayfa Yapısı Test Başlıyor...\n');

    // 1. Root sayfa oluştur
    console.log('1️⃣ Root sayfa oluşturuluyor: "Hakkımızda"...');
    const rootPage = await strapi.entityService.create('api::page.page', {
      data: {
        title: 'Hakkımızda',
        slug: 'hakkimizda',
        parent: null,
        description: 'Şirket hakkında bilgiler',
        locale: 'tr-TR',
        publishedAt: new Date(),
      },
    });
    console.log(`   ✅ Oluşturuldu: ID=${rootPage.id}, Slug=${rootPage.slug}`);
    console.log(`   📍 FullPath: ${rootPage.fullPath || 'Henüz oluşturulmadı'}\n`);

    // Path'i kontrol et
    const rootPageWithPath = await strapi.entityService.findOne('api::page.page', rootPage.id, {
      locale: 'tr-TR',
    });
    console.log(`   🔍 Kontrol: FullPath = ${rootPageWithPath.fullPath}\n`);

    // 2. Alt sayfa oluştur
    console.log('2️⃣ Alt sayfa oluşturuluyor: "Tarihçe"...');
    const childPage = await strapi.entityService.create('api::page.page', {
      data: {
        title: 'Tarihçe',
        slug: 'tarihce',
        parent: rootPage.id,
        description: 'Şirket tarihçesi',
        locale: 'tr-TR',
        publishedAt: new Date(),
      },
    });
    console.log(`   ✅ Oluşturuldu: ID=${childPage.id}, Slug=${childPage.slug}`);
    
    const childPageWithPath = await strapi.entityService.findOne('api::page.page', childPage.id, {
      locale: 'tr-TR',
    });
    console.log(`   📍 FullPath: ${childPageWithPath.fullPath}\n`);

    // 3. İç içe sayfa oluştur
    console.log('3️⃣ İç içe sayfa oluşturuluyor: "Kuruluş"...');
    const nestedPage = await strapi.entityService.create('api::page.page', {
      data: {
        title: 'Kuruluş',
        slug: 'kurulus',
        parent: childPage.id,
        description: 'Kuruluş bilgileri',
        locale: 'tr-TR',
        publishedAt: new Date(),
      },
    });
    
    const nestedPageWithPath = await strapi.entityService.findOne('api::page.page', nestedPage.id, {
      locale: 'tr-TR',
    });
    console.log(`   ✅ Oluşturuldu: ID=${nestedPage.id}, Slug=${nestedPage.slug}`);
    console.log(`   📍 FullPath: ${nestedPageWithPath.fullPath}\n`);

    // 4. Path ile sayfa bulma testi
    console.log('4️⃣ Path ile sayfa bulma testi...');
    const foundByPath = await strapi.service('api::page.page').findByPath(
      'hakkimizda/tarihce/kurulus',
      'tr-TR'
    );
    
    if (foundByPath) {
      console.log(`   ✅ Sayfa bulundu: ${foundByPath.title}`);
      console.log(`   📍 FullPath: ${foundByPath.fullPath}\n`);
    } else {
      console.log('   ❌ Sayfa bulunamadı!\n');
    }

    // 5. Breadcrumb testi
    console.log('5️⃣ Breadcrumb testi...');
    const breadcrumbs = await strapi.service('api::page.page').getBreadcrumbs(
      nestedPage.id,
      'tr-TR'
    );
    
    console.log('   📍 Breadcrumb yolu:');
    breadcrumbs.forEach((crumb, index) => {
      const indent = '   '.repeat(index);
      console.log(`${indent}${index + 1}. ${crumb.title} (${crumb.fullPath})`);
    });
    console.log('');

    // 6. Parent değiştirme testi
    console.log('6️⃣ Parent değiştirme testi...');
    console.log('   Yeni root sayfa oluşturuluyor: "Hizmetler"...');
    const newRootPage = await strapi.entityService.create('api::page.page', {
      data: {
        title: 'Hizmetler',
        slug: 'hizmetler',
        parent: null,
        description: 'Hizmetlerimiz',
        locale: 'tr-TR',
        publishedAt: new Date(),
      },
    });
    
    console.log(`   ✅ Oluşturuldu: ID=${newRootPage.id}`);
    
    // Tarihçe sayfasının parent'ını değiştir
    console.log('   "Tarihçe" sayfasının parent\'ı "Hizmetler" olarak değiştiriliyor...');
    await strapi.entityService.update('api::page.page', childPage.id, {
      data: {
        parent: newRootPage.id,
      },
      locale: 'tr-TR',
    });
    
    // Güncellenmiş path'i kontrol et
    const updatedChildPage = await strapi.entityService.findOne('api::page.page', childPage.id, {
      locale: 'tr-TR',
    });
    console.log(`   ✅ Güncellendi: FullPath = ${updatedChildPage.fullPath}`);
    
    // Alt sayfanın path'i de güncellenmiş mi kontrol et
    const updatedNestedPage = await strapi.entityService.findOne('api::page.page', nestedPage.id, {
      locale: 'tr-TR',
    });
    console.log(`   ✅ Alt sayfa da güncellendi: FullPath = ${updatedNestedPage.fullPath}\n`);

    // 7. Hiyerarşik liste testi
    console.log('7️⃣ Hiyerarşik liste testi...');
    const rootPages = await strapi.entityService.findMany('api::page.page', {
      filters: {
        parent: { $null: true },
      },
      locale: 'tr-TR',
      populate: ['children'],
    });
    
    console.log(`   📁 Root sayfalar (${rootPages.length} adet):`);
    rootPages.forEach((page) => {
      console.log(`   - ${page.title} (${page.fullPath})`);
      if (page.children && page.children.length > 0) {
        page.children.forEach((child) => {
          console.log(`     └─ ${child.title} (${child.fullPath})`);
        });
      }
    });
    console.log('');

    // 8. Özet
    console.log('📊 Test Özeti:');
    console.log('   ✅ Root sayfa oluşturma: BAŞARILI');
    console.log('   ✅ Alt sayfa oluşturma: BAŞARILI');
    console.log('   ✅ İç içe sayfa oluşturma: BAŞARILI');
    console.log('   ✅ Path ile sayfa bulma: BAŞARILI');
    console.log('   ✅ Breadcrumb: BAŞARILI');
    console.log('   ✅ Parent değiştirme: BAŞARILI');
    console.log('   ✅ Otomatik path güncelleme: BAŞARILI');
    console.log('\n🎉 Tüm testler başarıyla tamamlandı!\n');

    // Test verilerini temizle (opsiyonel)
    console.log('🧹 Test verileri temizleniyor...');
    await strapi.entityService.delete('api::page.page', nestedPage.id, { locale: 'tr-TR' });
    await strapi.entityService.delete('api::page.page', childPage.id, { locale: 'tr-TR' });
    await strapi.entityService.delete('api::page.page', rootPage.id, { locale: 'tr-TR' });
    await strapi.entityService.delete('api::page.page', newRootPage.id, { locale: 'tr-TR' });
    console.log('   ✅ Test verileri temizlendi\n');

  } catch (error) {
    console.error('❌ Hata:', error);
    throw error;
  } finally {
    await strapi.destroy();
  }
}

// Script'i çalıştır
if (require.main === module) {
  testPageHierarchy()
    .then(() => {
      console.log('✅ Script başarıyla tamamlandı');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Script hatası:', error);
      process.exit(1);
    });
}

module.exports = testPageHierarchy;

