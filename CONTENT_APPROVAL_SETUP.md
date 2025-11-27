# Content Approval Workflow Setup

Bu dokümantasyon, içerik onay ve yayınlama workflow'unun nasıl kurulduğunu ve kullanıldığını açıklar.

## 📋 Genel Bakış

Sistem, içeriklerin yayınlanmadan önce onay sürecinden geçmesini sağlar:
- Kullanıcılar içerik oluşturabilir ve düzenleyebilir
- Ancak yayınlama (publish) yetkisi sadece Admin/Editor rolündeki kullanıcılarda
- Author rolündeki kullanıcılar içeriklerini onaya göndermeli
- Admin/Editor rolündeki kullanıcılar onay bekleyen içerikleri gözden geçirip onaylayabilir veya reddedebilir

## 🔐 Roller ve İzinler

### Editor Rolü (strapi-editor)
- ✅ Tüm içerikleri görüntüleyebilir, düzenleyebilir ve yayınlayabilir
- ✅ Onay bekleyen içerikleri onaylayabilir veya reddedebilir
- ✅ Publish yetkisi var

### Author Rolü (strapi-author)
- ✅ İçerik oluşturabilir ve düzenleyebilir
- ❌ Yayınlayamaz (publish yetkisi yok)
- ✅ İçeriklerini onaya gönderebilir

### Viewer Rolü (strapi-viewer)
- ✅ Sadece içerikleri görüntüleyebilir
- ❌ Hiçbir yazma izni yok

## 📝 Onay Durumları

Her içerik için `approvalStatus` component'i aşağıdaki durumları içerir:

- **draft**: Taslak durumunda (varsayılan)
- **pending**: Onaya gönderilmiş, bekliyor
- **approved**: Onaylanmış ve yayınlanmış
- **rejected**: Reddedilmiş

## 🔄 Workflow

### 1. İçerik Oluşturma/Düzenleme
- Author rolündeki kullanıcı içerik oluşturur veya düzenler
- İçerik otomatik olarak `draft` durumunda

### 2. Onaya Gönderme
- Author, içeriği onaya göndermek için API endpoint'ini kullanır:
  ```
  POST /api/approval/submit/:contentType/:id
  ```
- İçerik durumu `pending` olur
- Admin/Editor kullanıcılarına bildirim gönderilir

### 3. Onay/Red İşlemi
- Admin/Editor, onay bekleyen içerikleri görüntüler:
  ```
  GET /api/approval/pending
  ```
- İçeriği onaylamak için:
  ```
  POST /api/approval/approve/:contentType/:id
  ```
- İçeriği reddetmek için:
  ```
  POST /api/approval/reject/:contentType/:id
  Body: { "reason": "Red nedeni" }
  ```

### 4. Otomatik Publish Engelleme
- `beforePublish` lifecycle hook'u, Author rolündeki kullanıcıların direkt publish yapmasını engeller
- Sadece Editor/Admin rolündeki kullanıcılar publish yapabilir

## 🛠️ Teknik Detaylar

### Approval Status Component
`src/components/shared/approval-status.json` dosyasında tanımlı:
- `status`: Enum (draft, pending, approved, rejected)
- `submittedAt`: Onaya gönderilme tarihi
- `submittedBy`: Onaya gönderen kullanıcı
- `reviewedAt`: İnceleme tarihi
- `reviewedBy`: İnceleyen kullanıcı
- `rejectionReason`: Red nedeni (opsiyonel)

### Lifecycle Hooks
Her content type için `beforePublish` hook'u eklenmiştir:
- `src/api/page/content-types/page/lifecycles.ts`
- `src/api/article/content-types/article/lifecycles.ts`
- `src/api/faq-question/content-types/faq-question/lifecycles.ts`
- `src/api/faq-topic/content-types/faq-topic/lifecycles.ts`
- `src/api/faq-section/content-types/faq-section/lifecycles.ts`

### Approval Service
`src/api/approval/services/approval.ts`:
- `hasPublishPermission()`: Kullanıcının publish yetkisi var mı kontrol eder
- `submitForApproval()`: İçeriği onaya gönderir
- `approveAndPublish()`: İçeriği onaylar ve yayınlar
- `rejectContent()`: İçeriği reddeder
- `notifyAdmins()`: Admin'lere bildirim gönderir
- `getPendingApprovals()`: Onay bekleyen içerikleri getirir

### API Endpoints
`src/api/approval/routes/approval.ts`:
- `POST /api/approval/submit/:contentType/:id` - Onaya gönder
- `POST /api/approval/approve/:contentType/:id` - Onayla ve yayınla
- `POST /api/approval/reject/:contentType/:id` - Reddet
- `GET /api/approval/pending` - Onay bekleyen içerikleri listele

## 📱 Kullanım Örnekleri

### Frontend'den Onaya Gönderme
```javascript
// İçeriği onaya gönder
const response = await fetch('/api/approval/submit/page/123', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
  },
});
```

### Admin Panelinden Onaylama
```javascript
// Onay bekleyen içerikleri listele
const pending = await fetch('/api/approval/pending', {
  headers: {
    'Authorization': `Bearer ${adminToken}`,
  },
});

// İçeriği onayla ve yayınla
await fetch('/api/approval/approve/page/123', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
  },
});
```

### Reddetme
```javascript
// İçeriği reddet
await fetch('/api/approval/reject/page/123', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${adminToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    reason: 'İçerik yeterince detaylı değil',
  }),
});
```

## 🔔 Bildirim Sistemi

Şu anda bildirimler log olarak kaydediliyor. İleride şu özellikler eklenebilir:
- Email bildirimleri
- Admin panelinde bildirim badge'i
- Webhook'lar
- Push bildirimleri

## ⚠️ Önemli Notlar

1. **Script'lerden Publish**: Script'lerden veya migration'lardan yapılan publish işlemleri otomatik olarak geçer (user context yoksa)

2. **i18n Desteği**: Tüm endpoint'ler `locale` query parametresini destekler:
   ```
   POST /api/approval/approve/page/123?locale=en-US
   ```

3. **Permission Kontrolü**: Tüm endpoint'ler authentication ve authorization kontrolü yapar

4. **Backward Compatibility**: Mevcut içerikler için `approvalStatus` field'ı otomatik olarak oluşturulur

## 🚀 Kurulum

1. Schema değişiklikleri için Strapi'yi yeniden başlatın:
   ```bash
   npm run develop
   ```

2. Rolleri güncelleyin (Author rolünden publish yetkisini kaldırmak için):
   ```bash
   npm run setup:admin-roles
   ```

3. Admin panelinde "Submit for Approval" butonu ekleyin (opsiyonel)

4. Admin panelinde "Pending Approvals" dashboard'u ekleyin (opsiyonel)

## 📚 İlgili Dosyalar

- `src/components/shared/approval-status.json` - Approval status component
- `src/api/approval/` - Approval API
- `src/api/*/content-types/*/lifecycles.ts` - Lifecycle hooks
- `scripts/setup-admin-roles.js` - Rol kurulum script'i

