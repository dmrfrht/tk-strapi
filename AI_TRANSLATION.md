# AI Translation System Documentation

Bu dokümantasyon, Strapi v5 projesinde OpenAI kullanarak içerikleri otomatik çevirmek için kurulan AI çeviri sistemini açıklar.

## 📋 İçindekiler

- [Kurulum](#kurulum)
- [Yapılandırma](#yapılandırma)
- [API Endpoints](#api-endpoints)
- [Kullanım Örnekleri](#kullanım-örnekleri)
- [Lifecycle Hooks](#lifecycle-hooks)
- [Maliyet Optimizasyonu](#maliyet-optimizasyonu)

## 🚀 Kurulum

### 1. Gerekli Paketler

OpenAI paketi zaten yüklenmiştir. Eğer yüklü değilse:

```bash
npm install openai
```

### 2. Environment Variables

`.env` dosyanıza aşağıdaki değişkenleri ekleyin:

```env
# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini  # veya gpt-4, gpt-3.5-turbo
```

**Önemli:** `OPENAI_API_KEY` değişkenini mutlaka ayarlayın. API key'inizi [OpenAI Platform](https://platform.openai.com/api-keys) üzerinden alabilirsiniz.

## ⚙️ Yapılandırma

### Desteklenen Locale'ler

Sistem aşağıdaki locale'leri destekler:

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

Yeni locale'ler eklemek için `src/services/translation.ts` dosyasındaki `localeToLanguage` mapping'ini güncelleyin.

## 🔌 API Endpoints

Tüm translation endpoint'leri `/api/v1/cms/translation` prefix'i altında bulunur.

### 1. Metin Çevirisi

Tek bir metni çevirmek için:

```bash
POST /api/v1/cms/translation/text
Content-Type: application/json

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

### 2. FAQ Question Çevirisi

Bir FAQ sorusunu çevirmek için:

```bash
POST /api/v1/cms/translation/faq-question
Content-Type: application/json

{
  "questionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "question": "What is your question?",
    "answer": "<p>Translated answer...</p>",
    "locale": "en-US",
    ...
  }
}
```

### 3. FAQ Topic Çevirisi

Bir FAQ topic'ini çevirmek için:

```bash
POST /api/v1/cms/translation/faq-topic
Content-Type: application/json

{
  "topicId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

### 4. FAQ Section Çevirisi

Bir FAQ section'ını çevirmek için:

```bash
POST /api/v1/cms/translation/faq-section
Content-Type: application/json

{
  "sectionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

### 5. Topic'e Ait Tüm Soruları Çevir

Bir topic'e ait tüm soruları çevirmek için:

```bash
POST /api/v1/cms/translation/faq-questions-by-topic
Content-Type: application/json

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

## 💡 Kullanım Örnekleri

### cURL ile Kullanım

```bash
# Metin çevirisi
curl -X POST http://localhost:1337/api/v1/cms/translation/text \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Engelli yolcular için özel hizmetlerimiz var mı?",
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'

# FAQ Question çevirisi
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{
    "questionId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### JavaScript/Node.js ile Kullanım

```javascript
const axios = require('axios');

async function translateFaqQuestion(questionId, sourceLocale, targetLocale) {
  try {
    const response = await axios.post(
      'http://localhost:1337/api/v1/cms/translation/faq-question',
      {
        questionId,
        sourceLocale,
        targetLocale,
      }
    );
    
    console.log('Translation successful:', response.data);
    return response.data.data;
  } catch (error) {
    console.error('Translation failed:', error.response?.data || error.message);
    throw error;
  }
}

// Kullanım
translateFaqQuestion(1, 'tr-TR', 'en-US');
```

### Postman Collection

Postman collection'ı oluşturmak için `AI_Translation.postman_collection.json` dosyasını kullanabilirsiniz.

## 🔄 Lifecycle Hooks

Otomatik çeviri için lifecycle hook'ları kullanabilirsiniz, ancak **varsayılan olarak devre dışıdır** çünkü:

1. Her kayıt oluşturulduğunda/güncellendiğinde API çağrısı yapılır (maliyetli)
2. Kullanıcı kontrolü olmadan çeviri yapılır
3. Hata durumlarında içerik kaybı riski vardır

### Lifecycle Hook'ları Aktif Etme

`src/api/faq-question/content-types/faq-question/lifecycles.ts` dosyasındaki yorumları kaldırarak aktif edebilirsiniz:

```typescript
export default {
  async afterCreate(event: any) {
    // Otomatik çeviri kodu burada
  },
  
  async afterUpdate(event: any) {
    // Otomatik çeviri kodu burada
  },
};
```

**Dikkat:** Lifecycle hook'ları aktif etmeden önce maliyetleri göz önünde bulundurun.

## 💰 Maliyet Optimizasyonu

### 1. Batch Translation

Birden fazla içeriği tek seferde çevirmek için script kullanın:

```bash
node scripts/translate-all-questions.js
```

### 2. Model Seçimi

Daha düşük maliyet için `gpt-4o-mini` kullanın (varsayılan). Daha yüksek kalite için `gpt-4` kullanabilirsiniz.

### 3. Cache Mekanizması

Aynı metni tekrar çevirmemek için cache mekanizması ekleyebilirsiniz.

### 4. Rate Limiting

API rate limit'lerini aşmamak için request'ler arasında delay ekleyin.

## 🛠️ Troubleshooting

### "OPENAI_API_KEY environment variable is not set" Hatası

`.env` dosyanızda `OPENAI_API_KEY` değişkeninin tanımlı olduğundan emin olun.

### Translation Başarısız Oluyor

1. OpenAI API key'inizin geçerli olduğundan emin olun
2. API quota'nızın yeterli olduğunu kontrol edin
3. Model adının doğru olduğunu kontrol edin (`gpt-4o-mini`, `gpt-4`, vb.)

### Çeviri Kalitesi Düşük

1. Daha iyi bir model kullanın (`gpt-4` gibi)
2. System prompt'unu `src/services/translation.ts` dosyasında özelleştirin
3. Temperature değerini ayarlayın (varsayılan: 0.3)

## 📝 Notlar

- Çeviriler otomatik olarak publish edilmez, manuel olarak publish etmeniz gerekir
- Rich text içeriklerde HTML tag'leri korunur
- İlişkiler (relations) çevrilmez, aynı kalır
- Component'ler recursive olarak çevrilir

## 🔗 İlgili Dosyalar

- `src/services/translation.ts` - Ana translation service
- `src/api/translation/controllers/translation.ts` - API controllers
- `src/api/translation/routes/translation.ts` - API routes
- `src/api/faq-question/content-types/faq-question/lifecycles.ts` - Lifecycle hooks

## 📞 Destek

Sorularınız için issue açabilir veya dokümantasyonu güncelleyebilirsiniz.

