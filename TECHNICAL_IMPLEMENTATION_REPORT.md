# Teknik Uygulama Raporu
## TK-Strapi CMS Projesi

**Proje:** Turkish Airlines Strapi CMS  
**Versiyon:** 0.1.0  
**Tarih:** 2025  
**Strapi Versiyonu:** 5.31.1

---

## İçindekiler

1. [i18n Entegrasyonu](#1-i18n-entegrasyonu)
2. [GraphQL Entegrasyonu](#2-graphql-entegrasyonu)
3. [Roles & Permissions Altyapısı](#3-roles--permissions-altyapısı)
4. [Dynamic Zone Entegrasyonu](#4-dynamic-zone-entegrasyonu)
5. [AI Desteği ile Çeviri](#5-ai-desteği-ile-çeviri)
6. [Kullanıcı Grupları Oluşturma](#6-kullanıcı-grupları-oluşturma)
7. [Görsel Yükleme ve Asset Yönetimi](#7-görsel-yükleme-ve-asset-yönetimi)

---

## 1. i18n Entegrasyonu

### 1.1 Genel Bakış

Projede çoklu dil desteği için Strapi'nin i18n plugin'i özelleştirilmiş ve gelişmiş bir locale yönetim sistemi kurulmuştur. Sistem, language-country kombinasyonu ile locale oluşturma ve akıllı fallback mekanizması içermektedir.

### 1.2 Teknik Yapılandırma

**Plugin Yapılandırması** (`config/plugins.ts`):
```typescript
export default () => ({
  i18n: {
    enabled: true,
  },
});
```

**Lokalize Edilen Content Type'lar:**
- `api::faq-section.faq-section`
- `api::faq-topic.faq-topic`
- `api::faq-question.faq-question`
- `api::page.page`
- `shared.faq-metadata` (Component)

### 1.3 Özel Locale Mapping Sistemi

**Geliştirme:** `src/api/faq-topic/controllers/faq-topic.ts`

Sistem, `language` ve `country` parametrelerini alarak otomatik locale oluşturur:

```typescript
const getLocaleFromLanguageAndCountry = (
  lang: string,
  cntry: string
): string => {
  const normalizedCountry = cntry.toUpperCase();
  const normalizedLang = lang.toLowerCase();
  return `${normalizedLang}-${normalizedCountry}`;
};
```

**Örnekler:**
- `language=tr&country=tr` → `tr-TR`
- `language=en&country=us` → `en-US`
- `language=de&country=de` → `de-DE`

### 1.4 Fallback Mekanizması

Sistem 3 seviyeli fallback mekanizması kullanır:

1. **Tam Locale ile Arama**: `tr-TR` formatında tam eşleşme
2. **Language Only Fallback**: Tam eşleşme bulunamazsa sadece `tr` ile arama
3. **Varsayılan Locale**: Hala bulunamazsa `tr-TR` kullanılır

**Implementasyon:**
```typescript
// Önce tam locale ile dene
let sections = await strapi.entityService.findMany(
  "api::faq-section.faq-section",
  { locale: targetLocale }
);

// Bulunamazsa language only ile dene
if (!sections || sections.length === 0) {
  const languageOnly = language.toLowerCase();
  sections = await strapi.entityService.findMany(
    "api::faq-section.faq-section",
    { locale: languageOnly }
  );
}
```

### 1.5 API Endpoint'leri

**GET `/api/faq-topics`**

**Query Parametreleri:**
- `language`: Dil kodu (örn: 'tr', 'en', 'de')
- `country`: Ülke kodu (örn: 'tr', 'us', 'de')
- `locale`: Doğrudan locale kodu (örn: 'tr-TR')

**Response Formatı:**
```json
{
  "YOLCU TİPLERİ": [
    {
      "topicName": "Disabled passengers",
      "topicTranslation": "Engelli yolcu",
      "sectionName": "PASSENGER TYPES",
      "sectionTranslation": "YOLCU TİPLERİ",
      "metadata": { ... }
    }
  ]
}
```

### 1.6 Desteklenen Locale'ler

- `tr-TR` - Türkçe (Türkiye)
- `en-US` - İngilizce (ABD)
- `de-DE` - Almanca (Almanya)
- `fr-FR` - Fransızca (Fransa)
- `es-ES` - İspanyolca (İspanya)
- `it-IT` - İtalyanca
- `pt-PT` - Portekizce
- `ru-RU` - Rusça
- `ar-SA` - Arapça
- `ja-JP` - Japonca
- `ko-KR` - Korece
- `zh-CN` - Çince

### 1.7 Özellikler

- ✅ **Akıllı Locale Mapping**: Language-country kombinasyonu ile otomatik locale oluşturma
- ✅ **3 Seviyeli Fallback**: Tam locale → Language only → Varsayılan
- ✅ **Eski Sistem Uyumluluğu**: Language-country parametreleri ile geriye dönük uyumluluk
- ✅ **Component Lokalizasyonu**: Shared component'ler de lokalize edilebilir
- ✅ **İlişki Lokalizasyonu**: İlişkili içerikler locale'e göre filtrelenir

---

## 2. GraphQL Entegrasyonu

### 2.1 Genel Bakış

Projede GraphQL API'si özelleştirilmiş yapılandırma ve otomatik izin yönetimi ile kurulmuştur. Strapi v5'in yeni şema yapısına uygun olarak geliştirilmiştir.

### 2.2 Teknik Yapılandırma

**Plugin Yapılandırması** (`config/plugins.ts`):
```typescript
graphql: {
  enabled: true,
  config: {
    endpoint: '/graphql',
    shadowCRUD: true,
    landingPage: true,
    depthLimit: 7,
    amountLimit: 100,
    defaultLimit: 25,
    maxLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },
}
```

### 2.3 Otomatik İzin Yönetimi

**Geliştirme:** `scripts/setup-graphql-permissions.js`

Script, Public role için tüm content type'ların GraphQL erişim izinlerini otomatik olarak ayarlar:

```javascript
const contentTypes = [
  'faq-section',
  'faq-topic',
  'faq-question',
  'article',
  'author',
  'category',
  'about',
  'global',
];

for (const contentType of contentTypes) {
  const actions = ['find', 'findOne'];
  // İzinleri otomatik oluştur
}
```

**Kullanım:**
```bash
npm run setup:graphql-permissions
```

### 2.4 Strapi v5 Şema Yapısı

**Önemli:** Strapi v5'te `data` ve `attributes` wrapper'ları kaldırılmıştır. Alanlar direkt olarak erişilebilir:

```graphql
# Strapi v4 (ESKİ)
query {
  faqSections {
    data {
      attributes {
        sectionName
      }
    }
  }
}

# Strapi v5 (YENİ)
query {
  faqSections {
    documentId
    sectionName
    sectionTranslation
  }
}
```

### 2.5 Örnek Sorgular

**FAQ Sections (Locale ile):**
```graphql
query GetFaqSections {
  faqSections(
    locale: "tr-TR"
    status: PUBLISHED
    sort: ["order:asc"]
  ) {
    documentId
    sectionName
    sectionTranslation
    order
    topics {
      documentId
      topicName
      topicTranslation
      metadata {
        title
        keywords
        description
      }
    }
  }
}
```

**FAQ Questions (İlişkiler ile):**
```graphql
query GetFaqQuestions {
  faqQuestions(
    locale: "tr-TR"
    status: PUBLISHED
    filters: { topic: { topicName: { contains: "Disabled" } } }
  ) {
    documentId
    title
    question
    answer
    topic {
      documentId
      topicName
      topicTranslation
    }
  }
}
```

### 2.6 Status Parametresi

Strapi v5'te `publicationState` kaldırılmış, yerine `status` enum'u kullanılmaktadır:

- `PUBLISHED`: Sadece yayınlanmış içerikler
- `DRAFT`: Taslak içerikler

### 2.7 Özellikler

- ✅ **Otomatik İzin Yönetimi**: Script ile tek komutla izin ayarlama
- ✅ **Strapi v5 Uyumlu**: Yeni şema yapısına tam uyum
- ✅ **Locale Desteği**: Her sorguda locale belirtilebilir
- ✅ **Gelişmiş Filtreleme**: Nested filter desteği
- ✅ **Pagination**: Limit ve start parametreleri
- ✅ **Sorting**: Çoklu sıralama desteği
- ✅ **Depth Limit**: 7 seviye derinlik limiti (performans için)

---

## 3. Roles & Permissions Altyapısı

### 3.1 Genel Bakış

Projede hem admin paneli hem de API için kapsamlı bir rol ve izin yönetim sistemi kurulmuştur. Sistem, otomatik kurulum script'leri ile yönetilebilir hale getirilmiştir.

### 3.2 Admin Rolleri

**Geliştirme:** `scripts/setup-admin-roles.js`

**Tanımlanan Roller:**

| Rol | Kod | İzinler | Kullanım Senaryosu |
|-----|-----|---------|-------------------|
| **Editor** | `strapi-editor` | create, read, update, delete, publish | İçerik editörleri, yayın yönetimi |
| **Author** | `strapi-author` | create, read, update | İçerik yazarları, blog yazarları |
| **Viewer** | `strapi-viewer` | read | Raporlama, içerik gözlemcileri |

**İzin Detayları (Editor):**
- Tüm content type'lar: create, read, update, delete, publish
- Content Manager: read, create, update, delete, publish
- Upload: read, create, update, delete
- i18n: read, create, update, delete
- GraphQL: read
- ❌ Content Type Builder: erişim yok

### 3.3 API Rolleri

**Geliştirme:** `scripts/setup-api-roles.js`

**Tanımlanan Roller:**

| Rol | Tip | İzinler | Kullanım Senaryosu |
|-----|-----|---------|-------------------|
| **Public** | `public` | find, findOne | Genel içerikler, FAQ sayfaları |
| **Authenticated** | `authenticated` | find, findOne, create, update | Kullanıcı profilleri, yorumlar |
| **Editor** | `editor` | find, findOne, create, update, delete | İçerik editörleri |
| **Admin** | `admin` | find, findOne, create, update, delete | Sistem yöneticileri |

### 3.4 Otomatik Kurulum Sistemi

**Ana Script:** `scripts/setup-all-roles.js`

```javascript
async function setupAllRoles() {
  // Admin rollerini ayarla
  await setupAdminRoles();
  
  // API rollerini ayarla
  await setupApiRoles();
}
```

**Kullanım:**
```bash
# Tüm roller
npm run setup:all-roles

# Sadece admin roller
npm run setup:admin-roles

# Sadece API roller
npm run setup:api-roles
```

### 3.5 İzin Yönetimi Özellikleri

**Otomatik İzin Oluşturma:**
- Script, tüm content type'lar için gerekli izinleri otomatik oluşturur
- Mevcut izinleri kontrol eder, tekrar oluşturmaz
- Her content type için ayrı ayrı izinler tanımlanır

**Content Type Bazlı İzinler:**
```javascript
const contentTypes = [
  'faq-section',
  'faq-topic',
  'faq-question',
  'article',
  'author',
  'category',
  'about',
  'global',
  'page',
];

// Her content type için izinler oluşturulur
```

### 3.6 Programatik İzin Kontrolü

**Controller'da İzin Kontrolü:**
```typescript
async create(ctx) {
  const { user } = ctx.state;
  
  if (!user) {
    return ctx.unauthorized("You must be authenticated");
  }
  
  const userRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { id: user.role } });
  
  if (userRole.type !== "admin" && userRole.type !== "editor") {
    return ctx.forbidden("You do not have permission");
  }
  
  // İçerik oluştur
}
```

### 3.7 Özellikler

- ✅ **Otomatik Kurulum**: Tek komutla tüm roller ve izinler
- ✅ **Modüler Yapı**: Admin ve API rolleri ayrı script'lerde
- ✅ **İçerik Bazlı İzinler**: Her content type için ayrı izin yönetimi
- ✅ **Güvenlik**: Content Type Builder erişimi kısıtlanmış
- ✅ **Genişletilebilirlik**: Yeni content type'lar kolayca eklenebilir
- ✅ **Programatik Kontrol**: Controller'larda izin kontrolü desteği

---

## 4. Dynamic Zone Entegrasyonu

### 4.1 Genel Bakış

Projede Dynamic Zone kullanılarak esnek ve modüler sayfa yapısı oluşturulmuştur. Page content type'ı, 8 farklı component'in kombinasyonundan oluşan dinamik içerik blokları desteklemektedir.

### 4.2 Page Content Type Yapısı

**Schema:** `src/api/page/content-types/page/schema.json`

```json
{
  "attributes": {
    "title": {
      "type": "string",
      "pluginOptions": { "i18n": { "localized": true } }
    },
    "slug": {
      "type": "uid",
      "targetField": "title"
    },
    "description": {
      "type": "text",
      "pluginOptions": { "i18n": { "localized": true } }
    },
    "seo": {
      "type": "component",
      "component": "shared.seo"
    },
    "content": {
      "type": "dynamiczone",
      "components": [
        "shared.hero",
        "shared.rich-text",
        "shared.media",
        "shared.quote",
        "shared.slider",
        "shared.cta",
        "shared.gallery",
        "shared.video-embed"
      ]
    }
  }
}
```

### 4.3 Kullanılabilir Component'ler

#### 4.3.1 Hero Component
**Dosya:** `src/components/shared/hero.json`

**Alanlar:**
- `title` (string, required)
- `description` (text)
- `image` (media)
- `buttonText` (string)
- `buttonLink` (string)

#### 4.3.2 Rich Text Component
**Dosya:** `src/components/shared/rich-text.json`

**Alanlar:**
- `body` (richtext)

#### 4.3.3 Media Component
**Dosya:** `src/components/shared/media.json`

**Alanlar:**
- `file` (media, single)
- `allowedTypes`: ["images", "files", "videos"]

#### 4.3.4 Quote Component
**Dosya:** `src/components/shared/quote.json`

**Alanlar:**
- `title` (string)
- `body` (text)

#### 4.3.5 Slider Component
**Dosya:** `src/components/shared/slider.json`

**Alanlar:**
- `files` (media, multiple)

#### 4.3.6 CTA Component
**Dosya:** `src/components/shared/cta.json`

**Alanlar:**
- `title` (string, required)
- `description` (text)
- `buttonText` (string, required)
- `buttonLink` (string, required)
- `buttonStyle` (enum): "primary", "secondary", "outline"

#### 4.3.7 Gallery Component
**Dosya:** `src/components/shared/gallery.json`

**Alanlar:**
- `title` (string)
- `images` (media, multiple, required)
- `columns` (integer): 1-4, default: 3

#### 4.3.8 Video Embed Component
**Dosya:** `src/components/shared/video-embed.json`

**Alanlar:**
- `title` (string)
- `videoUrl` (string): YouTube, Vimeo, vb.
- `videoFile` (media): Yüklenen video dosyası
- `poster` (media): Video poster görseli
- `autoplay` (boolean)

### 4.4 API Kullanımı

**REST API:**
```bash
# Tüm sayfaları listele
GET /api/pages?locale=tr-TR&populate[content]=*&populate[seo]=*

# Slug ile sayfa getir
GET /api/pages?filters[slug][$eq]=hakkimizda&locale=tr-TR&populate=*
```

**GraphQL:**
```graphql
query GetPage($slug: String!, $locale: String!) {
  pages(filters: { slug: { eq: $slug } }, locale: $locale) {
    documentId
    title
    slug
    content {
      __typename
      ... on ComponentSharedHero {
        title
        description
        image { url }
      }
      ... on ComponentSharedRichText {
        body
      }
      # ... diğer component'ler
    }
  }
}
```

### 4.5 Frontend Entegrasyonu

**React Örneği:**
```typescript
function PageContent({ content }) {
  return (
    <div>
      {content.map((block, index) => {
        switch (block.__component) {
          case 'shared.hero':
            return <Hero key={index} {...block} />;
          case 'shared.rich-text':
            return <RichText key={index} {...block} />;
          case 'shared.gallery':
            return <Gallery key={index} {...block} />;
          // ... diğer component'ler
          default:
            return null;
        }
      })}
    </div>
  );
}
```

### 4.6 Özellikler

- ✅ **8 Farklı Component**: Hero, Rich Text, Media, Quote, Slider, CTA, Gallery, Video Embed
- ✅ **i18n Desteği**: Her dil için ayrı içerik
- ✅ **Esnek Yapı**: Component'ler sıralı olarak yerleştirilebilir
- ✅ **Tekrar Kullanılabilirlik**: Aynı component birden fazla kez kullanılabilir
- ✅ **SEO Desteği**: Sayfa seviyesinde SEO component'i
- ✅ **Media Yönetimi**: Görsel, video ve dosya desteği
- ✅ **GraphQL Desteği**: Fragment'ler ile tip güvenli sorgular

---

## 5. AI Desteği ile Çeviri

### 5.1 Genel Bakış

Projede OpenAI API kullanılarak gelişmiş bir AI çeviri sistemi kurulmuştur. Sistem, FAQ içeriklerini otomatik olarak çevirebilir ve Strapi'nin i18n yapısına entegre edilmiştir.

### 5.2 Translation Service

**Dosya:** `src/services/translation.ts`

**Özellikler:**
- 3 farklı çeviri sağlayıcısı desteği (OpenAI, LibreTranslate, MyMemory)
- HTML tag koruma
- Component recursive çevirisi
- İlişki yönetimi
- Mevcut çeviri kontrolü

### 5.3 Çeviri Sağlayıcıları

#### 5.3.1 OpenAI (Varsayılan)
**Model:** `gpt-4o-mini` (ekonomik) veya `gpt-4` (yüksek kalite)

**Yapılandırma:**
```typescript
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await client.chat.completions.create({
  model: process.env.OPENAI_MODEL || "gpt-4o-mini",
  messages: [
    {
      role: "system",
      content: `You are a professional translator. Translate from ${sourceLanguage} to ${targetLanguage}. Preserve HTML tags.`,
    },
    { role: "user", content: text },
  ],
  temperature: 0.3,
  max_tokens: 2000,
});
```

#### 5.3.2 LibreTranslate (Opsiyonel)
**Özellikler:**
- Açık kaynak, ücretsiz alternatif
- API URL yapılandırması gerekir

#### 5.3.3 MyMemory (Fallback)
**Özellikler:**
- Ücretsiz tier desteği
- Rate limiting ile otomatik retry
- Uzun metinler için chunking (450 karakter/chunk)

### 5.4 API Endpoints

**Base Path:** `/api/v1/cms/translation`

#### 5.4.1 Metin Çevirisi
**Endpoint:** `POST /api/v1/cms/translation/text`

**Request:**
```json
{
  "text": "Merhaba dünya",
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "original": "Merhaba dünya",
    "translated": "Hello world",
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }
}
```

#### 5.4.2 FAQ Question Çevirisi
**Endpoint:** `POST /api/v1/cms/translation/faq-question`

**Request:**
```json
{
  "questionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

#### 5.4.3 FAQ Topic Çevirisi
**Endpoint:** `POST /api/v1/cms/translation/faq-topic`

**Request:**
```json
{
  "topicId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

#### 5.4.4 FAQ Section Çevirisi
**Endpoint:** `POST /api/v1/cms/translation/faq-section`

**Request:**
```json
{
  "sectionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

#### 5.4.5 Topic'e Ait Tüm Soruları Çevir
**Endpoint:** `POST /api/v1/cms/translation/faq-questions-by-topic`

**Request:**
```json
{
  "topicName": "Disabled passengers",
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "topic": "Disabled passengers",
    "translatedQuestions": 25,
    "totalQuestions": 25
  }
}
```

### 5.5 Çeviri Algoritması

**İçerik Çevirisi Adımları:**

1. **Kaynak İçeriği Bulma:**
```typescript
let sourceEntry = await strapi.documents(contentType).findOne({
  documentId: entryId,
  locale: sourceLocale,
});
```

2. **Schema Bazlı Alan Çevirisi:**
```typescript
for (const [fieldName, fieldConfig] of Object.entries(
  contentTypeSchema.attributes
)) {
  if (field.type === "text" || field.type === "string") {
    translatedData[fieldName] = await this.translateText(
      String(sourceValue),
      sourceLocale,
      targetLocale
    );
  } else if (field.type === "richtext") {
    translatedData[fieldName] = await this.translateRichText(
      String(sourceValue),
      sourceLocale,
      targetLocale
    );
  } else if (field.type === "component") {
    translatedData[fieldName] = await this.translateComponent(
      sourceValue,
      sourceLocale,
      targetLocale
    );
  }
}
```

3. **Çeviri Oluşturma (Clone API ile):**
```typescript
const cloneResult = await strapi
  .documents(contentType)
  .clone({
    documentId: sourceEntry.documentId,
    locale: targetLocale,
  });

// Çevrilmiş verilerle güncelle
await strapi.entityService.update(contentType, clonedEntry.id, {
  data: translatedData,
  locale: targetLocale,
});
```

### 5.6 Admin Panel Entegrasyonu

**Translation Button Component:** `src/admin/components/TranslationButton/index.tsx`

**Özellikler:**
- FAQ content type'larında otomatik görünür
- Strapi v5 uyumlu (useContentManagerContext hook)
- Dinamik locale algılama
- Dil seçici dropdown
- Başarı/hata bildirimleri
- Çeviri sonrası otomatik sayfa yenileme

**Kullanım:**
1. FAQ Question/Topic/Section düzenleme sayfasında
2. "🌐 Translate" butonuna tıklayın
3. Hedef dili seçin
4. "Translate" butonuna tıklayın

### 5.7 Hata Yönetimi

**Hata Tipleri ve HTTP Status Kodları:**

- **429 (Quota Exceeded)**: API quota aşıldı
- **404 (Not Found)**: İçerik bulunamadı
- **401 (Unauthorized)**: API key hatası
- **500 (Internal Error)**: Genel hata

**Hata Response Formatı:**
```json
{
  "success": false,
  "error": "API quota exceeded. Please check your billing details."
}
```

### 5.8 Özellikler

- ✅ **3 Çeviri Sağlayıcısı**: OpenAI, LibreTranslate, MyMemory
- ✅ **HTML Koruma**: Rich text içeriklerde HTML tag'leri korunur
- ✅ **Component Çevirisi**: Recursive component çevirisi
- ✅ **İlişki Yönetimi**: İlişkiler çevrilmez, aynı kalır
- ✅ **Mevcut Çeviri Kontrolü**: Zaten çevrilmiş içerikleri atlar
- ✅ **Clone API Entegrasyonu**: Strapi v5 clone API ile çeviri bağlantısı
- ✅ **Admin Panel Entegrasyonu**: Tek tıkla çeviri
- ✅ **Batch Translation**: Toplu çeviri desteği
- ✅ **Rate Limiting**: API rate limit'lerini aşmamak için delay'ler

---

## 6. Kullanıcı Grupları Oluşturma

### 6.1 Genel Bakış

Projede admin paneli ve API için otomatik kullanıcı grupları oluşturma sistemi kurulmuştur. Script, hem admin hem de API kullanıcılarını oluşturur ve ilgili rollere atar.

### 6.2 Script Yapısı

**Dosya:** `scripts/setup-user-groups.js`

**Özellikler:**
- Admin kullanıcıları oluşturma
- API kullanıcıları oluşturma
- Rol atama
- Mevcut kullanıcı kontrolü
- Şifre hash'leme (bcryptjs)

### 6.3 Admin Kullanıcıları

**Oluşturulan Kullanıcılar:**

| Email | Rol | Şifre | Açıklama |
|-------|-----|-------|----------|
| `editor@tk-strapi.com` | Editor | `Password123!` | Tüm içerikleri yönetebilir |
| `author@tk-strapi.com` | Author | `Password123!` | İçerik oluşturabilir ve düzenleyebilir |
| `viewer@tk-strapi.com` | Viewer | `Password123!` | Sadece içerikleri görüntüleyebilir |

**Implementasyon:**
```javascript
const adminUserGroups = [
  {
    email: 'editor@tk-strapi.com',
    firstname: 'Editor',
    lastname: 'User',
    password: defaultPassword,
    isActive: true,
    roleCode: 'strapi-editor',
  },
  // ... diğer kullanıcılar
];

// Kullanıcı oluşturma
await strapi.service('admin::user').create({
  email: userData.email,
  firstname: userData.firstname,
  lastname: userData.lastname,
  password: userData.password,
  isActive: userData.isActive,
  roles: [role.id],
});
```

### 6.4 API Kullanıcıları

**Oluşturulan Kullanıcılar:**

| Email | Username | Rol | Şifre | Açıklama |
|-------|----------|-----|-------|----------|
| `editor.api@tk-strapi.com` | `editor_api` | Editor | `Password123!` | İçerikleri yönetebilir |
| `author.api@tk-strapi.com` | `author_api` | Authenticated | `Password123!` | İçerik oluşturabilir |
| `user.api@tk-strapi.com` | `user_api` | Authenticated | `Password123!` | Temel işlemler yapabilir |

**Implementasyon:**
```javascript
const apiUserGroups = [
  {
    username: 'editor_api',
    email: 'editor.api@tk-strapi.com',
    password: defaultPassword,
    confirmed: true,
    blocked: false,
    roleType: 'editor',
  },
  // ... diğer kullanıcılar
];

// Kullanıcı oluşturma
await strapi.service('plugin::users-permissions.user').add({
  username: userData.username,
  email: userData.email,
  password: userData.password,
  confirmed: userData.confirmed,
  blocked: userData.blocked,
  role: role.id,
});
```

### 6.5 Şifre Hash'leme

**Fallback Mekanizması:**

1. **Strapi Service Kullanımı** (Öncelikli):
```javascript
await strapi.service('admin::user').create({
  password: userData.password, // Service otomatik hash'ler
});
```

2. **bcryptjs ile Manuel Hash** (Fallback):
```javascript
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash(userData.password, 10);

await strapi.query('admin::user').create({
  data: {
    password: hashedPassword,
    // ... diğer alanlar
  },
});
```

### 6.6 Mevcut Kullanıcı Kontrolü

**Güncelleme Mantığı:**
```javascript
let user = await strapi.query('admin::user').findOne({
  where: { email: userData.email },
});

if (user) {
  // Kullanıcı mevcutsa güncelle (şifre hariç)
  await strapi.query('admin::user').update({
    where: { id: user.id },
    data: {
      firstname: userData.firstname,
      lastname: userData.lastname,
      isActive: userData.isActive,
      roles: [role.id],
    },
  });
} else {
  // Yeni kullanıcı oluştur
}
```

### 6.7 Kullanım

**Komut:**
```bash
npm run setup:user-groups
```

**Strapi Console'dan:**
```javascript
const setup = require('./scripts/setup-user-groups');
await setup();
```

### 6.8 Güvenlik Notları

- ⚠️ **Varsayılan Şifre**: `Password123!` - Üretim ortamında mutlaka değiştirin!
- ⚠️ **Rol Bağımlılığı**: Script çalıştırılmadan önce roller oluşturulmalı (`npm run setup:all-roles`)
- ⚠️ **bcryptjs Bağımlılığı**: Gerekirse `npm install bcryptjs` ile yükleyin

### 6.9 Özellikler

- ✅ **Otomatik Kullanıcı Oluşturma**: Tek komutla tüm kullanıcılar
- ✅ **Rol Atama**: Kullanıcılar otomatik olarak rollere atanır
- ✅ **Mevcut Kullanıcı Kontrolü**: Tekrar çalıştırıldığında günceller
- ✅ **Şifre Hash'leme**: Güvenli şifre hash'leme (bcryptjs)
- ✅ **Fallback Mekanizması**: Service başarısız olursa manuel hash
- ✅ **Detaylı Logging**: Her adım için console log'ları

---

## 7. Görsel Yükleme ve Asset Yönetimi

### 7.1 Genel Bakış

Projede görsel ve medya dosyalarının yönetimi için Strapi'nin upload plugin'i özelleştirilmiş ve utility fonksiyonları geliştirilmiştir.

### 7.2 Upload Service Kullanımı

**Temel Upload Fonksiyonu:**

**Dosya:** `scripts/seed.js`, `scripts/seed-pages.js`

```javascript
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
```

### 7.3 File Data Hazırlama

**Dosya Formatı Dönüştürme:**

```javascript
function getFileData(fileName) {
  const filePath = path.join(__dirname, '../data/uploads', fileName);
  const fileBuffer = fs.readFileSync(filePath);
  const mimeType = mime.lookup(filePath);
  
  return {
    path: filePath,
    name: fileName,
    type: mimeType,
    size: fileBuffer.length,
    buffer: fileBuffer,
    mimetype: mimeType,
  };
}
```

### 7.4 Mevcut Dosya Kontrolü

**Duplicate Prevention:**

```javascript
async function checkFileExistsBeforeUpload(files) {
  const existingFiles = [];
  const uploadedFiles = [];
  
  for (const fileName of files) {
    // Dosyanın zaten yüklenip yüklenmediğini kontrol et
    const fileWhereName = await strapi.query('plugin::upload.file').findOne({
      where: {
        name: fileName.replace(/\..*$/, ''),
      },
    });
    
    if (fileWhereName) {
      existingFiles.push(fileWhereName);
    } else {
      const fileData = getFileData(fileName);
      const [file] = await uploadFile(fileData, fileNameNoExtension);
      uploadedFiles.push(file);
    }
  }
  
  return allFiles.length === 1 ? allFiles[0] : allFiles;
}
```

### 7.5 Media Component Yapılandırması

**Media Component:** `src/components/shared/media.json`

```json
{
  "attributes": {
    "file": {
      "allowedTypes": ["images", "files", "videos"],
      "type": "media",
      "multiple": false
    }
  }
}
```

**Desteklenen Tipler:**
- `images`: JPG, PNG, GIF, SVG, WebP
- `files`: PDF, DOC, DOCX, vb.
- `videos`: MP4, MOV, AVI, vb.

### 7.6 Gallery Component

**Gallery Component:** `src/components/shared/gallery.json`

```json
{
  "attributes": {
    "title": {
      "type": "string"
    },
    "images": {
      "type": "media",
      "multiple": true,
      "required": true
    },
    "columns": {
      "type": "integer",
      "default": 3,
      "min": 1,
      "max": 4
    }
  }
}
```

**Özellikler:**
- Çoklu görsel desteği
- Sütun sayısı ayarlanabilir (1-4)
- Başlık desteği

### 7.7 Slider Component

**Slider Component:** `src/components/shared/slider.json`

```json
{
  "attributes": {
    "files": {
      "type": "media",
      "multiple": true
    }
  }
}
```

**Kullanım Senaryosu:**
- Hero slider'ları
- Ürün görselleri
- Galeri slider'ları

### 7.8 Article Cover Image

**Article Schema:** `src/api/article/content-types/article/schema.json`

```json
{
  "attributes": {
    "cover": {
      "type": "media",
      "multiple": false,
      "required": false,
      "allowedTypes": ["images", "files", "videos"]
    }
  }
}
```

### 7.9 Dynamic Zone Media Entegrasyonu

**Page Content Type'da Media Kullanımı:**

```json
{
  "content": [
    {
      "__component": "shared.hero",
      "image": { "id": 1, "url": "/uploads/hero.jpg" }
    },
    {
      "__component": "shared.gallery",
      "images": [
        { "id": 2, "url": "/uploads/image1.jpg" },
        { "id": 3, "url": "/uploads/image2.jpg" }
      ],
      "columns": 3
    }
  ]
}
```

### 7.10 API Kullanımı

**Media URL'leri:**

```bash
# Public URL
GET /uploads/image.jpg

# API ile medya bilgisi
GET /api/upload/files
GET /api/upload/files/:id
```

**Response Formatı:**
```json
{
  "id": 1,
  "name": "image.jpg",
  "alternativeText": "An image",
  "caption": "image",
  "width": 1920,
  "height": 1080,
  "formats": {
    "thumbnail": { "url": "/uploads/thumbnail_image.jpg" },
    "small": { "url": "/uploads/small_image.jpg" },
    "medium": { "url": "/uploads/medium_image.jpg" },
    "large": { "url": "/uploads/large_image.jpg" }
  },
  "url": "/uploads/image.jpg",
  "mime": "image/jpeg",
  "size": 245.67
}
```

### 7.11 Özellikler

- ✅ **Çoklu Format Desteği**: Images, files, videos
- ✅ **Otomatik Thumbnail**: Strapi otomatik thumbnail oluşturur
- ✅ **Duplicate Prevention**: Mevcut dosya kontrolü
- ✅ **Metadata Yönetimi**: Alternative text, caption, name
- ✅ **Component Entegrasyonu**: Media, Gallery, Slider component'leri
- ✅ **Dynamic Zone Desteği**: Page content type'da kullanım
- ✅ **i18n Uyumlu**: Lokalize edilmiş içeriklerde medya yönetimi
- ✅ **API Erişimi**: REST ve GraphQL API desteği

---

## Sonuç

Bu rapor, TK-Strapi CMS projesinde geliştirilen 7 ana teknik özelliği detaylı olarak açıklamaktadır. Her özellik, projeye özel geliştirmeler içermekte ve production-ready bir yapıda sunulmaktadır.

**Öne Çıkan Teknik Başarılar:**

1. ✅ **i18n**: Akıllı locale mapping ve 3 seviyeli fallback mekanizması
2. ✅ **GraphQL**: Otomatik izin yönetimi ve Strapi v5 uyumlu şema
3. ✅ **Roles & Permissions**: Modüler rol yapısı ve otomatik kurulum
4. ✅ **Dynamic Zone**: 8 component ile esnek sayfa yapısı
5. ✅ **AI Çeviri**: 3 sağlayıcı desteği ve admin panel entegrasyonu
6. ✅ **Kullanıcı Grupları**: Otomatik kullanıcı oluşturma ve rol atama
7. ✅ **Asset Yönetimi**: Gelişmiş upload servisleri ve duplicate prevention

**Teknik Stack:**
- Strapi v5.31.1
- TypeScript 5.x
- OpenAI API 6.9.1
- React 18.0.0
- GraphQL

---

**Rapor Tarihi:** 2024  
**Versiyon:** 1.0

