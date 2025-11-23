/**
 * API için roller ve izinleri oluşturur
 * Bu script, Users Permissions plugin'i için roller ve izinlerini ayarlar
 * 
 * Kullanım:
 *   npm run setup:api-roles
 *   veya
 *   strapi console
 *   > const setup = require('./scripts/setup-api-roles');
 *   > await setup();
 */

async function setupApiRoles() {
  try {
    console.log('🔐 API roller ve izinleri ayarlanıyor...');

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

    // API rollerini tanımla
    const apiRoles = [
      {
        name: 'Public',
        type: 'public',
        description: 'Herkesin erişebileceği genel içerikler',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['find', 'findOne'], // Sadece okuma
          })),
        },
      },
      {
        name: 'Authenticated',
        type: 'authenticated',
        description: 'Giriş yapmış kullanıcılar için',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['find', 'findOne', 'create', 'update'], // Okuma ve yazma
          })),
        },
      },
      {
        name: 'Editor',
        type: 'editor',
        description: 'İçerik editörleri için genişletilmiş izinler',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['find', 'findOne', 'create', 'update', 'delete'], // Tüm CRUD işlemleri
          })),
        },
      },
      {
        name: 'Admin',
        type: 'admin',
        description: 'Yöneticiler için tam erişim',
        permissions: {
          contentTypes: contentTypes.map(ct => ({
            contentType: ct,
            actions: ['find', 'findOne', 'create', 'update', 'delete'], // Tüm işlemler
          })),
        },
      },
    ];

    // Her rol için işlem yap
    for (const roleConfig of apiRoles) {
      console.log(`\n📝 ${roleConfig.name} rolü işleniyor...`);

      // Rolü bul veya oluştur
      let role = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: roleConfig.type },
      });

      if (!role) {
        role = await strapi.query('plugin::users-permissions.role').create({
          data: {
            name: roleConfig.name,
            type: roleConfig.type,
            description: roleConfig.description,
          },
        });
        console.log(`  ✓ ${roleConfig.name} rolü oluşturuldu`);
      } else {
        // Rol mevcutsa güncelle
        role = await strapi.query('plugin::users-permissions.role').update({
          where: { id: role.id },
          data: {
            name: roleConfig.name,
            description: roleConfig.description,
          },
        });
        console.log(`  ✓ ${roleConfig.name} rolü güncellendi`);
      }

      // İzinleri ayarla
      const permissionsToCreate = [];

      for (const ctConfig of roleConfig.permissions.contentTypes) {
        for (const action of ctConfig.actions) {
          const permissionAction = `api::${ctConfig.contentType}.${ctConfig.contentType}.${action}`;
          
          // Mevcut izni kontrol et
          const existingPermission = await strapi
            .query('plugin::users-permissions.permission')
            .findOne({
              where: {
                action: permissionAction,
                role: role.id,
              },
            });

          if (!existingPermission) {
            permissionsToCreate.push({
              action: permissionAction,
              role: role.id,
            });
            console.log(`  ✓ ${ctConfig.contentType}.${action} izni eklenecek`);
          } else {
            console.log(`  - ${ctConfig.contentType}.${action} izni zaten mevcut`);
          }
        }
      }

      // İzinleri oluştur
      if (permissionsToCreate.length > 0) {
        await Promise.all(
          permissionsToCreate.map((permission) =>
            strapi.query('plugin::users-permissions.permission').create({
              data: permission,
            })
          )
        );
        console.log(`  ✓ ${permissionsToCreate.length} izin eklendi`);
      } else {
        console.log(`  - Tüm izinler zaten mevcut`);
      }
    }

    console.log('\n🎉 API roller ve izinleri başarıyla ayarlandı!');
  } catch (error) {
    console.error('❌ API roller ayarlanırken hata oluştu:', error);
    throw error;
  }
}

// Strapi console'dan çalıştırılabilmesi için export
module.exports = setupApiRoles;

// Doğrudan çalıştırıldığında
if (require.main === module) {
  async function main() {
    const { createStrapi, compileStrapi } = require('@strapi/strapi');

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.log.level = 'error';

    // Strapi instance'ını global olarak kullanılabilir hale getir
    global.strapi = app;

    await setupApiRoles();
    await app.destroy();

    process.exit(0);
  }

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

