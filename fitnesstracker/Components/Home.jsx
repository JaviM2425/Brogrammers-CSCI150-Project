import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import Navbar from './Navbar';

export default function Home({ navigation }) {
  return (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Brotein Shake!</Text>
      <Text style={styles.subtitle}>Track your workouts, monitor your progress, and stay motivated.</Text>
    </View>
    
    {/* Account Summary Section */}
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Today's Summary</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Steps</Text>
        <Text style={styles.cardValue}>5,432 steps</Text>
        <Text style={styles.cardSubtitle}>Goal: 10,000 steps</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workout Summary</Text>
        <Text style={styles.cardValue}>2 workouts logged</Text>
        <Text style={styles.cardSubtitle}>Keep up the great work!</Text>
      </View>
    </View>
    
    <View style={styles.container}>
      <TouchableOpacity style={[styles2.button, styles2.loginButton]}
      onPress={() => navigation.navigate("Settings")}>
        <Text style={styles2.buttonText}>Settings</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles2.button, styles2.loginButton]}
      onPress={() => navigation.navigate("Visuals")}>
      <Text style={styles2.buttonText}>Visuals</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles2.button, styles2.loginButton]}
      onPress={() => navigation.navigate("WorkoutManager")}>
      <Text style={styles2.buttonText}>Workout Manager</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles2.button, styles2.loginButton]}
      onPress={() => navigation.navigate("WorkoutRecommendations")}>
      <Text style={styles2.buttonText}>Workout Recommendations</Text>
      </TouchableOpacity>
      
    </View>
    <Navbar navigation={navigation} />
  </ScrollView>
  );
  
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 20,
    backgroundColor: "#F9FAFB",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  summaryContainer: {
    width: "90%",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#222",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#444",
  },
  cardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
    marginVertical: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  buttonsContainer: {
    width: "90%",
    marginTop: 10,
  },
});

const styles2 = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});