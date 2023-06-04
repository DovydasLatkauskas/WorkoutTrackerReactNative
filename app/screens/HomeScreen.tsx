import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import commonStyles from "../components/CommonStyles";
import {GreyLine} from "../components/CommonComponents";

interface MainScreenProps {
    navigation: any;
}

function HomeScreen(props:MainScreenProps){
const handleStartWorkoutButtonPress = () => {
    props.navigation.navigate("Start Workout")
}

    return (
        <View style={commonStyles.container}>
            {/* only works on IOS, for android its just View */}
            <SafeAreaView>
                <Text style={commonStyles.topBar}>My Hub</Text>
                <GreyLine/>
                <View style={{alignItems:"center"}}>
                    {/* TODO: make button look decent */}
                    <TouchableOpacity style={[commonStyles.button, localStyles.startWorkoutButton]} onPress={handleStartWorkoutButtonPress}>
                        <Text style={commonStyles.buttonText}>Start Workout</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            <StatusBar style="auto"/>
        </View>
    )
}
export default HomeScreen;



const localStyles = StyleSheet.create({
    startWorkoutButton: {
        height: 50,
        width: "60%"
    }
});