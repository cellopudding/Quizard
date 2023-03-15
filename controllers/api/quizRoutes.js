//add get route
const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Quiz } = require('../../models');
const withAuth = require('../../utils/auth');
// TODO: put back withAuth
router.get('/category/randomize', async (req, res) => {
  try {
    const newQuiz = await Quiz.findAll({
      order: sequelize.random()
    });
    res.status(200).json(newQuiz);
  } catch (err) {
    res.status(400).json(err);
  }
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