document.getElementById("openBtn").addEventListener("click", function() {
  const cover = document.getElementById("cover");
  const main = document.getElementById("main");

  // Sembunyikan cover
  cover.style.display = "none";

  // Tampilkan halaman utama dengan animasi fade-in
  main.classList.remove("hidden");
  setTimeout(() => {
    main.classList.add("show");
  }, 100);
});