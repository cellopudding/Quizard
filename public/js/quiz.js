let science = document.querySelector(".science");
let music = document.querySelector(".music");
let filmTv = document.querySelector(".film-tv");
let foodDrink = document.querySelector(".food-drink");
let geography = document.querySelector(".geography");
let random = document.querySelector(".general");
const categories = document.querySelectorAll(".category-card");
const question = document.querySelector(".question-container");
const questionCard = document.querySelector(".question-card");

function startQuiz(e) {
  // console.log(e.target)
  // console.log(this);
  // hide start screen
  // var categoriesScreen = document.querySelector(".categories-container");
  // categoriesScreen.setAttribute("class", "hide");

  // will need to update this to some kind of changeColor function
  questionCard.classList.add(this.getAttribute("id"));

  // // un-hide questions section
  // question.removeAttribute("class", "hide");

  getApi(this.getAttribute("id"));
}

for (const category of categories) {
  category.addEventListener("click", startQuiz);
}

var newQuestion = document.getElementById("questionbtn");

const getApi = async (id) => {
  console.log(id);
  const response = await fetch("/:categories", {
    method: "GET",
    body: JSON.stringify({ id }),
    headers: { "Content-Type": "application/json" },
  });
};

newQuestion.addEventListener("click", getApi);
