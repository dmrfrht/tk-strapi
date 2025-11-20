# Lokalizasyon (i18n) Kurulumu

Bu dokümantasyon, FAQ Topics içeriklerinde çoklu dil desteğinin nasıl yapılandırıldığını açıklar.

## Yapılandırma

### 1. Plugin Yapılandırması

`config/plugins.ts` dosyasında i18n plugin'i etkinleştirilmiştir:

```typescript
export default () => ({
  i18n: {
    enabled: true,
  },
});
```

### 2. Content Type Yapılandırması

Aşağıdaki content type'lar lokalizasyon için yapılandırılmıştır:

- **FaqSection**: `pluginOptions.i18n.localized: true`
- **FaqTopic**: `pluginOptions.i18n.localized: true`
- **FaqMetadata Component**: `pluginOptions.i18n.localized: true`

### 3. API Kullanımı

#### Language ve Country Kombinasyonu ile İstek

API, `language` ve `country` parametrelerini alıp bunları locale formatına çevirir:

```bash
# Türkçe (Türkiye)
GET /api/faq-topics?language=tr&country=tr
# -> Locale: tr-TR

# İngilizce (ABD)
GET /api/faq-topics?language=en&country=us
# -> Locale: en-US

# Almanca (Almanya)
GET /api/faq-topics?language=de&country=de
# -> Locale: de-DE
```

#### Locale Parametresi ile İstek (Alternatif)

Locale'i doğrudan da belirtebilirsiniz:

```bash
GET /api/faq-topics?locale=tr-TR
GET /api/faq-topics?locale=en-US
GET /api/faq-topics?locale=de-DE
```

**Query Parametreleri:**
- `language`: Dil kodu (örn: 'tr', 'en', 'de') - varsayılan: 'tr'
- `country`: Ülke kodu (örn: 'tr', 'us', 'de') - varsayılan: 'tr'
- `locale`: Doğrudan locale kodu (örn: 'tr-TR', 'en-US', 'de-DE')

**Locale Oluşturma Mantığı:**
- `language` ve `country` parametreleri birleştirilerek locale oluşturulur
- Format: `{language}-{COUNTRY}` (language küçük, country büyük harf)
- Örnek: `language=tr&country=tr` → `tr-TR`

**Fallback Mekanizması:**
1. Önce tam locale ile içerik aranır (örn: `tr-TR`)
2. Bulunamazsa sadece language kodu ile denenir (örn: `tr`)
3. Hala bulunamazsa varsayılan olarak `tr-TR` kullanılır

### 4. Admin Panelinde Lokalizasyon

1. **Locale Oluşturma:**
   - Strapi admin panelinde Settings > Internationalization bölümünden yeni locale'ler ekleyebilirsiniz
   - Varsayılan locale genellikle 'en' veya 'tr' olarak ayarlanır

2. **İçerik Oluşturma:**
   - FAQ Section veya FAQ Topic oluştururken, sağ üst köşede dil seçici görünür
   - Her dil için ayrı içerik oluşturabilirsiniz
   - İçerikleri farklı dillere çevirebilirsiniz

3. **İlişkili İçerikler:**
   - Section ve Topic'ler arasındaki ilişkiler locale'e göre filtrelenir
   - Her dil için ayrı section ve topic'ler oluşturulabilir

### 5. Response Formatı

API response'u locale'e göre filtrelenmiş içerikleri döndürür:

```json
{
  "YOLCU TİPLERİ": [
    {
      "topicName": "Disabled passengers",
      "topicTranslation": "Engelli yolcu",
      ...
    }
  ]
}
```

### 6. Desteklenen Locale'ler

Strapi admin panelinden eklenen tüm locale'ler desteklenir. Önerilen locale formatı: `language-COUNTRY`

**Yaygın Locale Kombinasyonları:**
- `tr-TR`: Türkçe (Türkiye)
- `en-US`: İngilizce (ABD)
- `de-DE`: Almanca (Almanya)
- `fr-FR`: Fransızca (Fransa)
- `es-ES`: İspanyolca (İspanya)
- vb.

**Önemli:** Strapi admin panelinde locale'leri oluştururken formatı `tr-TR`, `en-US`, `de-DE` şeklinde kullanın.

### 7. Varsayılan Davranış

- Locale parametresi belirtilmezse, varsayılan olarak `tr` kullanılır
- Eğer belirtilen locale'de içerik yoksa, varsayılan locale'deki içerik döndürülür (Strapi'nin varsayılan davranışı)

## Örnek Kullanım

```bash
# Türkçe içerik (Türkiye) - Language + Country kombinasyonu
curl "http://localhost:1337/api/faq-topics?language=tr&country=tr"

# İngilizce içerik (ABD) - Language + Country kombinasyonu
curl "http://localhost:1337/api/faq-topics?language=en&country=us"

# Almanca içerik (Almanya) - Language + Country kombinasyonu
curl "http://localhost:1337/api/faq-topics?language=de&country=de"

# Locale ile doğrudan erişim
curl "http://localhost:1337/api/faq-topics?locale=tr-TR"
curl "http://localhost:1337/api/faq-topics?locale=en-US"
curl "http://localhost:1337/api/faq-topics?locale=de-DE"
```

## Notlar

- Tüm lokalize edilmiş içerikler ayrı ayrı yayınlanmalıdır (draftAndPublish)
- Metadata component'i de lokalize edilmiştir, her dil için ayrı SEO bilgileri eklenebilir
- Section ve Topic'ler arasındaki ilişkiler locale'e göre otomatik olarak filtrelenir

