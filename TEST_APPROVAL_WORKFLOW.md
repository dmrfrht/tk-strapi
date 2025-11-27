# 🧪 İçerik Onay Workflow Test Rehberi

Bu dokümantasyon, içerik onay mekanizmasının nasıl test edileceğini açıklar.

## 📋 Ön Hazırlık

### 1. Strapi'yi Başlatın

```bash
npm run develop
```

Strapi'nin `http://localhost:1337` adresinde çalıştığından emin olun.

### 2. Rolleri ve Kullanıcıları Oluşturun

```bash
# Rolleri oluştur
npm run setup:admin-roles

# Test kullanıcılarını oluştur
npm run setup:user-groups
```

Bu script'ler şu kullanıcıları oluşturur:
- **Author**: `author@tk-strapi.com` / `Password123!` (publish yetkisi YOK)
- **Editor**: `editor@tk-strapi.com` / `Password123!` (publish yetkisi VAR)

## 🧪 Test Senaryoları

### Senaryo 1: Otomatik Test Script'i

En kolay yol, hazır test script'ini çalıştırmak:

```bash
node scripts/test-approval-workflow.js
```

Bu script şunları yapar:
1. ✅ Test kullanıcılarını kontrol eder
2. ✅ Test içeriği oluşturur
3. ✅ Author'ın publish yetkisi olmadığını doğrular
4. ✅ İçeriği onaya gönderir
5. ✅ Onay bekleyen içerikleri listeler
6. ✅ İçeriği onaylar ve yayınlar
7. ✅ Sonuçları gösterir
8. ✅ Test içeriğini temizler

### Senaryo 2: Manuel Test (Admin Panel)

#### Adım 1: Author Olarak Giriş Yapın

1. `http://localhost:1337/admin` adresine gidin
2. `author@tk-strapi.com` / `Password123!` ile giriş yapın

#### Adım 2: Yeni İçerik Oluşturun

1. Content Manager → Articles → Create new entry
2. Bir makale oluşturun:
   - Title: "Test Makale"
   - Description: "Bu bir test makalesidir"
   - Slug: otomatik oluşturulacak
3. **Save** butonuna tıklayın (henüz publish etmeyin)

#### Adım 3: Publish Butonunu Test Edin

1. **Publish** butonuna tıklamayı deneyin
2. Şu hatayı görmelisiniz:
   ```
   You do not have permission to publish content directly. 
   Please submit your content for approval. An admin will review and publish it.
   ```

#### Adım 4: İçeriği Onaya Gönderin (API ile)

Author kullanıcısı olarak API'yi kullanarak içeriği onaya gönderebilirsiniz:

**cURL ile:**
```bash
# Önce admin token alın (browser console'dan veya Postman ile)
# Admin panelinde F12 → Console → şunu çalıştırın:
# localStorage.getItem('strapi-token')

# Sonra onaya gönderin
curl -X POST http://localhost:1337/api/approval/submit/article/1 \
  -H "Authorization: Bearer YOUR_AUTHOR_TOKEN" \
  -H "Content-Type: application/json"
```

**Postman ile:**
1. Yeni bir request oluşturun
2. Method: `POST`
3. URL: `http://localhost:1337/api/approval/submit/article/{id}`
4. Headers:
   - `Authorization: Bearer YOUR_AUTHOR_TOKEN`
5. Send

#### Adım 5: Editor Olarak Giriş Yapın

1. Çıkış yapın
2. `editor@tk-strapi.com` / `Password123!` ile giriş yapın

#### Adım 6: Onay Bekleyen İçerikleri Görüntüleyin

**API ile:**
```bash
curl -X GET http://localhost:1337/api/approval/pending \
  -H "Authorization: Bearer YOUR_EDITOR_TOKEN"
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "contentType": "api::article.article",
      "id": 1,
      "title": "Test Makale",
      "submittedAt": "2024-01-01T12:00:00.000Z",
      "submittedBy": {
        "id": 2,
        "email": "author@tk-strapi.com"
      },
      "locale": null
    }
  ],
  "count": 1
}
```

#### Adım 7: İçeriği Onaylayın

