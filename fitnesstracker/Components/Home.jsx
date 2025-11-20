import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStepTracker from "../src/hooks/useStepTracker";
import { AuthContext } from "../App";
import Navbar from './Navbar';

export default function Home({ navigation }) {
  const { logout } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const { steps, distance, calories } = useStepTracker();
  const [stepGoal, setStepGoal] = useState(10000);     
  const [loggedWorkouts, setLoggedWorkouts] = useState(0);

  // Load logged-in user data
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  return (
    <View style={{flex:1}}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome{user ? `, ${user.username}` : ""}!</Text>
        <Text style={styles.subtitle}>Track your workouts, monitor your progress, and stay motivated.</Text>
      </View>
    
    {/* Account Summary Section */}
    <View style={styles.summaryContainer}>
      <Text style={styles.summaryTitle}>Today's Summary</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Daily Steps</Text>
        <Text style={styles.cardValue}>{steps.toLocaleString()}</Text>
        <Text style={styles.cardSubtitle}>Goal: {stepGoal.toLocaleString()}</Text>
        <Text style={styles.cardValue}>Distance: {distance.toFixed(2)} miles | Calories: {calories.toFixed(1)}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workout Summary</Text>
        <Text style={styles.cardValue}>
          {loggedWorkouts} workouts logged
        </Text>
        <Text style={styles.cardSubtitle}>Keep up the great work!</Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("StepTest")}>
         <Text>Test Step Tracker</Text>
      </TouchableOpacity>

    </View>
  </ScrollView>
  <Navbar navigation={navigation} />
  </View>
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
});