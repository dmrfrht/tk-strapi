# GraphQL Kullanım Örnekleri

Bu dokümantasyon, Strapi GraphQL API'sini kullanarak FAQ sections ve diğer içerikleri nasıl sorgulayacağınızı gösterir.

## GraphQL Endpoint

- **URL**: `http://localhost:1337/graphql`
- **Method**: POST
- **Content-Type**: `application/json`

## FAQ Sections - tr-TR Locale

### Tüm FAQ Sections'ları Çekme (tr-TR)

**ÖNEMLİ:** Strapi 5'te GraphQL şeması `data` ve `attributes` wrapper'ları kullanmaz. Alanlar direkt olarak erişilebilir.

```graphql
query GetFaqSections {
  faqSections(locale: "tr-TR", status: PUBLISHED, sort: ["order:asc"]) {
    documentId
    sectionName
    sectionTranslation
    order
    createdAt
    updatedAt
    publishedAt
    locale
    topics {
      documentId
      topicName
      topicTranslation
      order
      tcmID
      linkUri
      uniqueId
      seoUrl
      locale
      metadata {
        title
        keywords
        robots
        description
        parameters
        pubId
      }
    }
  }
}
```

### Sadece Section Bilgileri (Topics Olmadan)

```graphql
query GetFaqSectionsOnly {
  faqSections(locale: "tr-TR", status: PUBLISHED, sort: ["order:asc"]) {
    documentId
    sectionName
    sectionTranslation
    order
    locale
  }
}
```

### Belirli Bir Section'ı ID ile Çekme

```graphql
query GetFaqSectionById {
  faqSection(documentId: "1", locale: "tr-TR", status: PUBLISHED) {
    documentId
    sectionName
    sectionTranslation
    order
    topics {
      documentId
      topicName
      topicTranslation
    }
  }
}
```

### Filtreleme ve Sıralama

```graphql
query GetFaqSectionsFiltered {
  faqSections(
    locale: "tr-TR"
    status: PUBLISHED
    filters: { order: { gt: 0 } }
    sort: ["order:asc"]
    pagination: { limit: 10 }
  ) {
    documentId
    sectionName
    sectionTranslation
    order
  }
}
```

## cURL Örnekleri

### Tüm FAQ Sections (tr-TR)

```bash
curl -X POST http://localhost:1337/graphql \
  -H "Content-Type: application/json" \
  -d '{
    "query": "query { faqSections(locale: \"tr-TR\", status: PUBLISHED) { documentId sectionName sectionTranslation order locale } }"
  }'
```

### JavaScript/TypeScript Fetch Örneği

```javascript
const query = `
  query GetFaqSections {
    faqSections(locale: "tr-TR", status: PUBLISHED, sort: ["order:asc"]) {
      documentId
      sectionName
      sectionTranslation
      order
      locale
      topics {
        documentId
        topicName
        topicTranslation
        order
      }
    }
  }
`;

const response = await fetch("http://localhost:1337/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
});

const data = await response.json();
console.log(data);
```

### Axios Örneği

```javascript
import axios from "axios";

const query = `
  query GetFaqSections {
    faqSections(locale: "tr-TR", status: PUBLISHED) {
      documentId
      sectionName
      sectionTranslation
      order
      topics {
        documentId
        topicName
        topicTranslation
      }
    }
  }
`;

const response = await axios.post("http://localhost:1337/graphql", {
  query,
});

console.log(response.data);
```

## Diğer Locale'ler

### İngilizce (en-US)

```graphql
query GetFaqSectionsEn {
  faqSections(locale: "en-US", status: PUBLISHED) {
    documentId
    sectionName
    sectionTranslation
    order
  }
}
```

### Almanca (de-DE)

```graphql
query GetFaqSectionsDe {
  faqSections(locale: "de-DE", status: PUBLISHED) {
    documentId
    sectionName
    sectionTranslation
    order
  }
}
```

## FAQ Questions Örneği

```graphql
query GetFaqQuestions {
  faqQuestions(locale: "tr-TR", status: PUBLISHED) {
    documentId
    title
    question
    answer
    locale
    order
    topic {
      documentId
      topicName
      topicTranslation
    }
  }
}
```

## Önemli Notlar

1. **Locale Formatı**: Locale formatı `language-COUNTRY` şeklinde olmalıdır (örn: `tr-TR`, `en-US`, `de-DE`)

2. **Status Parametresi (Strapi 5)**:

   - `PUBLISHED`: Sadece yayınlanmış içerikler (enum değeri)
   - `DRAFT`: Taslak içerikler
   - **NOT**: Strapi 5'te `publicationState` kaldırılmış, yerine `status` kullanılıyor

3. **GraphQL Şema Yapısı (Strapi 5)**:

   - **ÖNEMLİ**: Strapi 5'te `data` ve `attributes` wrapper'ları yoktur
   - Alanlar direkt olarak erişilebilir: `faqSections { documentId sectionName ... }`
   - İlişkiler de direkt olarak erişilebilir: `topics { documentId topicName ... }`

4. **Pagination**: Varsayılan olarak 25 kayıt döner. Daha fazla için `pagination` parametresi kullanın:

   ```graphql
   pagination: { limit: 100, start: 0 }
   ```

5. **Sorting**: Sıralama için `sort` parametresi (array formatında):

   ```graphql
   sort: ["order:asc"]  // veya ["order:desc"]
   ```

6. **Filtering**: Filtreleme için `filters` parametresi:

   ```graphql
   filters: { sectionName: { contains: "BAGAJ" } }
   ```

7. **İzinler**: GraphQL API'sini kullanmak için izinleri ayarlamanız gerekir. İki yöntem var:

   **Yöntem 1: Script ile (Önerilen)**

   ```bash
   npm run setup:graphql-permissions
   ```

   **Yöntem 2: Admin Panel**

   - Settings → Users & Permissions Plugin → Roles → Public
   - `faq-section`, `faq-topic`, `faq-question` için `find` ve `findOne` izinlerini aktif edin

   **Yöntem 3: Strapi Console**

   ```bash
   npm run console
   ```

   Sonra console'da:

   ```javascript
   const setup = require("./scripts/setup-graphql-permissions");
   await setup();
   ```
