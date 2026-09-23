import { activities, type Activity } from "./activities";

const translations: Record<string, { title: string; description: string }> = {
  "chester-beatty-library": {
    title: "Chester Beatty Kütüphanesi",
    description: "Dünyanın dört bir yanından nadir el yazmalarını, baskıları ve eserleri keşfedin.",
  },
  "phoenix-park": {
    title: "Phoenix Park",
    description: "Avrupa'nın en büyük kentsel parklarından biri; muhteşem manzaralar ve geyik gözlemi sunar.",
  },
  "national-museum-of-ireland-decorative-arts": {
    title: "İrlanda Ulusal Müzesi - Dekoratif Sanatlar",
    description: "İrlanda'nın en büyük askeri tarih koleksiyonuna ve sergilerine ev sahipliği yapar.",
  },
  "national-museum-of-ireland-archeology": {
    title: "İrlanda Ulusal Müzesi - Arkeoloji",
    description: "İrlanda tarihinden kalma hazineler dahil olmak üzere antik eserleri sergiler.",
  },
  "national-museum-of-ireland-natural-history": {
    title: "İrlanda Ulusal Müzesi - Doğa Tarihi",
    description: "'Ölü Hayvanat Bahçesi' olarak bilinir; korunmuş hayvan örnekleri sergiler.",
  },
  "national-botanic-gardens": {
    title: "Ulusal Botanik Bahçeleri",
    description: "Huzurlu bir ortamda etkileyici bitki koleksiyonlarını keşfedin.",
  },
  "irish-national-war-memorial-gardens": {
    title: "İrlanda Ulusal Savaş Anıtı Bahçeleri",
    description: "I. Dünya Savaşı'nda şehit düşen İrlandalı askerlere adanmış huzurlu bir bahçe.",
  },
  "national-gallery-of-ireland": {
    title: "İrlanda Ulusal Sanat Galerisi",
    description: "Etkileyici bir Avrupa ve İrlanda sanatı koleksiyonu.",
  },
  "howth-cliff-walk": {
    title: "Howth Kayalık Yürüyüşü",
    description: "Dublin Körfezi'nin muhteşem manzarasını sunan pitoresk bir yürüyüş parkuru.",
  },
  "hugh-lane-gallery": {
    title: "Hugh Lane Galerisi",
    description: "İrlanda'nın en heyecan verici İrlanda ve uluslararası sanat koleksiyonlarından biri.",
  },
  "bray-seafront": {
    title: "Bray Sahili",
    description:
      "Bray Head ve İrlanda Denizi'nin muhteşem manzarasına sahip, bir mil uzunluğunda tarihi Viktorya dönemi sahil yürüyüşü.",
  },
  "ulster-museum": {
    title: "Ulster Müzesi",
    description: "Ulster Müzesi, 1821'de Belfast Doğa Tarihi Derneği olarak kuruldu.",
  },
  "galway-city-museum": {
    title: "Galway Şehir Müzesi",
    description: "Galway'in tarihi ve kültürel mirasına ait eserlerin sergilendiği bir müze.",
  },
  "galway-cathedral": {
    title: "Galway Katedrali",
    description: "Romanesk ve Gotik etkilerin bir arada bulunduğu Rönesans Revival mimarisinin bir örneği.",
  },
  "irish-museum-of-modern-art": {
    title: "İrlanda Modern Sanat Müzesi",
    description: "Dublin 8'in kalbinde, 48 dönümlük bir arazi üzerinde yer alan dinamik bir modern sanat müzesi.",
  },
  "dublin-castle": {
    title: "Dublin Kalesi",
    description: "Devlet dairelerinin ve ortaçağ mahzenlerinin rehberli turlarını sunan tarihi bir mekan.",
  },
  "viking-splash-tour": {
    title: "Viking Splash Turu",
    description: "Dublin'in simge yapılarını gezen eğlenceli ve etkileşimli amfibi bir tur.",
  },
  "national-wax-museum-plus": {
    title: "Ulusal Balmumu Müzesi Plus",
    description: "Ünlü İrlandalı ve dünya çapındaki kişiliklerin balmumu figürlerini içerir.",
  },
  "epic-the-irish-emigration-museum": {
    title: "EPIC İrlanda Göç Müzesi",
    description: "İrlanda'nın diasporasına ve göç tarihine adanmış, tamamen etkileşimli bir müze.",
  },
  "dublin-zoo": {
    title: "Dublin Hayvanat Bahçesi",
    description: "Güzel peyzajlı habitatlarda çok çeşitli hayvanlara ev sahipliği yapar.",
  },
  dublinia: {
    title: "Dublinia",
    description: "Viking ve ortaçağ Dublin tarihini sergileyen etkileşimli bir müze.",
  },
  "kilmainham-gaol-museum": {
    title: "Kilmainham Hapishanesi Müzesi",
    description: "Zengin İrlanda tarihine sahip, müzeye dönüştürülmüş eski bir hapishane.",
  },
  "butlers-chocolate-experience": {
    title: "Butlers Çikolata Deneyimi",
    description: "Çikolata yapımına tatlı bir perde arkası bakışı ve tadım imkanı.",
  },
  "malahide-castle-gardens": {
    title: "Malahide Kalesi ve Bahçeleri",
    description: "Rehberli turlar ve geniş bahçeleriyle ortaçağdan kalma bir kaleyi ziyaret edin.",
  },
  "airfield-estate": {
    title: "Airfield Malikanesi",
    description: "Çiftlikten sofraya bir deneyim yaşayın; bahçeleri, hayvanları ve daha fazlasını keşfedin.",
  },
  "croke-park-stadium-tour-gaa-museum": {
    title: "Croke Park Stadyum Turu ve GAA Müzesi",
    description: "İrlanda'nın ulusal spor stadyumunu ve GAA müzesini keşfedin.",
  },
  "glasnevin-cemetery-museum": {
    title: "Glasnevin Mezarlığı Müzesi",
    description: "Burada gömülü ünlü kişilerin hikayeleri aracılığıyla İrlanda tarihini öğrenin.",
  },
  "national-leprechaun-museum": {
    title: "Ulusal Leprechaun Müzesi",
    description: "İrlanda mitolojisine ve folkloruna eğlenceli ve etkileşimli bir yolculuk.",
  },
  "imaginosity-dublin-children-s-museum": {
    title: "Imaginosity - Dublin Çocuk Müzesi",
    description: "Küçük ziyaretçiler için tasarlanmış yaratıcı ve eğitici bir deneyim.",
  },
  "jeanie-johnston-tall-ship-famine-museum": {
    title: "Jeanie Johnston Yelkenli Gemisi ve Kıtlık Müzesi",
    description: "Bu kıtlık gemisinin replikasına adım atın ve İrlanda'nın göç tarihini öğrenin.",
  },
  "the-irish-rock-n-roll-museum-experience": {
    title: "İrlanda Rock'n Roll Müzesi Deneyimi",
    description: "Anılar ve rehberli turlarla Dublin'in canlı müzik tarihini keşfedin.",
  },
  "marinelife-aquarium-bray": {
    title: "Marinelife Akvaryumu Bray",
    description: "Dublin yakınlarındaki bu aile dostu akvaryumda büyüleyici deniz canlılarını keşfedin.",
  },
  "zipit-forest-adventures": {
    title: "Zipit Orman Maceraları",
    description: "Zipline ve tırmanma parkurlarıyla açık hava macera parkı.",
  },
  "hop-on-hop-off-bus-tour-big-bus": {
    title: "Hop-On Hop-Off Otobüs Turu \"Big Bus\"",
    description: "24 saatlik hop-on hop-off otobüs turu bileti. Yolcular istedikleri durakta inip binebilir.",
  },
  "st-patrick-s-cathedral-self-guided-visit": {
    title: "St. Patrick Katedrali Kendi Kendine Gezi",
    description: "İrlanda'nın en büyük katedralini kendi kendinize gezin. Biletlere sesli rehber dahildir.",
  },
  "gpo-museum-self-guided-visit": {
    title: "GPO Müzesi Kendi Kendine Gezi",
    description: "1916 Paskalya Ayaklanması'nın karargahı olmasıyla tarihte bilinir.",
  },
  "glendalough-monastic-site-and-visitor-centre": {
    title: "Glendalough Manastır Alanı ve Ziyaretçi Merkezi",
    description: "Avrupa'nın en ünlü dini merkezlerinden biri.",
  },
  "titanic-museum": {
    title: "Titanic Müzesi",
    description: "Her şeyin başladığı şehirde RMS Titanic'in gerçek efsanesini yaşayın.",
  },
  "game-of-thrones-studio": {
    title: "Game of Thrones Stüdyosu",
    description: "Kuzey İrlanda'nın Banbridge kentindeki orijinal çekim stüdyolarında yer alır.",
  },
  "james-joyce-centre": {
    title: "James Joyce Merkezi",
    description: "James Joyce'un yaşamını ve eserlerini konu alır.",
  },
  "st-canice-s-cathedral": {
    title: "St Canice Katedrali",
    description: "St Canice, altı piskoposluk bölgesini ve sekiz ili kapsayan bir episkoposluğun ana kilisesidir.",
  },
  "blarney-castle-and-gardens": {
    title: "Blarney Kalesi ve Bahçeleri",
    description:
      "Son birkaç yüzyılda milyonlarca kişi Blarney'e akın etti; İrlanda'nın en büyük hazinelerinden biri haline geldi.",
  },
  "beyond-the-trees-avondale-experience": {
    title: "Beyond the Trees Avondale Deneyimi",
    description:
      "İrlanda ormancılığının başladığı ve İrlanda'nın en büyük devlet adamlarından Charles Stewart Parnell'in doğduğu Avondale Evi'nin hikayesini keşfedin.",
  },
  "trinity-college-library-book-of-kells": {
    title: "Trinity College Kütüphanesi ve Kells Kitabı",
    description: "İkonik Long Room Kütüphanesi'ni ziyaret edin ve aydınlatılmış Kells Kitabı'nı görün.",
  },
  "bunratty-castle-and-folk-walk": {
    title: "Bunratty Kalesi ve Halk Yürüyüşü",
    description:
      "Büyük Salon'da dolaşın, dönem mobilyaları ve eserlerinden oluşan olağanüstü koleksiyona hayran kalın ve surlardan nefes kesen manzaranın tadını çıkarın.",
  },
  "guinness-storehouse": {
    title: "Guinness Storehouse",
    description:
      "Yedi etkileyici katta kendi kendinize bir tur yapın ve Gravity Bar'da bir Guinness ya da alkolsüz Guinness 0.0 ile turunuzu tamamlayın.",
  },
  "jameson-distillery-bow-st": {
    title: "Jameson İmalathanesi Bow St.",
    description:
      "Bu ödüllü rehberli tur, 18. yüzyıldaki başlangıcımızdan günümüze uzanan hikayemizi canlandırır ve üç Jameson viskisinin tadımıyla son bulur.",
  },
  "cobh-heritage-centre-self-guided": {
    title: "Cobh Miras Merkezi (Kendi Kendine Gezi)",
    description:
      "Göç hikayelerinden Titanic ve Lusitania'nın ikonik yolculuklarına kadar İrlanda'nın denizcilik mirasını şekillendiren güçlü hikayeleri keşfedin.",
  },
  "crumlin-road-gaol-self-guided": {
    title: "Crumlin Road Hapishanesi (Kendi Kendine Gezi)",
    description:
      "Bu ikonik yapı, Kuzey İrlanda'nın günümüze ulaşan tek Viktorya dönemi hapishanesidir ve Belfast'ta yapılacak en popüler etkinliklerden biridir.",
  },
  "celtic-nights": {
    title: "Celtic Nights",
    description:
      "30. sezonunda, ödüllü İrlanda dansını ve en iyi geleneksel canlı müziği deneyimleyin; muhteşem bir 3 kap à la carte yemek eşliğinde.",
  },
  "w5-belfast": {
    title: "W5 Belfast",
    description:
      "250'den fazla dünya standartlarında sergi, 8 etkileşimli bölge ve günlük bilim gösterileri sunan etkileşimli bir bilim ve keşif merkezi.",
  },
  "mind-of-a-serial-killer-the-experience": {
    title: "Mind of a Serial Killer: Deneyim",
    description:
      "Dünyanın en ünlü seri katillerinin arkasındaki ürkütücü gerçekleri ve onları adalete teslim eden soruşturmaları keşfedin.",
  },
  "world-of-illusion": {
    title: "World of Illusion",
    description:
      "Yer çekimine meydan okuyan bir oda, sonsuzluk aynaları ve bir girdap tünelini içeren, algınızı zorlayacak 70'ten fazla illüzyon ve etkileşimli sergiyi keşfedin.",
  },
  "sandbox-vr": {
    title: "Sandbox VR",
    description:
      "6 kişiye kadar gruplar için, gerçek dünyadaki gibi içerideki herkesi görüp fiziksel olarak etkileşime girebileceğiniz fütüristik bir VR deneyimi.",
  },
  explorium: {
    title: "Explorium",
    description:
      "Dublin'in Sandyford bölgesinde yer alan, 250'den fazla sergiyle 110.000 metrekarelik dev bir alanda uygulamalı, etkileşimli bir deneyim sunan İrlanda'nın Ulusal Bilim ve Spor Merkezi.",
  },
  "city-kayaking": {
    title: "City Kayaking",
    description:
      "Ünlü O'Connell ve Ha'penny köprülerinin altından kürek çekmenin tek yolu! Dublin'in en ünlü simge yapılarını benzersiz bir açıdan görmenin harika bir yolu.",
  },
  "bray-bowl": {
    title: "Bray Bowl",
    description:
      "Her yaşa uygun geniş bir aktivite seçkisi; video oyun salonları, bowling, lazer etiketi, havuz, bilardo ve Amerikan bilardosunu içerir.",
  },
  "cliffs-of-moher-tour-from-dublin": {
    title: "Dublin'den Moher Kayalıkları Turu",
    description:
      "Bu Moher Kayalıkları turundaki yolculuğunuz sizi Dublin'in Liffey Nehri kıyılarından İrlanda'nın Vahşi Atlantik Yolu'na götürecek.",
  },
  "giant-s-causeway-tour-from-dublin": {
    title: "Dublin'den Giant's Causeway Turu",
    description:
      "60 milyon yıl önce volkanik faaliyet sonucu oluşan 40.000'den fazla iç içe geçmiş bazalt sütundan oluşan UNESCO Dünya Mirası Alanı.",
  },
  "dingle-tour-from-cork": {
    title: "Cork'tan Dingle Turu",
    description:
      "Dingle Yarımadası, bu muhteşem yarımadayı gezerken görebileceğiniz olağanüstü dağ manzaraları ve sıra dışı antik eserlere sahiptir.",
  },
  "kerry-tour-from-dublin": {
    title: "Dublin'den Kerry Turu",
    description:
      "Dublin'den Kerry Günlük Turu, yüzyıllardır ziyaretçileri cezbeden İrlanda'nın gizemli ve el değmemiş bölgesini keşfeder.",
  },
  "full-day-tour-to-glendalough-wicklow": {
    title: "Glendalough ve Wicklow Tam Günlük Turu",
    description: "İrlanda kırsalını ve manastır kalıntılarını keşfeden manzaralı bir günübirlik gezi.",
  },
  "connemara-and-galway-tour-from-dublin": {
    title: "Dublin'den Connemara ve Galway Turu",
    description:
      "Muhteşem göller, romantik kaleler, taş duvarlar ve ıssız vadileriyle Connemara; The Quiet Man ve The Guard gibi birçok gişe rekortmeni filmde yer alır.",
  },
};

export const activitiesTr: Activity[] = activities.map((a) => {
  const t = translations[a.slug];
  return t ? { ...a, title: t.title, description: t.description } : a;
});
