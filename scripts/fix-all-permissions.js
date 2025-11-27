/**
 * Fix All Permissions Script
 * 
 * Fixes all admin permissions by ensuring conditions is an empty array instead of null
 * This fixes the "Cannot read properties of null (reading 'length')" error
 * 
 * Kullanım:
 *   node scripts/fix-all-permissions.js
 */

async function fixAllPermissions() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    console.log('🔧 Tüm admin permission\'ları düzeltiliyor...\n');
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    // Tüm admin permission'ları bul
    const allPermissions = await app.query('admin::permission').findMany({
      populate: ['role'],
    });

    console.log(`📋 ${allPermissions.length} permission bulundu\n`);

    // Condition'ı düzelt
    let updatedCount = 0;
    for (const permission of allPermissions) {
      // conditions null ise veya array değilse düzelt
      const needsFix = permission.conditions === null || !Array.isArray(permission.conditions);
      
      if (needsFix) {
        try {
          await app.query('admin::permission').update({
            where: { id: permission.id },
            data: {
              conditions: [],
              properties: permission.properties || {},
              actionParameters: permission.actionParameters || {},
            },
          });
          updatedCount++;
          const roleName = permission.role?.name || 'Unknown';
          console.log(`  ✓ [${roleName}] ${permission.action} - condition düzeltildi`);
        } catch (error) {
          console.error(`  ❌ ${permission.action} - güncelleme hatası:`, error.message);
        }
      }
    }

    console.log(`\n✅ ${updatedCount} permission güncellendi`);
    console.log('\n🎉 Tüm permission\'lar düzeltildi!\n');

  } catch (error) {
    console.error('❌ Hata oluştu:', error.message);
    console.error(error.stack);
  } finally {
    if (app) {
      await app.destroy();
    }
    process.exit(0);
  }
}

// Script'i çalıştır
fixAllPermissions().catch((error) => {
  console.error('❌ Script hatası:', error);
  process.exit(1);
});

