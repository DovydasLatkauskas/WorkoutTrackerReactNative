import AsyncStorage from "@react-native-async-storage/async-storage";

const storeWorkout = async (workout : Workout) => {
    try {
        if (workout.id === null){
            workout.createId()
        }
        const workoutJsonValue = JSON.stringify(workout)
        await AsyncStorage.setItem(workout.id, workoutJsonValue)
    } catch (e) {
        console.log("error storing data")
    }
}

const getWorkout = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@key')
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
        // read error
    }

    console.log('Done.')
}