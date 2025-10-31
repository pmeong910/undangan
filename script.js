 //🌸 Scroll ke section berikut (buka undangan)
function scrollToNext() {
  const nextSection = document.querySelector("#tanggal");
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
}

//🌸 Tombol buka undangan hilang saat scroll lewat cover
window.addEventListener("scroll", () => {
  const openBtn = document.querySelector("#catchMe");
  const cover = document.querySelector("#cover");
  if (!openBtn || !cover) return;

  const coverBottom = cover.getBoundingClientRect().bottom;
  catchMe.classList.toggle("hide", coverBottom <= 0);
});

document.addEventListener("DOMContentLoaded", () => {
  // 🌸 Fade-in untuk tanggal dan ayat (bisa reset)
  const fadeItems = document.querySelectorAll("#tanggal, .main-img, #ayat, #ayat .dual-layer");

  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("show");
        void entry.target.offsetWidth; // reset animasi
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.5 });

  fadeItems.forEach(item => fadeObserver.observe(item));

  // 🌸 Doa section — hanya muncul sekali, tidak reset
  const doaSection = document.querySelector("#doa .dual-layer");
  if (doaSection) {
    const doaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Tambahkan class show sekali saja
          entry.target.classList.add("show");
          // Hentikan pengamatan agar tidak loop
          doaObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });
    doaObserver.observe(doaSection);
  }
}); 

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
document.querySelectorAll(".flip-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});