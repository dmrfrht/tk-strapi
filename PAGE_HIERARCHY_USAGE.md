# 📁 Hiyerarşik Sayfa Yapısı Kullanım Kılavuzu

Bu dokümantasyon, RWS Tridion benzeri iç içe klasörleme/path yapısının Strapi v5'te nasıl kullanılacağını açıklar.

## 🎯 RWS Tridion vs Strapi Karşılaştırması

### RWS Tridion Yapısı
```
📁 Structure Group (Klasör)
  └── 📄 Page (Sayfa)
      └── 📄 Sub-page (Alt sayfa)
```

### Strapi v5 Yapısı
```
📄 Page (parent: null)
  └── 📄 Sub-page (parent: Page)
      └── 📄 Sub-sub-page (parent: Sub-page)
```

**✅ Evet, RWS Tridion'daki klasör path yapısını karşılar!**

## 📋 Özellikler

- ✅ **Parent-Child İlişkisi**: Her sayfa bir parent'a bağlanabilir
- ✅ **Otomatik Path Oluşturma**: `fullPath` otomatik olarak oluşturulur
- ✅ **Hiyerarşik Navigasyon**: Breadcrumb desteği
- ✅ **Path ile Sayfa Bulma**: URL path'i ile sayfa getirme
- ✅ **Çoklu Dil Desteği**: Her dil için ayrı hiyerarşi
- ✅ **Otomatik Güncelleme**: Parent veya slug değiştiğinde tüm child'lar güncellenir

## 🚀 Kullanım Senaryoları

### Senaryo 1: Admin Panel'den Sayfa Oluşturma

#### 1.1. Root Sayfa Oluşturma (Klasör Seviyesi)

1. Strapi Admin Panel'e giriş yapın
2. **Content Manager** > **Page** > **Create new entry**
3. Formu doldurun:
   - **Title**: "Hakkımızda"
   - **Slug**: "hakkimizda" (otomatik oluşturulur)
   - **Parent**: (Boş bırakın - root sayfa)
   - **Description**: "Şirket hakkında bilgiler"
   - **Content**: İstediğiniz component'leri ekleyin

4. **Save** ve **Publish** yapın
5. `fullPath` otomatik olarak `/hakkimizda` olarak oluşturulur

#### 1.2. Alt Sayfa Oluşturma

