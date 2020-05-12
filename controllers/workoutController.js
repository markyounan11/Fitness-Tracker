const { Workout } = require('./../models');

module.exports = {
    getWorkout: async (req, res) => {
        try {
            const workout = await Workout.find()
            if(!workout) return res.status(404).json({error: 'No workouts found'})
            return res.status(200).json(workout)
        } catch (e) {
            return res.status(403).json({ e })
        }
    },
}