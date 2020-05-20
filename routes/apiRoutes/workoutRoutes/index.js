// const router = require('express').Router();

// const { getWorkout, createWorkout, deleteWorkout, updateWorkout, workoutInRange } = require('./../../../controllers/workoutController');

// // '/api/workouts' 
// router.route('/')
//     .get(getWorkout)
//     .post(createWorkout);

// router.route('/:id')
//     .delete(deleteWorkout)
//     .put(updateWorkout);

// router.route('/range')
//     .get(workoutInRange);

// module.exports = router;







const router = require('express').Router();
const { getWorkout, createWorkout, deleteWorkout, updateWorkout, getRange } = require('../../../controllers/workoutController');
// '/api/workout' prepended
router.route('/')
    .get(getWorkout)
    .post(createWorkout)
router.route('/:workoutId')
    .delete(deleteWorkout)
    .put(updateWorkout)
router.route('/range')
    .get(getRange)
module.exports = router;