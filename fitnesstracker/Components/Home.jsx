import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from './Navbar';

export default function Home({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to the Fitness Tracker App!</Text>
        <Text style={styles.infoText}>Track your workouts, monitor your progress, and stay motivated.</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles2.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.navigate("Visuals")}
        >
          <Text style={styles2.buttonText}>Visuals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.navigate("WorkoutManager")}
        >
          <Text style={styles2.buttonText}>Workout Manager</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.navigate("WorkoutRecommendations")}
        >
          <Text style={styles2.buttonText}>Workout Recommendations</Text>
        </TouchableOpacity>
      </View>

      <Navbar navigation={navigation} />
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
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#2196F3",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  createButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
