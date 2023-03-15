let science = document.querySelector(".science");
let music = document.querySelector(".music");
let filmTv = document.querySelector(".film-tv");
let foodDrink = document.querySelector(".food-drink");
let geography = document.querySelector(".geography");
let random = document.querySelector(".random");
const categories = document.querySelectorAll(".category-card");
const question = document.querySelector(".question-container");
const questionCard = document.querySelector(".question-card");

function startQuiz() {
  console.log(this);
  // hide start screen
  var categoriesScreen = document.querySelector(".categories-container");
  categoriesScreen.setAttribute("class", "hide");

  // will need to update this to some kind of changeColor function
  questionCard.classList.add(this.getAttribute("id"));

  // un-hide questions section
  question.removeAttribute("class", "hide");

  getApi();
}

for (const category of categories) {
  category.addEventListener("click", startQuiz);
}

var newQuestion = document.getElementById("questionbtn");

// need to replace with our API
// function getApi() {
//   var requestUrl = "https://the-trivia-api.com/api/questions?limit=1";

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data[0].question);
//       console.log(data[0].correctAnswer);
//       console.log(data[0].incorrectAnswers[0]);
//       console.log(data[0].incorrectAnswers[1]);
//       console.log(data[0].incorrectAnswers[2]);
//       document.getElementById("generate-question").innerHTML = data[0].question;
//     });
// }

newQuestion.addEventListener("click", getApi);

// const newCardColor = getElementById("question-card");

// change the card colors based on category selected

// {
//     "category": "Music",
//     "id": "622a1c357cc59eab6f94ff6b",
//     "correctAnswer": "Right Said Fred",
//     "incorrectAnswers": [
//       "Level 42",
//       "Our Lady Peace",
//       "Feeder"
//     ],
//     "question": "Who Had A Hit In 1994 With \"Wonderman\"",
//     "tags": [
//       "songs",
//       "1990's",
//       "one_hit_wonders",
//       "music"
//     ],
//     "type": "Multiple Choice",
//     "difficulty": "hard",
//     "regions": [],
//     "isNiche": false
//   },

// const QuizData = [
//   {
//     category: "Science",
//     id: "624333a2cfaae40c129613f4",
//     correctAnswer: "A Doe",
//     answerA: "A Pen",
//     answerB: "A Mare",
//     answerC: "A Nanny",
//     answerD: "A Doe",
//     question: "A female deer is known as what?",
//   },
// ];
