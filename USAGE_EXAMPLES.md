# 🚀 AI Translation Kullanım Örnekleri

## 1️⃣ Strapi'yi Başlatın

```bash
npm run develop
```

Strapi'nin çalıştığından emin olun: `http://localhost:1337`

## 2️⃣ Kullanım Senaryoları

### Senaryo 1: Tek Bir FAQ Sorusunu Çevir

**Postman veya cURL ile:**

```bash
POST http://localhost:1337/api/v1/cms/translation/faq-question
Content-Type: application/json

{
  "questionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

**cURL komutu:**

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{
    "questionId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### Senaryo 2: Tüm FAQ Sorularını Çevir (Script)

**Tüm soruları tr-TR'den en-US'e çevir:**

```bash
npm run translate:questions tr-TR en-US
```

**Belirli bir topic'e ait soruları çevir:**

```bash
npm run translate:questions tr-TR en-US "Disabled passengers"
```

### Senaryo 3: FAQ Topic'ini Çevir

```bash
POST http://localhost:1337/api/v1/cms/translation/faq-topic
Content-Type: application/json

{
  "topicId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

### Senaryo 4: Topic'e Ait Tüm Soruları Tek Seferde Çevir

```bash
POST http://localhost:1337/api/v1/cms/translation/faq-questions-by-topic
Content-Type: application/json

{
  "topicName": "Disabled passengers",
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

### Senaryo 5: Sadece Metin Çevirisi (Test)

```bash
POST http://localhost:1337/api/v1/cms/translation/text
Content-Type: application/json

{
  "text": "Engelli yolcular için özel hizmetlerimiz var mı?",
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

## 3️⃣ Adım Adım İlk Kullanım

### Adım 1: Strapi'yi Başlatın

```bash
npm run develop
```

### Adım 2: Bir FAQ Sorusunun ID'sini Bulun

Admin panelden (`http://localhost:1337/admin`) FAQ Questions'a gidin ve çevirmek istediğiniz sorunun ID'sini not edin.

Veya API'den listeleyin:

```bash
GET http://localhost:1337/api/v1/cms/faq-questions?language=tr&country=tr&topicName=Disabled+passengers
```

### Adım 3: İlk Çeviriyi Yapın

Örnek: ID=1 olan soruyu çevirmek için:

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{
    "questionId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### Adım 4: Sonucu Kontrol Edin

Admin panelden FAQ Questions'a gidin ve en-US locale'ini seçin. Çevrilen soruyu göreceksiniz.

**Önemli:** Çeviriler otomatik publish edilmez! Admin panelden manuel olarak publish etmeniz gerekir.

## 4️⃣ Toplu Çeviri (Önerilen)

Birden fazla soru varsa script kullanın:

```bash
# Tüm soruları çevir
npm run translate:questions tr-TR en-US

# Belirli topic'e ait soruları çevir
npm run translate:questions tr-TR en-US "Disabled passengers"
npm run translate:questions tr-TR en-US "Infants and children"
```

Script otomatik olarak:

- ✅ Zaten çevrilmiş soruları atlar
- ✅ Her çeviri arasında 1 saniye bekler (rate limiting için)
- ✅ Başarılı/başarısız çevirileri raporlar

## 5️⃣ Postman Collection

Postman kullanıyorsanız, aşağıdaki collection'ı import edebilirsiniz:

```json
{
  "info": {
    "name": "AI Translation API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Translate Text",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"text\": \"Merhaba dünya\",\n  \"sourceLocale\": \"tr-TR\",\n  \"targetLocale\": \"en-US\"\n}"
        },
        "url": {
          "raw": "http://localhost:1337/api/v1/cms/translation/text",
          "protocol": "http",
          "host": ["localhost"],
          "port": "1337",
          "path": ["api", "v1", "cms", "translation", "text"]
        }
      }
    },
    {
      "name": "Translate FAQ Question",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"questionId\": 1,\n  \"sourceLocale\": \"tr-TR\",\n  \"targetLocale\": \"en-US\"\n}"
        },
        "url": {
          "raw": "http://localhost:1337/api/v1/cms/translation/faq-question",
          "protocol": "http",
          "host": ["localhost"],
          "port": "1337",
          "path": ["api", "v1", "cms", "translation", "faq-question"]
        }
      }
    },
    {
      "name": "Translate FAQ Topic",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"topicId\": 1,\n  \"sourceLocale\": \"tr-TR\",\n  \"targetLocale\": \"en-US\"\n}"
        },
        "url": {
          "raw": "http://localhost:1337/api/v1/cms/translation/faq-topic",
          "protocol": "http",
          "host": ["localhost"],
          "port": "1337",
          "path": ["api", "v1", "cms", "translation", "faq-topic"]
        }
      }
    },
    {
      "name": "Translate FAQ Questions by Topic",
      "request": {
        "method": "POST",
        "header": [{ "key": "Content-Type", "value": "application/json" }],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"topicName\": \"Disabled passengers\",\n  \"sourceLocale\": \"tr-TR\",\n  \"targetLocale\": \"en-US\"\n}"
        },
        "url": {
          "raw": "http://localhost:1337/api/v1/cms/translation/faq-questions-by-topic",
          "protocol": "http",
          "host": ["localhost"],
          "port": "1337",
          "path": ["api", "v1", "cms", "translation", "faq-questions-by-topic"]
        }
      }
    }
  ]
}
```

## 6️⃣ Hata Ayıklama

### "OPENAI_API_KEY environment variable is not set" Hatası

`.env` dosyanızın proje root dizininde olduğundan emin olun ve Strapi'yi yeniden başlatın.

### Çeviri Başarısız Oluyor

1. API key'inizin geçerli olduğunu kontrol edin
2. OpenAI hesabınızda yeterli kredi olduğunu kontrol edin
3. Model adının doğru olduğunu kontrol edin (`gpt-4o-mini`)

### Çeviri Yapıldı Ama Görünmüyor

Çeviriler otomatik publish edilmez! Admin panelden:

1. FAQ Questions'a gidin
2. Locale'i değiştirin (en-US)
3. Çevrilen soruyu bulun
4. "Publish" butonuna tıklayın

## 7️⃣ İpuçları

1. **İlk Test:** Önce tek bir soruyla test edin
2. **Toplu İşlem:** Çok sayıda soru varsa script kullanın
3. **Maliyet:** `gpt-4o-mini` daha ekonomiktir
4. **Rate Limiting:** Script'teki delay'i artırabilirsiniz (varsayılan: 1 saniye)
5. **Publish:** Çevirileri publish etmeyi unutmayın!

## 8️⃣ Örnek Workflow

```bash
# 1. Strapi'yi başlat
npm run develop

# 2. Tüm "Disabled passengers" sorularını çevir
npm run translate:questions tr-TR en-US "Disabled passengers"

# 3. Admin panelden çevirileri kontrol et ve publish et
# http://localhost:1337/admin → FAQ Questions → en-US locale

# 4. Diğer topic'leri de çevir
npm run translate:questions tr-TR en-US "Infants and children"
npm run translate:questions tr-TR en-US "Students"
```
