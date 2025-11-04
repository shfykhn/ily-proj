// Elegant Heart Generator
const heartImages = [
  "assets/heart1.png",
  "assets/heart2.png",
  "assets/heart3.png"
];

let intervalId;

function createHeart() {
  const heart = document.createElement("img");
  heart.classList.add("heart");

  heart.src = heartImages[Math.floor(Math.random() * heartImages.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.width = Math.random() * 20 + 20 + "px"; // 20–40px
  heart.style.animationDuration = (4 + Math.random() * 4) + "s";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

function startHeartGenerator() {
  clearInterval(intervalId);
  const heartInterval = window.innerWidth < 500 ? 1000 : 500;
  intervalId = setInterval(createHeart, heartInterval);
}

startHeartGenerator();
window.addEventListener("resize", startHeartGenerator);
