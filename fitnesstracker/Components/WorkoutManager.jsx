import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Navbar from './Navbar';
import NavbarTop from "./NavbarTop";


export default function WorkoutManager({ navigation }) {
    return (
        <View style={{flex:1}}>
            <NavbarTop navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.title}>Add Workout</Text>
                <TextInput
                    style={styles.textarea}
                    placeholder="Enter workout details"
                    multiline={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Add exercise</Text>
                      </TouchableOpacity>
            </View>

            <Navbar navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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