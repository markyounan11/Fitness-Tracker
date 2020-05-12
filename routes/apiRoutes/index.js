const router = require('express').Router();
const{ getWorkout } = require('./../../controllers/workoutController');

// '/api' prepended

router.route('/workout')
.get(getWorkout)

module.exports = router;