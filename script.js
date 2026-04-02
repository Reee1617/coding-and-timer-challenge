// Total time in seconds (60 minutes)
let totalSeconds = 3600;
let timerInterval = null;

/**
 * Starts the countdown timer.
 * Prevents multiple intervals from running at the same time.
 */
function startTimer() {
  if (timerInterval) return;

  timerInterval = setInterval(() => {

    // Stop timer when it reaches zero
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }

    totalSeconds--;

    // Convert seconds into minutes and seconds
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // Update timer display in MM:SS format
    document.getElementById("timer").textContent =
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');

  }, 1000);
}

/**
 * Pauses the countdown timer.
 */
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

/**
 * Resets the timer back to 60 minutes.
 */
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 3600;
  document.getElementById("timer").textContent = "60:00";
}