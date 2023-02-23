"use strict";

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const span = document.querySelector(".close");
let redFighter = document.querySelector(".red-name");
let blueFighter = document.querySelector(".blue-name");
let stopBtn = document.querySelector("#stopTime");
let startBtn = document.querySelector("#startTime");
let totalScoreBlue = 0;
let totalScoreRed = 0;
var interval;

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
// document
//   .querySelector(".body-regular-kick-blue")
//   .addEventListener("click", function () {
//     totalScoreBlue = totalScoreBlue + 2;
//     document.querySelector(".score-blue").textContent = totalScoreBlue;
//   });
// document
//   .querySelector(".body-turning-kick-blue")
//   .addEventListener("click", function () {
//     totalScoreBlue = totalScoreBlue + 4;
//     document.querySelector(".score-blue").textContent = totalScoreBlue;
//   });
// document
//   .querySelector(".head-regular-kick-blue")
//   .addEventListener("click", function () {
//     totalScoreBlue = totalScoreBlue + 3;
//     document.querySelector(".score-blue").textContent = totalScoreBlue;
//   });
// document
//   .querySelector(".head-turning-kick-blue")
//   .addEventListener("click", function () {
//     totalScoreBlue = totalScoreBlue + 5;
//     document.querySelector(".score-blue").textContent = totalScoreBlue;
//   });
document
  .querySelector(".technical-point-blue")
  .addEventListener("click", function () {
    totalScoreBlue = totalScoreBlue + 1;
    document.querySelector(".score-blue").textContent = totalScoreBlue;
  });
document.querySelector(".penalty-blue").addEventListener("click", function () {
  totalScoreBlue = totalScoreBlue - 1;
  document.querySelector(".score-blue").textContent = totalScoreBlue;
});

// RED SCORE
document.querySelector(".score-red").textContent = totalScoreRed;
// document
//   .querySelector(".body-regular-kick-red")
//   .addEventListener("click", function () {
//     totalScoreRed = totalScoreRed + 2;
//     document.querySelector(".score-red").textContent = totalScoreRed;
//   });
// document
//   .querySelector(".body-turning-kick-red")
//   .addEventListener("click", function () {
//     totalScoreRed = totalScoreRed + 4;
//     document.querySelector(".score-red").textContent = totalScoreRed;
//   });
// document
//   .querySelector(".head-regular-kick-red")
//   .addEventListener("click", function () {
//     totalScoreRed = totalScoreRed + 3;
//     document.querySelector(".score-red").textContent = totalScoreRed;
//   });
// document
//   .querySelector(".head-turning-kick-red")
//   .addEventListener("click", function () {
//     totalScoreRed = totalScoreRed + 5;
//     document.querySelector(".score-red").textContent = totalScoreRed;
//   });
document
  .querySelector(".technical-point-red")
  .addEventListener("click", function () {
    totalScoreRed = totalScoreRed + 1;
    document.querySelector(".score-red").textContent = totalScoreRed;
  });
document.querySelector(".penalty-red").addEventListener("click", function () {
  totalScoreRed = totalScoreRed - 1;
  document.querySelector(".score-red").textContent = totalScoreRed;
});

// NAME OF THE FIGHTER
document
  .querySelector("#blue-name-input")
  .addEventListener("click", function () {
    const blueFighter = prompt("What is the name of the blue fighter?");
    if (blueFighter === null) {
      document.querySelector(".blue-name").textContent = "Blue";
    } else {
      document.querySelector(".blue-name").textContent = blueFighter;
    }
  });
document
  .querySelector("#red-name-input")
  .addEventListener("click", function () {
    const redFighter = prompt("What is the name of the red fighter?");
    if (redFighter === null) {
      document.querySelector(".red-name").textContent = "Red";
    } else {
      document.querySelector(".red-name").textContent = redFighter;
    }
  });

// ROUNDS
document
  .querySelector("#change-round-number")
  .addEventListener("click", function () {
    let roundNumber = prompt("Enter a number between 1 and 3.");
    roundNumber = Number(roundNumber);

    if (roundNumber === null) {
      document.querySelector(".round-number").textContent = "1";
    } else if (isNaN(roundNumber)) {
      alert(
        "Your entry is not a number. Please enter a number between 1 and 3."
      );
    } else if (roundNumber >= 4) {
      alert("Please enter a number between 1 and 3.");
    } else {
      document.querySelector(".round-number").textContent = roundNumber;
    }
  });

// START AND STOP THE TIME

function countdown() {
  clearInterval(interval);
  interval = setInterval(function () {
    var timer = $(".time-clock").html();
    timer = timer.split(":");
    var minutes = timer[0];
    var seconds = timer[1];
    seconds -= 1;
    if (minutes < 0) return;
    else if (seconds < 0 && minutes != 0) {
      minutes -= 1;
      seconds = 59;
    } else if (seconds < 10 && length.seconds != 2) seconds = "0" + seconds;

    $(".time-clock").html(minutes + ":" + seconds);

    if (minutes == 0 && seconds == 0) clearInterval(interval);
  }, 1000);
}

function stopCounter() {
  clearInterval(interval);
}

document.querySelector("#startTime").addEventListener("click", countdown);

document.querySelector("#stopTime").addEventListener("click", stopCounter);

document.querySelector("#adjust-time").addEventListener("click", function () {
  let adjustedTimer = prompt("What is the adjusted time?", "0:00");
  adjustedTimer = adjustedTimer;
  document.querySelector("#timer").textContent = adjustedTimer;
  if (adjustedTimer === null || adjustedTimer === "0:00") {
    alert("Please input an adjusted time");
    prompt("What is the adjusted time?", "0:00");
  }
});
