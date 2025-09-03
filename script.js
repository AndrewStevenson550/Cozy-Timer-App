

let timerInterval;

function countdown() {
    // Clear any existing countdown (so it doesn’t overlap if you press the button again)
    clearInterval(timerInterval);

      // Starting time in seconds (5 minutes = 300 seconds)
    let timeLeft = 5 * 60;

      // Function to update the display every second
      function updateDisplay() {
        // Calculate minutes and seconds
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Format time (add a "0" in front if needed)
        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;

        // Update the text inside the display element
        document.getElementById("title").textContent = `${minutes}:${seconds}`;

        // If time runs out, stop the timer
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          alert("⏰ Time's up!");
        }

        // Reduce time by 1 second
        timeLeft--;
      }

      // Call it immediately so the display updates right away
      updateDisplay();

      // Run updateDisplay every 1000 ms (1 second)
      timerInterval = setInterval(updateDisplay, 1000);
    }