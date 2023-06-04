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
        );
    useEffect(()=>{
        handleStart()
    }, []);

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
            <Text>Workout Time: {elapsedTime}</Text>
        </View>
    )
}