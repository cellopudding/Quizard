let science = document.querySelector(".science");
let music = document.querySelector(".music");
let filmTv = document.querySelector(".film-tv");
let foodDrink = document.querySelector(".food-drink");
let geography = document.querySelector(".geography");
let random = document.querySelector(".general");
const categories = document.querySelectorAll(".category-card");
const question = document.querySelector(".question-container");
const questionCard = document.querySelector(".question-card");

const getApi = async (id) => {
  const response = await fetch(`/api/quiz/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

function startQuiz(e) {
  // console.log(e.target)
  console.log(this);

  // getApi(this.getAttribute("id"));

  // console.log(this.getAttribute("id"));

  const id = this.getAttribute("id");
  window.location.href = `api/quiz/${id}`;
}
categories.forEach(function (i) {
  i.addEventListener("click", startQuiz);
  i.addEventListener("click", getApi);
});

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
  alert("Correct!");
});
