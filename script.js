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

// 🌸 Sembunyikan tombol buka undangan saat scroll melewati cover
window.addEventListener("scroll", () => {
  const openBtn = document.querySelector(".open-btn");
  const cover = document.querySelector("#cover");
  if (!openBtn || !cover) return;

  const coverBottom = cover.getBoundingClientRect().bottom;
  openBtn.classList.toggle("hide", coverBottom <= 0);
});

// 🌸 Efek fade-in hanya untuk gambar & layer (tidak termasuk background)
document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(
    "#tanggal .main-img, #ayat .dual-layer, #doa .dual-layer"
  );

  fadeItems.forEach(item => item.classList.add("fade-content"));

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  }, { threshold: 0.3 });

  fadeItems.forEach(item => fadeObserver.observe(item));
});

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