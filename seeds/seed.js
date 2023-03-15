const { Quiz } = require('../models');

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

const seedQuiz = () => Quiz.bulkbulkCreate(QuizData);
module.exports = seedQuiz;