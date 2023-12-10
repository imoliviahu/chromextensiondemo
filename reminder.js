function setReminder() {
  // Get the HTML element to display the reminder
  const reminderDisplay = document.getElementById("reminderDisplay");

  // Set a reminder function
  function remind() {
    // Display the pop-up with the reminder text
    reminderPopup.innerHTML =
      "Take a break: rest your eyes, drink some water, get up and stretch, and eat food if you are hungry.";
    reminderPopup.style.display = "block";
    console.log("Take a break");

    // Hide the pop-up after a short delay (e.g., 5 seconds)
    setTimeout(function () {
      reminderPopup.style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  // Set a reminder every 4 hours (4 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  //   const interval = 4 * 60 * 60 * 1000;
  const interval = 20 * 1000;

  // Set the initial reminder
  setTimeout(function repeatReminder() {
    remind();
    // Set the next reminder
    setTimeout(repeatReminder, interval);
  }, interval);
}

// Call the function to start the reminders
setReminder();
