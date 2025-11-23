# GraphQL vs REST API - Pratik Karşılaştırma

Bu dokümantasyon, ayrı frontend projenizde GraphQL kullanmanın REST API'ye göre pratik avantajlarını gösterir.

## 🔄 Mevcut Durumunuz (REST API)

### Senaryo 1: FAQ Ana Sayfası - Sections ve Topics Göstermek

**REST API ile (Şu anki yaklaşım):**

```javascript
// Frontend kodunuz muhtemelen şöyle:
async function getFaqData() {
  // 1. Sections'ları çek
  const sectionsRes = await fetch(
    "https://cms.example.com/api/v1/cms/faq-sections?locale=tr-TR"
  );
  const sections = await sectionsRes.json();

  // 2. Her section için topics çek (N+1 problem!)
  const sectionsWithTopics = await Promise.all(
    sections.data.map(async (section) => {
      const topicsRes = await fetch(
        `https://cms.example.com/api/v1/cms/faq-topics?section=${section.id}&locale=tr-TR`
      );
      const topics = await topicsRes.json();
      return { ...section, topics: topics.data };
    })
  );

  return sectionsWithTopics;
}

// 5 section varsa = 1 + 5 = 6 HTTP isteği
// Her istek için network latency + response time
// Toplam süre: ~500-1000ms (network'e bağlı)
```

**GraphQL ile:**

```javascript
// Tek sorgu, tek istek
async function getFaqData() {
  const query = `
    query GetFaqSections($locale: I18NLocaleCode!) {
      faqSections(locale: $locale, status: PUBLISHED, sort: ["order:asc"]) {
        documentId
        sectionName
        sectionTranslation
        order
        topics {
          documentId
          topicName
          topicTranslation
          seoUrl
          order
        }
      }
    }
  `;

  const response = await fetch("https://cms.example.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { locale: "tr-TR" },
    }),
  });

  const { data } = await response.json();
  return data.faqSections;

  // 1 HTTP isteği
  // Toplam süre: ~100-200ms
}
```

**Sonuç:**

- REST: 6 istek, ~800ms
- GraphQL: 1 istek, ~150ms
- **5x daha hızlı!** ⚡

---

## 📊 Gerçek Dünya Senaryoları

### Senaryo 2: FAQ Detay Sayfası - Topic ve Questions

**REST API ile:**

```javascript
async function getTopicDetail(topicId) {
  // 1. Topic bilgilerini çek
  const topicRes = await fetch(
    `https://cms.example.com/api/v1/cms/faq-topics/${topicId}?locale=tr-TR`
  );
  const topic = await topicRes.json();

  // 2. Section bilgisini çek (topic'te section ID var ama detay yok)
  const sectionRes = await fetch(
    `https://cms.example.com/api/v1/cms/faq-sections/${topic.data.section.id}?locale=tr-TR`
  );
  const section = await sectionRes.json();

  // 3. Questions'ları çek
  const questionsRes = await fetch(
    `https://cms.example.com/api/v1/cms/faq-questions?topic=${topicId}&locale=tr-TR`
  );
  const questions = await questionsRes.json();

  return {
    ...topic.data,
    section: section.data,
    questions: questions.data,
  };

  // 3 HTTP isteği
}
```

**GraphQL ile:**

```graphql
query GetTopicDetail($topicId: ID!, $locale: I18NLocaleCode!) {
  faqTopic(documentId: $topicId, locale: $locale, status: PUBLISHED) {
    documentId
    topicName
    topicTranslation
    seoUrl
    section {
      sectionName
      sectionTranslation
    }
    questions {
      documentId
      title
      question
      answer
      order
    }
  }
}
```

```javascript
// Tek istek, tüm veriler
async function getTopicDetail(topicId) {
  const query = `...`; // yukarıdaki query
  const response = await fetch("https://cms.example.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables: { topicId, locale: "tr-TR" },
    }),
  });
  const { data } = await response.json();
  return data.faqTopic;

  // 1 HTTP isteği
}
```

**Sonuç:**

- REST: 3 istek
- GraphQL: 1 istek
- **3x daha az network overhead**

---

### Senaryo 3: Mobil Uygulama - Sadece Gerekli Veriler

**REST API ile:**

```javascript
// Mobil uygulama için sadece section isimleri lazım
// Ama API tüm verileri gönderiyor (over-fetching)
const sectionsRes = await fetch(
  "https://cms.example.com/api/v1/cms/faq-sections?locale=tr-TR"
);
// Response: ~50KB (topics, metadata, createdAt, updatedAt dahil)
// Ama sadece sectionTranslation'a ihtiyacınız var!
```

**GraphQL ile:**

```graphql
query {
  faqSections(locale: "tr-TR") {
    sectionTranslation
  }
}
```

```javascript
// Sadece istediğiniz alanlar gelir
// Response: ~2KB
// 25x daha az veri transferi! 📱
```

**Mobil için kritik:**

- Daha az veri = daha hızlı yükleme
- Daha az bandwidth = daha az maliyet
- Daha iyi kullanıcı deneyimi

---

## 💰 Maliyet ve Performans Karşılaştırması

### Örnek: FAQ Ana Sayfası Yükleme

**Varsayımlar:**

- 5 section
- Her section'da 10 topic
- Her topic'te metadata var
- Network latency: 50ms/istek

**REST API:**

```
1. GET /api/v1/cms/faq-sections → 50ms
2. GET /api/v1/cms/faq-topics?section=1 → 50ms
3. GET /api/v1/cms/faq-topics?section=2 → 50ms
4. GET /api/v1/cms/faq-topics?section=3 → 50ms
5. GET /api/v1/cms/faq-topics?section=4 → 50ms
6. GET /api/v1/cms/faq-topics?section=5 → 50ms
─────────────────────────────────────────
Toplam: 6 istek × 50ms = 300ms
+ Response parsing = ~400ms
Veri transferi: ~150KB (gereksiz alanlar dahil)
```

**GraphQL:**

```
1. POST /graphql → 50ms
─────────────────────────────────────────
Toplam: 1 istek × 50ms = 50ms
+ Response parsing = ~100ms
Veri transferi: ~30KB (sadece istenen alanlar)
```

**Kazanç:**

- ⚡ **4x daha hızlı** (400ms → 100ms)
- 📦 **5x daha az veri** (150KB → 30KB)
- 🌐 **6x daha az network isteği**

---

## 🛠️ Frontend Kod Karşılaştırması

### REST API Yaklaşımı (Şu anki)

```javascript
// services/faqService.js
class FaqService {
  async getSections(locale = "tr-TR") {
    const res = await fetch(
      `${API_BASE}/api/v1/cms/faq-sections?locale=${locale}`
    );
    return res.json();
  }

