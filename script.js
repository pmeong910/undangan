// 🌸 Efek fade-in tiap section saat discroll
const sections = document.querySelectorAll('.page');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2 // mulai animasi saat 20% bagian section terlihat
});

sections.forEach(section => observer.observe(section));

const targetDate = new Date("December 21, 2025 09:00:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  countdown.innerHTML = `${days} hari ${hours} jam ${mins} menit`;
  if (distance < 0) countdown.innerHTML = "Hari ini!";
}, 1000);
window.addEventListener("scroll", () => {
  const pages = document.querySelectorAll(".page");

  if (window.scrollY === 0) {
    // Saat posisi di atas
    cover.style.display = "flex";
    cover.style.opacity = "1";
    cover.classList.remove("fade-out");
    cover.classList.add("fade-in");

    // Pastikan isi cover muncul kembali
    coverContent.style.opacity = "1";
    coverContent.classList.remove("fade-out");
    coverContent.classList.add("fade-in");

    // Sembunyikan semua halaman lain
    pages.forEach(p => p.classList.remove("active"));
  }
});
document.getElementById("bukaUndangan").addEventListener("click", () => {

  setTimeout(() => {
    cover.style.display = "none";
    document.querySelector("#tanggal").classList.add("active");
    window.scrollTo({ top: document.querySelector("#tanggal").offsetTop, behavior: "smooth" });
  }, 800);
});

// 🌸 Menampilkan kembali cover saat scroll ke atas (halaman paling atas)
window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    // Pastikan cover ditampilkan kembali
    cover.style.display = "flex";
    cover.classList.remove("fade-out");
    cover.classList.add("fade-in");

    // Sembunyikan section lain agar tidak tumpang tindih
    pages.forEach(p => p.classList.remove("active"));
  }
});