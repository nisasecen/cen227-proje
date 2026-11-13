/**
 * CEN227 İnternet Programcılığı - Zaman Yolculuğu Acentesi
 * 1. Liste Sayfası Mantığı (list.js)
 * 
 * 7 Zaman Yolculuğu turunun (3 Geçmiş, 1 Günümüz, 3 Gelecek)
 * dinamik listelenmesi, arama ve çağ filtrelemesi.
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("toursList");
  const searchInput = document.getElementById("searchInput");
  const eraSelect = document.getElementById("eraSelect");

  const tours = getAllTimeTours();

  // İlk listeleme
  displayTours(tours);

  // Arama filtresi
  if (searchInput) {
    searchInput.addEventListener("input", filterTours);
  }

  // Çağ filtresi (Geçmiş, Günümüz, Gelecek)
  if (eraSelect) {
    eraSelect.addEventListener("change", filterTours);
  }

  function filterTours() {
    const text = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const era = eraSelect ? eraSelect.value : "all";

    const filtered = tours.filter(tour => {
      const matchText = tour.title.toLowerCase().includes(text) || 
                        tour.location.toLowerCase().includes(text) || 
                        tour.period.toLowerCase().includes(text);
      const matchEra = (era === "all") || (tour.era === era);
      return matchText && matchEra;
    });

    displayTours(filtered);
  }

  function displayTours(data) {
    if (!container) return;

    if (data.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 3rem; color:#94a3b8;">
          <p style="font-size:1.5rem;">⏱️</p>
          <p>Aradığınız zaman koordinatına ait tur bulunamadı.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = data.map(tour => {
      let badgeClass = "era-past";
      if (tour.era === "Günümüz") badgeClass = "era-present";
      if (tour.era === "Gelecek") badgeClass = "era-future";

      return `
        <div class="tour-card">
          <img src="${tour.image}" alt="${tour.title}" loading="lazy">
          <div class="tour-card-body">
            <div class="tour-card-header">
              <span class="era-badge ${badgeClass}">${tour.era}</span>
              <span style="font-size:0.85rem; color:#38bdf8; font-weight:700;">⌛ ${tour.period}</span>
            </div>
            <h3 class="tour-card-title">${tour.title}</h3>
            <div class="tour-card-meta">📍 ${tour.location} • ⏱ ${tour.duration}</div>
            <p class="tour-card-desc">${tour.desc}</p>
            <div class="tour-card-footer">
              <span class="tour-price">${formatMoney(tour.price)}</span>
              <a href="detail.html?id=${tour.id}" class="btn btn-primary">
                Programı İncele →
              </a>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }
});
