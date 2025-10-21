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