// 🌸 Scroll ke section berikut (buka undangan)
function scrollToNext() {
  const nextSection = document.querySelector("#tanggal");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

// 🌸 Tombol buka undangan hilang saat scroll lewat cover
window.addEventListener("scroll", () => {
  const openBtn = document.querySelector("#catchMe");
  const cover = document.querySelector("#cover");
  if (!openBtn || !cover) return;

  const coverBottom = cover.getBoundingClientRect().bottom;
  openBtn.classList.toggle("hide", coverBottom <= 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll("#tanggal, .main-img, #ayat, #ayat .dual-layer, .fade-img, #doa, .doa-img, #countdown, .fade-item");
  let lastScrollY = window.scrollY;
  let scrollDir = "down";

  // 🔁 Deteksi arah scroll
  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY;
      scrollDir = y > lastScrollY ? "down" : "up";
      lastScrollY = y;
    },
    { passive: true }
  );

  // 🔍 Observer
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight;

        // 🟢 Jika elemen MASUK viewport & scroll ke bawah → tampil
        if (entry.isIntersecting && scrollDir === "down") {
          el.classList.add("show");
        }

        // 🔴 Jika elemen KELUAR & scroll ke bawah → reset hanya bila keluar lewat bawah
        if (!entry.isIntersecting && scrollDir === "down") {
          if (rect.top > viewportH) {
            el.classList.remove("show");
          }
        }
      });
    },
    {
      threshold: 0.2, // sensitivitas muncul
      rootMargin: "0px 0px -10% 0px", // sedikit buffer bawah
    }
  );

  fadeItems.forEach((item) => fadeObserver.observe(item));

  // 🌸 Tombol interaktif “Catch Me”
  const btn = document.getElementById("catchMe");
  const cover = document.getElementById("cover");

  if (btn && cover) {
    btn.addEventListener("mouseover", moveButton);
    btn.addEventListener("click", moveButton);
    btn.addEventListener("touchstart", moveButton);

    function moveButton() {
      const rect = cover.getBoundingClientRect();
      const maxX = rect.width - btn.offsetWidth;
      const maxY = rect.height - btn.offsetHeight;
      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      btn.style.left = `${randomX}px`;
      btn.style.top = `${randomY}px`;
    }
  }
});

// 🌸 Countdown Hari H

const targetDate = new Date("April 22, 2026 00:00:00").getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
};

setInterval(countdown, 1000);