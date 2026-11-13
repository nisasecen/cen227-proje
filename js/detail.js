/**
 * CEN227 İnternet Programcılığı - Zaman Yolculuğu Acentesi
 * 2. Detay & Seyahat Programı Sayfası (detail.js)
 * 
 * URL parametresinden (?id=X) seçilen turun seyahat programı,
 * çağ bilgisi ve fiyata dahil ekipmanları dinamik yükler.
 */

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const tourId = params.get("id") || 1; // Yoksa varsayılan 1. tur

  const tour = getTimeTourById(tourId);

  if (!tour) {
    document.getElementById("detailBox").innerHTML = `
      <div style="padding:3rem; text-align:center;">
        <h2>Zaman Koordinatı Bulunamadı</h2>
        <a href="index.html" class="btn btn-primary" style="margin-top:1rem;">← Tur Listesine Dön</a>
      </div>
    `;
    return;
  }

  // Rozet
  const eraBadge = document.getElementById("tourEraBadge");
  if (eraBadge) {
    eraBadge.textContent = `${tour.era} • ${tour.period}`;
    if (tour.era === "Geçmiş") eraBadge.className = "era-badge era-past";
    else if (tour.era === "Günümüz") eraBadge.className = "era-badge era-present";
    else eraBadge.className = "era-badge era-future";
  }

  // Başlık, Lokasyon ve Süre
  document.getElementById("tourTitle").textContent = tour.title;
  document.getElementById("tourLocation").textContent = `📍 Koordinat: ${tour.location} | ⏱ Süre: ${tour.duration}`;
  
  // Resim ve Açıklama
  document.getElementById("tourImage").src = tour.image;
  document.getElementById("tourDesc").textContent = tour.desc;

  // Aşama Aşama Zaman Yolculuğu Programı
  const programList = document.getElementById("programList");
  if (programList && tour.program) {
    programList.innerHTML = tour.program.map(step => `
      <li style="margin-bottom:0.75rem;">
        <strong style="color:#38bdf8;">•</strong> ${step}
      </li>
    `).join("");
  }

  // Dahil Olan Ekipmanlar
  const equipmentList = document.getElementById("equipmentList");
  if (equipmentList && tour.equipment) {
    equipmentList.innerHTML = tour.equipment.map(eq => `
      <li>✓ ${eq}</li>
    `).join("");
  }

  // Yan Panel: Fiyat ve Koltuk
  document.getElementById("tourPrice").textContent = formatMoney(tour.price);
  document.getElementById("tourSeats").textContent = `Kalan Kontenjan: ${tour.seats} Yolcu Kapsülü`;

  // Tur Tarihleri Seçimi
  const dateSelect = document.getElementById("dateSelect");
  if (dateSelect && tour.dates) {
    dateSelect.innerHTML = tour.dates.map(d => `<option value="${d}">${d}</option>`).join("");
  }

  // Kayıt Sayfasına ID Aktaran Buton (User Flow)
  const bookBtn = document.getElementById("bookBtn");
  if (bookBtn) {
    bookBtn.href = `booking.html?id=${tour.id}`;
  }
});
