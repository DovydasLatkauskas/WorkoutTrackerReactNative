import React from 'react';
import {getWorkouts, getWorkout, storeWorkout, removeWorkoutById} from "../../app/repository/WorkoutsRepository";
import Workout from "../../app/models/Workout";
import PerformedSuperset from "../../app/models/PerformedSuperset";
import PerformedExercise from "../../app/models/PerformedExercise";
import ExerciseSet from "../../app/models/ExerciseSet";

const workoutsTestData = [
    new Workout("1", "First Workout",
        [new PerformedSuperset(
            [new PerformedExercise(
                "1", [new ExerciseSet(3, 4, 5)]
            )], [2, 3])]
        , "notes 1", 3, 5),
    new Workout("2", "Second Workout", [new PerformedSuperset(
        [new PerformedExercise("2", [new ExerciseSet(1,2,3)])],
        [1])], "notes 2", 4, 5)
];

describe('WorkoutRepository', () => {

    it("getWorkouts should return []", async () => {
        const workouts = await getWorkouts()
        expect(workouts).toEqual([])
    });

    it("getWorkout should return null", async () => {
        const workouts = await getWorkout("")
        expect(workouts).toBeNull()
    });

    it("storeWorkout should not fail", async () => {
        await storeWorkout(workoutsTestData[0])
        const gotWorkout = await getWorkout("1")
        expect(gotWorkout).toEqual(workoutsTestData[0])
    });
    it("testing removeWorkoutById and getWorkouts should return null", async () => {
        await removeWorkoutById("1")
        const workouts = await getWorkouts()
        expect(workouts).toEqual([])
    });
});