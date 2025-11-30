import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useStepTracker from "../src/hooks/useStepTracker";

export default function StepTest() {
  const tracker = useStepTracker(0);
  if (!tracker) return null;
  
  const {
    isAvailable = false,
    steps = 0,
    distance = 0,
    calories = 0,
    accel = { x: 0, y: 0, z: 0 },
    magnitude = 0,
    threshold = 1.35,
    lastPeak = 0
  } = tracker;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accelerometer Step Tracker Debug</Text>

      <Text style={styles.label}>Sensor Available:</Text>
      <Text style={styles.value}>{isAvailable ? "YES" : "NO"}</Text>

      <Text style={styles.label}>Steps Counted:</Text>
      <Text style={styles.value}>{steps}</Text>

      <Text style={styles.label}>Distance (miles):</Text>
      <Text style={styles.value}>{distance.toFixed(3)}</Text>

      <Text style={styles.label}>Calories Burned:</Text>
      <Text style={styles.value}>{calories.toFixed(1)}</Text>

      <View style={styles.debugBox}>
        <Text style={styles.debugTitle}>Live Accelerometer Data</Text>
        <Text style={styles.debugText}>x: {accel.x.toFixed(3)}</Text>
        <Text style={styles.debugText}>y: {accel.y.toFixed(3)}</Text>
        <Text style={styles.debugText}>z: {accel.z.toFixed(3)}</Text>
        <Text style={styles.debugText}>Magnitude: {magnitude.toFixed(3)}</Text>
        <Text style={styles.debugText}>Threshold: {threshold}</Text>
        <Text style={styles.debugText}>Last Peak: {lastPeak}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
  },
  value: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2196F3",
  },
  debugBox: {
    marginTop: 30,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    width: "90%",
    backgroundColor: "#F5F5F5",
  },
  debugTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },
  debugText: {
    fontSize: 14,
    color: "#333",
  },
});