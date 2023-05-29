import {Alert, Button, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import commonStyles, {buttonColor} from "../components/CommonStyles";
import GreyLine from "../components/CommonComponents";

function MainScreen() {
// const handleStartWorkoutButtonPress = () => StartWorkoutScreen()
const handleStartWorkoutButtonPress = () => Alert.alert(
    "Start Workout", "should take you to the workout screen",
    [{text:"ok"}]) // temporary stand-in

    return (
        <View style={commonStyles.container}>
            {/* only works on IOS, for android its just View */}
            <SafeAreaView>
                <Text style={localStyles.myHubName}>My Hub</Text>
                <GreyLine/>
                <View style={[commonStyles.button, localStyles.startWorkoutButton]}>
                    <Button color={buttonColor} title='Start Workout' onPress={handleStartWorkoutButtonPress}/>
                </View>
            </SafeAreaView>

            <StatusBar style="auto"/>
        </View>
    )
}
export default MainScreen;



const localStyles = StyleSheet.create({
    myHubName: {
        fontSize: 45,
        fontWeight: 'bold',
        left: "10%",
        paddingTop: "20%"
    },
    startWorkoutButton: {
        height: 50
    }
});