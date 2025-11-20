# FAQ Topics Architecture

Bu dokümantasyon, FAQ Topics yapısının Strapi'ye nasıl taşındığını açıklar.

## Mimari Yapı

### 1. Content Types

#### FaqSection

- **Amaç**: FAQ bölümlerini/kategorilerini temsil eder (örn: "YOLCU TİPLERİ", "BAGAJ")
- **Alanlar**:
  - `sectionName`: Bölüm adı (İngilizce)
  - `sectionTranslation`: Bölüm çevirisi (Türkçe)
  - `order`: Sıralama
  - `topics`: İlişkili topic'ler (one-to-many)

#### FaqTopic

- **Amaç**: FAQ topic'lerini/sorularını temsil eder
- **Alanlar**:
  - `topicName`: Topic adı (İngilizce)
  - `topicTranslation`: Topic çevirisi (Türkçe)
  - `section`: İlişkili section (many-to-one)
  - `tcmID`: TCM ID (eski sistemden)
  - `linkUri`: Link URI
  - `uniqueId`: Benzersiz ID
  - `seoUrl`: SEO URL
  - `metadata`: SEO metadata (component)
  - `order`: Sıralama

### 2. Components

#### FaqMetadata

- **Amaç**: SEO metadata bilgilerini saklar
- **Alanlar**:
  - `title`: Sayfa başlığı
  - `keywords`: Anahtar kelimeler (JSON array)
  - `robots`: Robots meta (JSON array)
  - `description`: Meta açıklama
  - `parameters`: Ek parametreler (JSON array)
  - `pubId`: Publication ID

### 3. API Endpoints

#### GET `/api/faq-topics`

- **Açıklama**: Eski API formatına uygun response döndürür
- **Query Parameters**:
  - `language`: Dil kodu (varsayılan: 'tr')
  - `country`: Ülke kodu (varsayılan: 'tr')
- **Response Format**:

```json
{
  "SECTION_TRANSLATION": [
    {
      "topicName": "string",
      "topicTranslation": "string",
      "sectionName": "string",
      "sectionTranslation": "string",
      "tcmID": "string",
      "linkUri": "string",
      "uniqueId": "string",
      "seoUrl": "string",
      "metadata": {
        "title": "string",
        "keywords": [],
        "robots": [],
        "description": "string",
        "parameters": [],
        "pubId": "string"
      }
    }
  ]
}
```

#### GET `/api/faq-sections`

- **Açıklama**: FAQ section'larını listeler

## Veri Yapısı

### İlişkiler

- **FaqSection** (1) ↔ (N) **FaqTopic**: Bir section'ın birden fazla topic'i olabilir
- **FaqTopic** (1) ↔ (1) **FaqMetadata**: Her topic'in bir metadata'sı olabilir

### Sıralama

- Section'lar ve topic'ler `order` alanına göre sıralanır
- API response'unda önce section'lar, sonra topic'ler sıralı şekilde döner

## Kullanım

1. **Section Oluşturma**:

   - Strapi admin panelinden "FAQ Section" oluşturun
   - `sectionName` ve `sectionTranslation` alanlarını doldurun
   - `order` değerini ayarlayın

2. **Topic Oluşturma**:

   - Strapi admin panelinden "FAQ Topic" oluşturun
   - İlgili section'ı seçin
   - Tüm gerekli alanları doldurun
   - Metadata bilgilerini ekleyin

3. **API Kullanımı**:
   ```bash
   GET /api/faq-topics?language=tr&country=tr
   ```

## Notlar

- Tüm content type'lar `draftAndPublish` özelliği ile yayınlanmış içerikleri filtreler
- API endpoint'i public olarak ayarlanmıştır (auth: false)
- Response formatı eski CMS sistemiyle uyumludur
