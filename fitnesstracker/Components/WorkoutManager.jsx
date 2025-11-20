import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import Navbar from './Navbar';
import NavbarTop from "./NavbarTop";

export default function WorkoutManager({ navigation }) {
    const [planName, setPlanName] = useState("");
    const [exerciseName, setExerciseName] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");

    const handleAddExercise = async () => {
    if (!exerciseName) {
        alert("Exercise name is required!");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/api/WorkoutLog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                planName: planName || null,
                exerciseName,
                sets: sets || null,
                reps: reps || null,
                weight: weight || null,
                date: new Date().toISOString(),
                userID: 1   // replace with logged-in user ID
            })
        });

        const data = await response.json();
        console.log("Saved workout:", data);

        alert("Workout added successfully!");

    } catch (error) {
        console.error("Error:", error);
        alert("Failed to add workout");
    }
};


    return (
        <View style={{ flex: 1 }}>
            <NavbarTop navigation={navigation} />

            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>Add Workout</Text>

                <TextInput
                    style={styles.textarea}
                    placeholder="Plan Name"
                    value={planName}
                    onChangeText={setPlanName}
                />

                <TextInput
                    style={styles.textarea}
                    placeholder="Exercise Name"
                    value={exerciseName}
                    onChangeText={setExerciseName}
                />

                <TextInput
                    style={styles.textarea}
                    placeholder="Sets"
                    keyboardType="numeric"
                    value={sets}
                    onChangeText={setSets}
                />

                <TextInput
                    style={styles.textarea}
                    placeholder="Reps"
                    keyboardType="numeric"
                    value={reps}
                    onChangeText={setReps}
                />

                <TextInput
                    style={styles.textarea}
                    placeholder="Weight"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={setWeight}
                />

                <TouchableOpacity style={styles.button} onPress={handleAddExercise}>
                    <Text style={styles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
            </ScrollView>

            <Navbar navigation={navigation} />
        </View>
    );
}


const styles = StyleSheet.create({
    scroll: {
        paddingTop: 20,
        paddingBottom: 80,
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
