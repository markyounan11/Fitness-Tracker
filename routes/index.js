const router = require('express').Router();
const apiRoutes = require('./apiRoutes/workoutRoutes');
const htmlRoutes = require('./htmlRoutes');
// '/' automatically prepended 
router.use( htmlRoutes );
router.use('/api',apiRoutes);
module.exports = router;
