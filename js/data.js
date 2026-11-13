/**
 * CEN227 İnternet Programcılığı - Zaman Yolculuğu Seyahat Acentesi
 * Merkezi Veri Dosyası (data.js)
 * 
 * 7 Farklı Tur: 3 Geçmiş, 1 Günümüz, 3 Gelecek
 */

const TIME_TOURS = [
  // --- GEÇMİŞ TURLARI (3 Adet) ---
  {
    id: 1,
    title: "Antik Mısır & Büyük Piramitlerin İnşası",
    era: "Geçmiş",
    period: "M.Ö. 2560",
    location: "Giza, Antik Mısır",
    duration: "4 Zaman Günü",
    durationDays: 4,
    price: 18500,
    seats: 5,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
    desc: "Firavun Keops dönemine zaman sıçraması! Giza Piramitleri'nin inşa aşamasına tanıklık edin ve Nil Nehri boyunca antik ritüelleri yerinde izleyin.",
    program: [
      "1. Zaman Sıçraması: Antik Nil kıyısına iniş ve döneme uygun keten kıyafet hazırlığı.",
      "2. Gün: Büyük Giza Piramidi taş blok yerleştirme töreninin panoramik izlenmesi.",
      "3. Gün: Baş Mimar İmhotepe'nin atölyesi ve hiyeroglif yazıcılarıyla buluşma.",
      "4. Gün: Karnak Tapınağı kutlamaları ve 2026 yılına zaman portalıyla güvenli dönüş."
    ],
    equipment: ["Kuantum Zaman Kapsülü", "Evrensel Antik Dil Çevirici", "Dönem Giysisi", "Zaman Paradoksu Sigortası"],
    dates: ["M.Ö. 2560 Sezonu - Aralık 2026", "M.Ö. 2560 Sezonu - Ocak 2027"]
  },
  {
    id: 2,
    title: "Rönesans İtalyası & Da Vinci Atölyesi",
    era: "Geçmiş",
    period: "M.S. 1503",
    location: "Floransa, İtalya",
    duration: "3 Zaman Günü",
    durationDays: 3,
    price: 15200,
    seats: 4,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=800&q=80",
    desc: "Rönesans'ın altın çağında Floransa sokaklarında yürüyün. Leonardo da Vinci'nin Mona Lisa tablosunu resmedişini gizli gözlem locasından izleyin.",
    program: [
      "1. Gün: 16. Yüzyıl Floransa Arno Nehri kıyısına varış ve Medici sarayı ziyareti.",
      "2. Gün: Leonardo da Vinci'nin bottega atölyesine misafir olma ve uçuş makinelerini inceleme.",
      "3. Gün: Ponte Vecchio çarşısı gezisi ve günümüze kuantum dönüş."
    ],
    equipment: ["Görünmezlik / Kamuflaj Pelerini", "Dönem Paraları (Florin)", "Türkçe & İtalyanca Nöro-Çevirici", "Rehber Kapsül"],
    dates: ["1503 Bahar Sezonu - Aralık 2026", "1503 Yaz Sezonu - Şubat 2027"]
  },
  {
    id: 3,
    title: "Kretase Dönemi Dinozor Safarisi",
    era: "Geçmiş",
    period: "68 Milyon Yıl Önce",
    location: "T-Rex Vadisi, Kuzey Pangea",
    duration: "2 Zaman Günü",
    durationDays: 2,
    price: 24000,
    seats: 3,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    desc: "İnsanlık tarihinden çok önceye! Zırhlı enerji kalkanları içinde Tyrannosaurus Rex ve Triceratops sürülerini doğal ortamlarında gözlemleyin.",
    program: [
      "1. Gün: Mezozoik Kretase atmosferine geçiş, uçan Pterozor sürüleri üzerinden zırhlı uçuş.",
      "2. Gün: Devasa Brachiosaurus otlama vadisi safarisi ve güvenli kuantum geri çekilme."
    ],
    equipment: ["Manyetik Enerji Kalkanı Zırhı", "Koku Maskeleyici Cihaz", "Yüksek Hızlı Tahliye Jetpack'i", "Krono-Radar"],
    dates: ["Kretase Sezonu - Ocak 2027", "Kretase Sezonu - Mart 2027"]
  },

  // --- GÜNÜMÜZ TURU (1 Adet) ---
  {
    id: 4,
    title: "Günümüz Kapadokya & İstanbul Kültür Rotası",
    era: "Günümüz",
    period: "2026 Yılı (Bugün)",
    location: "Kapadokya & İstanbul, Türkiye",
    duration: "4 Gün 3 Gece",
    durationDays: 4,
    price: 6500,
    seats: 8,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1641128324571-a93c349b73c4?auto=format&fit=crop&w=800&q=80",
    desc: "Zaman portalından çıkıp 21. yüzyılın eşsiz coğrafyasına adım atın: Göreme sıcak hava balonları, Boğaz tekne turu ve tarihi yarımada.",
    program: [
      "1. Gün: İstanbul Tarihi Yarımada, Ayasofya ve Kapalıçarşı turu.",
      "2. Gün: Boğaz vapur turu ve Kapadokya'ya hızlı transfer.",
      "3. Gün: Gün doğumunda sıcak hava balonu uçuşu ve peri bacaları vadisi.",
      "4. Gün: Yeraltı şehri keşfi ve acente ana üssüne dönüş."
    ],
    equipment: ["Lüks Konaklama", "VIP Transfer", "Müze Kartı", "Profesyonel Tarih Rehberi"],
    dates: ["2026-12-05", "2026-12-20", "2027-01-15"]
  },

  // --- GELECEK TURLARI (3 Adet) ---
  {
    id: 5,
    title: "Neo-Tokyo 2099 Siber Metropol Keşfi",
    era: "Gelecek",
    period: "2099 Yılı",
    location: "Neo-Tokyo, Pasifik Federasyonu",
    duration: "3 Zaman Günü",
    durationDays: 3,
    price: 21500,
    seats: 6,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    desc: "2099 yılının neon gökdelenleri, uçan araç hatları ve yapay zeka şehri Neo-Tokyo'da fütüristik bir gece hayatı ve teknoloji turu.",
    program: [
      "1. Gün: 2099 Gelecek koordinatına sıçrama, bulut üstü Sky-Hotel'e yerleşme.",
      "2. Gün: Uçan taksi (Aero-Cab) ile gökdelen hatları turu ve Holografik Pazar yeri.",
      "3. Gün: Sibernetik Yapay Zeka Müzesi ziyareti ve 2026'ya geri sıçrama."
    ],
    equipment: ["Holografik Gelecek Kimliği", "Aero-Fly Uçuş Kemeri", "Siber Kredi Çipi", "Kronometre"],
    dates: ["2099 Gelecek Sezonu - Aralık 2026", "2099 Gelecek Sezonu - Şubat 2027"]
  },
  {
    id: 6,
    title: "Mars Kolonisi & Olympus Mons Dağı Gezisi",
    era: "Gelecek",
    period: "2150 Yılı",
    location: "Mars Koloni Üssü - Ares 1",
    duration: "5 Zaman Günü",
    durationDays: 5,
    price: 32000,
    seats: 4,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    desc: "2150 yılına gidin ve insanlığın kızıl gezegendeki ilk kubbe şehirlerini, Mars rover yarışlarını ve Güneş Sistemi'nin en yüksek dağı Olympus Mons'u görün.",
    program: [
      "1. Gün: 2150 Mars koordinatına sıçrama, biyosfer kubbe kentine giriş.",
      "2. Gün: Düşük yerçekimi deneyimi ve hidroponik tarım kuleleri turu.",
      "3. Gün: Basınçlı Mars Rover aracıyla kırmızı kanyon safarisi.",
      "4. Gün: Olympus Mons seyir kulesi ve yıldız gözlemi.",
      "5. Gün: Dünya üssüne kuantum dönüş."
    ],
    equipment: ["Yeni Nesil Oksijenli Uzay Giysisi", "Yerçekimi Dengeleme Botları", "Mars Biyosfer İzni", "Zaman Kapsülü"],
    dates: ["2150 Sezonu - Ocak 2027", "2150 Sezonu - Mart 2027"]
  },
  {
    id: 7,
    title: "Atlantis 2242 Okyanus Altı Biyo-Şehir",
    era: "Gelecek",
    period: "2242 Yılı",
    location: "Atlantik Çukuru, Okyanus Altı",
    duration: "3 Zaman Günü",
    durationDays: 3,
    price: 27000,
    seats: 5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    desc: "2242 yılında okyanusun 4000 metre altında inşa edilmiş şeffaf biyo-kubbeler ve biyolüminesans canlıların ışıldadığı su altı medeniyeti.",
    program: [
      "1. Gün: 2242 zaman koordinatına sıçrama ve derin deniz asansörüyle biyo-şehre iniş.",
      "2. Gün: Şeffaf tünellerden parlayan denizaltı canlılarını ve mercan kentini izleme.",
      "3. Gün: Biyolüminesans gösterisi ve 2026 yılına zaman sıçraması ile dönüş."
    ],
    equipment: ["Derin Su Basınç Dengeleyici", "Su Altı Solunum Nanobotu", "Akustik İletişim Cihazı"],
    dates: ["2242 Sezonu - Şubat 2027", "2242 Sezonu - Nisan 2027"]
  }
];

