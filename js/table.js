/**
 * CEN227 İnternet Programcılığı - Zaman Yolculuğu Acentesi
 * 4. Tablo Sayfası: Tur Tarihleri ve Fiyatları (table.js)
 * 
 * 7 Zaman Yolculuğu turunun tüm tarih, çağ, süre ve fiyat verilerini
 * düzenli bir karşılaştırma tablosunda sunar; arama ve sıralama yaptırır.
 */

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("chronoTableBody");
  const searchInput = document.getElementById("tableSearch");
  const eraFilter = document.getElementById("tableEraFilter");
  const sortPriceBtn = document.getElementById("sortPriceBtn");

  let tours = getAllTimeTours();
  let sortAscending = true;

  // İlk tablo çizimi
  renderTable(tours);

  // Arama filtresi
  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  // Çağ filtresi
  if (eraFilter) {
    eraFilter.addEventListener("change", applyFilters);
  }

  function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const era = eraFilter ? eraFilter.value : "all";

    const filtered = tours.filter(t => {
      const matchText = t.title.toLowerCase().includes(query) || 
                        t.period.toLowerCase().includes(query) || 
                        t.location.toLowerCase().includes(query);
      const matchEra = (era === "all") || (t.era === era);
      return matchText && matchEra;
    });

    renderTable(filtered);
  }

  // Fiyata Göre Sırala Butonu
  if (sortPriceBtn) {
    sortPriceBtn.addEventListener("click", () => {
      tours.sort((a, b) => sortAscending ? a.price - b.price : b.price - a.price);
      sortAscending = !sortAscending;
      sortPriceBtn.textContent = sortAscending ? "Fiyat: Düşükten Yükseğe ⇅" : "Fiyat: Yüksekten Düşüğe ⇅";
      applyFilters();
    });
  }

  function renderTable(data) {
    if (!tableBody) return;

    if (data.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" style="text-align:center; padding:2rem; color:#94a3b8;">
            Kriterlere uygun zaman yolculuğu turu bulunamadı.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = data.map(tour => {
      let badgeClass = "era-past";
      if (tour.era === "Günümüz") badgeClass = "era-present";
      if (tour.era === "Gelecek") badgeClass = "era-future";

      return `
        <tr>
          <td>
            <strong>${tour.title}</strong>
            <div style="font-size:0.8rem; color:#38bdf8;">📍 ${tour.location}</div>
          </td>
          <td>
            <span class="era-badge ${badgeClass}">${tour.era}</span>
            <div style="font-size:0.75rem; color:#94a3b8; margin-top:2px;">${tour.period}</div>
          </td>
          <td>${tour.duration}</td>
          <td>${tour.seats} Kapsül</td>
          <td>
            <small style="color:#cbd5e1;">${tour.dates.join("<br>")}</small>
          </td>
          <td>
            <strong style="color:#38bdf8; font-size:1.05rem;">
              ${formatMoney(tour.price)}
            </strong>
          </td>
          <td>
            <div style="display:flex; gap:0.4rem;">
              <a href="detail.html?id=${tour.id}" class="btn btn-primary" style="padding:0.35rem 0.65rem; font-size:0.8rem;">
                Detay
              </a>
              <a href="booking.html?id=${tour.id}" class="btn btn-accent" style="padding:0.35rem 0.65rem; font-size:0.8rem;">
                Kayıt Ol
              </a>
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }
});