**API ile:**
```bash
curl -X POST http://localhost:1337/api/approval/approve/article/1 \
  -H "Authorization: Bearer YOUR_EDITOR_TOKEN" \
  -H "Content-Type: application/json"
```

**Response:**
```json
{
  "success": true,
  "message": "Content approved and published successfully"
}
```

#### Adım 8: İçeriği Reddetme (Alternatif)

Eğer içeriği reddetmek isterseniz:

```bash
curl -X POST http://localhost:1337/api/approval/reject/article/1 \
  -H "Authorization: Bearer YOUR_EDITOR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "İçerik yeterince detaylı değil"
  }'
```

### Senaryo 3: Postman Collection ile Test

Postman collection dosyası oluşturabiliriz. Şimdilik manuel olarak şu endpoint'leri test edebilirsiniz:

#### Endpoint'ler

1. **Onaya Gönder**
   - `POST /api/approval/submit/:contentType/:id`
   - Headers: `Authorization: Bearer {token}`
   - Query: `?locale=tr-TR` (opsiyonel)

2. **Onay Bekleyenleri Listele**
   - `GET /api/approval/pending`
   - Headers: `Authorization: Bearer {token}`
   - Query: `?contentType=article` (opsiyonel)

3. **Onayla ve Yayınla**
   - `POST /api/approval/approve/:contentType/:id`
   - Headers: `Authorization: Bearer {token}`
   - Query: `?locale=tr-TR` (opsiyonel)

4. **Reddet**
   - `POST /api/approval/reject/:contentType/:id`
   - Headers: `Authorization: Bearer {token}`
   - Body: `{ "reason": "Red nedeni" }`
   - Query: `?locale=tr-TR` (opsiyonel)

## 🔑 Token Alma

### Admin Panel Token (Browser Console)

1. Admin panelinde giriş yapın
2. F12 → Console
3. Şunu çalıştırın:
   ```javascript
   localStorage.getItem('strapi-token')
   ```
4. Çıkan token'ı kopyalayın

### API Token (Programatik)

```bash
curl -X POST http://localhost:1337/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "author@tk-strapi.com",
    "password": "Password123!"
  }'
```

Response'dan `data.token` değerini alın.

## ✅ Beklenen Sonuçlar

### Author Kullanıcısı İçin:
- ✅ İçerik oluşturabilir
- ✅ İçerik düzenleyebilir
- ❌ İçerik yayınlayamaz (hata alır)
- ✅ İçeriği onaya gönderebilir

### Editor Kullanıcısı İçin:
- ✅ İçerik oluşturabilir
- ✅ İçerik düzenleyebilir
- ✅ İçerik yayınlayabilir
- ✅ Onay bekleyen içerikleri görebilir
- ✅ İçerikleri onaylayabilir
- ✅ İçerikleri reddedebilir

## 🐛 Sorun Giderme

### "You do not have permission" Hatası

- Kullanıcının rolünü kontrol edin
- `npm run setup:admin-roles` çalıştırın
- Kullanıcıya doğru rolü atadığınızdan emin olun

### "Entity not found" Hatası

- İçerik ID'sinin doğru olduğundan emin olun
- İçeriğin gerçekten var olduğunu kontrol edin

### "Failed to submit content for approval" Hatası

- Token'ın geçerli olduğundan emin olun
- Kullanıcının giriş yaptığından emin olun
- Approval service'in çalıştığından emin olun

## 📝 Test Checklist

- [ ] Author kullanıcısı oluşturuldu
- [ ] Editor kullanıcısı oluşturuldu
- [ ] Author publish yapamıyor (hata alıyor)
- [ ] İçerik onaya gönderilebiliyor
- [ ] Onay bekleyen içerikler listelenebiliyor
- [ ] Editor içeriği onaylayabiliyor
- [ ] Editor içeriği reddedebiliyor
- [ ] Onaylanan içerik yayınlanıyor
- [ ] Approval status doğru güncelleniyor

## 🎯 Hızlı Test

En hızlı test için:

```bash
# 1. Rolleri ve kullanıcıları oluştur
npm run setup:admin-roles
npm run setup:user-groups

# 2. Test script'ini çalıştır
node scripts/test-approval-workflow.js
```

Bu, tüm workflow'u otomatik olarak test eder!

