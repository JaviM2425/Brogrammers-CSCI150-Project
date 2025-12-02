import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Svg, Circle, Polyline } from "react-native-svg";
import Navbar from "./Navbar";
import { useStepTrackerContext } from "../src/providers/StepTrackerProvider";
import { AuthContext } from "../App";
import api from "../src/api/client";

const formatShortDate = (isoString) => {
  if (!isoString) return "";
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return String(isoString).slice(5, 10);
  const month = `${d.getMonth() + 1}`.padStart(2, "0");
  const day = `${d.getDate()}`.padStart(2, "0");
  return `${month}-${day}`;
};

const formatDayAbbrev = (isoString) => {
  if (!isoString) return "";
  const d = new Date(isoString);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return Number.isNaN(d.getTime()) ? "" : days[d.getDay()];
};

function StepCard({ steps, goal }) {
  const progress = Math.min(goal ? steps / goal : 0, 1);

  return (
    <View style={styles.section}>
      <Text style={styles.stepTitle}>Steps Today</Text>
      <Text style={styles.stepCount}>{steps.toLocaleString()}</Text>
      <Text style={styles.stepSub}>steps</Text>
      <Text style={styles.stepGoal}>Goal: {goal.toLocaleString()}</Text>

      <View style={styles.circleContainer}>
        <Svg height="170" width="170">
          <Circle
            cx="85"
            cy="85"
            r="70"
            stroke="#E3E8F0"
            strokeWidth="12"
            fill="transparent"
          />
          <Circle
            cx="85"
            cy="85"
            r="70"
            stroke="#4CAF50"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={`${progress * 440} 440`}
            strokeLinecap="round"
            transform="rotate(-90 85 85)"
          />
        </Svg>
      </View>
      <Text style={styles.progressNote}>{Math.round(progress * 100)}% of goal</Text>
    </View>
  );
}

