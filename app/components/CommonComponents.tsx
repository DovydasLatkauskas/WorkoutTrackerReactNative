import {StyleSheet, View} from "react-native";

const GreyLine = () => {
    return (
        <View style={localStyles.lineContainer}>
        <View style={localStyles.line} />
    </View>
);
};

const localStyles = StyleSheet.create({
    lineContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    line: {
        height: 2,
        backgroundColor: '#A9A9A9',
        width: '80%'
    },
});
export {GreyLine};