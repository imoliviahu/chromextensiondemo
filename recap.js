const user = {
  feeling: "",
  intentions: "",
  hopes: "",
};

var feeling = "";

greatButton.addEventListener("click", () => {
  feeling = "Great!";
});

goodButton.addEventListener("click", () => {
  feeling = "Good";
});

mehButton.addEventListener("click", () => {
  feeling = "Meh";
});

badButton.addEventListener("click", () => {
  feeling = "Bad";
});

awfulButton.addEventListener("click", () => {
  feeling = "Awful";
});

var intentions = "";

submitButton.addEventListener("click", () => {
  let submissions = {
    feeling: feeling,
    intentions: document.querySelector("#intention-input").value,
    hopes: document.querySelector("#hope-input").value,
  };

  // save this to local storage somehow
});
