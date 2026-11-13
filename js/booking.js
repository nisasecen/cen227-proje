/**
 * CEN227 İnternet Programcılığı - Zaman Yolculuğu Acentesi
 * 3. Tur Kayıt Formu Mantığı (booking.js)
 * 
 * Sayfalar arası veri aktarımı (?id=X), canlı fiyat hesaplaması
 * ve form alanlarının JavaScript ile doğrulanması (validation).
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("chronoBookingForm");
  const tourSelect = document.getElementById("tourSelect");
  const guestsInput = document.getElementById("passengersCount");
  const jumpDate = document.getElementById("jumpDate");

  // Canlı Özet Alanları
  const summaryTour = document.getElementById("summaryTour");
  const summaryEra = document.getElementById("summaryEra");
  const summaryPrice = document.getElementById("summaryPrice");
  const summaryCount = document.getElementById("summaryCount");
  const summaryTotal = document.getElementById("summaryTotal");

  const tours = getAllTimeTours();

  // 1. Turları Select Menüsüne Ekle
  tours.forEach(tour => {
    const opt = document.createElement("option");
    opt.value = tour.id;
    opt.textContent = `[${tour.era}] ${tour.title} (${formatMoney(tour.price)})`;
    tourSelect.appendChild(opt);
  });

  // 2. URL'den (?id=X) gelen turu otomatik seç
  const params = new URLSearchParams(window.location.search);
  const incomingId = params.get("id");
  if (incomingId) {
    tourSelect.value = incomingId;
  }

  // Tarih minimum bugün
  if (jumpDate) {
    const today = new Date().toISOString().split("T")[0];
    jumpDate.min = today;
    jumpDate.value = today;
  }

  // İlk fiyat hesabını çalıştır
  calculatePrice();

  // Kullanıcı tur veya yolcu sayısı değiştirdiğinde canlı hesapla
  tourSelect.addEventListener("change", calculatePrice);
  guestsInput.addEventListener("input", calculatePrice);

  function calculatePrice() {
    const tour = getTimeTourById(tourSelect.value);
    const count = parseInt(guestsInput.value, 10) || 1;

    if (tour) {
      summaryTour.textContent = tour.title;
      summaryEra.textContent = `${tour.era} (${tour.period})`;
      summaryPrice.textContent = formatMoney(tour.price);
      summaryCount.textContent = `${count} Zaman Yolcusu`;
      summaryTotal.textContent = formatMoney(tour.price * count);
    } else {
      summaryTour.textContent = "Seçilmedi";
      summaryEra.textContent = "-";
      summaryPrice.textContent = "0 TL";
      summaryCount.textContent = `${count} Kişi`;
      summaryTotal.textContent = "0 TL";
    }
  }

  // 3. Form Doğrulama (Validation)
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("travelerName");
    const email = document.getElementById("travelerEmail");
    const phone = document.getElementById("travelerPhone");
    const date = document.getElementById("jumpDate");
    const protocolCheck = document.getElementById("protocolCheck");

    let isValid = true;

    // Ad Soyad Kontrolü
    if (name.value.trim().length < 3) {
      showError(name, "Lütfen adınızı ve soyadınızı eksiksiz giriniz (en az 3 harf).");
      isValid = false;
    } else {
      clearError(name);
    }

    // E-posta Kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
      showError(email, "Geçerli bir e-posta adresi giriniz (örn: yolcu@zaman.com).");
      isValid = false;
    } else {
      clearError(email);
    }

    // Telefon Kontrolü (en az 10 karakter)
    if (phone.value.trim().length < 10) {
      showError(phone, "Lütfen en az 10 haneli geçerli bir iletişim numarası giriniz.");
      isValid = false;
    } else {
      clearError(phone);
    }

    // Tarih Kontrolü
    if (!date.value) {
      showError(date, "Lütfen zaman sıçrama tarihi seçiniz.");
      isValid = false;
    } else {
      clearError(date);
    }

    // Zaman Paradoksu Güvenlik Sözleşmesi Onayı
    if (!protocolCheck.checked) {
      alert("UYARI: Zaman Yolculuğu Güvenlik Protokolünü onaylamadan sıçrama yapılamaz.");
      isValid = false;
    }

    // Form geçerliyse kaydet ve bildir
    if (isValid) {
      const selectedTour = getTimeTourById(tourSelect.value);
      const bookingData = {
        tourTitle: selectedTour ? selectedTour.title : "",
        era: selectedTour ? selectedTour.era : "",
        travelerName: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        jumpDate: date.value,
        passengers: parseInt(guestsInput.value, 10),
        totalPrice: selectedTour ? selectedTour.price * parseInt(guestsInput.value, 10) : 0
      };

      const savedRecord = saveTimeBooking(bookingData);

      alert(` TEBRİKLER! ZAMAN SIÇRAMA KAYDINIZ TAMAMLANDI.\n\nBilet Kodu: ${savedRecord.id}\nRota: ${savedRecord.tourTitle}\nÇağ: ${savedRecord.era}\nYolcu: ${savedRecord.travelerName}\nToplam Tutar: ${formatMoney(savedRecord.totalPrice)}\n\nKuantum Kapsülünüz hazırlandı.`);

      form.reset();
      calculatePrice();
    }
  });

  function showError(input, msg) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    const errEl = document.getElementById(`${input.id}-error`);
    if (errEl) {
      errEl.textContent = msg;
      errEl.style.display = "block";
    }
  }

  function clearError(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    const errEl = document.getElementById(`${input.id}-error`);
    if (errEl) {
      errEl.style.display = "none";
    }
  }
});
