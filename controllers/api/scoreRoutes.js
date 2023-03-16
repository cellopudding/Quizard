// const router = require('express').Router();
// const sequelize = require('../../config/connection');
// const { Score } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/score', async, withAuth (req, res) => {
//     try {
//         const newScore = await Score.create(req.body);
//         console.log(newScore);
        
//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             req.session.logged_in = true;
//         })
//         res.status(200).json(newScore);
//     } catch (err) {
//         console.log(err);
//         res.status(400).json(err);
//     }
// });


// module.exports = router;