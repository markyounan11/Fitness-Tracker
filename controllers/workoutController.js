const { Workout } = require('./../models');

module.exports = {
    getWorkout: async (req, res) => {
        try {
            const workout = await Workout.find({});
            if (!workout) {
                return res.status(404).json({ error: 'No workouts found' });
            }
            return res.status(200).json(workout);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    createWorkout: async (req, res) => {
        console.log(req.body);
        // const { workout } = req.body;
        // if (!workout) {
        //   return res.status(403).json({ error: 'You must provide a workout' });
        // }
        try {
            const newWorkout = await new Workout().save();
            return res.json(newWorkout);
        } catch (e) {
            return res.status(403).json({ e });
        }
        // try {
        //   const newWorkout = await Workout.create({});
        //   return res.status(200).json(newWorkout)
        // } catch (e) {
        //   return res.status(403).json({ e });
        // }
    },
    deleteWorkout: async (req, res) => {
        const { id } = req.params;
        try {
            const workoutToDelete = await Workout.findById(id);
            if (!workoutToDelete) {
                return res.status(401).json({ error: 'No workout with that ID' });
            }
            const deletedWorkout = await Workout.findByIdAndDelete(id);
            return res.status(200).json(deletedWorkout);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    updateWorkout: async (req, res) => {
        // check this function (63)
        const { id } = req.params;

        try {
            const workoutToUpdate = await Workout.findById(id);
            if (!workoutToUpdate) {
                return res.status(401).json({ error: 'No workout with that ID' });
            }
            const updateWorkout = await Workout.findByIdAndUpdate(
                id,
                { $push: newWorkout },
                { "new": true, runValidators: true }
            );
            return res.status(200).json(updateWorkout);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
    workoutInRange: async (req, res) => {
        try {
            const workout = await Workout.find({}).limit(7);
            if (!workout) {
                return res.status(404).json({ error: 'No workouts found in range' });
            }
            return res.status(200).json(workout);
        } catch (e) {
            return res.status(403).json({ e });
        }
    },
}
