# Page Preview Entegrasyonu

Bu dokümantasyon, Strapi'nin native Preview özelliğinin Page content type'ı için nasıl yapılandırıldığını açıklar.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Yapılandırma](#yapılandırma)
- [Kurulum](#kurulum)
- [Kullanım](#kullanım)
- [Troubleshooting](#troubleshooting)

## 🎯 Genel Bakış

Strapi'nin built-in Preview özelliği, admin panelinden içeriği frontend uygulamanızda görüntülemenize olanak tanır. Bu özellik:

- ✅ Draft ve Published versiyonları arasında geçiş yapmanıza izin verir
- ✅ Admin panelinde direkt preview butonu gösterir
- ✅ Frontend uygulamanızı iframe içinde gösterir
- ✅ Live Preview desteği (Growth ve Enterprise planlarında)

## ⚙️ Yapılandırma

### 1. Environment Variables

`.env` dosyanıza aşağıdaki değişkenleri ekleyin:

```env
# Frontend uygulamanızın URL'i
CLIENT_URL=http://localhost:3000

# Opsiyonel: Next.js draft mode için secret key
PREVIEW_SECRET=your-secret-key-here
```

**Not:** `CLIENT_URL` zorunludur. `PREVIEW_SECRET` sadece Next.js draft mode kullanıyorsanız gereklidir.

### 2. Admin Configuration

`config/admin.ts` dosyasında preview yapılandırması mevcuttur:

```typescript
preview: {
  enabled: true,
  config: {
    allowedOrigins: [clientUrl],
    async handler(uid, { documentId, locale, status }) {
      // Preview URL generation logic
    },
  },
}
```

## 🔧 Kurulum Detayları

### Preview Handler Mantığı

Preview handler şu adımları izler:

1. **Content Type Kontrolü**: Sadece `api::page.page` için preview aktif
2. **Document Çekme**: `strapi.documents()` API'si ile document alınır
3. **Path Generation**: `getPreviewPathname()` fonksiyonu ile preview path oluşturulur
4. **URL Oluşturma**: Frontend URL + path + query parametreleri

### Path Generation Stratejisi

Preview path'i oluştururken şu sıra takip edilir:

1. `fullPath` (varsa)
2. `path` (varsa)
3. `slug` (fallback)

**Örnek:**
```typescript
// Document'te fullPath varsa
fullPath: "/hakkimizda/tarihce" → Preview URL: "http://localhost:3000/hakkimizda/tarihce"

// Sadece slug varsa
slug: "tarihce" → Preview URL: "http://localhost:3000/tarihce"
```

### Locale Desteği

Preview handler locale parametresini destekler:

- Locale bilgisi document'ten alınır
- Locale prefix'i sadece default locale'lerden farklıysa eklenir
- Örnek: `en-US` → `/en/tarihce`, `tr-TR` → `/tarihce`

### Draft vs Published

Preview handler, draft ve published içerikler için farklı URL'ler oluşturur:

**Published:**
```
http://localhost:3000/tarihce
```

**Draft:**
```
http://localhost:3000/tarihce?preview=true&secret=your-secret-key
```

## 📖 Kullanım

### Admin Panelinde Preview

1. **Page'i Açın**: Content Manager'dan bir Page'i düzenleme modunda açın
2. **Preview Butonu**: Sağ üstte "Open preview" butonu görünecek
3. **Preview'i Açın**: Butona tıklayın, frontend uygulamanız iframe içinde açılacak
4. **Versiyon Değiştirme**: Draft ve Published versiyonları arasında geçiş yapabilirsiniz

**Not:** Preview butonu sadece sayfa kaydedildikten sonra aktif olur.

### Frontend Entegrasyonu

Frontend uygulamanızda preview modunu handle etmeniz gerekir:

#### Next.js Örneği

```typescript
// pages/[...path].tsx veya app/[...path]/page.tsx
import { draftMode } from 'next/headers';

export default async function Page({ params, searchParams }) {
  const { isEnabled } = await draftMode();
  
  // Preview modunda draft içeriği çek
  const status = isEnabled ? 'draft' : 'published';
  
  const page = await fetch(
    `${process.env.STRAPI_URL}/api/pages/path/${params.path}?status=${status}`,
    {
      headers: {
        'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  ).then(res => res.json());
  
  return <div>{/* Page content */}</div>;
}
```

#### React/Vue/Diğer Framework'ler

```javascript
// Preview parametresini kontrol et
const isPreview = new URLSearchParams(window.location.search).get('preview') === 'true';

// Preview modunda draft içeriği çek
const status = isPreview ? 'draft' : 'published';

fetch(`${API_URL}/api/pages/path/${path}?status=${status}`)
  .then(res => res.json())
  .then(data => {
    // Render page
  });
```

## 🔍 Troubleshooting

### Preview Butonu Görünmüyor

**Olası Nedenler:**

1. **CLIENT_URL ayarlanmamış**
   ```env
   CLIENT_URL=http://localhost:3000
   ```

2. **Handler null döndürüyor**
   - Browser console'da log'ları kontrol edin
   - "Preview: Document data" log'una bakın
   - Document'te `slug`, `path` veya `fullPath` var mı?

3. **Sayfa kaydedilmemiş**
   - Preview butonu sadece kaydedilmiş sayfalarda görünür
   - Önce "Save" butonuna tıklayın

4. **Content Type eşleşmiyor**
   - Handler sadece `api::page.page` için çalışır
   - Diğer content type'lar için preview yok

**Debug Adımları:**

1. Browser console'u açın (F12)
2. Bir Page'i açın
3. Şu log'ları arayın:
   - `Preview: Document data` - Document bilgilerini gösterir
   - `Preview URL generated` - Oluşturulan URL'i gösterir
   - `Preview handler error` - Hata varsa gösterir

### Preview URL Yanlış Oluşturuluyor

**Kontrol Edilecekler:**

1. **Path Generation**: `getPreviewPathname()` fonksiyonu doğru çalışıyor mu?
2. **Document Fields**: Document'te `slug`, `path` veya `fullPath` var mı?
3. **CLIENT_URL**: Doğru frontend URL'i mi?

**Örnek Debug:**

```typescript
// config/admin.ts içinde
console.log('Preview: Document data', { 
  documentId, 
  locale, 
  slug: document.slug, 
  path: document.path, 
  fullPath: document.fullPath 
});
```

### Preview Açılmıyor veya Boş Görünüyor

**Olası Nedenler:**

1. **CORS Sorunu**: Frontend uygulamanız iframe içinde açılmayı engelliyor olabilir
2. **X-Frame-Options**: Frontend'de `X-Frame-Options: DENY` header'ı varsa kaldırın
3. **Frontend Route**: Preview URL'i frontend'de mevcut bir route'a mı işaret ediyor?

**Çözüm:**

```javascript
// Frontend'de (Next.js örneği)
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // veya 'ALLOW-FROM https://your-strapi-url.com'
          },
        ],
      },
    ];
  },
};
```

## 📝 Kod Yapısı

### config/admin.ts

```typescript
// Preview pathname generation function
const getPreviewPathname = (uid: string, { locale, document }) => {
  if (uid === "api::page.page") {
    const path = document?.fullPath || document?.path || document?.slug;
    if (!path) return null;
    
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Locale prefix logic
    if (locale && locale !== 'en' && locale !== 'tr-TR') {
      const langCode = locale.split('-')[0];
      return `/${langCode}${normalizedPath}`;
    }
    
    return normalizedPath;
  }
  return null;
};

// Preview configuration
preview: {
  enabled: true,
  config: {
    allowedOrigins: [clientUrl],
    async handler(uid, { documentId, locale, status }) {
      // Handler implementation
    },
  },
}
```

## 🎨 Özellikler

- ✅ **Draft & Published Support**: Her iki versiyonu da preview edebilirsiniz
- ✅ **Locale Support**: Çoklu dil desteği
- ✅ **Path Hierarchy**: `fullPath` ile hiyerarşik yapı desteği
- ✅ **Fallback Strategy**: `fullPath` → `path` → `slug` sıralaması
- ✅ **Query Parameters**: Draft mode için otomatik query parametreleri

## 🔗 İlgili Dokümantasyon

- [Strapi Preview Documentation](https://docs.strapi.io/cms/features/preview)
- [Page Hierarchy Usage](./PAGE_HIERARCHY_USAGE.md)
- [Localization Setup](./LOCALIZATION_SETUP.md)

## ⚠️ Önemli Notlar

1. **Preview Butonu**: Sadece kaydedilmiş sayfalarda görünür
2. **CLIENT_URL**: Mutlaka `.env` dosyasında tanımlı olmalı
3. **Frontend Route**: Preview URL'i frontend'de mevcut bir route'a işaret etmeli
4. **CORS/Iframe**: Frontend uygulamanız iframe içinde açılmayı desteklemeli
5. **Handler Return**: Handler `null` döndürürse preview butonu görünmez

## 🚀 Geliştirme İpuçları

### Yeni Content Type Eklemek

Preview'ı başka content type'lar için de aktif etmek isterseniz:

```typescript
const getPreviewPathname = (uid: string, { locale, document }) => {
  switch (uid) {
    case "api::page.page":
      // Page logic
      break;
    case "api::article.article":
      // Article logic
      return `/blog/${document.slug}`;
    default:
      return null;
  }
};
```

### Custom Preview Logic

Daha karmaşık preview logic'i eklemek için handler'ı genişletebilirsiniz:

```typescript
async handler(uid, { documentId, locale, status }) {
  // Custom logic
  if (status === 'draft') {
    // Draft-specific handling
  }
  
  // Custom query parameters
  const customParams = new URLSearchParams({
    preview: 'true',
    version: document.version || 'latest',
  });
  
  return `${clientUrl}${pathname}?${customParams}`;
}
```

## 📞 Destek

Sorun yaşarsanız:

1. Browser console log'larını kontrol edin
2. Strapi server log'larını kontrol edin
3. Frontend uygulamanızın console'unu kontrol edin
4. Network tab'ında preview request'ini kontrol edin

