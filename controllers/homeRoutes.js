//todo: require whatever model we're using and make one GET route
const router = require('express').Router();
const { Quiz, User  } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const quizData = await Quiz.findOne ({
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
              ],        
        });

        const quizzes = quizData.map((quiz) => quiz.get ({plain: true}));

        res.render('homepage', { 
            quizzes, 
            logged_in: req.session.logged_in 
          });
        } catch (err) {
          res.status(500).json(err);
        }
      });
      