const router = require('express').Router();
const{ getWorkout, addWorkout, deleteWorkout } = require('./../../controllers/workoutController');

// '/api' prepended

router.route('/workout')
.get(getWorkout)
.post(addWorkout)
.delete(deleteWorkout)

module.exports = router;