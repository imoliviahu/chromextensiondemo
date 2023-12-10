// breathing.js

// Function to start the timer
function startTimer(duration) {
  const circleEl = document.querySelector(".circle");
  var timer = duration,
    minutes,
    seconds;
  var countdownTimer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    document.getElementById("countdown").innerHTML =
      minutes + "m " + seconds + "s";
    circleEl.classList.add("circle-anim");
    if (--timer < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Timer expired!";
      circleEl.classList.remove("circle-anim");
    }
  }, 1000);
}

// Event listener for the button
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".breathButton");

  if (startButton) {
    startButton.addEventListener("click", function () {
      startTimer(300); // Call your timer function here with the desired time
    });
  }
});
