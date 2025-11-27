/**
 * List Admin Users Script
 * 
 * Lists all admin users in the system with their roles
 * 
 * Kullanım:
 *   node scripts/list-admin-users.js
 */

async function listAdminUsers() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    console.log('👥 Admin kullanıcıları listeleniyor...\n');
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    // Tüm admin kullanıcılarını bul
    const adminUsers = await app.query('admin::user').findMany({
      populate: ['roles'],
    });

    if (adminUsers.length === 0) {
      console.log('❌ Hiç admin kullanıcısı bulunamadı.\n');
      return;
    }

    console.log(`📋 ${adminUsers.length} admin kullanıcısı bulundu:\n`);
    console.log('='.repeat(80));
    console.log('EMAIL'.padEnd(40) + 'AD SOYAD'.padEnd(25) + 'ROL(ler)'.padEnd(20) + 'DURUM');
    console.log('='.repeat(80));

    for (const user of adminUsers) {
      const email = (user.email || 'N/A').padEnd(40);
      const name = `${user.firstname || ''} ${user.lastname || ''}`.trim().padEnd(25);
      
      // Rolleri al
      let roles = 'N/A';
      if (user.roles && user.roles.length > 0) {
        roles = user.roles.map(r => r.name || r.code || 'Unknown').join(', ');
      } else if (user.role) {
        // Eski format için
        roles = user.role.name || user.role.code || 'Unknown';
      }
      roles = roles.padEnd(20);
      
      const status = user.isActive ? '✅ Aktif' : '❌ Pasif';
      
      console.log(`${email}${name}${roles}${status}`);
    }

    console.log('='.repeat(80));
    
    // Super admin kontrolü
    console.log('\n🔍 Super Admin Kontrolü:');
    const superAdminUsers = adminUsers.filter(user => {
      if (!user.roles || user.roles.length === 0) return false;
      return user.roles.some(role => 
        role.code === 'strapi-super-admin' || 
        role.name === 'Super Admin' ||
        role.code === 'super-admin'
      );
    });

    if (superAdminUsers.length > 0) {
      console.log(`\n✅ ${superAdminUsers.length} Super Admin kullanıcısı bulundu:`);
      superAdminUsers.forEach(user => {
        console.log(`   - ${user.email} (${user.firstname} ${user.lastname})`);
      });
    } else {
      console.log('\n⚠️  Super Admin kullanıcısı bulunamadı.');
      console.log('   Strapi\'de ilk kurulumda oluşturulan super admin kullanıcısı olabilir.');
    }

    // Normal admin rolü kontrolü
    console.log('\n🔍 Admin Rolü Kontrolü:');
    const adminRole = await app.query('admin::role').findOne({
      where: { 
        $or: [
          { code: 'strapi-admin' },
          { code: 'admin' },
          { name: 'Admin' }
        ]
      },
    });

    if (adminRole) {
      console.log(`\n✅ Admin rolü bulundu: ${adminRole.name} (${adminRole.code})`);
      const adminRoleUsers = adminUsers.filter(user => {
        if (!user.roles || user.roles.length === 0) return false;
        return user.roles.some(role => role.id === adminRole.id);
      });
      
      if (adminRoleUsers.length > 0) {
        console.log(`\n📋 Admin rolündeki kullanıcılar:`);
        adminRoleUsers.forEach(user => {
          console.log(`   - ${user.email} (${user.firstname} ${user.lastname})`);
        });
      } else {
        console.log('\n⚠️  Admin rolünde kullanıcı bulunamadı.');
      }
    } else {
      console.log('\n⚠️  Admin rolü bulunamadı.');
      console.log('   Sistemde sadece Editor, Author ve Viewer rolleri var.');
    }

    console.log('\n');

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
listAdminUsers().catch((error) => {
  console.error('❌ Script hatası:', error);
  process.exit(1);
});

