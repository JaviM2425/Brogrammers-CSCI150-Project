import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to the Fitness Tracker App!</Text>
            <Text style={styles.infoText}>Track your workouts, monitor your progress, and stay motivated.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    infoText: {
        fontSize: 16,
        textAlign: 'center',
    },
});