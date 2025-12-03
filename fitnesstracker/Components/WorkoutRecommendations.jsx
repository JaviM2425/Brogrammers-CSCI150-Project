import React, { useContext, useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Platform, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavbarTop from "./NavbarTop";
import Navbar from './Navbar';
import { AuthContext } from "../App";

/**
 * WorkoutRecommendations
 *
 * Top-level functional React component that renders a screen listing workout plans.
 * - Exports a default React component function for use with React Navigation or other routing.
 * - Accepts an optional "navigation" prop. When present, navigation.navigate is used to change screens.
 * - All interactive elements call console.log when navigation is not provided so the component remains testable.
 */

/* Static placeholder dataset representing workout plans.
   - Each item has an id (unique key), planName (string), workoutType (array of strings), and description (string).
   - The array shape mirrors typical backend records and is easy to replace with fetched data.
*/
/* Helper function to convert ranges like "8-10" or "30–60 sec" to numeric average */
const parseRangeToNumber = (str) => {
  if (!str) return null;
  const match = str.match(/(\d+)[^\d]*(\d+)?/); // captures one or two numbers
  if (!match) return null;
  const num1 = parseFloat(match[1]);
  const num2 = match[2] ? parseFloat(match[2]) : null;
  return num2 ? Math.round((num1 + num2) / 2) : num1;
};

/* Static dataset representing workout plans with numeric-friendly reps/sets/weights */
const PLANS = [
  {
    id: "plan_full_body",
    planName: "Full Body Routine",
    workoutType: ["Full Body"],
    exercises: [
      { exerciseName: "Squat", sets: "3-4", reps: "8-10", weight: "150-180" },
      { exerciseName: "Bench Press", sets: "3", reps: "8-12", weight: "120-140" },
      { exerciseName: "Bent-over Row", sets: "3", reps: "8-12", weight: "100-120" },
      { exerciseName: "Overhead Press", sets: "3", reps: "8-10", weight: "70-90" },
      { exerciseName: "Deadlift", sets: "2-3", reps: "5-8", weight: "180-220" },
    ],
  },
  {
    id: "plan_core_focus",
    planName: "Core Focused",
    workoutType: ["Core", "Stability"],
    exercises: [
      { exerciseName: "Plank", sets: "3", reps: "30-60 sec", weight: null },
      { exerciseName: "Russian Twist", sets: "3", reps: "20-30", weight: "15-25" },
      { exerciseName: "Hanging Leg Raise", sets: "3", reps: "12-15", weight: null },
      { exerciseName: "Bicycle Crunch", sets: "3", reps: "20-30", weight: null },
      { exerciseName: "Ab Rollout", sets: "3", reps: "8-12", weight: null },
    ],
  },
  {
    id: "plan_push_pull_legs",
    planName: "Push / Pull / Legs",
    workoutType: ["Push", "Pull", "Legs"],
    exercises: [
      { exerciseName: "Pull-up", sets: "3", reps: "6-10", weight: null },
      { exerciseName: "Incline Bench Press", sets: "3", reps: "8-12", weight: "100-120" },
      { exerciseName: "Leg Press", sets: "3", reps: "10-15", weight: "200-250" },
      { exerciseName: "Dumbbell Shoulder Press", sets: "3", reps: "8-12", weight: "40-60" },
      { exerciseName: "Seated Cable Row", sets: "3", reps: "10-12", weight: "80-100" },
    ],
  },
  {
    id: "plan_leg_split",
    planName: "Leg Split",
    workoutType: ["Legs"],
    exercises: [
      { exerciseName: "Back Squat", sets: "3-4", reps: "6-10", weight: "160-200" },
      { exerciseName: "Romanian Deadlift", sets: "3", reps: "8-12", weight: "140-180" },
      { exerciseName: "Lunges", sets: "3", reps: "12-15", weight: "30-40" },
      { exerciseName: "Leg Curl", sets: "3", reps: "12-15", weight: "50-70" },
      { exerciseName: "Standing Calf Raise", sets: "4", reps: "12-20", weight: "70-100" },
    ],
  },
];

export default function WorkoutRecommendations({ navigation }) {
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api";
  const { user: authUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  // Pull a saved user from storage so we can attach the right userID to new logs
  useEffect(() => {
    const loadUser = async () => {
      const stored = await AsyncStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    };
    loadUser();
  }, []);

  const userId = useMemo(() => authUser?.id ?? user?.id ?? user?.userID, [authUser, user]);

  const renderPlan = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.planTitle}>{item.planName}</Text>
        <Text style={styles.planTypes}>{item.workoutType.join(", ")}</Text>
      </View>

      <View style={styles.cardActions}>
        <TouchableOpacity
          style={[styles.button, styles.primaryButton]}
          onPress={() => setExpandedId(expandedId === item.id ? null : item.id)}
        >
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={async () => {
            try {
              if (!userId) {
                alert("Please log in before adding workouts to your log.");
                return;
              }
              //Get averge values from ranges and prepare request bodies
              const requestBodies = item.exercises.map((ex) => ({
                planName: item.planName,
                exerciseName: ex.exerciseName,
                sets: parseRangeToNumber(ex.sets),
                reps: parseRangeToNumber(ex.reps),
                weight: parseRangeToNumber(ex.weight),
                date: new Date().toISOString(),
                userID: userId,
              }));

              for (const body of requestBodies) {
                const response = await fetch(`${API_URL}/WorkoutLog`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(body),
                });

                const data = await response.json();
                if (!response.ok || data.error) {
                  throw new Error(data.error || "Failed to add workout to log.");
                }
              }

              alert(`${item.planName} exercises added to workout log!`);
            } catch (error) {
              console.error("Network error:", error);
              alert("Could not connect to backend");
            }
          }}
        >
          <Text style={styles.buttonText}>Add to Log</Text>
        </TouchableOpacity>
      </View>

      {expandedId === item.id && (
        <View style={styles.expandedBox}>
          {item.exercises.map((ex, idx) => (
            <Text key={idx} style={styles.expandedText}>
              {ex.exerciseName} - Sets: {ex.sets}, Reps: {ex.reps}, Weight: {ex.weight ?? "Bodyweight"}
            </Text>
          ))}
        </View>
      )}
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <NavbarTop navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.title}>Workout Recommendations</Text>
        <Text style={styles.subtitle}>
          Catalog of preloaded plans. Select a plan to view details or add it to your workout log.
        </Text>

        <FlatList
          data={PLANS}
          keyExtractor={(p) => p.id}
          renderItem={renderPlan}
          contentContainerStyle={styles.listContent}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 12 : 20,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#2196F3",
    textAlign: "center",
    marginBottom: 12,
    width: "100%",
  },

  list: {
    width: "100%",
    flex: 1,
  },
  listContent: {
    paddingBottom: 25,
    paddingTop: 4,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: "#e6f0fb",
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },

  planTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  planTypes: {
    fontSize: 12,
    color: "#2196F3",
    fontWeight: "600",
  },

  planDescription: {
    fontSize: 14,
    color: "#333",
    marginBottom: 12,
  },

  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    flex: 1,
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 4,
  },

  primaryButton: {
    backgroundColor: "#2196F3",
  },
  secondaryButton: {
    backgroundColor: "#4CAF50",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  expandedBox: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d4e7ff",
  },

  expandedText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
});
