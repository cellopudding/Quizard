//add get route
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Quiz } = require("../../models");
const withAuth = require("../../utils/auth");
// TODO: put back withAuth
router.get("/category/Randomize", async (req, res) => {
  try {
    const newQuiz = await Quiz.findAll({
      limit: 5,
      order: sequelize.random(),
    });
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(400).json(err);
  }
  // res.render('questions')
});

router.get("/:category", async (req, res) => {
  
  try {
    const newQuiz = await Quiz.findAll({
      limit: 5,
      where: {
        category: req.params.category,
      },
      order: sequelize.random(),
      
    });
    console.log(newQuiz)
const triviaQuestion = newQuiz.map((quiz) => quiz.get({ plain: true}));
    console.log(triviaQuestion)
      res.render('questions', {
        triviaQuestion,
        logged_in: req.session.logged_in,

      })
    
  } catch (err) {
    res.status(400).json(err);
  }
  // res.render('questions')
});

// router.post('/', withAuth, async (req, res) => {
//     try {
//       const newQuiz = await Quiz.create({
//         ...req.body,
//         user_id: req.session.user_id,
//       });

//       res.status(200).json(newQuiz);
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const quizData = await Quiz.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!quizData) {
//       res.status(404).json({ message: 'No quiz found with this id!' });
//       return;
//     }

//     res.status(200).json(quizData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
