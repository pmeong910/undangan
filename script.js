// 🌸 Scroll ke section berikut (buka undangan)
function scrollToNext() {
  const nextSection = document.querySelector("#tanggal");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

// 🌸 Tombol kembali ke atas
function scrollToTop() {
  const cover = document.querySelector("#cover");
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Tampilkan kembali cover setelah sedikit delay
  setTimeout(() => {
    if (cover) {
      cover.style.display = "flex";
      cover.classList.remove("fade-out");
      cover.classList.add("fade-in");
    }
  }, 400);
}

// 🌸 Tombol buka undangan hilang saat scroll lewat cover
window.addEventListener("scroll", () => {
  const openBtn = document.querySelector(".open-btn");
  const cover = document.querySelector("#cover");
  if (!openBtn || !cover) return;

  const coverBottom = cover.getBoundingClientRect().bottom;
  openBtn.classList.toggle("hide", coverBottom <= 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(
    "#tanggal .main-img, #ayat .dual-layer, #doa .dual-layer"
  );

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Hapus lalu tambahkan ulang class supaya animasi bisa diulang
        entry.target.classList.remove("show");
        void entry.target.offsetWidth; // trik reflow agar browser anggap ini baru
        entry.target.classList.add("show");
      } else {
        // Saat keluar viewport, reset (supaya bisa animasi lagi nanti)
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.4 }); // bisa disesuaikan

  fadeItems.forEach(item => fadeObserver.observe(item));
});

const doaSection = document.querySelector('#doa .dual-layer');

const doaObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      doaObserver.unobserve(entry.target); // hentikan agar tidak loop
    }
  });
}, { threshold: 0.5 });

if (doaSection) doaObserver.observe(doaSection);

// 🌸 Countdown (jika ada)
const countdown = document.getElementById("countdown");
if (countdown) {
  const targetDate = new Date("December 21, 2025 09:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    countdown.innerHTML = distance > 0
      ? `${days} hari ${hours} jam ${mins} menit`
      : "Hari ini!";
  }, 1000);
}