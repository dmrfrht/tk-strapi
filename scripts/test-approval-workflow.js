/**
 * Test Approval Workflow Script
 * 
 * Bu script, içerik onay workflow'unu test eder
 * 
 * Kullanım:
 *   node scripts/test-approval-workflow.js
 */

async function testApprovalWorkflow() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');
  let app;

  try {
    console.log('🚀 Strapi başlatılıyor...\n');
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';

    global.strapi = app;

    console.log('✅ Strapi başlatıldı\n');

    // 1. Test kullanıcıları oluştur/al
    console.log('👤 Test kullanıcıları kontrol ediliyor...\n');

    // Author kullanıcısı
    let authorUser = await app.query('admin::user').findOne({
      where: { email: 'author@tk-strapi.com' },
      populate: ['roles'],
    });

    if (!authorUser) {
      console.log('⚠️  Author kullanıcısı bulunamadı. Lütfen önce şunu çalıştırın:');
      console.log('   npm run setup:user-groups\n');
      return;
    }

    // Editor kullanıcısı
    let editorUser = await app.query('admin::user').findOne({
      where: { email: 'editor@tk-strapi.com' },
      populate: ['roles'],
    });

    if (!editorUser) {
      console.log('⚠️  Editor kullanıcısı bulunamadı. Lütfen önce şunu çalıştırın:');
      console.log('   npm run setup:user-groups\n');
      return;
    }

    console.log(`✅ Author kullanıcısı bulundu: ${authorUser.email} (ID: ${authorUser.id})`);
    console.log(`✅ Editor kullanıcısı bulundu: ${editorUser.email} (ID: ${editorUser.id})\n`);

    // 2. Test içeriği oluştur (Author olarak)
    console.log('📝 Test içeriği oluşturuluyor (Author olarak)...\n');

    const testArticle = await app.entityService.create('api::article.article', {
      data: {
        title: `Test Article - ${new Date().toISOString()}`,
        description: 'Bu bir test makalesidir',
        slug: `test-article-${Date.now()}`,
      },
    });

    console.log(`✅ Test makalesi oluşturuldu: ${testArticle.title} (ID: ${testArticle.id})\n`);

    // 3. Author'ın publish yetkisi olmadığını test et
    console.log('🔒 Author\'ın publish yetkisi kontrol ediliyor...\n');

    const authorHasPermission = await app.service('api::approval.approval').hasPublishPermission(authorUser.id);
    const editorHasPermission = await app.service('api::approval.approval').hasPublishPermission(editorUser.id);

    console.log(`Author publish yetkisi: ${authorHasPermission ? '✅ VAR' : '❌ YOK'}`);
    console.log(`Editor publish yetkisi: ${editorHasPermission ? '✅ VAR' : '❌ YOK'}\n`);

    if (authorHasPermission) {
      console.log('⚠️  UYARI: Author kullanıcısının publish yetkisi var! Bu beklenmeyen bir durum.\n');
    }

    // 4. İçeriği onaya gönder
    console.log('📤 İçerik onaya gönderiliyor...\n');

    await app.service('api::approval.approval').submitForApproval(
      'api::article.article',
      testArticle.id,
      authorUser.id
    );

    console.log('✅ İçerik onaya gönderildi\n');

    // 5. Onay bekleyen içerikleri kontrol et
    console.log('📋 Onay bekleyen içerikler listeleniyor...\n');

    const pendingItems = await app.service('api::approval.approval').getPendingApprovals();
    console.log(`✅ ${pendingItems.length} onay bekleyen içerik bulundu:\n`);

    pendingItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.title} (${item.contentType})`);
      console.log(`   ID: ${item.id}, Gönderen: ${item.submittedBy?.email || 'N/A'}`);
      console.log(`   Tarih: ${item.submittedAt || 'N/A'}\n`);
    });

    // 6. İçeriği onayla (Editor olarak)
    console.log('✅ İçerik onaylanıyor ve yayınlanıyor (Editor olarak)...\n');

    await app.service('api::approval.approval').approveAndPublish(
      'api::article.article',
      testArticle.id,
      editorUser.id
    );

    console.log('✅ İçerik onaylandı ve yayınlandı\n');

    // 7. Yayınlanmış içeriği kontrol et
    const publishedArticle = await app.entityService.findOne('api::article.article', testArticle.id, {
      populate: ['approvalStatus'],
    });

    console.log('📊 Sonuçlar:\n');
    console.log(`   Başlık: ${publishedArticle.title}`);
    console.log(`   Yayınlandı: ${publishedArticle.publishedAt ? '✅ EVET' : '❌ HAYIR'}`);
    console.log(`   Onay Durumu: ${publishedArticle.approvalStatus?.status || 'N/A'}`);
    console.log(`   Onaylayan: ${publishedArticle.approvalStatus?.reviewedBy?.email || 'N/A'}\n`);

    console.log('🎉 Tüm testler başarıyla tamamlandı!\n');

    // 8. Test içeriğini temizle (opsiyonel)
    console.log('🧹 Test içeriği temizleniyor...\n');
    await app.entityService.delete('api::article.article', testArticle.id);
    console.log('✅ Test içeriği silindi\n');

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
testApprovalWorkflow().catch((error) => {
  console.error('❌ Script hatası:', error);
  process.exit(1);
});

