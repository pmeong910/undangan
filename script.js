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
  // 🌸 Fade-in untuk tanggal & ayat (boleh reset)
  const fadeItems = document.querySelectorAll("#tanggal, .main-img, #ayat, #ayat .dual-layer");
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }, { threshold: 0.4 });

  fadeItems.forEach(item => fadeObserver.observe(item));

  // 🌸 DOA SECTION — animasi muncul sekali saja
  const doaSection = document.querySelector("#doa");
  if (doaSection) {
    const doaObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("✅ Doa section terlihat");
          const doaItems = doaSection.querySelectorAll(".doa-img");
          doaItems.forEach((img, index) => {
            setTimeout(() => {
              img.classList.add("show");
            }, index * 400);
          });
          doaObserver.unobserve(doaSection);
        }
      });
    }, { threshold: 0.15 });

    doaObserver.observe(doaSection);
  }

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