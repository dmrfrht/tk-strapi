/**
 * Import FAQ questions for multiple topics in tr-TR
 * 
 * Usage: node scripts/import-all-questions.js
 */

const { createStrapi, compileStrapi } = require('@strapi/strapi');

// All questions data organized by topic
const questionsByTopic = {
  "Infants and children": [
    // ... (22 questions - already created in separate file)
  ],
  "Martyrs relatives and Veterans": [
    {
      "question": "Gazi, şehit ve gazi yakınlarına özel indirimden nasıl yararlanabilirsiniz?",
      "answer": "<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">T&#252;rkiye Cumhuriyeti vatandaşı gaziler ile şehit ve gazi yakınlarının;</p>\\n<ul xmlns=\\\"http://www.w3.org/1999/xhtml\\\">\\n<li>TC kimlik numaraları ile Miles&Smiles &#252;yesi olmaları,</li>\\n<li>\\\"Kişisel Bilgilerim\\\" sayfasındaki indirim tipleri alanından yolcu tipini bir kereliğine doğrulamaları gerekmektedir.</li>\\n</ul>\\n<p xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Bilet alırken yolcu tipi \\\"Gazi/Gazi veya Şehit Yakını\\\" olarak se&#231;ilmelidir.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377313"
    },
    {
      "question": "Şehit ve gazi yakınları kapsamına kimler giriyor?",
      "answer": "Anne, baba, eş ve 25 yaş altı bekar &#231;ocuk olmak &#252;zere birinci derece yakınlar bu indirimden yararlanabilir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377314"
    },
    {
      "question": "Miles&Smiles üyesi olmadan indirimden yararlanabilir misiniz?",
      "answer": "İndirimden yararlanabilmeniz i&#231;in Miles&Smiles &#252;yesi olmanız gerekmektedir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377315"
    },
    {
      "question": "Gazi, şehit ve gazi yakınlarına özel indirim hangi uçuşlarda geçerlidir?",
      "answer": "T&#252;rkiye Cumhuriyeti vatandaşı gaziler ile şehit ve gazi yakınlarına, yurt i&#231;i u&#231;uşlar ve T&#252;rkiye &#231;ıkışlı ve/veya varışlı yurt dışı u&#231;uşlarda %50 indirim uygulanır. İndirim; yurt dışında yapılan transit u&#231;uşlar (dıştan dışa transit u&#231;uşlar) hari&#231;, i&#231; hat aktarmalı u&#231;uşlarda da ge&#231;erlidir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377316"
    },
    {
      "question": "Kuzey Kıbrıs Türk Cumhuriyeti vatandaşları için gazi, şehit ve gazi yakınlarına özel indirim geçerli mi?",
      "answer": "20 Temmuz 2024 tarihinden itibaren, Kuzey Kıbrıs T&#252;rk Cumhuriyeti vatandaşı olan gazi, şehit ve gazi yakınları i&#231;in Economy Class (F/U/W/P/V &#252;cret sınıfları hari&#231;) net &#252;cretleri &#252;zerinden indirim uyguluyoruz. İndirim, Kuzey Kıbrıs T&#252;rk Cumhuriyeti varış ve &#231;ıkışlı T&#252;rkiye u&#231;uşlarında ge&#231;erlidir. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" target=\"_blank\"   >&#252;cret koşulları</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377317"
    },
    {
      "question": "İndirim, nereden alınan biletlerde geçerlidir?",
      "answer": "İndirim yalnızca online kanallarda; internet sitesi ve mobil uygulama &#252;zerinden alınan biletlerde ge&#231;erlidir.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377318"
    },
    {
      "question": "Hangi bilet kabinlerinde indirim geçerlidir?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">İndirim yalnızca Economy Class kabininde ge&#231;erlidir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Detaylı bilgilere <a href=\"/tr-tr/gazilere-sehit-ve-gazi-yakinlarina-buyuk-kolaylik/\" target=\"_blank\"  >gazilere, şehit ve gazi yakınlarına b&#252;y&#252;k kolaylık</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377320"
    }
  ],
  "Pregnant Passengers": [
    {
      "question": "Hamileliğimde 28 haftayı geçtim, yolculuk yapabilir miyim?",
      "answer": "Tek bebeğe hamileyseniz 28. haftanın başından 35. haftanın sonuna kadar doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresinin bulunduğu bir raporla seyahat edebilirsiniz. 36. hafta ve sonrasında ise doktor raporu olsa bile hamile yolcularımız u&#231;akla seyahat edemiyor. Hamileliğinizde birden fazla bebek taşıyorsanız 28. haftanın başından 31. haftanın sonuna kadar doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresi bulunan bir raporla seyahat edebilirsiniz. 32. hafta ve sonrasında ise doktor raporu olsa bile hamile yolcularımız u&#231;akla seyahat edemiyor. Doktor raporunuzun tarihinin 7 g&#252;n&#252; ge&#231;memesi gerektiğini hatırlatırız. Rapor, doktora veya sağlık kuruluşuna ait antetli k&#226;ğıt &#252;zerine yazılmış olmalıdır. İngilizce ya da T&#252;rk&#231;e d&#252;zenlenen raporunuzda, raporu d&#252;zenleyen doktorun adı soyadı, diploma numarası ve imzasının mutlaka bulunması gerekiyor. Detaylı bilgi i&#231;in <a title=\\\"Traveling During Pregnancy - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/hamile-yolcular/\\\"   >hamile yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "23833"
    },
    {
      "question": "Hamileyim, sağlık raporu olmadan uçabilir miyim?",
      "answer": "Hamilelik s&#252;reniz hen&#252;z 28 haftayı (7 ay) ge&#231;mediyse seyahat i&#231;in herhangi bir rapora ihtiyacınız yok. Ancak hamileliğinizin 28. haftanın başından 35. haftanın sonuna kadar olduğu d&#246;nemdeyseniz ancak doktorunuzdan aldığınız \\\"u&#231;akla seyahatinde herhangi bir sakınca yoktur\\\" ibaresinin bulunduğu bir raporla seyahat edebileceğinizi belirtelim. Detaylı bilgi i&#231;in <a title=\\\"Traveling During Pregnancy - Article1 - TR\\\" href=\\\"/tr-tr/bilgi-edin/hamile-yolcular/\\\"   >hamile yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "23832"
    }
  ],
  "Special Assistance": [
    // Note: These are the same as "Disabled passengers" - we'll skip duplicates
  ],
  "Students": [
    {
      "question": "Türkiye'de öğrenim gören ve TC vatandaşı olan bir öğrenci, indirimden nasıl yararlanabilir?",
      "answer": "&#214;ğrenci indiriminden yararlanabilmeniz i&#231;in &#246;ncelikle Miles&Smiles &#252;yesi olmanız gerekir. &#220;yelik hesabınızda \\\"Kişisel Bilgilerim\\\" alanına girerek \\\"İndirim &#199;eşitleri\\\" alanını \\\"&#214;ğrenci\\\" olarak işaretledikten sonra \\\"Kaydet\\\" butonuna tıklayarak bildiriminizi yapabilirsiniz. Hesabınıza giriş yapıp bilet alırken \\\"&#214;ğrenci\\\" yolcu tipini se&#231;meniz gerektiğini unutmayın.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377333"
    },
    {
      "question": "Öğrenci bildirimi işlemini satış ofislerinden yapabilir misiniz?",
      "answer": "Evet, &#246;ğrenci bildirimini online kanallarımızdan yapabildiğiniz gibi dilerseniz, satış ofislerimizden de yapabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377334"
    },
    {
      "question": "Türkiye Cumhuriyeti vatandaşı olmayan (yabancı uyruklu) bir öğrenci, öğrenci bildirimini nasıl yapabilir?",
      "answer": "Miles&Smiles &#252;yelik hesabınıza girerek \\\"Kişisel Bilgilerim\\\" sayfasından \\\"İndirimli Yolcu Tipi Ekle\\\" kısmındaki \\\"&#214;ğrenci (Uluslararası)\\\" alanında yer alan \\\"Formu doldur\\\" butonuna tıklayıp işlemleri ger&#231;ekleştirebilirsiniz. Detay bilgilere <a href=\\\"/tr-tr/ogrenci/\\\" target=\\\"_blank\\\"   >&#214;ğrenci indirimi</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377335"
    },
    {
      "question": "Öğrenci bildiriminiz onaylandıktan sonra indirimli biletinizi nereden alabilirsiniz?",
      "answer": "İnternet sitesi ve mobil uygulaması &#252;zerinden Miles&Smiles &#252;yelik girişinizi yaptıktan sonra, bilet alım sırasında yolcu tipinizi \\\"&#246;ğrenci\\\" olarak se&#231;erek biletinizi indirimli alabilirsiniz.",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377336"
    },
    {
      "question": "Öğrenci indiriminin avantajları neler?",
      "answer": "<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Yurt i&#231;i u&#231;uşlarda %20, yurt dışı transit u&#231;uşlarda %15,</li>\n<li>T&#252;rkiye veya Kuzey Kıbrıs T&#252;rk Cumhuriyeti &#231;ıkışlı yurt dışı varışlı ya da yurt dışı &#231;ıkışlı T&#252;rkiye veya Kuzey Kıbrıs T&#252;rk Cumhuriyeti varışlı u&#231;uşlarda %10,</li>\n<li>T&#252;rkiye ile Ercan Uluslararası Havalimanı arasındaki u&#231;uşlarda ise %20 indirimli fiyatlardan yararlanabilirsiniz.</li>\n</ul>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377337"
    },
    {
      "question": "Onaylanan öğrenci bildirimi ne kadar süre geçerli?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Onaylanan &#246;ğrencilik tanımı, 1 yıl boyunca ge&#231;erliliğini s&#252;rd&#252;rmektedir. &#214;ğrencilik tanımının 1 yılın sonunda tekrar talep edilmesi halinde yeniden başvuru yapmanız gerektiğini unutmayın.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Detaylı bilgilere <a href=\"/tr-tr/ogrenci/\" target=\"_blank\"  >&#214;ğrenci indirimi</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "11-05-2025",
      "id": "377338"
    }
  ],
  "Cabin baggage": [
    {
      "question": "Kabin bagajımın en yüksek boyut ve ağırlığı ne kadar olmalı?",
      "answer": "Bagaj boyutları ve ağırlığı hakkında <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >kabin bagajı</a> sayfamızdan bilgi alabilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22609"
    },
    {
      "question": "Kabin bagajı taşıma hakkım ne kadardır?",
      "answer": "Kabin bagajı, yolcunun kendi denetim ve sorumluluğu altında, yolcu kabininde &#252;cretsiz olarak taşınan bagajdır. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/kabin-bagaji/\" title=\"Help hand baggage article - TR\" target=\"_blank\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "107645"
    },
    {
      "question": "Kabindeki bagajlar da sorumluluğunuz altında mı?",
      "answer": "Kabine alınan bagajların sorumluluğu seyahat eden kişiye aittir. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22617"
    },
    {
      "question": "Katlanabilir tekerlekli sandalyemi kabin bagajı olarak alabilir miyim?",
      "answer": "Tekerlekli sandalyenizi seferinizi ger&#231;ekleştirdiğiniz u&#231;ak modeline bağlı olmak &#252;zere kabin bagajı olarak alabileceğiniz gibi kabin i&#231;i tekerlekli sandalyeleri de kullanabilirsiniz. Bu uygulamaların bulunmadığı u&#231;aklarımızda tekerlekli sandalyeler u&#231;ak altı bagaj b&#246;l&#252;m&#252;nde u&#231;ağın taşınmaktadır. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22616"
    },
    {
      "question": "Kabinde ruhsatlı silahımı taşıyabilir miyim?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Yurt i&#231;i u&#231;uşlarımızda silah taşımak &#252;cretlidir. Silah taşıma &#252;cretinden muaf olan yolcular ise; Rical listesinde yer alan VIP yolcular, bu yolcularla seyahat eden kadrolu korumalar, kamuya ait kimlik kartına tanımlı silah bilgisi olanlar, Kamu G&#246;revlisi Taşıma Ruhsatı veya Emekli Kamu Görevlisi Taşıma Ruhsatı'na sahip olanlar, kimlik ibraz eden çalışan ya da emekli Emniyet ve TSK mensupları ile k&#246;y g&#252;venlik korucularıdır.</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22620"
    },
    {
      "question": "Kabin bagajımda ikinci bir laptop taşıyabilir miyim?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Aynı &#231;anta i&#231;inde olmak koşuluyla ikinci bir laptop ya da tablet bilgisayarı kabin bagajınızda taşıyabilirsiniz. Koltuğun altına sığabilmesi i&#231;in &#231;antanızı aşırı doldurmamaya dikkat etmenizi &#246;neririz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"  >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.&#160;</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22615"
    },
    {
      "question": "Bagajımda kırılabilir eşyalar taşıyabilir miyim?",
      "answer": "U&#231;ağın bagaj altı kompartımanına vereceğiniz bagajınızın i&#231;eriğini hazırlarken i&#231;erisinde kırılabilir ve bozulabilir maddeler, elektronik cihazlar, para, m&#252;cevher, değerli maden, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtlar, pasaport ve diğer kimlik belgelerinin veya &#246;rneklerinin bulunmamasına &#246;zen g&#246;stermelisiniz. Bu tarz eşyaları &#252;zerinizde veya kabin bagajınızda paketlenmiş olarak taşıyabilirsiniz. U&#231;ağın yolcu kapasitesi dolmuşsa kabin bagajında yer olmayabilir. B&#246;yle durumlarda el bagajınız u&#231;ağın bagaj altı kompartımanına alınabilir. Bu ihtimale karşı, yukarıda tarif edilen eşyalarınızı &#231;antanızdan hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "173022"
    },
    {
      "question": "Kabin içine birden fazla çanta alabilir miyim?",
      "answer": "Economy Class u&#231;uşlarınızda kabin i&#231;ine boyutu en fazla 23x40x55 cm, ağırlığı en fazla 8 kg olan tek par&#231;a bagaj alabilirsiniz. Business Class'ta yolculuk yapıyorsanız her biri en fazla 23x40x55 cm boyutlarında ve 8 kg ağırlığında iki par&#231;a bagajı, kabin bagajı olarak taşıyabilirsiniz. Kabin bagajı taşıma hakkınızı aştığınız durumlarda ekstra&#160;bagaj &#252;creti talep edileceğini belirtelim. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22619"
    },
    {
      "question": "Kabin bagajımda gelinliğimi taşıyabilir miyim?",
      "answer": "Gelinliğinizi Economy Class ve Business Class u&#231;uşlarınızda kabin bagajı olarak yanınıza alabilirsiniz. Bagajınızın en, boy ve y&#252;ksekliğinin 118 cm'yi, toplam ağırlığının 8 kg'ı ge&#231;memesi gerekiyor. Gelinliğinizi kabin bagajı olarak aldığınızda Economy Class u&#231;uşlarınızda başka bir kabin bagajı alamayacağınızı hatırlatmak isteriz. Business Class u&#231;uşlarınızda ise standartlara uygun gelinlik bagajınızla birlikte ikinci bir kabin bagajı daha alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22613"
    },
    {
      "question": "Kabine alabileceğim bagajın en yüksek boyut ve ağırlığı nedir? ",
      "answer": "Economy Class u&#231;uşlarınızda kabine alabileceğiniz tek par&#231;a bagajın maksimum boyutu 23x40x55 cm, maksimum ağırlığı 8 kg'dır. Business Class u&#231;uşlarınızda her biri maksimum 23x40x55 cm boyutlarında ve 8 kg ağırlığında iki par&#231;a bagajı, kabin bagajı olarak alabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help hand baggage article - TR\" href=\"/tr-tr/bilgi-edin/kabin-bagaji/\"   >kabin bagajı</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22614"
    },
    {
      "question": "Kabin bagajımın boyutları ve ağırlığının beklenen standartlara uygun olmadığı durumlarda nasıl bir işlem yapılır?",
      "answer": "Kabin bagajınızın boyut ve ağırlık olarak uygun olmadığı durumlarda bagajınız, taşıma hakkınız dahilinde kargo kompartımanında taşınır. Bagaj hakkınızı kullandıysanız \\\"fazla bagaj\\\" tarifesine uygun olarak ekstra &#252;cret &#246;demeniz gerekebilir. Bagajınızın kargo kompartımanına alınma ihtimaline karşı, i&#231;erisinde bulunan kırılabilir ve bozulabilir maddeleri, elektronik cihazları, para, m&#252;cevher, değerli madenleri, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtları, pasaport ve diğer kimlik belgelerini veya &#246;rneklerini hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\\\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\\\" target=\\\"_blank\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22618"
    }
  ],
  "Free baggage": [
    {
      "question": "Bebek yolcuların ücretsiz bagaj hakkı ne kadardır?",
      "answer": "Bebek yolcularımızın her u&#231;uşta 10 kg, par&#231;a bagaj uygulaması kapsamındaki u&#231;uşlarda 23 kg bir par&#231;a bagaj hakkı vardır. Ayrıca t&#252;m u&#231;uşlarda boyutları 115 cm'yi ge&#231;meyen bir puset taşıyabilirler. &#199;ocuk yolcularımızın bagaj hakkı yetişkin yolcularımızla aynıdır. Detaylı bilgi almak i&#231;in <a href=\"/tr-tr/bilgi-edin/bebek-ve-cocuk-yolcular/bebek-yolcu/\" title=\"Bebek ve &#199;ocuk Yolcu - Banner - Large Banner with Text\" target=\"_blank\"   >Bebeğinizle seyahat</a> sayfamızı inceleyebilirsiniz\n<p xmlns=\"http://www.w3.org/1999/xhtml\">*Dış hatlarda ecofly ve ecojet paketlerde ge&#231;erli değildir.</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">**Dış ve İ&#231; Hat &#252;cret koşullarına g&#246;re serbest bagaj taşıma hakkı değişkenlik g&#246;sterebilmektedir. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/ucret-kosullari/\" title=\"Fare Rules - Article - TR\"  >&#252;cret koşulları</a> sayfamızı ziyaret edebilirsiniz.</p>",
      "lastModifiedDateTime": "16-04-2025",
      "id": "105971"
    },
    {
      "question": "Kilo sınırını aşan bagajımı nasıl gönderebilirim?",
      "answer": "Hava kargo taşımacılığı ile ilgili şartları t&#252;m detaylarıyla &#246;ğrenmek i&#231;in <a href=\"https://www.turkishcargo.com.tr/tr\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">turkishcargo.com</a> web sitesini ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "358231"
    },
    {
      "question": "Bagaja alınmayan eşyalarımı nasıl taşıyabilirim?",
      "answer": "Yanınıza almak istediğiniz ancak bagaj alanında taşınması m&#252;mk&#252;n olmayan eşyalarınızla ilgili detaylı bilgiye <a href=\"https://www.turkishcargo.com.tr/tr\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">turkishcargo.com</a> web sitesinden ulaşabilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "358232"
    },
    {
      "question": "Anlaşmalı firmalarla yapacağım ortak uçuşlarda bagaj limitim değişir mi?",
      "answer": "Bagaj kuralları, u&#231;uşunuzu ger&#231;ekleştirdiğiniz anlaşmalı havayolu firmasına g&#246;re değişiklik g&#246;sterebilir. Daha fazla bilgi i&#231;in&#160;<a xlink:href=\"tcm:92-68645\" title=\"Codeshare Flights - Article - TR\" xmlns=\"http://www.w3.org/1999/xhtml\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:title=\"Codeshare Flights - Article - TR\">codeshare (ortak) u&#231;uş</a>&#160;sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "68788"
    },
    {
      "question": "Aktarma yaptığım sırada bagajımı alabilmem mümkün mü?",
      "answer": "Ne yazık ki aktarma sırasında bagajınıza ulaşabilmeniz m&#252;mk&#252;n değil. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> ya da <a title=\"Transfer-Transit Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/transfer-ve-transit-yolcular/\"   >transfer ve transit yolcu</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22610"
    },
    {
      "question": "Çocukların bagaj hakkı yetişkinlerle aynı mı?",
      "answer": "2-12 yaş aralığındaki &#231;ocuk yolcularımızın bagaj hakları yetişkin yolcularımızla aynıdır. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22749"
    },
    {
      "question": "Bagajımı sigortalayabiliyor musunuz?",
      "answer": "U&#231;uşlarımızda bagajınız sigortalanmasa da u&#231;ak altı bagaj b&#246;l&#252;m&#252;ne kabul edilen t&#252;m bagajların sorumluluğumuz altında olduğundan emin olabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22748"
    },
    {
      "question": "Havalimanında bagaj taşıma yardımı servisiniz var mı?",
      "answer": "T&#252;rk Hava Yolları olarak b&#246;yle bir hizmet sunamıyoruz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22612"
    },
    {
      "question": "Birden fazla havayolu firmasıyla uçtuğumda bagaj hakkımı nasıl öğrenebilirim?",
      "answer": "Birden fazla havayolu firmasıyla seyahatinizi ger&#231;ekleştirdiğinizde en &#246;nemli taşıyıcının (MSC) bagaj kuralları ge&#231;erlidir. En &#246;nemli taşıyıcı (MSC), seyahatteki en &#246;nemli ve/veya en uzun bacağı u&#231;an havayolu firmasına g&#246;re IATA (Uluslararası Hava Taşımacılığı Birliği) kuralları gereğince belirlenir. Bagaj koşulları her u&#231;uşa g&#246;re farklılık g&#246;sterdiği i&#231;in en doğru detaylara, rezervasyon bilgilerinizden ve bilet &#252;zerindeki bagaj bilgilerinden ulaşabilirsiniz. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22753"
    },
    {
      "question": "Uçuşum iptal olduğunda satın aldığım ekstra bagaj hakkına ne oluyor?",
      "answer": "U&#231;uşunuz iptal olduysa ve başka bir seferle varış yerine ulaştırılamadıysanız satın aldığınız ekstra&#160;bagaj hakkının iadesini alabilirsiniz. Detaylı bilgi i&#231;in <a href=\"/tr-tr/bilgi-edin/ekstra-bagaj/kurallar-ve-kosullar/\" title=\"Excess Baggage Terms And Conditions - Paragraph Article H1\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22608"
    },
    {
      "question": "En önemli taşıyıcı (MSC) nedir?",
      "answer": "Birden fazla havayolu firmasının ger&#231;ekleştirdiği seyahatlerde en &#246;nemli ya da en uzun bacağı u&#231;an havayolu firması en &#246;nemli taşıycı (MSC) olarak kabul edilir. En &#246;nemli taşıyıcı, IATA (Uluslararası Hava Taşımacılığı Birliği) kuralları gereğince belirlenir. Bu seyahatlerde en &#246;nemli taşıyıcının bagaj kuralları ge&#231;erlidir.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22750"
    },
    {
      "question": "Bebek yolcuların bagaj hakkı ne kadardır?",
      "answer": "Bebek yolcularımız 10 kg bagaj hakkıyla seyahat edebilir. Dış hat seferlerinde 10 kg bagaj hakkına bir adet katlanabilir puset eklenir. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22751"
    },
    {
      "question": "Bagajımda maddi değeri yüksek eşyalar olduğunda ne yapmalıyım?",
      "answer": "U&#231;ağın kargo kompartımanına vereceğiniz bagajınızın i&#231;eriğini hazırlarken i&#231;erisinde kırılabilir ve bozulabilir maddeler, elektronik cihazlar, para, m&#252;cevher, değerli maden, g&#252;m&#252;ş eşya, senet ve diğer ticari değerli kağıtlar, pasaport ve diğer kimlik belgelerinin veya &#246;rneklerinin bulunmamasına &#246;zen g&#246;stermelisiniz. Bu tarz eşyaları &#252;zerinizde veya kabin bagajınızda paketlenmiş olarak taşıyabilirsiniz. Kabin bagajında yer kalmadığı durumlarda, el bagajınız u&#231;ağın kargo kompartımanına alınabilir. Bu ihtimale karşı, yukarıda tarif edilen eşyalarınızı &#231;antanızdan hızlıca alabileceğiniz şekilde muhafaza etmenizi tavsiye ederiz. Detaylı bilgi i&#231;in <a href=\"https://www.turkishairlines.com/tr-int/yasal-uyari/yolcu-ve-bagaj-tasima-genel-sartlari/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">Yolcu ve Bagaj Taşıma Genel Şartları</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22747"
    },
    {
      "question": "Aktarma sırasında bagajımın diğer uçağa geçişiyle kim ilgilenecek?",
      "answer": "Aktarma sırasında bagajınız taşıyıcı havayolu firmaları tarafından diğer u&#231;ağa ge&#231;irilir. Detaylı bilgi i&#231;in <a title=\"Help Free Baggage Article1 - TR\" href=\"/tr-tr/bilgi-edin/bagaj/\"   >bagaj</a> ya da <a title=\"Transfer-Transit Passengers - Article1 - TR\" href=\"/tr-tr/bilgi-edin/transfer-ve-transit-yolcular/\"   >transfer ve transit yolcular</a> sayfamızı ziyaret edebilirsiniz.",
      "lastModifiedDateTime": "16-04-2025",
      "id": "22611"
    }
  ],
  "Restrictions": [
    {
      "question": "Kabin bagajınızda ya da kayıtlı bagajınızda powerbank taşıyabilir misiniz?",
      "answer": "Lityum-metal, lityum-iyon h&#252;creleri veya pilleri i&#231;eren ve birincil amacı başka bir cihaza (&#246;rneğin powerbank) g&#252;&#231; sağlamak olan eşyalara yalnızca kabin bagajında (el bagajı) izin verilir. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article - TR\" target=\"_blank\"   >kısıtlamalar</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379645"
    },
    {
      "question": "Kabin ya da kayıtlı bagajda alkollü içecek taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\"><span lang=\"TR\" xml:lang=\"TR\">Evet, kabin ya da kayıtlı bagajınızda alkoll&#252; i&#231;ecek taşıyabilirsiniz. İ&#231;eceklerin <span style=\"color: #212529; background: white;\">alkol oranı en fazla %70 olabilir. Bir yolcu yanında en fazla 5 litre i&#231;ki taşıyabilir. Havalimanı g&#252;venlik ge&#231;işlerindeki sıvı kısıtlaması nedeniyle kabin bagajında belirtilen taşıma miktarı, Duty-Free Shop'tan (g&#252;mr&#252;ks&#252;z satış mağazaları) alınan &#252;r&#252;nler i&#231;in ge&#231;erlidir.</span></span></p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379664"
    },
    {
      "question": "Kayıtlı bagajda gıda ve sıvı ürünleri taşıma kuralları nedir?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Kayıtlı bagaj i&#231;erisinde gıda ve sıvı &#252;r&#252;nleri taşıma kuralları aşağıdaki gibidir:</p>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Katkı maddesi i&#231;ermeyen, sıvıyı i&#231;inde muhafaza edecek şekilde ve sızdırmaz paketler halinde birer litrelik olmak &#252;zere toplam beş litreye kadar <strong>sıvı</strong> taşınabilir.</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Gıda &#252;r&#252;nleri (zeytinyağı vb.)</li>\n<li>Salamura &#252;r&#252;nler</li>\n<li>Soslar, bal, pekmez</li>\n<li>S&#252;t, yoğurt, konserve &#252;r&#252;nler vb. her biri maksimum birer litrelik sızdırmaz paketler halinde, toplamda beş litre olmalıdır.</li>\n</ul>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379663"
    },
    {
      "question": "Kabin bagajınızda deodorant ve parfüm taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">En fazla 100 ml boyutlarda olan deodorant ve parf&#252;mleri kabin bagajınızda taşıyabilirsiniz. Diğer yolcuların konforu a&#231;sından deodorant ve parf&#252;mlerinizi koku sızdırmayacak şekilde taşımanızı &#246;neririz.Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article\" target=\"_blank\"  >kısıtlamalar</a> sayfamızdan ulaşabilirsiniz.</p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379662"
    },
    {
      "question": "AirWheel tipi kişisel araçlarınızı uçakta taşıyabilir misiniz?",
      "answer": "<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Hoverboard,&#160;Segway,&#160;AirWheel</li>\n<li>Solowheel,&#160;Balance&#160;Wheel</li>\n<li>Elektrikli/şarjlı bisikletler, lityum-iyon batarya ile &#231;alışan benzeri taşınabilir kişisel ara&#231;lar ile lityum bataryayla &#231;alışan binilebilir bagajların kabin bagajı ya da kayıtlı bagaj olarak u&#231;akta taşınması yasaktır. Detaylı bilgilere <a href=\"/tr-tr/bilgi-edin/kisitlamalar/\" title=\"Restrictions - Article - TR\" target=\"_blank\"  >kısıtlamalar</a>&#160;sayfamızdan ulaşabilirsiniz.</li>\n</ul>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379661"
    },
    {
      "question": "Akıllı bagajlarınızı uçakta taşıyabilir misiniz?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Akıllı bagajlar;</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>Entegre lityum bataryaları sayesinde harici cihazları şarj etme</li>\n<li>GPS takip sistemi</li>\n<li>Bluetooth ve Wi-Fi bağlantısı</li>\n<li>Kendini tartma &#246;zelliği ve dijital kilit gibi teknolojik donanımları i&#231;eren valizlerdir.&#160;</li>\n</ul>\n<p xmlns=\"http://www.w3.org/1999/xhtml\">Harici cihazları şarj etmeye yarayan entegre lityum bataryalara sahip akıllı bagajlarda batarya &#231;ıkarılamıyorsa, kabin bagajı ya da kayıtlı bagaj olarak u&#231;akta taşınması yasaktır.</p>",
      "lastModifiedDateTime": "25-08-2025",
      "id": "379660"
    }
  ],
  "Turkish Airlines Holidays": [
    {
      "question": "Turkish Airlines Holidays nedir?",
      "answer": "Turkish Airlines Holidays tarafından sunulan tatil paketleri; u&#231;ak bileti, konaklama, transfer, ara&#231; kiralama, sigorta gibi tatil ihtiya&#231;larını tek &#231;atı altında topluyor. Ayrıca, t&#252;m seyahat planlarını dijital ortamda, zahmetsizce yapma ve tatilin her adımını kişiselleştirebilme fırsatı sunuyor.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377640"
    },
    {
      "question": "Turkish Airlines Holidays nasıl avantajlar sağlıyor?",
      "answer": "<p xmlns=\"http://www.w3.org/1999/xhtml\">Turkish Airlines Holidays tatil paketlerinin avantajlarını aşağıda g&#246;rebilirsiniz.</p>\n<ul xmlns=\"http://www.w3.org/1999/xhtml\">\n<li>T&#252;rkiye &#231;ıkışlı seyahatlerde ve u&#231;uş tarihinden 30 g&#252;n &#246;ncesine kadar yapılan iptal taleplerinde, u&#231;uş dahil t&#252;m paket tatiliniz i&#231;in koşulsuz iptal garantisi</li>\n<li>Miles&Smiles ile u&#231;uş miline ek olarak konaklama, transfer, ara&#231; kiralamadan da 10 kata kadar ekstra mil kazanma fırsatı</li>\n<li>D&#252;nya genelinde 550.000'den fazla otel se&#231;eneğiyle geniş envanterden yararlanma fırsatı</li>\n<li>Farklı b&#246;lgelere y&#246;nelik bireysel ihtiya&#231; ve tercihlere &#246;zel tatil/tur programları ile kişiselleştirilmiş seyahat ayrıcalığı</li>\n<li>T&#252;rk Hava Yolları hizmet garantisi ile t&#252;m tatil planınızı tek bir adresten kolayca yapma imkanı</li>\n</ul>",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377641"
    },
    {
      "question": "Turkish Airlines Holidays hizmetindeki tatil paketi seçenekleri neler?",
      "answer": "Turkish Airlines Holidays hizmetinde \\\"Her şey dahil tatil paketleri\\\", \\\"U&#231;ak dahil tatil paketleri\\\" gibi her ihtiyaca y&#246;nelik se&#231;enekler var. Detaylı bilgilere <a href=\\\"https://www.turkishairlinesholidays.com/tr-tr?utm_source=google-brand&utm_medium=cpc&gad_source=1&gclid=CjwKCAiA5eC9BhAuEiwA3CKwQnUat35tseJg72qcfb-xRRALkkNfhCiqf_-MkJlhuxcAeebFx6sFUxoCd1sQAvD_BwE\\\" target=\\\"_blank\\\" xmlns=\\\"http://www.w3.org/1999/xhtml\\\">Turkish Airlines Holidays</a> sayfamızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377642"
    },
    {
      "question": "Turkish Airlines Holidays tatil paketi fiyatları nedir?",
      "answer": "Fiyatlar, alacağınız pakete g&#246;re farklılık g&#246;stermektedir. Paket satın alırken yapılan &#246;demenin dışında kesinlikle herhangi bir &#246;deme yapmazsınız. Zaman zaman sunulan <a href=\"https://www.turkishairlinesholidays.com/tr-tr/erken-rezervasyon-otelleri-ve-tatil-paketleri\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">erken rezervasyon</a> ve son dakika fırsatlarıyla da &#231;ok daha uygun koşullarda, ekonomik bir tatil imkanı yakalayabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377643"
    },
    {
      "question": "Hazır tatil paketi seçeneklerinde değişiklik yapabilir misiniz?",
      "answer": "Temelde u&#231;ak bileti ve otel kombinasyonundan oluşan dinamik paketlere farklı kapsamlarda ara&#231; kiralama, transfer, tur, aktivite gibi hizmetlerden ihtiyacınıza g&#246;re ekleme yapabilirsiniz. Dilerseniz, değişiklik yapmadan planı ve i&#231;eriği belirli, birden &#231;ok destinasyon ve tur-aktivite hizmetleri i&#231;eren hazır paketlerden de yararlanabilirsiniz. Ayrıca paket t&#252;rleri ve i&#231;erikleri pazar bazlı değişiklik g&#246;sterebilir.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377644"
    },
    {
      "question": "Bu tatil paketleri sadece Türkiye çıkışlı uçuşlarda mı geçerli?",
      "answer": "Turkish Airlines Holidays hizmeti, 60'tan fazla kalkış &#252;lkesinden 200'&#252;n &#252;zerinde destinasyona tatil imkanı sunuyor. Detaylı bilgilere <a href=\"http://www.turkishairlinesholidays.com\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">http://www.turkishairlinesholidays.com</a> ve <a href=\"https://holidays.turkishairlines.com/\" target=\"_blank\" xmlns=\"http://www.w3.org/1999/xhtml\">https://holidays.turkishairlines.com/</a> sayfalarımızdan ulaşabilirsiniz.",
      "lastModifiedDateTime": "22-05-2025",
      "id": "377645"
    }
  ]
};

