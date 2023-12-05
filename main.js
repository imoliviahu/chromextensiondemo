let feelingsResponses = JSON.parse(localStorage.getItem("feelings"));
console.log(feelingsResponses);

let intentionsResponses = JSON.parse(localStorage.getItem("intentions"));
console.log(feelingsResponses);

let hopesResponses = JSON.parse(localStorage.getItem("hopes"));
console.log(feelingsResponses);

let datesResponses = JSON.parse(localStorage.getItem("date"));
console.log(datesResponses);

let feelingsText = document.querySelector(".collectedFeelings");
let intentionsText = document.querySelector(".collectedIntentions");
let hopesText = document.querySelector(".collectedHopes");
let datesText = document.querySelector(".collectedDates");

window.addEventListener("load", function () {
  for (let i = 0; i < feelingsResponses.length; i++) {
    feelingsText.innerHTML += feelingsResponses[i] + "<br>";
  }
  for (let i = 0; i < intentionsResponses.length; i++) {
    intentionsText.innerHTML += intentionsResponses[i] + "<br>";
  }
  for (let i = 0; i < hopesResponses.length; i++) {
    hopesText.innerHTML += hopesResponses[i] + "<br>";
  }
  for (let i = 0; i < datesResponses.length; i++) {
    datesText.innerHTML += datesResponses[i] + "<br>";
  }
});
