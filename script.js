// Function to enable or disable score modification buttons
function toggleButtonStates(enable) {
    // Logic to enable or disable score modification buttons
    var buttons = document.querySelectorAll('.score-button');
    buttons.forEach(function (button) {
      button.disabled = !enable;
    });
  }
  
  // JavaScript to handle score button clicks
  document.getElementById('red-plus').addEventListener('click', function () {
    updateScore('red-score', 1);
  });
  
  document.getElementById('red-minus').addEventListener('click', function () {
    updateScore('red-score', -1);
  });
  
  document.getElementById('blue-plus').addEventListener('click', function () {
    updateScore('blue-score', 1);
  });
  
  document.getElementById('blue-minus').addEventListener('click', function () {
    updateScore('blue-score', -1);
  });
  
  function updateScore(id, change) {
    var scoreElement = document.getElementById(id);
    var currentScore = parseInt(scoreElement.textContent);
    var newScore = currentScore + change;
    scoreElement.textContent = newScore;
  }
  
  // Timer and rounds variables
  var timerInterval = null;
  var totalSeconds = 0;
  var roundTimeSeconds = 0;
  var totalRounds = 1;
  var currentRound = 1;
  var breakTimeSeconds = 30;
  var onBreak = false;
  var goalieTimerInterval = null;
  var goalieSeconds = 5; // Set the starting seconds for the goalie timer
  
  // Function to update the timer and round settings
  document.getElementById('set-timer').addEventListener('click', function () {
    var minutes = parseInt(document.getElementById('minutes').value);
    var seconds = parseInt(document.getElementById('seconds').value);
    roundTimeSeconds = totalSeconds = minutes * 60 + seconds;
    updateTimerDisplay();
  
    totalRounds = parseInt(document.getElementById('rounds').value);
    breakTimeSeconds = parseInt(document.getElementById('break-time').value);
    currentRound = 1;
    updateRoundDisplay();
  
    closeModal(); // Close the settings modal
  });
  
  function updateTimerDisplay() {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    document.getElementById('timer').textContent = `${minutes}:${seconds
      .toString()
      .padStart(2, '0')}`;
  }
  
  function updateRoundDisplay() {
    var roundText = onBreak ? 'Break Time' : `Round ${currentRound}`;
    document.getElementById('round-number').textContent = roundText;
  }

  document.getElementById('start-goalie-timer').addEventListener('click', function () {
    if (!goalieTimerInterval) {
      goalieSeconds = 5; // Reset to 5 seconds
      document.getElementById('goalie-timer').style.display = 'block'; // Show the goalie timer
      updateGoalieTimerDisplay();
      goalieTimerInterval = setInterval(function() {
        goalieSeconds--;
        updateGoalieTimerDisplay();
        if (goalieSeconds <= 0) {
          playBuzzer(); // Play the buzzer sound when the timer hits zero
          clearInterval(goalieTimerInterval);
          goalieTimerInterval = null;
          document.getElementById('goalie-timer').style.display = 'none'; // Hide the goalie timer when time is up
        }
      }, 1000);
    }
  });

  function updateGoalieTimerDisplay() {
    var timerElement = document.getElementById('goalie-timer');
    timerElement.textContent = `${Math.floor(goalieSeconds / 60)}:${(goalieSeconds % 60).toString().padStart(2, '0')}`;
    if (goalieSeconds <= 3) {
      timerElement.style.color = 'red';  // Change text color to red when 3 seconds or less
    } else {
      timerElement.style.color = 'white';  // Reset color to white otherwise
    }
  }
  
  
  document
    .getElementById('start-stop-button')
    .addEventListener('click', function () {
      var button = document.getElementById('start-stop-button');
      if (button.textContent === 'Start') {
        button.textContent = 'Stop';
        button.style.backgroundColor = '#b30000'; // Change the button color to red when in "Stop" state
        startTimer();
      } else {
        button.textContent = 'Start';
        button.style.backgroundColor = '#138522'; // Change the button color to green when in "Start" state
        stopTimer();
      }
    });
  
  function startTimer() {
    if (timerInterval === null) {
      timerInterval = setInterval(function () {
        if (totalSeconds > 1) {
          totalSeconds--;
          updateTimerDisplay();
        } else if (totalSeconds === 1 && !onBreak) {
          // Play the buzzer sound one second before the round ends and only if it's not break time
          playBuzzer();
          totalSeconds--;
          updateTimerDisplay();
        } else {
          // Timer reaches 0
          if (!onBreak && currentRound <= totalRounds) {
            // End of a round
            // Start break time
            onBreak = true;
            totalSeconds = breakTimeSeconds;
            updateRoundDisplay(); // Update the display for break time
            updateTimerDisplay();
            // No need to stop the timer, it will continue for the break time
          } else if (onBreak) {
            // Break time just finished
            onBreak = false;
            if (currentRound < totalRounds) {
              currentRound++; // Increment the round number for the next round
              totalSeconds = roundTimeSeconds; // Set timer for the next round
              updateRoundDisplay(); // Update the display for the new round
              updateTimerDisplay();
              document.getElementById('start-stop-button').textContent = 'Start';
              document.getElementById('start-stop-button').style.backgroundColor =
                '#138522'; // Change button color to green
              stopTimer(); // Stop the timer to wait for manual start of the next round
            } else {
              // All rounds completed
              alert('All rounds completed!');
              document.getElementById('start-stop-button').style.backgroundColor =
                '#138522'; // Change button color to green
              stopTimer();
            }
          }
        }
      }, 1000);
    }
  }
  
  // Function to play the buzzer sound
  function playBuzzer() {
    var buzzer = document.getElementById('buzzer');
    buzzer.play();
  }
  
  function stopTimer() {
    if (timerInterval !== null) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  
  // Function to close the settings modal
  function closeModal() {
    var modalElement = document.getElementById('settingsModal');
    var modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  }
  
  // Function to reset everything and show an alert
  document
    .getElementById('reset-everything')
    .addEventListener('click', function () {
      // Reset scores
      document.getElementById('red-score').textContent = '0';
      document.getElementById('blue-score').textContent = '0';
  
      // Reset timer and rounds
      totalSeconds = 0;
      roundTimeSeconds = 0;
      totalRounds = 1;
      currentRound = 1;
      breakTimeSeconds = 30;
      onBreak = false;
      updateTimerDisplay();
      updateRoundDisplay();
  
      // Ensure timer is stopped
      stopTimer();
  
      // Reset the start/stop button text and color
      var startStopButton = document.getElementById('start-stop-button');
      startStopButton.textContent = 'Start';
      startStopButton.style.backgroundColor = '#138522'; // Reset the button color to green
  
      // Disable score modification buttons
      toggleButtonStates(false);
  
      // Show an alert
      alert('Scoreboard reset');
    });
  