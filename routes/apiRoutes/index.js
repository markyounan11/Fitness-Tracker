const router = require('express').Router();
const { getWorkout, addWorkout, deleteWorkout } = require('./../../controllers/workoutController');

// '/api' prepended

router.route('/workout')
    .get(getWorkout)
    .post(addWorkout)

router.route('./workout/:workoutId')
    .delete(deleteWorkout)

module.exports = router;