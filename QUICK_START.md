# ⚡ Hızlı Başlangıç - AI Translation

## 🎯 Adım 1: Strapi'yi Başlatın

```bash
npm run develop
```

Strapi başladıktan sonra `http://localhost:1337` adresinde çalışacak.

## 🎯 Adım 2: İlk Çeviriyi Test Edin

### Seçenek A: Script ile (Önerilen - Kolay)

Terminal'de çalıştırın:

```bash
# Tüm soruları tr-TR'den en-US'e çevir
npm run translate:questions tr-TR en-US

# Veya belirli bir topic'e ait soruları çevir
npm run translate:questions tr-TR en-US "Disabled passengers"
```

### Seçenek B: API ile (Manuel)

**1. Önce bir sorunun ID'sini bulun:**

Admin panelden (`http://localhost:1337/admin`) FAQ Questions'a gidin ve bir sorunun ID'sini not edin.

**2. Çeviriyi yapın:**

Terminal'de:
```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{
    "questionId": 1,
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

Veya Postman kullanarak:
- Method: `POST`
- URL: `http://localhost:1337/api/v1/cms/translation/faq-question`
- Body (JSON):
```json
{
  "questionId": 1,
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

## 🎯 Adım 3: Sonucu Kontrol Edin

1. Admin panelden (`http://localhost:1337/admin`) FAQ Questions'a gidin
2. Sağ üstteki dil seçiciden **en-US**'i seçin
3. Çevrilen soruyu göreceksiniz
4. **ÖNEMLİ:** Çeviriler otomatik publish edilmez! "Publish" butonuna tıklayın

## 🎯 Adım 4: Toplu Çeviri Yapın

Birden fazla soru varsa script kullanın (daha kolay ve güvenli):

```bash
# Tüm soruları çevir
npm run translate:questions tr-TR en-US

# Belirli topic'leri çevir
npm run translate:questions tr-TR en-US "Disabled passengers"
npm run translate:questions tr-TR en-US "Infants and children"
npm run translate:questions tr-TR en-US "Students"
```

Script otomatik olarak:
- ✅ Zaten çevrilmiş soruları atlar
- ✅ Her çeviri arasında bekler (rate limiting)
- ✅ Başarılı/başarısız çevirileri raporlar

## 📝 Örnek Senaryolar

### Senaryo 1: Tek Bir Soruyu Çevir

```bash
# 1. Strapi çalışıyor mu kontrol et
curl http://localhost:1337/api/v1/cms/faq-questions?language=tr&country=tr

# 2. ID=1 olan soruyu çevir
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-question \
  -H "Content-Type: application/json" \
  -d '{"questionId": 1, "sourceLocale": "tr-TR", "targetLocale": "en-US"}'
```

### Senaryo 2: Topic'e Ait Tüm Soruları Çevir

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/faq-questions-by-topic \
  -H "Content-Type: application/json" \
  -d '{
    "topicName": "Disabled passengers",
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

### Senaryo 3: Sadece Metin Çevirisi (Test)

```bash
curl -X POST http://localhost:1337/api/v1/cms/translation/text \
  -H "Content-Type: application/json" \
  -d '{
    "text": "Engelli yolcular için özel hizmetlerimiz var mı?",
    "sourceLocale": "tr-TR",
    "targetLocale": "en-US"
  }'
```

## ⚠️ Önemli Notlar

1. **Publish:** Çeviriler otomatik publish edilmez! Admin panelden manuel publish etmeniz gerekir.
2. **Maliyet:** Her çeviri için OpenAI API ücreti alınır. `gpt-4o-mini` ekonomiktir.
3. **Rate Limiting:** Çok sayıda çeviri yaparken script otomatik bekler.
4. **Hata:** Eğer hata alırsanız, `.env` dosyanızda `OPENAI_API_KEY` olduğundan emin olun ve Strapi'yi yeniden başlatın.

## 🆘 Sorun Giderme

**"OPENAI_API_KEY environment variable is not set"**
- `.env` dosyanızın proje root dizininde olduğundan emin olun
- Strapi'yi yeniden başlatın: `Ctrl+C` sonra `npm run develop`

**Çeviri başarısız oluyor**
- API key'inizin geçerli olduğunu kontrol edin
- OpenAI hesabınızda kredi olduğunu kontrol edin

**Çeviri yapıldı ama görünmüyor**
- Admin panelden locale'i değiştirin (en-US)
- Çeviriyi publish edin

## 📚 Daha Fazla Bilgi

- Detaylı dokümantasyon: `AI_TRANSLATION.md`
- Kullanım örnekleri: `USAGE_EXAMPLES.md`

