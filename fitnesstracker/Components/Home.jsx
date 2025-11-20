import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView, useWindowDimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "./Navbar";
import { Svg, Circle } from "react-native-svg";
import api from "../src/api/client";

export default function Home({ navigation }) {
  const [user, setUser] = useState(null);
  const [stepsToday, setStepsToday] = useState(0);
  const [stepGoal] = useState(10000);  // default goal
  const [loggedWorkouts] = useState(2);
  const { width } = useWindowDimensions();
  const isWide = width >= 700;

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
    if (!user?.id) return;
    let active = true;

    const loadSteps = async () => {
      try {
        const res = await api.get("/steps/today", { params: { userId: user.id } });
        const val = typeof res.data?.steps === "number" ? res.data.steps : 0;
        if (active) {
          setStepsToday(val);
          await AsyncStorage.setItem("step", val.toString());
        }
      } catch (err) {
        console.warn("Failed to fetch steps; using cache", err);
        const cached = await AsyncStorage.getItem("step");
        if (active && cached) setStepsToday(parseInt(cached, 10));
      }
    };

    loadSteps();
    return () => { active = false; };
  }, [user]);

  const stepPercent = useMemo(() => {
    if (!stepGoal || !stepsToday) return 0;
    return Math.min(stepsToday / stepGoal, 1);
  }, [stepsToday, stepGoal]);

  const circumference = 2 * Math.PI * 28;
  const dashOffset = circumference - stepPercent * circumference;

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.Welcomebanner}>
          <Text style={styles.title}>Welcome{user ? `, ${user.username}` : ""}</Text>
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.sectionTitle}>Today's summary</Text>

          <View style={[styles.row, isWide && styles.rowWide]}>
            <View style={[styles.card, styles.flexCard, isWide && styles.cardSpacer]}>

              <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>Daily Steps</Text>
                <Text style={styles.cardChip}>Goal {stepGoal.toLocaleString()}</Text>
              </View>

              <View style={styles.stepRow}>
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

                <View style={styles.metricGroup}>
                  <Text style={styles.numValue}>{stepsToday.toLocaleString()}</Text>
                  <Text style={styles.numLabel}>steps today</Text>
                  <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${stepPercent * 100}%` }]} />
                  </View>
                  <Text style={styles.progressNote}>{Math.round(stepPercent * 100)}% of goal</Text>
                  <Text style={styles.progressNote}>Distance</Text>
                </View>

              </View>
            </View>

            <View style={[styles.card, styles.flexCard]}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardLabel}>Workouts</Text>
              </View>
              <Text style={styles.numValue}>{loggedWorkouts}</Text>
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
  eyebrow: {
    color: "#8EA2C2",
    fontSize: 14,
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    color: "#B8C4D8",
    lineHeight: 20,
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
  cardChipSecondary: {
    backgroundColor: "#E0F2FE",
    color: "#0284C7",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    fontSize: 12,
    fontWeight: "700",
  },
  stepRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
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
  badgeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 10,
  },
  badge: {
    backgroundColor: "#ECFEFF",
    color: "#0E7490",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    fontWeight: "700",
    fontSize: 12,
  },
  checklistRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  checkItem: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 12,
    borderRadius: 10,
    color: "#0F172A",
    fontWeight: "600",
  },
});
