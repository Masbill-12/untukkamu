const start = document.getElementById("start");
const card = document.getElementById("card");
const music = document.getElementById("music");
const slides = document.querySelectorAll(".slide");
const hearts = document.getElementById("hearts");
const scoreEl = document.getElementById("score");

let index = 0;
let score = 0;

// START
start.addEventListener("click", () => {
  start.style.display = "none";
  card.classList.remove("hidden");

  music.volume = 0;
  music.play();

  // fade in lagu
  let v = 0;
  const fade = setInterval(() => {
    v += 0.04;
    music.volume = v;
    if (v >= 0.8) clearInterval(fade);
  }, 300);

  setInterval(nextSlide, 10000); // 10 detik per slide
}, { once: true });

// SLIDE
function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

// HEART AMBIENT
setInterval(() => {
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = Math.random() > 0.5 ? "🖤" : "🤍";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = Math.random() * 10 + 12 + "px";
  hearts.appendChild(h);

  h.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;
    h.remove();
  });

  setTimeout(() => h.remove(), 7000);
}, 900);
