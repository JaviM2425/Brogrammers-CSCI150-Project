import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Navbar from './Navbar';
import NavbarTop from "./NavbarTop";

export default function WorkoutManager({ navigation }) {

    const [weight, setWeight] = useState('');
    const [reps, setReps] = useState('');
    const [sets, setSets] = useState('1');
    const [workoutName, setWorkoutName] = useState('');
    const [exerciseName, setExerciseName] = useState('');
    const [exercises, setExercises] = useState([]);

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
                    planName: workoutName || null,
                    exerciseName,
                    sets: sets || null,
                    reps: reps || null,
                    weight: weight || null,
                    date: new Date().toISOString(),
                    userID: 1
                })
            });

            const data = await response.json();
            console.log("Saved workout:", data);

            // Add exercise to UI list (local only)
            setExercises(prev => [
                ...prev,
                {
                    id: data.id,
                    exerciseName,
                    sets,
                    reps,
                    weight
                }
            ]);

            // Reset form fields
            setExerciseName("");
            setWeight("");
            setReps("");

            alert("Workout added successfully!");

        } catch (error) {
            console.error("Fetch error:", error);
            alert("Failed to add workout. Check your server & IP address.");
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <NavbarTop navigation={navigation} />
            <ScrollView style={styles.scroll} contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">

                <Text style={styles.title}>Add Workout</Text>

                {/* Workout Name */}
                <Text style={styles.inputLabel}>Workout</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter workout name"
                    value={workoutName}
                    onChangeText={text => {
                        const name = text.replace(/[^a-zA-Z ]/g, '');
                        setWorkoutName(name);
                    }}
                />

                {/* Exercise Name */}
                <Text style={styles.inputLabel}>Exercise</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter exercise name"
                    value={exerciseName}
                    onChangeText={text => {
                        const name = text.replace(/[^a-zA-Z ]/g, '');
                        setExerciseName(name);
                    }}
                />

                {/* Weight */}
                <Text style={styles.inputLabel}>Weight (lbs)</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter weight"
                    value={weight}
                    keyboardType="numeric"
                    onChangeText={text => {
                        const regex = /^\d*\.?\d{0,2}$/;
                        if (regex.test(text) || text === '') {
                            setWeight(text);
                        }
                    }}
                />

                {/* Reps */}
                <Text style={styles.inputLabel}>Reps</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter reps"
                    value={reps}
                    keyboardType="numeric"
                    onChangeText={text => {
                        const num = text.replace(/[^0-9]/g, '');
                        setReps(num);
                    }}
                />

                {/* Sets Picker */}
                <View style={styles.pickerContainer}>
                    <Text style={styles.pickerLabel}>Sets</Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={sets}
                        onValueChange={(itemValue) => setSets(itemValue)}
                    >
                        {[...Array(8)].map((_, i) => (
                            <Picker.Item key={i+1} label={`${i+1}`} value={`${i+1}`} />
                        ))}
                    </Picker>
                </View>

                {/* Button */}
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleAddExercise}
                >
                    <Text style={styles.buttonText}>Add Exercise</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Exercise List */}
            <Text style={styles.exerLabel}>
                Exercise List {workoutName ? `- ${workoutName}` : ""}
            </Text>

            <ScrollView
                style={styles.exerContainer}
                contentContainerStyle={styles.exerContainerContent}
                showsVerticalScrollIndicator={true}
            >
                {exercises.length === 0 ? (
                    <Text style={styles.emptyText}>No exercises yet</Text>
                ) : (
                    exercises.map(item => (
                        <View key={item.id} style={styles.exerItem}>
                            <Text style={styles.exerItemText}>
                                {item.exerciseName} - {item.sets}x{item.reps} {item.weight ? `${item.weight} lbs` : ""}
                            </Text>
                        </View>
                    ))
                )}
            </ScrollView>

            <Navbar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 20,
    },
    scroll: {
        flex: 1,
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
    },
    pickerContainer: {
        width: "50%",
        marginBottom: 20,
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    picker: {
        width: "100%",
    },
    pickerLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 3,
        color: '#333',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 3,
        color: '#333',
        alignSelf: 'flex-start',
        marginLeft: 35,
    },
    exerContainer: {
        alignSelf: 'center',
        borderWidth: 1,
        maxHeight: 150,
        width: "95%",
        marginTop: 6,
        marginBottom: 12,
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: 'hidden',
    },
    exerContainerContent: {
        paddingVertical: 4,
    },
    exerItem: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    exerItemText: {
        fontSize: 16,
        color: '#222',
    },
    emptyText: {
        textAlign: 'center',
        color: '#666',
        marginTop: 40,
    },
    exerLabel: {
        marginTop: 10,
        fontSize: 21,
        fontWeight: '600',
        textAlign: 'center',
    },
});
