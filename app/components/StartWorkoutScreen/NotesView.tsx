import {StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

function NotesView(){
    return(
        <View style={localStyles.notesView}>
            <Text>Notes:</Text>
            <View style={{ width: '90%' }}>
                <TextInput
                    style={localStyles.notes}
                placeholder="Your notes here"
                multiline={true}
                numberOfLines={4}
                />
            </View>
        </View>
    )
};

export default NotesView

const localStyles = StyleSheet.create({
    notesView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notes: {
        flexWrap: 'wrap',
        borderColor: 'darkgray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top'
    }
});