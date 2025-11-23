# 🤖 AI Translation System - Hızlı Başlangıç

Strapi v5 projenizde OpenAI kullanarak içerikleri otomatik çevirmek için kurulmuş AI çeviri sistemi.

## ⚡ Hızlı Kurulum

### 1. Environment Variable Ayarlayın

`.env` dosyanıza ekleyin:

```env
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

### 2. API Key Alın

[OpenAI Platform](https://platform.openai.com/api-keys) üzerinden API key oluşturun.

## 🚀 Kullanım

### Tek Bir Soruyu Çevir

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{
    "questionId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### Tüm Soruları Çevir (Script)

```bash
# Tüm soruları çevir
npm run translate:questions tr-TR en-US

# Belirli bir topic'e ait soruları çevir
npm run translate:questions tr-TR en-US "Disabled passengers"
```

### Topic Çevir

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-topic \
  -H "Content-Type: application/json" \
  -d '{
    "topicId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### Topic'e Ait Tüm Soruları Çevir

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-questions-by-topic \
  -H "Content-Type: application/json" \
  -d '{
    "topicName": "Disabled passengers",
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

## 📚 Detaylı Dokümantasyon

Tüm detaylar için `AI_TRANSLATION.md` dosyasına bakın.

## 🔑 Önemli Notlar

1. **Maliyet:** Her çeviri için OpenAI API kullanım ücreti alınır. `gpt-4o-mini` daha ekonomiktir.
2. **Rate Limiting:** Çok sayıda çeviri yaparken script'teki delay'i artırabilirsiniz.
3. **Publish:** Çeviriler otomatik publish edilmez, manuel olarak publish etmeniz gerekir.
4. **Lifecycle Hooks:** Varsayılan olarak devre dışıdır (maliyet nedeniyle). Aktif etmek için `lifecycles.ts` dosyasındaki yorumları kaldırın.

## 🆘 Sorun Giderme

**"OPENAI_API_KEY environment variable is not set"**
- `.env` dosyanızda `OPENAI_API_KEY` tanımlı olduğundan emin olun.

**Çeviri başarısız oluyor**
- API key'inizin geçerli olduğunu kontrol edin
- API quota'nızı kontrol edin
- Model adının doğru olduğunu kontrol edin

## 📞 Destek

Detaylı dokümantasyon: `AI_TRANSLATION.md`