function LineChartCard({ title, data, color, valueFormatter, secondaryNote }) {
  if (!data.length) {
    return (
      <View style={styles.section}>
        <Text style={styles.chartTitle}>{title}</Text>
        {secondaryNote ? <Text style={styles.chartSubtitle}>{secondaryNote}</Text> : null}
        <Text style={styles.emptyText}>No data yet.</Text>
      </View>
    );
  }

  const chartWidth = 300;
  const chartHeight = 160;
  const pad = 18;

  const values = data.map((d) => d.value);
  const minV = Math.min(...values);
  const maxV = Math.max(...values);
  const range = Math.max(maxV - minV, 1);

  const points = data.map((d, i) => {
    const x =
      pad +
      (data.length === 1
        ? (chartWidth - pad * 2) / 2
        : ((chartWidth - pad * 2) / (data.length - 1)) * i);
    const y = pad + (chartHeight - pad * 2) * (1 - (d.value - minV) / range);
    return { ...d, x, y };
  });

  const showLabel = () => true;

  return (
    <View style={styles.section}>
      <Text style={styles.chartTitle}>{title}</Text>
      {secondaryNote ? <Text style={styles.chartSubtitle}>{secondaryNote}</Text> : null}
      <View style={styles.lineChartBox}>
        <Svg width={chartWidth} height={chartHeight}>
          <Polyline
            points={points.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
          />
          {points.map((p, idx) => (
            <Circle key={idx} cx={p.x} cy={p.y} r="4" fill={color} />
          ))}
        </Svg>
        <View style={styles.lineLabelRow}>
          {points.map((p, idx) => (
            <Text key={idx} style={styles.lineLabelText}>
              {showLabel(idx) ? p.label : ""}
            </Text>
          ))}
        </View>
        <View style={styles.lineValueRow}>
          {points.map((p, idx) => (
            <Text key={idx} style={styles.lineValueText}>
              {showLabel(idx) ? valueFormatter(p.value) : ""}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

export default function SimpleVisuals({ navigation }) {
  const { user } = useContext(AuthContext);
  const { steps } = useStepTrackerContext();
  const [stepGoal, setStepGoal] = useState(user?.stepGoal || 10000);
  const [weightHistory, setWeightHistory] = useState([]);
  const [weeklyCalories, setWeeklyCalories] = useState([]);
  const [weeklyRange, setWeeklyRange] = useState("");

  useEffect(() => {
    if (user?.stepGoal) setStepGoal(user.stepGoal);
  }, [user]);

  useEffect(() => {
    const fetchWeightHistory = async () => {
      try {
        const res = await api.get(`/weights/history?userId=${user.id}`);
        const list = res.data?.weights || [];
        setWeightHistory(
          list.map((w) => ({
            label: formatShortDate(w.date),
            value: w.weight,
          }))
        );
      } catch (e) {
        console.log("Failed to load weight history", e.message);
      }
    };

    const fetchWeekly = async () => {
      try {
        const res = await api.get(`/steps/weekly?userId=${user.id}`);
        const weekly = (res.data?.weekly || []).sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        const start = weekly[0]?.date;
        const end = weekly[weekly.length - 1]?.date;
        setWeeklyCalories(
          weekly.map((d) => ({
            label: formatDayAbbrev(d.date),
            value: Math.round(d.calories || 0),
          }))
        );
        setWeeklyRange(start && end ? `${formatShortDate(start)} - ${formatShortDate(end)}` : "");
      } catch (e) {
        console.log("Failed to load weekly steps", e.message);
      }
    };

    if (user?.id) {
      fetchWeightHistory();
      fetchWeekly();
    }
  }, [user]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Fitness Visuals</Text>

        <StepCard steps={steps} goal={stepGoal} />

        <LineChartCard
          title="Weight Progress"
          data={weightHistory}
          color="#2196F3"
          valueFormatter={(v) => `${v.toFixed(1)} kg`}
        />

        <LineChartCard
          title="Weekly Calories"
          data={weeklyCalories}
          color="#4CAF50"
          valueFormatter={(v) => `${v} cal`}
          secondaryNote={weeklyRange || null}
        />

        <View style={styles.section}>
          <WeeklyWorkoutsPanel user={user} />
        </View>
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
}

// Weekly workouts panel (from Home)
function WeeklyWorkoutsPanel({ user }) {
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:5000/api";
  const [weeklyWorkouts, setWeeklyWorkouts] = useState([]);
  const [weeklyTotal, setWeeklyTotal] = useState(0);
  const [weeklyLoading, setWeeklyLoading] = useState(false);
  const [weeklyError, setWeeklyError] = useState(null);

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

        // Build Sunday (start of current week) through Saturday
        const today = new Date();
        const startOfWeek = new Date(today);
        startOfWeek.setHours(0, 0, 0, 0);
        startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Sunday

        const weekDays = [];
        for (let i = 0; i < 7; i++) {
          const day = new Date(startOfWeek);
          day.setDate(startOfWeek.getDate() + i);
          const key = day.toISOString().slice(0, 10);
          const label = day.toLocaleDateString("en-US", { weekday: "short" });
          const bucket = dayMap[key] || { count: 0, items: [] };
          weekDays.push({ date: key, label, count: bucket.count, items: bucket.items });
        }

        setWeeklyWorkouts(weekDays);
        setWeeklyTotal(data.totalWorkouts || 0);
      } catch (err) {
        setWeeklyError(err.message);
      } finally {
        setWeeklyLoading(false);
      }
    };

    fetchWeekly();
  }, [user, API_URL]);

  return (
    <View>
      <View style={styles.weeklyHeader}>
        <Text style={styles.chartTitle}>This Week's Workouts ({weeklyTotal})</Text>
        {weeklyLoading && <Text style={styles.smallChip}>Loading...</Text>}
        {weeklyError && <Text style={styles.errorText}>{weeklyError}</Text>}
      </View>

      {weeklyWorkouts.every((d) => d.count === 0) ? (
        <Text style={styles.calorieValue}>No workouts logged this week.</Text>
      ) : (
        weeklyWorkouts.map((day) => (
          <View key={day.date} style={{ marginBottom: 10 }}>
            <Text style={styles.weekLabel}>
              {day.label} ({day.count})
            </Text>
            {day.items.map((w) => (
              <Text key={w.id} style={styles.calorieValue}>
                {w.exerciseName} {w.sets && w.reps ? `- ${w.sets}x${w.reps}` : ""}{" "}
                {w.weight ? `${w.weight} lbs` : ""}
              </Text>
            ))}
          </View>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 24,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#333",
  },
  section: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 14,
    padding: 20,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  stepCount: {
    fontSize: 44,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
  },
  stepSub: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginTop: -4,
    marginBottom: 8,
  },
  stepGoal: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginBottom: 12,
  },
  circleContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },
  progressNote: {
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    fontSize: 14,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
    color: "#111",
  },
  lineChartBox: {
    alignItems: "center",
  },
  lineLabelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 6,
    width: 300,
  },
  lineValueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    width: 300,
  },
  lineLabelText: {
    fontSize: 12,
    color: "#444",
    textAlign: "center",
    flex: 1,
  },
  lineValueText: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
    flex: 1,
  },
  goalText: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
  },
  calorieValue: {
    fontSize: 13,
    color: "#333",
  },
  weeklyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  smallChip: {
    fontSize: 12,
    color: '#6B7280',
  },
  errorText: {
    fontSize: 12,
    color: '#DC2626',
  },
  weekLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
});
