"use strict";

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const span = document.querySelector(".close");
let totalScoreBlue = 0;
let totalScoreRed = 0;

// MODAL FUNCTIONALITY
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});

// SCOREBOARD FUNCTIONALITY
// BLUE SCORE
document.querySelector(".score-blue").textContent = totalScoreBlue;
document
  .querySelector(".body-regular-kick-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 2;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document
  .querySelector(".body-turning-kick-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 4;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document
  .querySelector(".head-regular-kick-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 3;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document
  .querySelector(".head-turning-kick-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 5;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document
  .querySelector(".technical-point-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 1;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document.querySelector(".penalty-blue").addEventListener("click", function () {
  totalScoreRed = totalScoreRed + 1;
  document.querySelector(".score-red").textContent = totalScoreRed;
});

// RED SCORE
document.querySelector(".score-red").textContent = totalScoreRed;
document
  .querySelector(".body-regular-kick-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 2;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document
  .querySelector(".body-turning-kick-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 4;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document
  .querySelector(".head-regular-kick-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 3;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document
  .querySelector(".head-turning-kick-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 5;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document
  .querySelector(".technical-point-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 1;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document.querySelector(".penalty-red").addEventListener("click", function () {
  totalScoreBlue = totalScoreBlue + 1;
  document.querySelector(".score-blue").textContent = totalScoreBlue;
});