1. **Content Manager** > **Page** > **Create new entry**
2. Formu doldurun:
   - **Title**: "Tarihçe"
   - **Slug**: "tarihce"
   - **Parent**: "Hakkımızda" sayfasını seçin (dropdown'dan)
   - **Description**: "Şirket tarihçesi"

3. **Save** ve **Publish** yapın
4. `fullPath` otomatik olarak `/hakkimizda/tarihce` olarak oluşturulur

#### 1.3. İç İçe Sayfa Yapısı

```
Hakkımızda (parent: null)
├── Tarihçe (parent: Hakkımızda)
│   └── Kuruluş (parent: Tarihçe)
│       └── 2020 (parent: Kuruluş)
└── Ekip (parent: Hakkımızda)
    └── Yönetim (parent: Ekip)
```

Her seviyede `fullPath` otomatik olarak güncellenir:
- `/hakkimizda`
- `/hakkimizda/tarihce`
- `/hakkimizda/tarihce/kurulus`
- `/hakkimizda/tarihce/kurulus/2020`
- `/hakkimizda/ekip`
- `/hakkimizda/ekip/yonetim`

### Senaryo 2: API ile Sayfa Oluşturma

#### 2.1. Root Sayfa Oluşturma

```bash
POST /api/pages
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "data": {
    "title": "Hizmetlerimiz",
    "slug": "hizmetlerimiz",
    "parent": null,
    "description": "Sunduğumuz hizmetler",
    "locale": "tr-TR",
    "content": [
      {
        "__component": "shared.hero",
        "title": "Hizmetlerimiz",
        "description": "Size sunduğumuz hizmetler"
      }
    ]
  }
}
```

#### 2.2. Alt Sayfa Oluşturma

```bash
POST /api/pages
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN

{
  "data": {
    "title": "Rezervasyon",
    "slug": "rezervasyon",
    "parent": 1,  // Hizmetlerimiz sayfasının ID'si
    "description": "Rezervasyon hizmetleri",
    "locale": "tr-TR"
  }
}
```

**Not**: Parent ID'sini bulmak için:
```bash
GET /api/pages?filters[slug][$eq]=hizmetlerimiz&locale=tr-TR
```

### Senaryo 3: Path ile Sayfa Getirme

#### 3.1. REST API ile Path ile Sayfa Bulma

```bash
# Tek seviye
GET /api/pages/path/hakkimizda?locale=tr-TR&populate=*

# İç içe path
GET /api/pages/path/hakkimizda/tarihce/kurulus?locale=tr-TR&populate=*

# Tüm ilişkileri populate et
GET /api/pages/path/hakkimizda/tarihce?locale=tr-TR&populate[parent]=*&populate[children]=*&populate[content]=*
```

#### 3.2. Response Örneği

```json
{
  "data": {
    "id": 3,
    "documentId": "abc123",
    "title": "Tarihçe",
    "slug": "tarihce",
    "fullPath": "/hakkimizda/tarihce",
    "parent": {
      "id": 1,
      "title": "Hakkımızda",
      "slug": "hakkimizda",
      "fullPath": "/hakkimizda"
    },
    "children": [
      {
        "id": 4,
        "title": "Kuruluş",
        "slug": "kurulus",
        "fullPath": "/hakkimizda/tarihce/kurulus"
      }
    ],
    "content": [...],
    "seo": {...}
  }
}
```

### Senaryo 4: Breadcrumb Kullanımı

#### 4.1. Breadcrumb Getirme

```bash
GET /api/pages/3/breadcrumbs?locale=tr-TR
```

#### 4.2. Response Örneği

```json
{
  "data": [
    {
      "id": 1,
      "title": "Hakkımızda",
      "slug": "hakkimizda",
      "fullPath": "/hakkimizda"
    },
    {
      "id": 3,
      "title": "Tarihçe",
      "slug": "tarihce",
      "fullPath": "/hakkimizda/tarihce"
    }
  ]
}
```

### Senaryo 5: Hiyerarşik Sayfa Listesi

#### 5.1. Sadece Root Sayfaları Getirme

```bash
GET /api/pages?filters[parent][$null]=true&locale=tr-TR&populate[children][populate][0]=children
```

#### 5.2. Belirli Bir Sayfanın Alt Sayfalarını Getirme

```bash
# Önce parent ID'sini bulun
GET /api/pages?filters[slug][$eq]=hakkimizda&locale=tr-TR

# Sonra alt sayfaları getirin
GET /api/pages?filters[parent][id][$eq]=1&locale=tr-TR&populate[children]=*
```

#### 5.3. Tüm Hiyerarşiyi Getirme (Recursive)

```bash
GET /api/pages?locale=tr-TR&populate[children][populate][0]=children&populate[children][populate][1]=children&populate[children][populate][2]=children
```

### Senaryo 6: GraphQL ile Kullanım

#### 6.1. Path ile Sayfa Getirme

```graphql
query GetPageByPath($path: String!, $locale: String!) {
  pages(
    filters: { fullPath: { eq: $path } }
    locale: $locale
  ) {
    data {
      id
      documentId
      attributes {
        title
        slug
        fullPath
        parent {
          data {
            id
            attributes {
              title
              slug
              fullPath
            }
          }
        }
        children {
          data {
            id
            attributes {
              title
              slug
              fullPath
            }
          }
        }
        content {
          __typename
          ... on ComponentSharedHero {
            title
            description
          }
        }
      }
    }
  }
}
```

**Variables:**
```json
{
  "path": "/hakkimizda/tarihce",
  "locale": "tr-TR"
}
```

#### 6.2. Breadcrumb GraphQL Query

```graphql
query GetBreadcrumbs($pageId: ID!, $locale: String!) {
  page(id: $pageId, locale: $locale) {
    data {
      id
      attributes {
        title
        slug
        fullPath
        parent {
          data {
            id
            attributes {
              title
              slug
              fullPath
              parent {
                data {
                  id
                  attributes {
                    title
                    slug
                    fullPath
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```

## 🔄 Otomatik Güncellemeler

### Parent Değiştiğinde

Bir sayfanın parent'ı değiştirildiğinde:
1. Sayfanın `fullPath`'i otomatik güncellenir
2. Tüm child sayfaların `fullPath`'leri otomatik güncellenir (recursive)

**Örnek:**
- "Tarihçe" sayfasının parent'ı "Hakkımızda"dan "Hizmetler"e değiştirilirse
- Eski path: `/hakkimizda/tarihce`
- Yeni path: `/hizmetler/tarihce`
- Alt sayfalar da otomatik güncellenir: `/hizmetler/tarihce/kurulus`

### Slug Değiştiğinde

Bir sayfanın slug'ı değiştirildiğinde:
1. Sayfanın `fullPath`'i otomatik güncellenir
2. Tüm child sayfaların `fullPath`'leri otomatik güncellenir

**Örnek:**
- "Hakkımızda" slug'ı "about-us" olarak değiştirilirse
- Eski path: `/hakkimizda/tarihce`
- Yeni path: `/about-us/tarihce`

## 🌍 Çoklu Dil Desteği

Her dil için ayrı hiyerarşi oluşturabilirsiniz:

### Türkçe Hiyerarşi
```
/hakkimizda
/hakkimizda/tarihce
/hizmetlerimiz
/hizmetlerimiz/rezervasyon
```

### İngilizce Hiyerarşi
```
/about-us
/about-us/history
/services
/services/reservation
```

**Kullanım:**
```bash
# Türkçe
GET /api/pages/path/hakkimizda/tarihce?locale=tr-TR

# İngilizce
GET /api/pages/path/about-us/history?locale=en-US
```

## 📊 Frontend Entegrasyonu

### React Örneği

```typescript
// Page component
import { useEffect, useState } from 'react';

function Page({ path, locale = 'tr-TR' }) {
  const [page, setPage] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    // Sayfayı path ile getir
    fetch(`/api/pages/path/${path}?locale=${locale}&populate=*`)
      .then(res => res.json())
      .then(data => {
        setPage(data.data);
        
        // Breadcrumb'ları getir
        return fetch(`/api/pages/${data.data.id}/breadcrumbs?locale=${locale}`);
      })
      .then(res => res.json())
      .then(data => setBreadcrumbs(data.data));
  }, [path, locale]);

  if (!page) return <div>Loading...</div>;

  return (
    <div>
      {/* Breadcrumb */}
      <nav>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.id}>
            {index > 0 && ' / '}
            <a href={crumb.fullPath}>{crumb.title}</a>
          </span>
        ))}
      </nav>

      {/* Sayfa içeriği */}
      <h1>{page.title}</h1>
      <div>{page.description}</div>
      
      {/* Dynamic Zone içeriği */}
      {page.content?.map((block, index) => (
        <div key={index}>
          {/* Component render logic */}
        </div>
      ))}

      {/* Alt sayfalar */}
      {page.children && page.children.length > 0 && (
        <nav>
          <h2>Alt Sayfalar</h2>
          <ul>
            {page.children.map(child => (
              <li key={child.id}>
                <a href={child.fullPath}>{child.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
```

### Next.js Örneği

```typescript
// pages/[...path].tsx
import { GetServerSideProps } from 'next';

export default function DynamicPage({ page, breadcrumbs }) {
  return (
    <div>
      {/* Breadcrumb */}
      <nav>
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.id}>
            {index > 0 && ' / '}
            <Link href={crumb.fullPath}>{crumb.title}</Link>
          </span>
        ))}
      </nav>

      <h1>{page.title}</h1>
      {/* ... */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, locale }) => {
  const path = Array.isArray(params?.path) ? params.path.join('/') : '';
  
  const pageRes = await fetch(
    `${process.env.STRAPI_URL}/api/pages/path/${path}?locale=${locale}&populate=*`
  );
  const pageData = await pageRes.json();

  if (!pageData.data) {
    return { notFound: true };
  }

  const breadcrumbsRes = await fetch(
    `${process.env.STRAPI_URL}/api/pages/${pageData.data.id}/breadcrumbs?locale=${locale}`
  );
  const breadcrumbsData = await breadcrumbsRes.json();

  return {
    props: {
      page: pageData.data,
      breadcrumbs: breadcrumbsData.data,
    },
  };
};
```

## 🔍 API Endpoint Özeti

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/pages` | Tüm sayfaları listele |
| GET | `/api/pages/:id` | ID ile sayfa getir |
| GET | `/api/pages/path/:path*` | Path ile sayfa getir |
| GET | `/api/pages/:id/breadcrumbs` | Breadcrumb getir |
| POST | `/api/pages` | Yeni sayfa oluştur |
| PUT | `/api/pages/:id` | Sayfa güncelle |
| DELETE | `/api/pages/:id` | Sayfa sil |

## ⚠️ Önemli Notlar

1. **Path Güncelleme**: Path'ler otomatik güncellenir, manuel müdahale gerekmez
2. **Parent Seçimi**: Bir sayfa kendi child'ını parent olarak seçemez (circular reference önlenir)
3. **Slug Benzersizliği**: Aynı parent altında slug'lar benzersiz olmalı
4. **Dil Bağımsızlığı**: Her dil için ayrı hiyerarşi oluşturulur
5. **Performance**: Derin hiyerarşilerde populate işlemleri optimize edilmelidir

## 🎯 RWS Tridion Karşılaştırması

| Özellik | RWS Tridion | Strapi v5 |
|---------|-------------|-----------|
| Klasör Yapısı | ✅ Structure Group | ✅ Parent-Child Relation |
| Path Yönetimi | ✅ Otomatik | ✅ Otomatik (fullPath) |
| Breadcrumb | ✅ Var | ✅ Var |
| Çoklu Dil | ✅ Var | ✅ Var (i18n) |
| API Erişimi | ✅ Var | ✅ REST + GraphQL |
| Path ile Arama | ✅ Var | ✅ findByPath |

**Sonuç**: ✅ Strapi v5 yapısı RWS Tridion'daki klasör path yapısını tam olarak karşılar!

