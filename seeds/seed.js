const { Quiz } = require('../models');
const sequelize = require('../config/connection');



const QuizData = [
  {
    category: "Science",
    correctAnswer: "A Doe",
    answerA:"A Pen",
    answerB:"A Mare",
    answerC:"A Nanny",
    answerD: "A Doe",
    question: "A female deer is known as what?",
  }
]

const seedQuiz = async () => {
  await sequelize.sync({force: true})
  const results = await Quiz.bulkCreate(QuizData)
console.log(results);
};
seedQuiz();