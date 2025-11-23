# Ücretsiz Çeviri Kurulumu

## Hızlı Başlangıç

### 1. .env Dosyasını Kontrol Edin

`.env` dosyanızda şu satırların olduğundan emin olun:

```env
# Translation Provider: 'openai', 'libretranslate', 'mymemory'
TRANSLATION_PROVIDER=libretranslate
```

Eğer yoksa, `.env` dosyanıza ekleyin.

### 2. Strapi'yi Yeniden Başlatın

```bash
# Eğer Strapi çalışıyorsa, durdurun (Ctrl+C)
# Sonra tekrar başlatın:
npm run develop
```

### 3. Admin Panelde Test Edin

1. Admin panelde bir FAQ Questions, Topics veya Sections içeriği açın
2. Sağ üstte "🌐 Translate" butonunu göreceksiniz
3. Butona tıklayın
4. Hedef dili seçin (örn: English)
5. "Translate" butonuna tıklayın

## Çeviri Sağlayıcıları

### LibreTranslate (Varsayılan - Ücretsiz) ✅

**Avantajlar:**
- Tamamen ücretsiz
- Açık kaynak
- Sınırsız kullanım (public API)
- API key gerektirmez

**Kullanım:**
```env
TRANSLATION_PROVIDER=libretranslate
```

**Kendi Server'ınızı Kullanmak İsterseniz:**
```env
TRANSLATION_PROVIDER=libretranslate
LIBRETRANSLATE_API_URL=https://your-server.com/translate
```

### MyMemory Translation API (Ücretsiz Tier)

**Avantajlar:**
- Ücretsiz tier: Günde 10,000 karakter
- API key opsiyonel
- Kolay entegrasyon

**Kullanım:**
```env
TRANSLATION_PROVIDER=mymemory
```

**Daha Yüksek Limit İçin (Opsiyonel):**
```env
TRANSLATION_PROVIDER=mymemory
MYMEMORY_API_KEY=your_api_key_here
```

### OpenAI (Ücretli)

**Kullanım:**
```env
TRANSLATION_PROVIDER=openai
OPENAI_API_KEY=your_api_key_here
OPENAI_MODEL=gpt-4o-mini
```

## Sorun Giderme

### Çeviri Çalışmıyor

1. **Strapi server loglarını kontrol edin:**
   - Terminal'de şu mesajları görmelisiniz:
     - `Translating text from tr-TR to en-US using libretranslate`
     - `Translation successful`

2. **Provider'ı değiştirmeyi deneyin:**
   - LibreTranslate çalışmıyorsa MyMemory deneyin:
     ```env
     TRANSLATION_PROVIDER=mymemory
     ```

3. **Network bağlantısını kontrol edin:**
   - LibreTranslate public API'sine erişim gerekiyor
   - Firewall veya proxy ayarlarını kontrol edin

### "Entry not found" Hatası

- Bu hata genellikle document ID formatından kaynaklanır
- Server loglarında "Looking for entry" mesajlarını kontrol edin
- URL'den ID alınıyor mu kontrol edin

## Örnek Kullanım

### Admin Panelden:
1. FAQ Questions → Bir soru açın
2. Sağ üstte "🌐 Translate" butonunu görün
3. Butona tıklayın
4. Hedef dili seçin (örn: English)
5. "Translate" butonuna tıklayın
6. Çeviri tamamlandıktan sonra içeriği publish edin

### API'den:
```bash
POST /api/v1/cms/translation/faq-question
{
  "questionId": "a1uwxciynapbghcujqsnn5yt",
  "sourceLocale": "tr-TR",
  "targetLocale": "en-US"
}
```

## Notlar

- LibreTranslate public API'si bazen yavaş olabilir (ücretsiz olduğu için)
- MyMemory ücretsiz tier'ı günde 10,000 karakter limiti var
- Çeviriler otomatik olarak publish edilmez, manuel olarak publish etmeniz gerekir
- HTML/rich text içerikler korunur ve çevrilir

