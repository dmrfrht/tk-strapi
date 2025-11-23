# Roles & Permissions Yapısı

Bu dokümantasyon, Strapi uygulamasında Roles & Permissions (Roller ve İzinler) yapısının nasıl kurulduğunu ve kullanıldığını açıklar.

## 📋 İçindekiler

- [Genel Bakış](#genel-bakış)
- [Rol Tipleri](#rol-tipleri)
- [Kurulum](#kurulum)
- [Admin Rolleri](#admin-rolleri)
- [API Rolleri](#api-rolleri)
- [İzin Yönetimi](#izin-yönetimi)
- [Kullanım Örnekleri](#kullanım-örnekleri)

## 🎯 Genel Bakış

Strapi'de iki farklı seviyede rol ve izin sistemi bulunur:

1. **Admin Roles & Permissions**: Admin paneli için (admin kullanıcıları)
2. **Users Permissions Plugin**: API için (frontend uygulamaları ve kullanıcılar)

## 🔐 Rol Tipleri

### Admin Rolleri

Admin panelinde kullanılan roller:

| Rol        | Kod             | Açıklama                                                          | İzinler                               |
| ---------- | --------------- | ----------------------------------------------------------------- | ------------------------------------- |
| **Editor** | `strapi-editor` | Tüm içerikleri görüntüleyebilir, düzenleyebilir ve yayınlayabilir | create, read, update, delete, publish |
| **Author** | `strapi-author` | İçerik oluşturabilir ve düzenleyebilir, ancak yayınlayamaz        | create, read, update                  |
| **Viewer** | `strapi-viewer` | Sadece içerikleri görüntüleyebilir, düzenleyemez                  | read                                  |

### API Rolleri

API endpoint'leri için kullanılan roller:

| Rol               | Tip             | Açıklama                                     | İzinler                               |
| ----------------- | --------------- | -------------------------------------------- | ------------------------------------- |
| **Public**        | `public`        | Herkesin erişebileceği genel içerikler       | find, findOne                         |
| **Authenticated** | `authenticated` | Giriş yapmış kullanıcılar için               | find, findOne, create, update         |
| **Editor**        | `editor`        | İçerik editörleri için genişletilmiş izinler | find, findOne, create, update, delete |
| **Admin**         | `admin`         | Yöneticiler için tam erişim                  | find, findOne, create, update, delete |

## 🚀 Kurulum

### Tüm Rolleri Kurma

Tüm admin ve API rollerini tek seferde kurmak için:

```bash
npm run setup:all-roles
```

### Sadece Admin Rollerini Kurma

```bash
npm run setup:admin-roles
```

### Sadece API Rollerini Kurma

```bash
npm run setup:api-roles
```

### Kullanıcı Gruplarını Oluşturma

Roller oluşturulduktan sonra örnek kullanıcıları oluşturmak için:

```bash
# Önce bcryptjs paketini yükleyin (eğer yoksa)
npm install bcryptjs

# Sonra kullanıcı gruplarını oluşturun
npm run setup:user-groups
```

Bu script şunları oluşturur:

- **Admin Kullanıcıları**: Editor, Author, Viewer rolleri için örnek kullanıcılar
- **API Kullanıcıları**: Editor, Authenticated rolleri için örnek kullanıcılar

**NOT**:

- Varsayılan şifre `Password123!` şeklindedir. Üretim ortamında mutlaka değiştirin!
- Script önce Strapi servislerini kullanmayı dener, başarısız olursa bcryptjs ile şifre hash'ler.

### Strapi Console'dan Çalıştırma

Strapi console'u açıp script'leri çalıştırabilirsiniz:

```bash
npm run console
```

Console içinde:

```javascript
// Tüm roller
const setupAll = require("./scripts/setup-all-roles");
await setupAll();

// Sadece admin roller
const setupAdmin = require("./scripts/setup-admin-roles");
await setupAdmin();

// Sadece API roller
const setupApi = require("./scripts/setup-api-roles");
await setupApi();
```

## 👥 Admin Rolleri Detayları

### Editor Rolü

**İzinler:**

- ✅ Tüm content type'lar için: create, read, update, delete, publish
- ✅ Content Manager: read, create, update, delete, publish
- ✅ Upload: read, create, update, delete
- ✅ Users Permissions: read
- ✅ i18n: read, create, update, delete
- ✅ GraphQL: read
- ❌ Content Type Builder: erişim yok

**Kullanım Senaryosu:**

- İçerik editörleri
- Yayın yönetimi yapanlar
- İçerik moderatörleri

### Author Rolü

**İzinler:**

- ✅ Tüm content type'lar için: create, read, update
- ✅ Content Manager: read, create, update
- ✅ Upload: read, create, update
- ✅ Users Permissions: read
- ✅ i18n: read, create, update
- ✅ GraphQL: read
- ❌ Delete ve Publish izinleri yok

**Kullanım Senaryosu:**

- İçerik yazarları
- Blog yazarları
- İçerik oluşturucular

### Viewer Rolü

**İzinler:**

- ✅ Tüm content type'lar için: read
- ✅ Content Manager: read
- ✅ Upload: read
- ✅ Users Permissions: read
- ✅ i18n: read
- ✅ GraphQL: read
- ❌ Hiçbir yazma izni yok

**Kullanım Senaryosu:**

- Raporlama yapanlar
- İçerik gözlemcileri
- Analistler

## 🌐 API Rolleri Detayları

### Public Rolü

**İzinler:**

- ✅ Tüm content type'lar için: find, findOne

**Kullanım Senaryosu:**

- Genel içeriklerin görüntülenmesi
- FAQ sayfaları
- Blog yazıları
- Hakkımızda sayfası

**Örnek Kullanım:**

```javascript
// Public endpoint'ler herkese açık
GET / api / faq - questions;
GET / api / articles;
GET / api / about;
```

### Authenticated Rolü

**İzinler:**

- ✅ Tüm content type'lar için: find, findOne, create, update

**Kullanım Senaryosu:**

- Kullanıcı profilleri
- Kullanıcı yorumları
- Kullanıcı içerikleri

**Örnek Kullanım:**

```javascript
// Authenticated kullanıcılar içerik oluşturabilir
POST / api / articles;
PUT / api / articles / 1;
```

### Editor Rolü

**İzinler:**

- ✅ Tüm content type'lar için: find, findOne, create, update, delete

**Kullanım Senaryosu:**

- İçerik editörleri
- Moderatörler
- İçerik yöneticileri

### Admin Rolü

**İzinler:**

- ✅ Tüm content type'lar için: find, findOne, create, update, delete

**Kullanım Senaryosu:**

- Sistem yöneticileri
- Tam yetkili kullanıcılar

## 🔧 İzin Yönetimi

### Mevcut İzinleri Kontrol Etme

Strapi console'dan:

```javascript
// Admin rollerini listele
const adminRoles = await strapi.query("admin::role").findMany();
console.log(adminRoles);

// API rollerini listele
const apiRoles = await strapi
  .query("plugin::users-permissions.role")
  .findMany();
console.log(apiRoles);

// Belirli bir rolün izinlerini görüntüle
const editorRole = await strapi.query("admin::role").findOne({
  where: { code: "strapi-editor" },
  populate: ["permissions"],
});
console.log(editorRole.permissions);
```

### İzin Ekleme

```javascript
// Admin izni ekle
const role = await strapi.query("admin::role").findOne({
  where: { code: "strapi-editor" },
});

await strapi.query("admin::permission").create({
  data: {
    action: "article.create",
    role: role.id,
    subject: "api::article.article",
  },
});

// API izni ekle
const publicRole = await strapi
  .query("plugin::users-permissions.role")
  .findOne({
    where: { type: "public" },
  });

await strapi.query("plugin::users-permissions.permission").create({
  data: {
    action: "api::article.article.find",
    role: publicRole.id,
  },
});
```

### İzin Güncelleme

```javascript
// Mevcut izni güncelle
const permission = await strapi.query("admin::permission").findOne({
  where: {
    action: "article.create",
    role: role.id,
  },
});

await strapi.query("admin::permission").update({
  where: { id: permission.id },
  data: {
    // Güncelleme verileri
  },
});
```

### İzin Silme

```javascript
// İzni sil
await strapi.query("admin::permission").delete({
  where: {
    action: "article.create",
    role: role.id,
  },
});
```

## 👥 Kullanıcı Grupları

### Oluşturulan Kullanıcı Grupları

Script çalıştırıldığında aşağıdaki kullanıcı grupları oluşturulur:

#### Admin Kullanıcıları (Admin Paneli)

| Email                  | Rol    | Şifre          | Açıklama                               |
| ---------------------- | ------ | -------------- | -------------------------------------- |
| `editor@tk-strapi.com` | Editor | `Password123!` | Tüm içerikleri yönetebilir             |
| `author@tk-strapi.com` | Author | `Password123!` | İçerik oluşturabilir ve düzenleyebilir |
| `viewer@tk-strapi.com` | Viewer | `Password123!` | Sadece içerikleri görüntüleyebilir     |

#### API Kullanıcıları (Frontend Uygulamaları)

| Email                      | Username     | Rol           | Şifre          | Açıklama                 |
| -------------------------- | ------------ | ------------- | -------------- | ------------------------ |
| `editor.api@tk-strapi.com` | `editor_api` | Editor        | `Password123!` | İçerikleri yönetebilir   |
| `author.api@tk-strapi.com` | `author_api` | Authenticated | `Password123!` | İçerik oluşturabilir     |
| `user.api@tk-strapi.com`   | `user_api`   | Authenticated | `Password123!` | Temel işlemler yapabilir |

### Kullanıcı Gruplarını Oluşturma

```bash
# Önce roller oluşturun
npm run setup:all-roles

# Sonra kullanıcı gruplarını oluşturun
npm run setup:user-groups
```

### Kullanıcı Gruplarını Özelleştirme

`scripts/setup-user-groups.js` dosyasını düzenleyerek kullanıcı gruplarını özelleştirebilirsiniz:

```javascript
const adminUserGroups = [
  {
    email: "custom@example.com",
    firstname: "Custom",
    lastname: "User",
    password: "YourPassword123!",
    isActive: true,
    roleCode: "strapi-editor",
    description: "Özel kullanıcı",
  },
  // ... daha fazla kullanıcı
];
```

## 📝 Kullanım Örnekleri

### Kullanıcıya Rol Atama

#### Admin Kullanıcısına Rol Atama

Admin panelinden:

1. Settings → Roles → Users
2. Kullanıcıyı seç
3. Rolü seç ve kaydet

Programatik olarak:

```javascript
const user = await strapi.query("admin::user").findOne({
  where: { email: "editor@example.com" },
});

const editorRole = await strapi.query("admin::role").findOne({
  where: { code: "strapi-editor" },
});

await strapi.query("admin::user").update({
  where: { id: user.id },
  data: {
    roles: [editorRole.id],
  },
});
```

#### API Kullanıcısına Rol Atama

```javascript
const user = await strapi.query("plugin::users-permissions.user").findOne({
  where: { email: "user@example.com" },
});

const authenticatedRole = await strapi
  .query("plugin::users-permissions.role")
  .findOne({
    where: { type: "authenticated" },
  });

await strapi.query("plugin::users-permissions.user").update({
  where: { id: user.id },
  data: {
    role: authenticatedRole.id,
  },
});
```

### İzin Kontrolü

#### Controller'da İzin Kontrolü

```typescript
// src/api/article/controllers/article.ts
export default {
  async create(ctx) {
    // Kullanıcının iznini kontrol et
    const { user } = ctx.state;

    if (!user) {
      return ctx.unauthorized("You must be authenticated");
    }

    // Rol kontrolü
    const userRole = await strapi
      .query("plugin::users-permissions.role")
      .findOne({ where: { id: user.role } });

    if (userRole.type !== "admin" && userRole.type !== "editor") {
      return ctx.forbidden("You do not have permission to create articles");
    }

    // İçerik oluştur
    const entry = await strapi.entityService.create("api::article.article", {
      data: ctx.request.body,
    });

    return entry;
  },
};
```

#### Policy ile İzin Kontrolü

```typescript
// src/policies/is-editor.ts
export default async (policyContext, config, { strapi }) => {
  const { user } = policyContext.state;

  if (!user) {
    return false;
  }

  const userRole = await strapi
    .query("plugin::users-permissions.role")
    .findOne({ where: { id: user.role } });

  return userRole.type === "editor" || userRole.type === "admin";
};
```

Route'ta kullanım:

```typescript
// src/api/article/routes/article.ts
export default {
  routes: [
    {
      method: "POST",
      path: "/articles",
      handler: "article.create",
      config: {
        policies: ["plugin::users-permissions.isAuthenticated", "is-editor"],
      },
    },
  ],
};
```

## 🔄 İzinleri Güncelleme

Mevcut script'leri güncelleyerek yeni content type'lar veya izinler ekleyebilirsiniz:

1. `scripts/setup-admin-roles.js` dosyasını açın
2. `contentTypes` array'ine yeni content type ekleyin
3. İzinleri güncelleyin
4. Script'i tekrar çalıştırın

```javascript
// Örnek: Yeni content type ekleme
const contentTypes = [
  "faq-section",
  "faq-topic",
  "faq-question",
  "article",
  "author",
  "category",
  "about",
  "global",
  "new-content-type", // Yeni eklenen
];
```

## 📚 İlgili Dokümantasyon

- [Strapi Admin Roles Documentation](https://docs.strapi.io/dev-docs/backend/users-permissions/configuring-administrator-access)
- [Strapi Users Permissions Documentation](https://docs.strapi.io/dev-docs/plugins/users-permissions)
- [Strapi Permissions Documentation](https://docs.strapi.io/dev-docs/backend/users-permissions/permissions)

## ⚠️ Önemli Notlar

1. **Public Role**: Varsayılan olarak Strapi'de `public` rolü mevcuttur. Bu rolü silmeyin.

2. **Authenticated Role**: Varsayılan olarak Strapi'de `authenticated` rolü mevcuttur. Bu rolü silmeyin.

3. **Super Admin**: Super Admin rolü sistem tarafından yönetilir ve değiştirilemez.

4. **İzin Güncellemeleri**: Script'leri çalıştırdığınızda mevcut izinler silinmez, sadece yeni izinler eklenir.

5. **Content Type Değişiklikleri**: Yeni content type eklediğinizde script'leri tekrar çalıştırmanız gerekebilir.

6. **Kullanıcı Grupları**: Kullanıcı grupları script'i çalıştırmadan önce rollerin oluşturulmuş olması gerekir.

7. **bcryptjs Bağımlılığı**: Kullanıcı grupları script'i için `bcryptjs` paketi gerekebilir. Yüklü değilse `npm install bcryptjs` komutu ile yükleyin.

## 🐛 Sorun Giderme

### Roller Görünmüyor

```bash
# Strapi'yi yeniden başlatın
npm run develop
```

### İzinler Çalışmıyor

```bash
# İzinleri tekrar ayarlayın
npm run setup:all-roles
```

### GraphQL İzinleri

GraphQL için özel izinler gerekiyorsa:

```bash
npm run setup:graphql-permissions
```

## 📞 Destek

Sorularınız için:

- Strapi Dokümantasyonu: https://docs.strapi.io
- Strapi Discord: https://discord.strapi.io
