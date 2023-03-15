"use strict";

// Set default timer values
let time = 0;
let restTime = 0;
let rounds = 0;
let currentRound = 1;
let interval;
let totalScoreBlue = 0;
let totalScoreRed = 0;

// Select HTML elements
const durationInput = document.getElementById("durationInput");
const restInput = document.getElementById("restInput");
const roundsInput = document.getElementById("roundsInput");
const timeDisplay = document.getElementById("timeDisplay");
const restDisplay = document.getElementById("restDisplay");
const roundsDisplay = document.getElementById("roundsDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Initialize the timer
function init() {
  time = durationInput.value;
  restTime = restInput.value;
  rounds = roundsInput.value;
  timeDisplay.innerHTML = formatTime(time);
  restDisplay.innerHTML = formatTime(restTime);
  roundsDisplay.innerHTML = `${currentRound}`;
}

// Start the timer
function startTimer() {
  interval = setInterval(() => {
    if (time > 0) {
      time--;
      timeDisplay.innerHTML = formatTime(time);
    } else {
      clearInterval(interval);
      if (currentRound < rounds) {
        restDisplay.innerHTML = formatTime(restTime);
        currentRound++;
        roundsDisplay.innerHTML = `${currentRound}`;
        interval = setInterval(() => {
          if (restTime > 0) {
            restTime--;
            restDisplay.innerHTML = formatTime(restTime);
          } else {
            clearInterval(interval);
            init();
            // startTimer();
          }
        }, 1000);
      }
    }
  }, 1000);
}

// Stop the timer
function stopTimer() {
  clearInterval(interval);
}

// Reset the timer
function resetTimer() {
  clearInterval(interval);
  currentRound = 1;
  init();
}

// Format the time in MM:SS format
function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
}

function blueScore() {
  // document.querySelector(".score-blue").textContent = totalScoreBlue;
  document
    .querySelector(".plus-point-blue")
    .addEventListener("click", function () {
      totalScoreBlue = totalScoreBlue + 1;
      document.querySelector(".score-blue").textContent = totalScoreBlue;
    });
  document
    .querySelector(".minus-point-blue")
    .addEventListener("click", function () {
      totalScoreBlue = totalScoreBlue - 1;
      document.querySelector(".score-blue").textContent = totalScoreBlue;
    });
}
blueScore();

function redScore() {
  document.querySelector(".score-red").textContent = totalScoreRed;
  document
    .querySelector(".plus-point-red")
    .addEventListener("click", function () {
      totalScoreRed = totalScoreRed + 1;
      document.querySelector(".score-red").textContent = totalScoreRed;
    });
  document
    .querySelector(".minus-point-red")
    .addEventListener("click", function () {
      totalScoreRed = totalScoreRed - 1;
      document.querySelector(".score-red").textContent = totalScoreRed;
    });
}
redScore();

// Add event listeners to buttons
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize the timer
init();