  async getTopicsBySection(sectionId, locale = "tr-TR") {
    const res = await fetch(
      `${API_BASE}/api/v1/cms/faq-topics?section=${sectionId}&locale=${locale}`
    );
    return res.json();
  }

  async getTopicDetail(topicId, locale = "tr-TR") {
    const res = await fetch(
      `${API_BASE}/api/v1/cms/faq-topics/${topicId}?locale=${locale}`
    );
    return res.json();
  }

  async getQuestionsByTopic(topicId, locale = "tr-TR") {
    const res = await fetch(
      `${API_BASE}/api/v1/cms/faq-questions?topic=${topicId}&locale=${locale}`
    );
    return res.json();
  }

  // Karmaşık veri çekme için helper metodlar
  async getSectionsWithTopics(locale = "tr-TR") {
    const sections = await this.getSections(locale);
    const sectionsWithTopics = await Promise.all(
      sections.data.map(async (section) => {
        const topics = await this.getTopicsBySection(section.id, locale);
        return { ...section, topics: topics.data };
      })
    );
    return sectionsWithTopics;
  }

  async getFullTopicData(topicId, locale = "tr-TR") {
    const topic = await this.getTopicDetail(topicId, locale);
    const section = await this.getSectionDetail(topic.data.section.id, locale);
    const questions = await this.getQuestionsByTopic(topicId, locale);

    return {
      ...topic.data,
      section: section.data,
      questions: questions.data,
    };
  }
}

