/**
 * Admin paneli için roller ve izinleri oluşturur
 * Bu script, Strapi admin panelinde kullanılacak roller ve izinlerini ayarlar
 * 
 * Kullanım:
 *   npm run setup:admin-roles
 *   veya
 *   strapi console
 *   > const setup = require('./scripts/setup-admin-roles');
 *   > await setup();
 */

async function setupAdminRoles() {
  try {
    console.log('🔐 Admin roller ve izinleri ayarlanıyor...');

    // Mevcut tüm content type'ları al
    const contentTypes = [
      'faq-section',
      'faq-topic',
      'faq-question',
      'article',
      'author',
      'category',
      'about',
      'global',
    ];

    // Admin rollerini tanımla
    const adminRoles = [
      {
        name: 'Editor',
        code: 'strapi-editor',
        description: 'Tüm içerikleri görüntüleyebilir, düzenleyebilir ve yayınlayabilir',
        permissions: {
          // Tüm content type'lar için tam erişim
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['create', 'read', 'update', 'delete', 'publish'],
          })),
          // Plugin izinleri
          plugins: {
            'content-manager': ['read', 'create', 'update', 'delete', 'publish'],
            'content-type-builder': [], // Content type builder'a erişim yok
            'upload': ['read', 'create', 'update', 'delete'],
            'users-permissions': ['read'],
            'i18n': ['read', 'create', 'update', 'delete'],
            'graphql': ['read'],
          },
        },
      },
      {
        name: 'Author',
        code: 'strapi-author',
        description: 'İçerik oluşturabilir ve düzenleyebilir, ancak yayınlayamaz',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['create', 'read', 'update'], // publish ve delete yok
          })),
          plugins: {
            'content-manager': ['read', 'create', 'update'],
            'content-type-builder': [],
            'upload': ['read', 'create', 'update'],
            'users-permissions': ['read'],
            'i18n': ['read', 'create', 'update'],
            'graphql': ['read'],
          },
        },
      },
      {
        name: 'Viewer',
        code: 'strapi-viewer',
        description: 'Sadece içerikleri görüntüleyebilir, düzenleyemez',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['read'], // Sadece okuma
          })),
          plugins: {
            'content-manager': ['read'],
            'content-type-builder': [],
            'upload': ['read'],
            'users-permissions': ['read'],
            'i18n': ['read'],
            'graphql': ['read'],
          },
        },
      },
    ];

    // Her rol için işlem yap
    for (const roleConfig of adminRoles) {
      console.log(`\n📝 ${roleConfig.name} rolü işleniyor...`);

      // Rolü bul veya oluştur
      let role = await strapi.query('admin::role').findOne({
        where: { code: roleConfig.code },
      });

      if (!role) {
        role = await strapi.query('admin::role').create({
          data: {
            name: roleConfig.name,
            code: roleConfig.code,
            description: roleConfig.description,
          },
        });
        console.log(`  ✓ ${roleConfig.name} rolü oluşturuldu`);
      } else {
        // Rol mevcutsa güncelle
        role = await strapi.query('admin::role').update({
          where: { id: role.id },
          data: {
            name: roleConfig.name,
            description: roleConfig.description,
          },
        });
        console.log(`  ✓ ${roleConfig.name} rolü güncellendi`);
      }

      // Content type izinlerini ayarla
      const permissionsToCreate = [];

      // Content type izinleri - Strapi 5 formatı
      for (const ctConfig of roleConfig.permissions.contentTypes) {
        for (const action of ctConfig.actions) {
          // Strapi 5 admin permission formatı
          const permissionAction = `plugin::content-manager.collection-types.api::${ctConfig.contentType}.${ctConfig.contentType}.${action}`;
          
          // Mevcut izni kontrol et
          const existingPermission = await strapi.query('admin::permission').findOne({
            where: {
              action: permissionAction,
              role: role.id,
            },
          });

          if (!existingPermission) {
            permissionsToCreate.push({
              action: permissionAction,
              role: role.id,
              subject: `api::${ctConfig.contentType}.${ctConfig.contentType}`,
            });
          }
        }
      }

      // Plugin izinleri - Strapi 5 formatı
      for (const [pluginName, actions] of Object.entries(roleConfig.permissions.plugins)) {
        for (const action of actions) {
          // Plugin permission formatı
          const permissionAction = `plugin::${pluginName}.${action}`;
          
          const existingPermission = await strapi.query('admin::permission').findOne({
            where: {
              action: permissionAction,
              role: role.id,
            },
          });

          if (!existingPermission) {
            permissionsToCreate.push({
              action: permissionAction,
              role: role.id,
              subject: pluginName,
            });
          }
        }
      }

      // İzinleri oluştur
      if (permissionsToCreate.length > 0) {
        await Promise.all(
          permissionsToCreate.map((permission) =>
            strapi.query('admin::permission').create({
              data: permission,
            })
          )
        );
        console.log(`  ✓ ${permissionsToCreate.length} izin eklendi`);
      } else {
        console.log(`  - Tüm izinler zaten mevcut`);
      }
    }

    console.log('\n🎉 Admin roller ve izinleri başarıyla ayarlandı!');
  } catch (error) {
    console.error('❌ Admin roller ayarlanırken hata oluştu:', error);
    throw error;
  }
}

// Strapi console'dan çalıştırılabilmesi için export
module.exports = setupAdminRoles;

// Doğrudan çalıştırıldığında
if (require.main === module) {
  async function main() {
    const { createStrapi, compileStrapi } = require('@strapi/strapi');

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.log.level = 'error';

    // Strapi instance'ını global olarak kullanılabilir hale getir
    global.strapi = app;

    await setupAdminRoles();
    await app.destroy();

    process.exit(0);
  }

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

