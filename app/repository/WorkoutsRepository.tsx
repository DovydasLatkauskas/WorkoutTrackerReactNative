import AsyncStorage from "@react-native-async-storage/async-storage";
import Workout from "../models/Workout";

const storeWorkout = async (workout : Workout) => {
    try {
        const workoutsInDatabase = await getWorkouts()
        // if workoutsInDatabase is NOT null then concat the new workout to the array, otherwise create a singleton array
        const workouts : Workout[] = (workoutsInDatabase === null) ? [workout] : workoutsInDatabase.concat(workout)
        const workoutsJson = JSON.stringify(workouts)
        await AsyncStorage.setItem('workouts', workoutsJson)
    } catch (e) {
        console.log("error storing workouts")
        console.error(e)
    }
}

const getWorkouts = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('workouts')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
        console.log("error getting workouts from database")
        console.error(e)
    }
}

const getWorkout = async (id : string) => {
    try {
        const workouts : Workout[] = await getWorkouts()
        if(workouts === null){
            return null
        }
        const workout = workouts.find((workout : Workout) => workout.id === id)
        return (workout !== undefined) ? workout : null
    } catch(e) {
        console.log("error getting workout from database")
        console.error(e)
    }
}

export { getWorkouts, getWorkout, storeWorkout }