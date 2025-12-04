import React, { useEffect, useMemo, useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Svg, Circle } from "react-native-svg";
import { useStepTrackerContext } from "../src/providers/StepTrackerProvider";
import { AuthContext } from "../App";
import Navbar from "./Navbar";

export default function Home({ navigation }) {
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api";

  const [user, setUser] = useState(null);
  const { user: authUser } = useContext(AuthContext);
  const { steps: liveSteps, distance, calories } = useStepTrackerContext();
  const [stepGoal, setStepGoal] = useState(10000);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [weeklyLoading, setWeeklyLoading] = useState(false);
  const [weeklyError, setWeeklyError] = useState(null);
  const [todayWorkouts, setTodayWorkouts] = useState([]);
  const [todayLoading, setTodayLoading] = useState(false);
  const [todayError, setTodayError] = useState(null);
  const caloriesDisplay =
    calories === null || calories === undefined ? "N/A" : calories.toFixed(1);

  const { width } = useWindowDimensions();
  const isWide = width >= 700;

  // Load logged-in user
  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    if (authUser) {
      setUser(authUser);
      if (authUser.stepGoal) {
        setStepGoal(authUser.stepGoal);
      }
    }
  }, [authUser]);

  useEffect(() => {
    const userId = authUser?.id ?? user?.id ?? user?.userID;
    if (!userId) return;

    const fetchWeekly = async () => {
      try {
        setWeeklyLoading(true);
        setWeeklyError(null);

        const response = await fetch(`${API_URL}/WorkoutLog/weekly?userId=${userId}`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to fetch weekly workouts");
        }

        setWeeklyTotal(data.totalWorkouts || 0);
      } catch (err) {
        setWeeklyError(err.message);
      } finally {
        setWeeklyLoading(false);
      }
    };

    const fetchToday = async () => {
      try {
        setTodayLoading(true);
        setTodayError(null);

        const response = await fetch(`${API_URL}/WorkoutLog/today?userId=${userId}`);
        const data = await response.json();

        if (!response.ok || !data.success) {
          throw new Error(data.error || "Failed to fetch today's workouts");
        }

        setTodayWorkouts(data.items || []);
      } catch (err) {
        setTodayError(err.message);
      } finally {
        setTodayLoading(false);
      }
    };

    fetchWeekly();
    fetchToday();
  }, [authUser, user, API_URL]);

  useEffect(() => {
    if (!authUser && user?.stepGoal) {
      setStepGoal(user.stepGoal);
    }
  }, [user, authUser]);
  const stepsToday = liveSteps ?? 0;
  const distanceMiles =
    distance === null || distance === undefined ? "0.00" : distance.toFixed(2);
  
  const stepPercent = useMemo(() => {
    if (!stepGoal || !stepsToday) return 0;
    return Math.min(stepsToday / stepGoal, 1);
  }, [stepsToday, stepGoal]);

  const circumference = 2 * Math.PI * 28;
  const dashOffset = circumference - stepPercent * circumference;

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* WELCOME HEADER */}
        <View style={styles.Welcomebanner}>
          <Text style={styles.title}>Welcome{user ? `, ${user.username}` : ""}</Text>
        </View>

        {/* SUMMARY */}
        <View style={styles.summaryContainer}>
          <Text style={styles.sectionTitle}>Today's Summary</Text>

          <View style={[styles.row, isWide && styles.rowWide]}>
            {/* STEPS CARD */}
            <View style={[styles.card, styles.flexCard, isWide && styles.cardSpacer]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>Daily Steps</Text>
                <Text style={styles.cardChip}>Goal {stepGoal.toLocaleString()}</Text>
              </View>

              <View style={styles.stepRow}>
                {/* Circular meter */}
                <Svg width={90} height={90} viewBox="0 0 90 90">
                  <Circle cx="45" cy="45" r="28" stroke="#E8EEF4" strokeWidth="10" fill="none" />
                  <Circle
                    cx="45"
                    cy="45"
                    r="28"
                    stroke="#3B82F6"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={dashOffset}
                    strokeLinecap="round"
                    transform="rotate(-90 45 45)"
                  />
                </Svg>

                {/* Metrics */}
                <View style={styles.metricGroup}>
                  <Text style={styles.numValue}>{stepsToday.toLocaleString()}</Text>
                  <Text style={styles.numLabel}>steps today</Text>

                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${stepPercent * 100}%` }]} />
                  </View>

                  <Text style={styles.progressNote}>{Math.round(stepPercent * 100)}% of goal</Text>

                  <Text style={[styles.numLabel, { marginTop: 10 }]}>
                    Distance: {distanceMiles} miles
                  </Text>
                  <Text style={styles.numLabel}>Calories: {caloriesDisplay}</Text>
                </View>
              </View>
            </View>

            {/* WORKOUT CARD */}
            <View style={[styles.card, styles.flexCard]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>Exercises</Text>
              </View>

              <Text style={styles.numValue}>{weeklyTotal}</Text>
              <Text style={styles.numLabel}>
                {weeklyLoading
                  ? "loading..."
                  : weeklyError
                  ? "could not load"
                  : "logged this week"}
              </Text>

              <View style={styles.todayList}>
                <Text style={styles.listTitle}>Today's Workouts</Text>
                {todayLoading ? (
                  <Text style={styles.listItemText}>Loading...</Text>
                ) : todayError ? (
                  <Text style={styles.listItemText}>Could not load today's workouts.</Text>
                ) : todayWorkouts.length === 0 ? (
                  <Text style={styles.listItemText}>No workouts logged today.</Text>
                ) : (
                  todayWorkouts.map((item) => (
                    <View key={item.id || item.exerciseName} style={styles.listItem}>
                      <Text style={styles.listItemText}>{item.exerciseName}</Text>
                      <Text style={styles.listItemMeta}>
                        {item.sets ? `${item.sets} x ${item.reps || "?"}` : "Logged"}
                        {item.weight ? ` @ ${item.weight}` : ""}
                      </Text>
                    </View>
                  ))
                )}
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F3F7FB",
  },
  scrollContainer: {
    paddingVertical: 24,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
  Welcomebanner: {
    backgroundColor: "#0F172A",
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#0F172A",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  summaryContainer: {
    width: "100%",
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    color: "#0F172A",
  },
  row: {
    flexDirection: "column",
    gap: 12,
  },
  rowWide: {
    flexDirection: "row",
    alignItems: "stretch",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#0F172A",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  flexCard: {
    flex: 1,
  },
  cardSpacer: {
    marginRight: 12,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#0F172A",
  },
  cardChip: {
    backgroundColor: "#EEF2FF",
    color: "#3B82F6",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    fontSize: 12,
    fontWeight: "700",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  metricGroup: {
    flex: 1,
  },
  numValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
  },
  numLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#3B82F6",
  },
  progressNote: {
    marginTop: 4,
    color: "#6B7280",
    fontSize: 12,
  },
  todayList: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 10,
    gap: 8,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  listItem: {
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  listItemText: {
    color: "#111827",
    fontSize: 14,
    fontWeight: "600",
  },
  listItemMeta: {
    color: "#6B7280",
    fontSize: 12,
    marginTop: 2,
  },
});
