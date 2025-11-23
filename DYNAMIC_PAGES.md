# Dynamic Pages with Dynamic Zone

Bu dokümantasyon, Strapi'de Dynamic Zone kullanarak dinamik sayfalar oluşturma özelliğini açıklar.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Page Content Type](#page-content-type)
- [Kullanılabilir Component'ler](#kullanılabilir-componentler)
- [API Kullanımı](#api-kullanımı)
- [Örnekler](#örnekler)

## 🎯 Genel Bakış

Dynamic Zone özelliği sayesinde, içerik yöneticileri sayfaları esnek bir şekilde oluşturabilir. Her sayfa farklı component'lerin kombinasyonundan oluşabilir ve bu component'ler sıralı bir şekilde yerleştirilebilir.

## 📄 Page Content Type

`Page` content type'ı aşağıdaki özelliklere sahiptir:

- **Title**: Sayfa başlığı (i18n destekli)
- **Slug**: URL-friendly sayfa adresi (title'dan otomatik oluşturulur)
- **Description**: Sayfa açıklaması (i18n destekli)
- **SEO**: SEO component'i (meta title, description, share image)
- **Content**: Dynamic Zone - farklı component'lerin kombinasyonu

### i18n Desteği

Page content type'ı çoklu dil desteğine sahiptir. Her dil için ayrı içerik oluşturabilirsiniz:

```bash
# Türkçe sayfa
GET /api/pages?locale=tr-TR&filters[slug][$eq]=hakkimizda

# İngilizce sayfa
GET /api/pages?locale=en-US&filters[slug][$eq]=about-us
```

## 🧩 Kullanılabilir Component'ler

Dynamic Zone içinde kullanılabilecek component'ler:

### 1. Hero
Başlık, açıklama, görsel ve buton içeren hero section.

**Alanlar:**
- `title` (string, required): Hero başlığı
- `description` (text): Açıklama metni
- `image` (media): Hero görseli
- `buttonText` (string): Buton metni
- `buttonLink` (string): Buton linki

### 2. Rich Text
Zengin metin editörü ile oluşturulmuş içerik.

**Alanlar:**
- `body` (richtext): Zengin metin içeriği

### 3. Media
Tek bir medya dosyası (görsel, video, dosya).

**Alanlar:**
- `file` (media): Medya dosyası

### 4. Quote
Alıntı bloğu.

**Alanlar:**
- `title` (string): Alıntı başlığı
- `body` (text): Alıntı metni

### 5. Slider
Görsel slider/carousel.

**Alanlar:**
- `files` (media, multiple): Slider görselleri

### 6. Call to Action (CTA)
Eylem çağrısı bloğu.

**Alanlar:**
- `title` (string, required): CTA başlığı
- `description` (text): Açıklama
- `buttonText` (string, required): Buton metni
- `buttonLink` (string, required): Buton linki
- `buttonStyle` (enum): Buton stili (primary, secondary, outline)

### 7. Gallery
Görsel galerisi.

**Alanlar:**
- `title` (string): Galeri başlığı
- `images` (media, multiple, required): Galeri görselleri
- `columns` (integer): Sütun sayısı (1-4, default: 3)

### 8. Video Embed
Video embed bloğu.

**Alanlar:**
- `title` (string): Video başlığı
- `videoUrl` (string): Video URL'i (YouTube, Vimeo, vb.)
- `videoFile` (media): Yüklenen video dosyası
- `poster` (media): Video poster görseli
- `autoplay` (boolean): Otomatik oynatma

## 🔌 API Kullanımı

### Tüm Sayfaları Listeleme

```bash
GET /api/pages
```

**Query Parametreleri:**
- `locale`: Dil kodu (örn: `tr-TR`, `en-US`)
- `populate`: İlişkili verileri doldurma
  - `populate=*`: Tüm ilişkileri doldur
  - `populate[content]=*`: Dynamic Zone içeriğini doldur
  - `populate[seo]=*`: SEO component'ini doldur

**Örnek:**
```bash
GET /api/pages?locale=tr-TR&populate[content]=*&populate[seo]=*
```

### Slug ile Sayfa Getirme

```bash
GET /api/pages?filters[slug][$eq]=hakkimizda&locale=tr-TR&populate=*
```

### Tekil Sayfa Getirme

```bash
GET /api/pages/:id?populate=*
```

### GraphQL Kullanımı

```graphql
query GetPage($slug: String!, $locale: String!) {
  pages(filters: { slug: { eq: $slug } }, locale: $locale) {
    data {
      id
      attributes {
        title
        slug
        description
        seo {
          metaTitle
          metaDescription
          shareImage {
            data {
              attributes {
                url
              }
            }
          }
        }
        content {
          __typename
          ... on ComponentSharedHero {
            title
            description
            image {
              data {
                attributes {
                  url
                }
              }
            }
            buttonText
            buttonLink
          }
          ... on ComponentSharedRichText {
            body
          }
          ... on ComponentSharedMedia {
            file {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentSharedQuote {
            title
            body
          }
          ... on ComponentSharedSlider {
            files {
              data {
                attributes {
                  url
                }
              }
            }
          }
          ... on ComponentSharedCta {
            title
            description
            buttonText
            buttonLink
            buttonStyle
          }
          ... on ComponentSharedGallery {
            title
            images {
              data {
                attributes {
                  url
                }
              }
            }
            columns
          }
          ... on ComponentSharedVideoEmbed {
            title
            videoUrl
            poster {
              data {
                attributes {
                  url
                }
              }
            }
            autoplay
          }
        }
      }
    }
  }
}
```

## 💡 Örnekler

### Örnek 1: Basit Sayfa

```json
{
  "data": {
    "title": "Hakkımızda",
    "slug": "hakkimizda",
    "description": "Şirketimiz hakkında bilgiler",
    "content": [
      {
        "__component": "shared.hero",
        "title": "Hoş Geldiniz",
        "description": "Bizimle tanışın",
        "image": { ... },
        "buttonText": "Daha Fazla",
        "buttonLink": "/iletisim"
      },
      {
        "__component": "shared.rich-text",
        "body": "<p>Şirketimiz 2020 yılında kurulmuştur...</p>"
      }
    ]
  }
}
```

### Örnek 2: Karmaşık Sayfa

```json
{
  "data": {
    "title": "Hizmetlerimiz",
    "slug": "hizmetlerimiz",
    "content": [
      {
        "__component": "shared.hero",
        "title": "Hizmetlerimiz",
        "description": "Size sunduğumuz hizmetler"
      },
      {
        "__component": "shared.rich-text",
        "body": "<h2>Hizmet 1</h2><p>Açıklama...</p>"
      },
      {
        "__component": "shared.gallery",
        "title": "Projelerimiz",
        "images": [...],
        "columns": 3
      },
      {
        "__component": "shared.cta",
        "title": "Hemen İletişime Geçin",
        "buttonText": "İletişim",
        "buttonLink": "/iletisim",
        "buttonStyle": "primary"
      }
    ]
  }
}
```

### Örnek 3: REST API ile Sayfa Oluşturma

```bash
POST /api/pages
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "data": {
    "title": "Yeni Sayfa",
    "slug": "yeni-sayfa",
    "description": "Sayfa açıklaması",
    "locale": "tr-TR",
    "seo": {
      "metaTitle": "SEO Başlığı",
      "metaDescription": "SEO açıklaması"
    },
    "content": [
      {
        "__component": "shared.hero",
        "title": "Hero Başlığı",
        "description": "Hero açıklaması"
      },
      {
        "__component": "shared.rich-text",
        "body": "<p>İçerik metni</p>"
      }
    ]
  }
}
```

## 🎨 Frontend Entegrasyonu

Frontend'de Dynamic Zone içeriğini render etmek için:

```typescript
// React örneği
function PageContent({ content }) {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.__component) {
          case 'shared.hero':
            return <Hero key={index} {...block} />;
          case 'shared.rich-text':
            return <RichText key={index} {...block} />;
          case 'shared.media':
            return <Media key={index} {...block} />;
          case 'shared.quote':
            return <Quote key={index} {...block} />;
          case 'shared.slider':
            return <Slider key={index} {...block} />;
          case 'shared.cta':
            return <CTA key={index} {...block} />;
          case 'shared.gallery':
            return <Gallery key={index} {...block} />;
          case 'shared.video-embed':
            return <VideoEmbed key={index} {...block} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
```

## 📝 Notlar

- Dynamic Zone içindeki component'ler sıralı bir şekilde saklanır
- Her component `__component` alanı ile tanımlanır
- Component'ler tekrar edilebilir (aynı component birden fazla kez kullanılabilir)
- i18n desteği sayesinde her dil için farklı içerik oluşturulabilir
- SEO component'i sayfa seviyesinde tanımlanır ve tüm sayfa için geçerlidir

## 🔧 Yeni Component Ekleme

Yeni bir component eklemek için:

1. `src/components/shared/` dizinine yeni component JSON dosyası ekleyin
2. `src/api/page/content-types/page/schema.json` dosyasındaki `content` Dynamic Zone'a yeni component'i ekleyin
3. Strapi'yi yeniden başlatın

Örnek:
```json
// src/components/shared/my-component.json
{
  "collectionName": "components_shared_my_components",
  "info": {
    "displayName": "My Component",
    "icon": "star"
  },
  "attributes": {
    "title": {
      "type": "string"
    }
  }
}
```

Sonra `schema.json`'da:
```json
"content": {
  "type": "dynamiczone",
  "components": [
    "shared.hero",
    "shared.rich-text",
    "shared.my-component"  // Yeni component
  ]
}
```

