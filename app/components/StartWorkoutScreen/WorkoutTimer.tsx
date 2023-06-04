import {Button, Text, View} from "react-native";
import {useEffect, useState} from "react";

function WorkoutTimer(){
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=>{
            let intervalId: NodeJS.Timeout;

            if (isRunning) {
                intervalId = setInterval(() => {
                    setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
                }, 1000);
            }

            return () =>{
                clearInterval(intervalId)
            }
        },
        [isRunning]
        )

    function handleStart(){
        setIsRunning(true)
    }
    function handleStop(){
        setIsRunning(false)
    }
    function handleReset() {
        setElapsedTime(0)
        handleStop()
    }

    return(
        <View>
            <Text>Rest Time: {elapsedTime}</Text>
            <Button title={isRunning ? 'Stop' : 'Start'} onPress={isRunning ? handleStart : handleStop}></Button>
            <Button title={'Reset'} onPress={handleReset}></Button>
        </View>
    )
}

export default WorkoutTimer