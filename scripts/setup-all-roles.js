/**
 * Tüm roller ve izinleri tek seferde ayarlar
 * Bu script hem admin hem de API rollerini oluşturur
 * 
 * Kullanım:
 *   npm run setup:all-roles
 *   veya
 *   strapi console
 *   > const setup = require('./scripts/setup-all-roles');
 *   > await setup();
 */

const setupAdminRoles = require('./setup-admin-roles');
const setupApiRoles = require('./setup-api-roles');

async function setupAllRoles() {
  try {
    console.log('🚀 Tüm roller ve izinler ayarlanıyor...\n');
    
    // Admin rollerini ayarla
    console.log('='.repeat(50));
    console.log('ADMIN ROLLER');
    console.log('='.repeat(50));
    await setupAdminRoles();
    
    console.log('\n');
    
    // API rollerini ayarla
    console.log('='.repeat(50));
    console.log('API ROLLER');
    console.log('='.repeat(50));
    await setupApiRoles();
    
    console.log('\n🎉 Tüm roller ve izinler başarıyla ayarlandı!');
  } catch (error) {
    console.error('❌ Roller ayarlanırken hata oluştu:', error);
    throw error;
  }
}

// Strapi console'dan çalıştırılabilmesi için export
module.exports = setupAllRoles;

// Doğrudan çalıştırıldığında
if (require.main === module) {
  async function main() {
    const { createStrapi, compileStrapi } = require('@strapi/strapi');

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.log.level = 'error';

    // Strapi instance'ını global olarak kullanılabilir hale getir
    global.strapi = app;

    await setupAllRoles();
    await app.destroy();

    process.exit(0);
  }

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

