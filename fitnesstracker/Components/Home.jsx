import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Svg, Circle } from "react-native-svg";
import useStepTracker from "../src/hooks/useStepTracker";
import Navbar from "./Navbar";

export default function Home({ navigation }) {
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api";

  const [user, setUser] = useState(null);
  const { steps, distance, calories } = useStepTracker();
  const [stepGoal] = useState(10000);
  const [weeklyWorkouts, setWeeklyWorkouts] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [weeklyLoading, setWeeklyLoading] = useState(false);
  const [weeklyError, setWeeklyError] = useState(null);

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

  // Fetch weekly workouts when user is available
  useEffect(() => {
    const userId = user?.id ?? user?.userID;
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

        const dayMap = {};
        (data.days || []).forEach((d) => {
          dayMap[d.date] = { count: d.count, items: d.items || [] };
        });

        const today = new Date();
        const last7 = [];
        for (let i = 6; i >= 0; i--) {
          const day = new Date(today);
          day.setDate(today.getDate() - i);
          const key = day.toISOString().slice(0, 10);
          const label = day.toLocaleDateString("en-US", { weekday: "short" });
          const bucket = dayMap[key] || { count: 0, items: [] };
          last7.push({ date: key, label, count: bucket.count, items: bucket.items });
        }

        setWeeklyWorkouts(last7);
        setWeeklyTotal(data.totalWorkouts || 0);
      } catch (err) {
        setWeeklyError(err.message);
      } finally {
        setWeeklyLoading(false);
      }
    };

    fetchWeekly();
  }, [user, API_URL]);

  // Convert tracker steps + your UI logic
  const stepsToday = steps ?? 0;

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
                    Distance: {distance.toFixed(2)} miles
                  </Text>
                  <Text style={styles.numLabel}>Calories: {calories.toFixed(1)}</Text>
                </View>
              </View>
            </View>

            {/* WORKOUT CARD */}
            <View style={[styles.card, styles.flexCard]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>Workouts</Text>
              </View>

              <Text style={styles.numValue}>{weeklyTotal}</Text>
              <Text style={styles.numLabel}>logged this week</Text>
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
});