// Kullanım
const faqService = new FaqService();
const data = await faqService.getSectionsWithTopics("tr-TR");
// Çok fazla kod, çok fazla istek, hata yönetimi karmaşık
```

### GraphQL Yaklaşımı

```javascript
// services/graphqlService.js
class GraphQLService {
  async query(query, variables = {}) {
    const res = await fetch(`${API_BASE}/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    const { data, errors } = await res.json();
    if (errors) throw new Error(errors[0].message);
    return data;
  }

  async getSectionsWithTopics(locale = "tr-TR") {
    const query = `
      query GetSections($locale: I18NLocaleCode!) {
        faqSections(locale: $locale, status: PUBLISHED) {
          documentId
          sectionTranslation
          topics {
            documentId
            topicTranslation
            seoUrl
          }
        }
      }
    `;
    const data = await this.query(query, { locale });
    return data.faqSections;
  }

  async getFullTopicData(topicId, locale = "tr-TR") {
    const query = `
      query GetTopic($topicId: ID!, $locale: I18NLocaleCode!) {
        faqTopic(documentId: $topicId, locale: $locale) {
          topicTranslation
          section {
            sectionTranslation
          }
          questions {
            title
            answer
          }
        }
      }
    `;
    const data = await this.query(query, { topicId, locale });
    return data.faqTopic;
  }
}

// Kullanım
const graphqlService = new GraphQLService();
const data = await graphqlService.getSectionsWithTopics("tr-TR");
// Daha az kod, daha az istek, daha temiz
```

**Kod Karşılaştırması:**

- REST: ~100 satır kod, 5+ metod
- GraphQL: ~30 satır kod, 2 metod
- **%70 daha az kod!**

---

## 🎯 Pratik Avantajlar Özeti

### 1. **Tek Endpoint**

```
REST: /api/v1/cms/faq-sections
      /api/v1/cms/faq-topics
      /api/v1/cms/faq-questions
      /api/v1/cms/faq-sections/:id
      /api/v1/cms/faq-topics/:id
      ... (10+ endpoint)

GraphQL: /graphql (tek endpoint)
```

### 2. **Daha Az Kod**

- REST: Her endpoint için ayrı metod
- GraphQL: Tek query metodu, sorgu ile kontrol

### 3. **Daha Hızlı**

- REST: N+1 problem, çoklu istekler
- GraphQL: Tek istek, ilişkili veriler dahil

### 4. **Daha Az Veri Transferi**

- REST: Tüm alanlar gönderilir
- GraphQL: Sadece istenen alanlar

### 5. **Tip Güvenliği**

```typescript
// GraphQL şemasından otomatik TypeScript tipleri
type FaqSection = {
  documentId: string;
  sectionTranslation: string;
  topics: FaqTopic[];
};

// REST için manuel tip tanımlama gerekir
```

### 6. **Daha Kolay Test**

```javascript
// GraphQL Playground'da sorguları test edebilirsiniz
// REST için Postman/Insomnia gerekir
```

---

## 📈 Ölçülebilir Faydalar

| Metrik             | REST API             | GraphQL           | İyileşme           |
| ------------------ | -------------------- | ----------------- | ------------------ |
| **İstek Sayısı**   | 6                    | 1                 | **83% azalma**     |
| **Yükleme Süresi** | 400ms                | 100ms             | **75% hızlanma**   |
| **Veri Transferi** | 150KB                | 30KB              | **80% azalma**     |
| **Frontend Kod**   | 100 satır            | 30 satır          | **70% azalma**     |
| **Hata Riski**     | Yüksek (çoklu istek) | Düşük (tek istek) | **Daha güvenilir** |

---

## 🚀 Geçiş Stratejisi

GraphQL'i REST API'nin yanında kullanabilirsiniz:

1. **Yeni özellikler için GraphQL kullanın**
2. **Mevcut REST endpoint'leri çalışmaya devam eder**
3. **Yavaş yavaş GraphQL'e geçin**
4. **Her iki API de aynı veriyi döndürür**

**Örnek:**

```javascript
// Eski kod (REST) - çalışmaya devam eder
const sections = await fetch("/api/v1/cms/faq-sections");

// Yeni kod (GraphQL) - daha hızlı
const sections = await graphql.query(GET_SECTIONS);
```

---

## 💡 Sonuç

GraphQL, frontend projenizde:

- ✅ **Daha hızlı** yükleme süreleri
- ✅ **Daha az** network isteği
- ✅ **Daha az** kod yazma
- ✅ **Daha iyi** kullanıcı deneyimi
- ✅ **Daha kolay** bakım

**Özellikle mobil uygulamalar ve yavaş network bağlantılarında fark çok belirgin!**
