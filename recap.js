// document.addEventListener("DOMContentLoaded", function () {
//   var great = document.getElementsByClassName("great");

//   great.addEventListener("click", function () {
//     great.style.fill = "#fce57e";
//   });
// });

const user = {
  feeling: "",
  intentions: "",
  hopes: "",
};

var feeling = "";

let greatButton = document.querySelector(".great");
greatButton.addEventListener("click", () => {
  feeling = "Great!";
});

let goodButton = document.querySelector(".good");
goodButton.addEventListener("click", () => {
  feeling = "Good";
});

let mehButton = document.querySelector(".meh");
mehButton.addEventListener("click", () => {
  feeling = "Meh";
});

let badButton = document.querySelector(".bad");
badButton.addEventListener("click", () => {
  feeling = "Bad";
});

let awfulButton = document.querySelector(".awful");
awfulButton.addEventListener("click", () => {
  feeling = "Awful";
});

var intentions = "";

let submitButton = document.querySelector(".submitButton");

let feelingsALL = [];
let intentionsALL = [];
let hopesALL = [];
let datesALL = [];

submitButton.addEventListener("click", () => {
  let newDate = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  let newFeeling = feeling;
  let newIntentions = document.querySelector("#intention-input").value;
  let newHopes = document.querySelector("#hope-input").value;

  feelingsALL.push(newFeeling);
  intentionsALL.push(newIntentions);
  hopesALL.push(newHopes);
  datesALL.push(newDate);

  localStorage.setItem("feelings", JSON.stringify(feelingsALL));
  localStorage.setItem("intentions", JSON.stringify(intentionsALL));
  localStorage.setItem("hopes", JSON.stringify(hopesALL));
  localStorage.setItem("date", JSON.stringify(datesALL));
  console.log("worked");
  // save this to local storage somehow
});
