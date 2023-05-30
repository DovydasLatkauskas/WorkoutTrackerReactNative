import {StyleSheet} from "react-native";

const primaryColor = "#fdffeb"
const secondaryColor = "limegreen"

const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor
    },
    button: {
        backgroundColor: secondaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color:primaryColor,
        fontWeight:"bold"
    }
});
export default commonStyles