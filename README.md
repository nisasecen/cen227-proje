# CEN227 İnternet Programcılığı - Vize Projesi
## ChronoVoyage: Zaman Yolculuğu Seyahat Acentesi

Bu proje, **CEN227 İnternet Programcılığı** dersi vize ödevi için geliştirilmiş; günümüzden geçmişe ve geleceğe fantastik zaman yolculuğu turları düzenleyen, 4 birbirine bağlı sayfadan oluşan modern ve sade bir web uygulamasıdır.

---

## 7 Farklı Tur (3 Geçmiş, 1 Günümüz, 3 Gelecek)

1. **Geçmiş 1:** Antik Mısır & Büyük Piramitlerin İnşası (M.Ö. 2560 - Giza)
2. **Geçmiş 2:** Rönesans İtalyası & Da Vinci Atölyesi (M.S. 1503 - Floransa)
3. **Geçmiş 3:** Kretase Dönemi Dinozor Safarisi (68 Milyon Yıl Önce - Pangea)
4. **Günümüz 1:** Günümüz Kapadokya & İstanbul Kültür Rotası (2026 Yılı - Türkiye)
5. **Gelecek 1:** Neo-Tokyo 2099 Siber Metropol Keşfi (2099 Yılı - Pasifik)
6. **Gelecek 2:** Mars Kolonisi & Olympus Mons Dağı Gezisi (2150 Yılı - Kızıl Gezegen)
7. **Gelecek 3:** Atlantis 2242 Okyanus Altı Biyo-Şehir (2242 Yılı - Okyanus Çukuru)

---

## İstenen 4 Sayfa ve Kullanıcı Akışı (User Flow)

Ödev tablosundaki 4 sütunla birebir uyumlu:

1. **1. Tur Listesi (`index.html`):** 7 farklı zaman turunu kartlar halinde listeler. Çağlara göre (Geçmiş / Günümüz / Gelecek) filtreleme ve anlık metin araması sunar.
2. **2. Tur Detayı & Programı (`detail.html`):** Seçilen turun (`detail.html?id=X`) kronolojik gün gün/aşama aşama seyahat programını, zaman koordinatını ve fiyata dahil kuantum ekipmanlarını gösterir. *"Bu Tura Kayıt Ol"* butonu turu 3. sayfaya aktarır.
3. **3. Tur Kayıt Formu (`booking.html`):** Detay sayfasından seçilen turu otomatik işaretler. Ad-soyad, e-posta, iletişim, tarih ve kişi sayısı alır.
   - **Canlı Hesaplama:** Kişi sayısı değiştikçe toplam tutar JavaScript ile anında hesaplanır.
   - **Form Doğrulama (Validation):** Ad, e-posta formatı, telefon ve paradoks güvenlik protokolü kontrol edilir.
4. **4. Tur Tarihleri ve Fiyatları (`tours-table.html`):** 7 turun tüm tarih, süre, çağ ve fiyat bilgilerini düzenli bir karşılaştırma tablosunda sunar. Tabloda arama, çağ filtresi ve fiyata göre sıralama butonu bulunur. Her satırdan doğrudan Detay ve Kayıt sayfalarına geçilebilir.

---

## Dosya Yapısı

```text
travel-agency/
├── index.html        # 1. Tur Listesi
├── detail.html       # 2. Tur Detayı & Seyahat Programı
├── booking.html      # 3. Tur Kayıt Formu
├── tours-table.html  # 4. Tur Tarihleri ve Fiyatları Tablosu
├── css/
│   └── style.css     # Fütüristik & sade tasarım, tam responsive
├── js/
│   ├── data.js       # 7 turun merkezi verileri ve LocalStorage fonksiyonları
│   ├── main.js       # Ortak menü kontrolleri
│   ├── list.js       # Dinamik tur listeleme ve filtreleme
│   ├── detail.js     # URL'den ?id=X alıp seyahat programını basma
│   ├── booking.js    # Form doğrulama ve canlı fiyat hesabı
│   └── table.js      # Karşılaştırma tablosu ve sıralama
└── README.md
```

---
