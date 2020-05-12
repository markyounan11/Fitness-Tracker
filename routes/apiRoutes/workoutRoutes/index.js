const router = require('express').Router();

const { getWorkout, createWorkout, deleteWorkout } = require('../../../controllers/workoutController');

// '/api/workout' prepended
router.route('/')
    .get(getWorkout)
    .post(createWorkout)

    router.route('/:workoutId')
    .delete(deleteWorkout)

    module.exports = router;
