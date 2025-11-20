import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Navbar from './Navbar';
import NavbarTop from "./NavbarTop";


export default function WorkoutManager({ navigation }) {
    const handleAddExercise = () => {
        console.log("TODO: Add exercise screen or modal here");
    };

    return (
        <View style={{flex:1}}>
            <NavbarTop navigation={navigation} />
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Add Workout</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter workout details"
                    multiline={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddExercise} >
                    <Text style={styles.buttonText}>Add exercise</Text>
                </TouchableOpacity>
            </ScrollView>

            <Navbar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    scroll: {
        paddingTop: 20,
        paddingBottom: 80, // space for navbar
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    button: {
        width: "80%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: "#1fd954ff",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    textarea: {
        width: "80%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top',
    },
});