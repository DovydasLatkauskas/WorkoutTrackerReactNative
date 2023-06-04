import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const Stopwatch: React.FC = () => {
    const [elapsedTime, setElapsedTime] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(false);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setElapsedTime(0);
        handleStop()
    };

    return (
        <View>
            <Text>Rest Time: {elapsedTime} seconds</Text>
            <Button title={isRunning ? 'Stop' : 'Start'} onPress={isRunning ? handleStop : handleStart} />
            <Button title="Reset" onPress={handleReset} />
        </View>
    );
};

export default Stopwatch;