# 🔒 Parent Seçimi Validasyonu

Bu dokümantasyon, sayfa parent seçiminde circular reference'ı önlemek için eklenen validasyon sistemini açıklar.

## 🎯 Problem

Bir sayfa, kendi child'ını veya kendisini parent olarak seçmemeli. Bu durum circular reference (döngüsel referans) oluşturur ve hiyerarşik yapıyı bozar.

**Örnek Senaryo:**
```
❌ YANLIŞ:
Sayfa A
  └── Sayfa B (parent: A)
      └── Sayfa A (parent: B) ← Circular reference!
```

## ✅ Çözüm

### 1. Backend Validasyonu

#### Lifecycle Hooks
`src/api/page/content-types/page/lifecycles.ts` dosyasında:

- **beforeCreate**: Yeni sayfa oluşturulurken parent seçimini kontrol eder
- **beforeUpdate**: Mevcut sayfa güncellenirken parent seçimini kontrol eder

#### Validasyon Kuralları

1. **Kendisini Parent Olarak Seçemez**
   - Bir sayfa kendi parent'ı olamaz
   - Hata: `Cannot select the same page as its own parent.`

2. **Child'ını Parent Olarak Seçemez**
   - Bir sayfa, kendi child'ını (veya child'ının child'ını) parent olarak seçemez
   - Hata: `Cannot select a child page as parent. This would create a circular reference.`

3. **Recursive Kontrol**
   - Tüm alt seviyelerdeki child'lar kontrol edilir
   - Sınırsız derinlikte recursive kontrol yapılır

### 2. API Endpoint'leri

#### Available Parents Endpoint

Parent seçimi için uygun sayfaları getiren endpoint:

```bash
# Yeni sayfa için (tüm sayfalar)
GET /api/pages/available-parents?locale=tr-TR

# Mevcut sayfa için (kendisi ve child'ları hariç)
GET /api/pages/:id/available-parents?locale=tr-TR
```

**Response:**
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
      "id": 2,
      "title": "Hizmetler",
      "slug": "hizmetler",
      "fullPath": "/hizmetler"
    }
  ]
}
```

### 3. Service Metodları

#### `getAllChildrenIds(pageId, locale)`
Belirli bir sayfanın tüm child ID'lerini recursive olarak döndürür.

#### `getAvailableParents(pageId, locale)`
Belirli bir sayfa için uygun parent'ları döndürür (kendisi ve tüm child'ları hariç).

## 🚀 Kullanım

### Admin Panel'de

1. **Yeni Sayfa Oluştururken:**
   - Parent dropdown'ında tüm sayfalar görünür
   - Herhangi bir sayfa seçilebilir

2. **Mevcut Sayfa Düzenlerken:**
   - Parent dropdown'ında:
     - ❌ Mevcut sayfa görünmez
     - ❌ Mevcut sayfanın tüm child'ları görünmez
     - ✅ Diğer tüm sayfalar görünür

### API ile Kullanım

#### Yeni Sayfa Oluşturma

```bash
POST /api/pages
Content-Type: application/json

{
  "data": {
    "title": "Yeni Sayfa",
    "slug": "yeni-sayfa",
    "parent": 1  # Geçerli bir parent ID
  }
}
```

**Eğer circular reference varsa:**
```json
{
  "error": {
    "message": "Cannot select a child page as parent. This would create a circular reference."
  }
}
```

#### Mevcut Sayfa Güncelleme

```bash
PUT /api/pages/5
Content-Type: application/json

{
  "data": {
    "parent": 3  # Geçerli bir parent ID
  }
}
```

**Eğer sayfa 3, sayfa 5'in child'ı ise:**
```json
{
  "error": {
    "message": "Cannot select a child page as parent. This would create a circular reference."
  }
}
```

## 📋 Örnek Senaryolar

### Senaryo 1: Geçerli Parent Seçimi

```
Sayfa A (parent: null)
Sayfa B (parent: null)
Sayfa C (parent: A) ✅ Geçerli
```

### Senaryo 2: Circular Reference Önleme

```
Sayfa A (parent: null)
  └── Sayfa B (parent: A)
      └── Sayfa C (parent: B)

# Sayfa B'yi düzenlerken:
❌ Sayfa C parent olarak seçilemez (child)
❌ Sayfa B parent olarak seçilemez (kendisi)
✅ Sayfa A parent olarak seçilebilir
```

### Senaryo 3: Deep Hierarchy

```
Sayfa A
  └── Sayfa B
      └── Sayfa C
          └── Sayfa D

# Sayfa A'yı düzenlerken:
❌ Sayfa B, C, D parent olarak seçilemez (tümü child)
✅ Diğer root sayfalar seçilebilir
```

## 🔍 Test Senaryoları

### Test 1: Kendisini Parent Olarak Seçme

```javascript
// Bu işlem hata vermeli
PUT /api/pages/1
{
  "data": { "parent": 1 }
}

// Beklenen: Error - "Cannot select the same page as its own parent."
```

### Test 2: Child'ını Parent Olarak Seçme

```javascript
// Sayfa 1'in child'ı sayfa 2 ise
PUT /api/pages/2
{
  "data": { "parent": 1 }  // ✅ Geçerli
}

PUT /api/pages/1
{
  "data": { "parent": 2 }  // ❌ Hata - sayfa 2, sayfa 1'in child'ı
}

// Beklenen: Error - "Cannot select a child page as parent..."
```

### Test 3: Deep Child Kontrolü

```javascript
// Hiyerarşi: A -> B -> C -> D
// Sayfa A'yı düzenlerken:
GET /api/pages/1/available-parents

// Response'da B, C, D görünmemeli
// Sadece diğer root sayfalar görünmeli
```

## ⚠️ Önemli Notlar

1. **Backend Validasyonu Zorunlu**: Frontend validasyonu kullanıcı deneyimi için iyidir, ancak backend validasyonu mutlaka olmalıdır.

2. **Performance**: Deep hierarchy'lerde recursive kontrol biraz zaman alabilir. Ancak normal kullanımda sorun olmaz.

3. **Locale Desteği**: Validasyon her dil için ayrı çalışır. Her dil için ayrı hiyerarşi vardır.

4. **API Endpoint**: `available-parents` endpoint'i admin panel'de kullanılmak üzere tasarlanmıştır, ancak frontend'de de kullanılabilir.

## 🛠️ Geliştirme Notları

### Yeni Validasyon Ekleme

Eğer yeni bir validasyon kuralı eklemek isterseniz:

1. `lifecycles.ts` dosyasındaki `validateParentSelection` fonksiyonunu güncelleyin
2. Yeni kuralı ekleyin
3. Uygun hata mesajı döndürün

### Admin Panel Entegrasyonu

Admin panel'de parent dropdown'ını filtrelemek için:

1. `available-parents` endpoint'ini kullanın
2. Response'daki sayfaları dropdown'da gösterin
3. Mevcut sayfa ve child'ları otomatik olarak filtrelenmiş olacak

## 📚 İlgili Dosyalar

- `src/api/page/content-types/page/lifecycles.ts` - Validasyon logic'i
- `src/api/page/services/page.ts` - `getAllChildrenIds` ve `getAvailableParents` metodları
- `src/api/page/controllers/page.ts` - `availableParents` endpoint'i
- `src/api/page/routes/page.ts` - Route tanımları

