const router = require('express').Router();
// const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require('../controllers/homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