// LocalStorage anahtarları
const TOURS_STORAGE_KEY = 'chronovoyage_tours';
const BOOKINGS_STORAGE_KEY = 'chronovoyage_bookings';

/**
 * Tüm turları döndürür
 */
function getAllTimeTours() {
  const stored = localStorage.getItem(TOURS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error(e);
    }
  }
  localStorage.setItem(TOURS_STORAGE_KEY, JSON.stringify(TIME_TOURS));
  return TIME_TOURS;
}

/**
 * ID'ye göre tek tur bulur
 */
function getTimeTourById(id) {
  const tours = getAllTimeTours();
  return tours.find(t => Number(t.id) === Number(id));
}

/**
 * Kayıtlı rezervasyonları getirir
 */
function getAllTimeBookings() {
  const stored = localStorage.getItem(BOOKINGS_STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

/**
 * Yeni tur kaydı ekler
 */
function saveTimeBooking(booking) {
  const list = getAllTimeBookings();
  const record = {
    id: "CHRONO-" + Math.floor(1000 + Math.random() * 9000),
    dateCreated: new Date().toLocaleDateString('tr-TR'),
    ...booking
  };
  list.unshift(record);
  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(list));
  return record;
}

/**
 * Fiyat biçimlendirme
 */
function formatMoney(amount) {
  return Number(amount).toLocaleString('tr-TR') + " TL";
}
