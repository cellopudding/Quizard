//todo: require whatever model we're using and make one GET route
const router = require("express").Router();
const { Quiz, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const quizData = await Quiz.findAll({
      attributes: [
        "question",
        "answerA",
        "answerB",
        "answerC",
        "answerD",
        "category",
        "correctAnswer",
      ],
    });
    console.log(quizData);
    const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
    console.log(quizzes);
    res.render("homepage", {
      quizzes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
  console.log("login");
});

router.get("/signup", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// Use withAuth middleware to prevent access to route
//TODO: add withAuth
router.get("/:category", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Quiz }],
    });
    const quizzes = quizData.map((quiz) => quiz.get({ plain: true }));
    res.render("categories", {
      ...user,
      logged_in: true,
    });
    res.send().status(200);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
