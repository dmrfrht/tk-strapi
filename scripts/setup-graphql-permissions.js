/**
 * GraphQL için gerekli izinleri ayarlar
 * Bu script, Public role için tüm FAQ content type'larına GraphQL erişim izni verir
 * 
 * Kullanım:
 *   npm run setup:graphql-permissions
 *   veya
 *   strapi console
 *   > const setup = require('./scripts/setup-graphql-permissions');
 *   > await setup();
 */

async function setupGraphQLPermissions() {
  try {
    console.log('🔐 GraphQL izinleri ayarlanıyor...');

    // Public role'ü bul
    const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
      where: {
        type: 'public',
      },
    });

    if (!publicRole) {
      console.error('❌ Public role bulunamadı!');
      return;
    }

    // GraphQL için izin verilecek content type'lar
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

    // Her content type için find ve findOne izinlerini ayarla
    const permissionsToCreate = [];

    for (const contentType of contentTypes) {
      const actions = ['find', 'findOne'];

      for (const action of actions) {
        // Önce bu iznin zaten var olup olmadığını kontrol et
        const existingPermission = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({
            where: {
              action: `api::${contentType}.${contentType}.${action}`,
              role: publicRole.id,
            },
          });

        if (!existingPermission) {
          permissionsToCreate.push({
            action: `api::${contentType}.${contentType}.${action}`,
            role: publicRole.id,
          });
          console.log(`  ✓ ${contentType}.${action} izni eklenecek`);
        } else {
          console.log(`  - ${contentType}.${action} izni zaten mevcut`);
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
      console.log(`✅ ${permissionsToCreate.length} izin başarıyla eklendi!`);
    } else {
      console.log('✅ Tüm izinler zaten mevcut!');
    }

    console.log('🎉 GraphQL izinleri ayarlama tamamlandı!');
  } catch (error) {
    console.error('❌ GraphQL izinleri ayarlanırken hata oluştu:', error);
    throw error;
  }
}

// Strapi console'dan çalıştırılabilmesi için export
module.exports = setupGraphQLPermissions;

// Doğrudan çalıştırıldığında
if (require.main === module) {
  async function main() {
    const { createStrapi, compileStrapi } = require('@strapi/strapi');

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.log.level = 'error';

    // Strapi instance'ını global olarak kullanılabilir hale getir
    global.strapi = app;

    await setupGraphQLPermissions();
    await app.destroy();

    process.exit(0);
  }

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

