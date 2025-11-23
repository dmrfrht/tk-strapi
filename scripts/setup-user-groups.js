/**
 * Kullanıcı gruplarını oluşturur ve örnek kullanıcıları rollere atar
 * Bu script, hem admin hem de API kullanıcılarını oluşturur ve ilgili rollere atar
 * 
 * Kullanım:
 *   npm run setup:user-groups
 *   veya
 *   strapi console
 *   > const setup = require('./scripts/setup-user-groups');
 *   > await setup();
 * 
 * NOT: Şifreler varsayılan olarak "Password123!" şeklindedir.
 *      Üretim ortamında mutlaka değiştirin!
 * 
 * GEREKSINIMLER:
 *   - Roller önceden oluşturulmuş olmalı (npm run setup:all-roles)
 *   - bcryptjs paketi gerekebilir: npm install bcryptjs
 */

async function setupUserGroups() {
  try {
    console.log('👥 Kullanıcı grupları oluşturuluyor...\n');

    // Varsayılan şifre (üretimde mutlaka değiştirin!)
    const defaultPassword = 'Password123!';

    // ============================================
    // ADMIN KULLANICILARI (Admin Paneli)
    // ============================================
    console.log('='.repeat(50));
    console.log('ADMIN KULLANICILARI');
    console.log('='.repeat(50));

    const adminUserGroups = [
      {
        email: 'editor@tk-strapi.com',
        firstname: 'Editor',
        lastname: 'User',
        password: defaultPassword,
        isActive: true,
        roleCode: 'strapi-editor',
        description: 'İçerik editörü - Tüm içerikleri yönetebilir',
      },
      {
        email: 'author@tk-strapi.com',
        firstname: 'Author',
        lastname: 'User',
        password: defaultPassword,
        isActive: true,
        roleCode: 'strapi-author',
        description: 'İçerik yazarı - İçerik oluşturabilir ve düzenleyebilir',
      },
      {
        email: 'viewer@tk-strapi.com',
        firstname: 'Viewer',
        lastname: 'User',
        password: defaultPassword,
        isActive: true,
        roleCode: 'strapi-viewer',
        description: 'Görüntüleyici - Sadece içerikleri görüntüleyebilir',
      },
    ];

    for (const userData of adminUserGroups) {
      console.log(`\n📝 ${userData.email} işleniyor...`);

      // Rolü bul
      const role = await strapi.query('admin::role').findOne({
        where: { code: userData.roleCode },
      });

      if (!role) {
        console.log(`  ⚠️  ${userData.roleCode} rolü bulunamadı! Önce roller oluşturun: npm run setup:admin-roles`);
        continue;
      }

      // Kullanıcıyı kontrol et
      let user = await strapi.query('admin::user').findOne({
        where: { email: userData.email },
      });

      if (user) {
        // Kullanıcı mevcutsa güncelle
        // Şifre değişmemişse güncelleme yapma
        await strapi.query('admin::user').update({
          where: { id: user.id },
          data: {
            firstname: userData.firstname,
            lastname: userData.lastname,
            isActive: userData.isActive,
            roles: [role.id],
          },
        });
        console.log(`  ✓ Kullanıcı güncellendi (${userData.description})`);
        console.log(`  ⚠️  Şifre değiştirmek için admin panelinden güncelleyin`);
      } else {
        // Yeni kullanıcı oluştur - Strapi admin service kullan
        try {
          await strapi.service('admin::user').create({
            email: userData.email,
            firstname: userData.firstname,
            lastname: userData.lastname,
            password: userData.password,
            isActive: userData.isActive,
            roles: [role.id],
          });
          console.log(`  ✓ Kullanıcı oluşturuldu (${userData.description})`);
        } catch (error) {
          // Eğer service çalışmazsa bcryptjs ile dene
          console.log(`  ⚠️  Service ile oluşturulamadı, bcryptjs ile deneniyor...`);
          try {
            const bcrypt = require('bcryptjs');
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            await strapi.query('admin::user').create({
              data: {
                email: userData.email,
                firstname: userData.firstname,
                lastname: userData.lastname,
                password: hashedPassword,
                isActive: userData.isActive,
                roles: [role.id],
              },
            });
            console.log(`  ✓ Kullanıcı oluşturuldu (${userData.description})`);
          } catch (bcryptError) {
            console.error(`  ❌ Kullanıcı oluşturulamadı: ${bcryptError.message}`);
            console.log(`  💡 Çözüm: npm install bcryptjs`);
            throw bcryptError;
          }
        }
      }
    }

    // ============================================
    // API KULLANICILARI (Frontend Uygulamaları)
    // ============================================
    console.log('\n\n' + '='.repeat(50));
    console.log('API KULLANICILARI');
    console.log('='.repeat(50));

    const apiUserGroups = [
      {
        username: 'editor_api',
        email: 'editor.api@tk-strapi.com',
        password: defaultPassword,
        confirmed: true,
        blocked: false,
        roleType: 'editor',
        description: 'API Editör - İçerikleri yönetebilir',
      },
      {
        username: 'author_api',
        email: 'author.api@tk-strapi.com',
        password: defaultPassword,
        confirmed: true,
        blocked: false,
        roleType: 'authenticated',
        description: 'API Yazar - İçerik oluşturabilir',
      },
      {
        username: 'user_api',
        email: 'user.api@tk-strapi.com',
        password: defaultPassword,
        confirmed: true,
        blocked: false,
        roleType: 'authenticated',
        description: 'API Kullanıcı - Temel işlemler yapabilir',
      },
    ];

    for (const userData of apiUserGroups) {
      console.log(`\n📝 ${userData.email} işleniyor...`);

      // Rolü bul
      const role = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: userData.roleType },
      });

      if (!role) {
        console.log(`  ⚠️  ${userData.roleType} rolü bulunamadı! Önce roller oluşturun: npm run setup:api-roles`);
        continue;
      }

      // Kullanıcıyı kontrol et
      let user = await strapi.query('plugin::users-permissions.user').findOne({
        where: { email: userData.email },
      });

      if (user) {
        // Kullanıcı mevcutsa güncelle
        await strapi.query('plugin::users-permissions.user').update({
          where: { id: user.id },
          data: {
            username: userData.username,
            email: userData.email,
            confirmed: userData.confirmed,
            blocked: userData.blocked,
            role: role.id,
          },
        });
        console.log(`  ✓ Kullanıcı güncellendi (${userData.description})`);
        console.log(`  ⚠️  Şifre değiştirmek için admin panelinden güncelleyin`);
      } else {
        // Yeni kullanıcı oluştur - Users-permissions service kullan
        try {
          await strapi.service('plugin::users-permissions.user').add({
            username: userData.username,
            email: userData.email,
            password: userData.password,
            confirmed: userData.confirmed,
            blocked: userData.blocked,
            role: role.id,
          });
          console.log(`  ✓ Kullanıcı oluşturuldu (${userData.description})`);
        } catch (error) {
          // Eğer service çalışmazsa bcryptjs ile dene
          console.log(`  ⚠️  Service ile oluşturulamadı, bcryptjs ile deneniyor...`);
          try {
            const bcrypt = require('bcryptjs');
            const hashedPassword = await bcrypt.hash(userData.password, 10);
            await strapi.query('plugin::users-permissions.user').create({
              data: {
                username: userData.username,
                email: userData.email,
                password: hashedPassword,
                confirmed: userData.confirmed,
                blocked: userData.blocked,
                role: role.id,
              },
            });
            console.log(`  ✓ Kullanıcı oluşturuldu (${userData.description})`);
          } catch (bcryptError) {
            console.error(`  ❌ Kullanıcı oluşturulamadı: ${bcryptError.message}`);
            console.log(`  💡 Çözüm: npm install bcryptjs`);
            throw bcryptError;
          }
        }
      }
    }

    // ============================================
    // ÖZET
    // ============================================
    console.log('\n\n' + '='.repeat(50));
    console.log('ÖZET');
    console.log('='.repeat(50));
    console.log('\n✅ Admin Kullanıcıları:');
    adminUserGroups.forEach((user) => {
      console.log(`   - ${user.email} (${user.roleCode})`);
    });
    console.log('\n✅ API Kullanıcıları:');
    apiUserGroups.forEach((user) => {
      console.log(`   - ${user.email} (${user.roleType})`);
    });
    console.log(`\n⚠️  Varsayılan şifre: ${defaultPassword}`);
    console.log('   Üretim ortamında mutlaka değiştirin!\n');

    console.log('🎉 Kullanıcı grupları başarıyla oluşturuldu!');
  } catch (error) {
    console.error('❌ Kullanıcı grupları oluşturulurken hata oluştu:', error);
    throw error;
  }
}

// Strapi console'dan çalıştırılabilmesi için export
module.exports = setupUserGroups;

// Doğrudan çalıştırıldığında
if (require.main === module) {
  async function main() {
    const { createStrapi, compileStrapi } = require('@strapi/strapi');

    const appContext = await compileStrapi();
    const app = await createStrapi(appContext).load();

    app.log.level = 'error';

    // Strapi instance'ını global olarak kullanılabilir hale getir
    global.strapi = app;

    await setupUserGroups();
    await app.destroy();

    process.exit(0);
  }

  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

