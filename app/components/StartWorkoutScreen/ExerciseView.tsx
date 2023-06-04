import {Text, View} from "react-native";
import React from "react";

function ExerciseView(){
    return(
        <View style={{borderWidth:1}}>
            <Text>Exercise Name</Text>
            <Text>Set</Text>
            <Text>Weight</Text>
            <Text>Reps</Text>
            <Text>Time</Text>
        </View>
    )
}

export default ExerciseView