/**
 * Fix Author Permissions Script
 * 
 * Removes conditions from Author role permissions so they can see all content
 * 
 * Kullanım:
 *   node scripts/fix-author-permissions.js
 */

async function fixAuthorPermissions() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    console.log('🔧 Author rolü izinleri düzeltiliyor...\n');
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    // Author rolünü bul
    const authorRole = await app.query('admin::role').findOne({
      where: { code: 'strapi-author' },
    });

    if (!authorRole) {
      console.log('❌ Author rolü bulunamadı. Lütfen önce şunu çalıştırın:');
      console.log('   npm run setup:admin-roles\n');
      return;
    }

    console.log(`✅ Author rolü bulundu: ${authorRole.name} (ID: ${authorRole.id})\n`);

    // Author rolüne ait tüm permission'ları bul
    const authorPermissions = await app.query('admin::permission').findMany({
      where: {
        role: authorRole.id,
      },
    });

    console.log(`📋 ${authorPermissions.length} permission bulundu\n`);

    // Condition'ı kaldır ve güncelle
    let updatedCount = 0;
    for (const permission of authorPermissions) {
      // Eğer condition varsa veya null değilse, kaldır
      const hasCondition = permission.conditions && 
        (typeof permission.conditions === 'object' ? Object.keys(permission.conditions).length > 0 : true);
      
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
          console.log(`  ✓ ${permission.action} - condition düzeltildi (null -> [])`);
        } catch (error) {
          console.error(`  ❌ ${permission.action} - güncelleme hatası:`, error.message);
        }
      } else {
        // Condition zaten doğru formatta
        console.log(`  - ${permission.action} - condition zaten doğru`);
      }
    }

    console.log(`\n✅ ${updatedCount} permission güncellendi`);
    console.log('\n🎉 Author rolü artık tüm içerikleri görebilir!\n');

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
fixAuthorPermissions().catch((error) => {
  console.error('❌ Script hatası:', error);
  process.exit(1);
});

