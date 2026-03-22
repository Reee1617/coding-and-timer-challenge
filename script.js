let totalSeconds = 3600; // 1 hour = 3600 seconds
let timerInterval;

function startTimer() {
  if (timerInterval) return; // prevent multiple timers

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
      return;
    }

    totalSeconds--;

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById("timer").textContent =
      String(hours).padStart(2, '0') + ":" +
      String(minutes).padStart(2, '0') + ":" +
      String(seconds).padStart(2, '0');
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalSeconds = 3600;
  document.getElementById("timer").textContent = "01:00:00";
}