import { useState, useEffect, useRef } from "react";
import { Accelerometer } from "expo-sensors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStepTracker(userWeight = 70) {
  const [isAvailable, setIsAvailable] = useState(false);

  const [steps, setSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  // Debug data
  const [accel, setAccel] = useState({ x: 0, y: 0, z: 0 });
  const [magnitude, setMagnitude] = useState(0);

  const threshold = 1.35;
  const lastPeakRef = useRef(Date.now());
/*
  useEffect(() => {
    // Check sensor availability
    Accelerometer.isAvailableAsync().then(setIsAvailable);

    // Set update interval
    Accelerometer.setUpdateInterval(100); // ~10 Hz

    const subscription = Accelerometer.addListener(({ x, y, z }) => {
      setAccel({ x, y, z });

      const mag = Math.sqrt(x * x + y * y + z * z);
      setMagnitude(mag);

      const now = Date.now();

      if (mag > threshold && now - lastPeakRef.current > 350) {
        lastPeakRef.current = now;

        setSteps((prevSteps) => {
          const newSteps = prevSteps + 1;
          updateMetrics(newSteps);
          return newSteps;
        });
      }
    });

    return () => subscription.remove();
  }, []); // subscribe once
*/

  const updateMetrics = (stepCount) => {
    const stepLengthMeters = 0.78;
    const meters = stepCount * stepLengthMeters;
    const miles = meters / 1609.34;

    const caloriesBurned = stepCount * userWeight * 0.0005;

    setDistance(miles);
    setCalories(caloriesBurned);

    logToBackend(stepCount, miles, caloriesBurned);
  };

  const logToBackend = async (stepsCount, distance, calories) => {
    const userStr = await AsyncStorage.getItem("user");
    if (!userStr) return;

    const user = JSON.parse(userStr);

    try {
      // IMPORTANT: your .env already has /api, so DON'T add it again here
      await fetch(`${process.env.EXPO_PUBLIC_API_URL}/steps/log`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          stepsCount,
          distance,
          calories,
        }),
      });

      console.log("Sent step log →", { stepsCount, distance, calories });
    } catch (e) {
      console.log("Failed to send:", e.message);
    }
  };

  return {
    isAvailable,
    steps,
    distance,
    calories,
    accel,
    magnitude,
    threshold,
    lastPeak: lastPeakRef.current,
  };
}