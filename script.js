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
  catchMe.classList.toggle("hide", coverBottom <= 0);
});

document.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(
    "#tanggal .main-img, #ayat"
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

const btn = document.getElementById("catchMe");
const cover = document.getElementById("cover");

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