async function importQuestionsForTopic(app, topicName, questions) {
  const locale = 'tr-TR';

  try {
    const topics = await app.entityService.findMany('api::faq-topic.faq-topic', {
      locale: locale,
      filters: { topicName: topicName },
      limit: 1,
    });

    if (!topics || topics.length === 0) {
      console.log(`❌ Topic "${topicName}" not found in ${locale}`);
      return { success: 0, skip: 0, error: 0 };
    }

    const topic = topics[0];
    console.log(`\n✅ Found topic: ${topic.topicName} (ID: ${topic.id})`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const questionData of questions) {
      try {
        const existingQuestion = await app.entityService.findMany('api::faq-question.faq-question', {
          locale: locale,
          filters: { legacyId: questionData.id },
          limit: 1,
        });

        if (existingQuestion && existingQuestion.length > 0) {
          const existing = existingQuestion[0];
          if (!existing.publishedAt && existing.documentId) {
            await app.documents('api::faq-question.faq-question').publish({
              documentId: existing.documentId,
              locale: locale,
            });
            console.log(`✅ Published existing: "${questionData.question.substring(0, 50)}..."`);
            successCount++;
          } else {
            console.log(`⏭️  Skipping: "${questionData.question.substring(0, 50)}..."`);
            skipCount++;
          }
          continue;
        }

        const question = await app.entityService.create('api::faq-question.faq-question', {
          data: {
            title: questionData.question.substring(0, 100),
            question: questionData.question,
            answer: questionData.answer,
            topic: topic.id,
            legacyId: questionData.id,
            order: 0,
          },
          locale: locale,
        });

        if (question.documentId) {
          await app.documents('api::faq-question.faq-question').publish({
            documentId: question.documentId,
            locale: locale,
          });
        }

        console.log(`✅ Created: "${questionData.question.substring(0, 50)}..." (ID: ${question.id})`);
        successCount++;
      } catch (error) {
        console.error(`❌ Error:`, error.message);
        errorCount++;
      }
    }

    console.log(`📊 ${topicName}: ✅ ${successCount} | ⏭️  ${skipCount} | ❌ ${errorCount}`);
    return { success: successCount, skip: skipCount, error: errorCount };
  } catch (error) {
    console.error(`❌ Fatal error for topic "${topicName}":`, error);
    return { success: 0, skip: 0, error: questions.length };
  }
}

async function main() {
  let app;
  try {
    const appContext = await compileStrapi();
    app = await createStrapi(appContext).load();
    app.log.level = 'error';
    global.strapi = app;

    console.log('📝 Importing FAQ questions for all topics...\n');

    let totalSuccess = 0;
    let totalSkip = 0;
    let totalError = 0;

    // Skip "Special Assistance" as it's the same as "Disabled passengers"
    const topicsToImport = Object.keys(questionsByTopic).filter(topic => topic !== "Special Assistance");

    for (const topicName of topicsToImport) {
      const questions = questionsByTopic[topicName];
      if (!questions || questions.length === 0) continue;

      const result = await importQuestionsForTopic(app, topicName, questions);
      totalSuccess += result.success;
      totalSkip += result.skip;
      totalError += result.error;
    }

    console.log('\n' + '='.repeat(50));
    console.log('📊 FINAL SUMMARY:');
    console.log(`   ✅ Success: ${totalSuccess}`);
    console.log(`   ⏭️  Skipped: ${totalSkip}`);
    console.log(`   ❌ Errors: ${totalError}`);
    console.log('='.repeat(50));

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    if (app) {
      await app.destroy();
    }
    process.exit(0);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

