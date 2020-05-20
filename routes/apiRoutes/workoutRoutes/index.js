const router = require('express').Router();

const { getWorkout, createWorkout, deleteWorkout, updateWorkout, workoutInRange } = require('./../../../controllers/workoutController');

// '/api/workout' 
router.route('/')
    .get(getWorkout)
    .post(createWorkout);

router.route('/:id')
    .delete(deleteWorkout)
    .put(updateWorkout);

router.route('/range')
    .get(workoutInRange);

module.exports = router;