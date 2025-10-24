// 🌸 Scroll ke section berikut (buka undangan)
function scrollToNext() {
  const nextSection = document.querySelector("#tanggal");
  nextSection.scrollIntoView({ behavior: "smooth" });
}

// 🌸 Sembunyikan tombol buka undangan saat scroll melewati cover
window.addEventListener("scroll", () => {
  const openBtn = document.querySelector(".open-btn");
  const cover = document.querySelector("#cover");
  if (!openBtn || !cover) return;

  const coverBottom = cover.getBoundingClientRect().bottom;
  if (coverBottom <= 0) {
    openBtn.classList.add("hide");
  } else {
    openBtn.classList.remove("hide");
  }
});

// 🌸 Efek fade-in tiap section saat terlihat
const pages = document.querySelectorAll('.page');
const pageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

pages.forEach(page => pageObserver.observe(page));

// 🌸 Animasi gambar utama (main-img)
const mainImgs = document.querySelectorAll('.main-img');
const imgObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.3 });

mainImgs.forEach(img => imgObserver.observe(img));

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

// 🌸 Tombol kembali ke atas (halaman maps)
function scrollToTop() {
  console.log("tombol kembali")
  const cover = document.querySelector("#cover");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  // Tampilkan kembali cover setelah sedikit delay
  setTimeout(() => {
    if (cover) {
      cover.style.display = "flex";
      cover.classList.remove("fade-out");
      cover.classList.add("fade-in");
    }
  }, 400);
}