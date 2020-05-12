const router = require('express').Router();
const{ getWorkout, addWorkout } = require('./../../controllers/workoutController');

// '/api' prepended

router.route('/workout')
.get(getWorkout)
.post(addWorkout)

module.exports = router;