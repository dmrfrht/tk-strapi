# 📧 Email Bildirimleri Kurulumu

Bu dokümantasyon, içerik onay sistemi için email bildirimlerinin nasıl kurulacağını açıklar.

## 📋 Genel Bakış

Sistem, içerik onaya gönderildiğinde Super Admin kullanıcılarına otomatik email bildirimi gönderir.

## 🔧 Kurulum

### 1. Email Plugin Kurulumu

Strapi'de email göndermek için `@strapi/provider-email-*` paketlerinden birini kurmanız gerekir:

#### SMTP ile Email Gönderme (Önerilen)

```bash
npm install @strapi/provider-email-nodemailer
```

#### SendGrid ile Email Gönderme

```bash
npm install @strapi/provider-email-sendgrid
```

#### Mailgun ile Email Gönderme

```bash
npm install @strapi/provider-email-mailgun
```

### 2. Email Provider Yapılandırması

`config/plugins.ts` dosyasına email provider yapılandırmasını ekleyin:

#### SMTP Örneği:

```typescript
export default () => ({
  email: {
    provider: 'nodemailer',
    providerOptions: {
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    settings: {
      defaultFrom: process.env.SMTP_FROM || 'noreply@example.com',
      defaultReplyTo: process.env.SMTP_REPLY_TO || 'noreply@example.com',
    },
  },
  // ... diğer plugin'ler
});
```

#### SendGrid Örneği:

```typescript
export default () => ({
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
    settings: {
      defaultFrom: process.env.SMTP_FROM || 'noreply@example.com',
      defaultReplyTo: process.env.SMTP_REPLY_TO || 'noreply@example.com',
    },
  },
  // ... diğer plugin'ler
});
```

### 3. Environment Variables

`.env` dosyanıza email ayarlarını ekleyin:

```env
# SMTP Settings
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@example.com
SMTP_REPLY_TO=noreply@example.com

# Admin Panel URL (email'lerdeki linkler için)
ADMIN_URL=http://localhost:1337/admin
```

### 4. Gmail için App Password Oluşturma

Eğer Gmail kullanıyorsanız:

1. Google Account → Security → 2-Step Verification (etkinleştirin)
2. App Passwords → Generate
3. Oluşturulan şifreyi `SMTP_PASSWORD` olarak kullanın

## 📧 Email İçeriği

Email bildirimleri şu bilgileri içerir:

- **İçerik Tipi**: Page, Article, FAQ Question, vb.
- **Başlık**: İçeriğin başlığı
- **Gönderen**: İçeriği onaya gönderen kullanıcı
- **İçerik ID**: İçeriğin ID'si
- **Linkler**:
  - Onay Bekleyenleri Görüntüle
  - İçeriği Düzenle

## 🔔 Bildirim Senaryoları

### Senaryo 1: İçerik Onaya Gönderildiğinde

1. Author içeriği onaya gönderir
2. Sistem tüm Super Admin kullanıcılarını bulur
3. Her Super Admin'e email gönderilir
4. Email'de içerik bilgileri ve linkler bulunur

### Senaryo 2: Email Gönderilemezse

- Email gönderilemezse, sistem log'a uyarı yazar
- Approval işlemi devam eder (email hatası approval'ı engellemez)
- Log'ları kontrol ederek sorunları tespit edebilirsiniz

## 🧪 Test Etmek İçin

### 1. Email Provider'ı Test Edin

```bash
# Strapi console'da
npm run console

# Console'da
const email = strapi.plugins.email.services.email;
await email.send({
  to: 'test@example.com',
  subject: 'Test Email',
  html: '<h1>Test</h1>',
  text: 'Test',
});
```

### 2. Approval Workflow'u Test Edin

1. Author kullanıcısıyla giriş yapın
2. Bir içerik oluşturun
3. "Onaya Gönder" butonuna tıklayın
4. Super Admin email'ini kontrol edin

## ⚠️ Önemli Notlar

1. **Email Plugin Gerekli**: Email göndermek için email plugin'inin kurulu ve yapılandırılmış olması gerekir
2. **Environment Variables**: Email ayarlarını environment variables olarak saklayın
3. **Rate Limiting**: Çok fazla email gönderiyorsanız rate limiting ekleyin
4. **Error Handling**: Email gönderilemezse sistem çalışmaya devam eder

## 🔍 Sorun Giderme

### Email Gönderilmiyor

1. Email plugin'inin kurulu olduğundan emin olun
2. `config/plugins.ts` dosyasını kontrol edin
3. Environment variables'ları kontrol edin
4. Log'ları kontrol edin: `strapi.log`

### Email Spam Kutusuna Düşüyor

1. SPF, DKIM, DMARC kayıtlarını kontrol edin
2. Email içeriğini optimize edin
3. Gönderen adresini doğrulayın

## 📚 İlgili Dosyalar

- `src/api/approval/services/approval.ts` - Email gönderme servisi
- `config/plugins.ts` - Email provider yapılandırması
- `.env` - Environment variables

