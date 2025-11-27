# 🎯 İçerik Onay Sistemi İyileştirmeleri

Bu dokümantasyon, yapılan iyileştirmeleri açıklar.

## ✅ Tamamlanan İyileştirmeler

### 1. 📧 Email Bildirimleri

**Özellik:**
- İçerik onaya gönderildiğinde Super Admin kullanıcılarına otomatik email gönderilir
- Email'de içerik bilgileri, gönderen bilgisi ve onay linkleri bulunur

**Kurulum:**
1. Email provider kurun (SMTP, SendGrid, Mailgun, vb.)
2. `config/plugins.ts` dosyasına email yapılandırmasını ekleyin
3. Environment variables'ları ayarlayın

**Detaylar:** `EMAIL_NOTIFICATIONS_SETUP.md` dosyasına bakın.

### 2. 🔔 Bildirim Badge'i

**Özellik:**
- Admin panelinde onay bekleyen içerik sayısını gösteren badge
- Badge'e tıklayınca onay bekleyen içerikler listelenir
- Sadece publish yetkisi olan kullanıcılar badge'i görür

**Konum:**
- Content Manager edit view'da sağ üst köşede
- Her 30 saniyede bir otomatik güncellenir

### 3. 🚫 Publish Butonunu Gizleme

**Özellik:**
- Publish yetkisi olmayan kullanıcılar için publish butonu gizlenir
- DOM'u izleyerek dinamik olarak butonları bulur ve gizler
- "Onaya Gönder" butonu gösterilir

**Çalışma Şekli:**
- `HidePublishButton` component'i publish butonlarını bulur ve gizler
- "Publish", "Yayınla" gibi metinleri içeren butonlar gizlenir

### 4. 📤 Onaya Gönder Butonu

**Özellik:**
- Publish yetkisi olmayan kullanıcılar için "Onaya Gönder" butonu
- Content Manager context'inden içerik bilgilerini alır
- Tek tıkla içeriği onaya gönderir

**Konum:**
- Content Manager edit view'da publish butonunun yerinde

## 📋 Kullanım Senaryoları

### Senaryo 1: Author İçerik Oluşturur

1. Author kullanıcısı giriş yapar
2. Yeni içerik oluşturur
3. **Publish butonu görünmez** (gizlenir)
4. **"Onaya Gönder" butonu görünür**
5. "Onaya Gönder" butonuna tıklar
6. İçerik onaya gönderilir
7. Super Admin'lere email gönderilir

### Senaryo 2: Super Admin Onay Bekleyen İçerikleri Görür

1. Super Admin giriş yapar
2. Admin panelinde **badge görünür** (onay bekleyen sayısı)
3. Badge'e tıklar veya API endpoint'ini kullanır:
   ```
   GET /api/approval/pending
   ```
4. Onay bekleyen içerikler listelenir
5. İçeriği onaylar veya reddeder

### Senaryo 3: Email Bildirimi

1. Author içeriği onaya gönderir
2. Sistem Super Admin'leri bulur
3. Her Super Admin'e email gönderilir
4. Email'de:
   - İçerik bilgileri
   - Gönderen bilgisi
   - Onay linkleri
   - İçeriği düzenleme linki

## 🔧 Yapılandırma

### Email Ayarları

`.env` dosyasına ekleyin:

```env
# SMTP Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@example.com
SMTP_REPLY_TO=noreply@example.com

# Admin Panel URL
ADMIN_URL=http://localhost:1337/admin
```

### Email Provider Kurulumu

```bash
# SMTP için
npm install @strapi/provider-email-nodemailer

# SendGrid için
npm install @strapi/provider-email-sendgrid

# Mailgun için
npm install @strapi/provider-email-mailgun
```

## 📱 Admin Panel Özellikleri

### Badge Component

- **Konum**: Content Manager edit view'da
- **Güncelleme**: Her 30 saniyede bir
- **Görünürlük**: Sadece publish yetkisi olan kullanıcılar için

### Onaya Gönder Butonu

- **Konum**: Publish butonunun yerinde
- **Görünürlük**: Publish yetkisi olmayan kullanıcılar için
- **Fonksiyon**: İçeriği tek tıkla onaya gönderir

## 🎨 UI/UX İyileştirmeleri

1. **Publish Butonu Gizleme**: Kullanıcılar publish butonunu görmez, karışıklık olmaz
2. **Onaya Gönder Butonu**: Açık ve net bir buton
3. **Badge**: Görsel olarak dikkat çekici, sayıyı gösterir
4. **Email Bildirimleri**: Admin'ler anında haberdar olur

## 🔍 Test Etmek İçin

1. **Email Testi:**
   ```bash
   npm run console
   # Console'da
   const email = strapi.plugins.email.services.email;
   await email.send({
     to: 'test@example.com',
     subject: 'Test',
     html: '<h1>Test</h1>',
   });
   ```

2. **Badge Testi:**
   - Super Admin ile giriş yapın
   - Bir içerik onaya gönderin
   - Badge'in göründüğünü kontrol edin

3. **Publish Butonu Testi:**
   - Author ile giriş yapın
   - Publish butonunun gizlendiğini kontrol edin
   - "Onaya Gönder" butonunun göründüğünü kontrol edin

## 📚 İlgili Dosyalar

- `src/admin/components/PendingApprovalsBadge/index.tsx` - Badge component
- `src/admin/components/HidePublishButton/index.tsx` - Publish butonunu gizleme
- `src/admin/components/SubmitForApprovalButton/index.tsx` - Onaya gönder butonu
- `src/api/approval/services/approval.ts` - Email bildirim servisi
- `EMAIL_NOTIFICATIONS_SETUP.md` - Email kurulum rehberi

