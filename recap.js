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

let submissions = {
  feeling: [],
  intentions: [],
  hopes: [],
};

submitButton.addEventListener("click", () => {
  // let submissions = {
  //   feeling: [feeling],
  //   intentions: [document.querySelector("#intention-input").value],
  //   hopes: [document.querySelector("#hope-input").value],
  // };

  let newFeeling = feeling;
  let newIntentions = document.querySelector("#intention-input").value;
  let newHopes = document.querySelector("#hope-input").value;

  submissions.feeling.push(newFeeling);
  submissions.intentions.push(newIntentions);
  submissions.hopes.push(newHopes);

  localStorage.setItem("submission", JSON.stringify(submissions));
  console.log("worked");
  // save this to local storage somehow
});
