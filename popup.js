console.log("This is a popup!");

const activateBtn = document.getElementById('activate');
​
activateBtn.addEventListener('click', () => {
  window.open('questions.html');
})

function setReminder() {
  // Get the HTML element to display the reminder
  const reminderDisplay = document.getElementById("reminderDisplay");

  // Set a reminder function
  function remind() {
    // Display the reminder in the HTML element
    reminderDisplay.innerHTML =
      "Time to take a break: Drink some water, rest your eyes, stretch, and get some food if your hungry!";
    // You can replace this line with your own reminder logic
  }

  // Set a reminder every 20 seconds
  const interval = 10 * 1000;

  // Set the initial reminder
  setTimeout(function repeatReminder() {
    remind();
    // Set the next reminder
    setTimeout(function () {
      // Clear the reminder text after a short delay (e.g., 2 seconds)
      reminderDisplay.innerHTML = "";
      repeatReminder();
    }, 2000); // 2000 milliseconds = 2 seconds
  }, interval);
}

// Call the function to start the reminders
setReminder();
