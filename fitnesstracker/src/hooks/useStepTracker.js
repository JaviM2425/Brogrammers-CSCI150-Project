import { useState, useEffect, useRef } from "react";
import { Accelerometer } from "expo-sensors";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

let globalSubscription = null;

export default function useStepTracker(initialBaseSteps, userWeight = 70) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [baseStepsToday, setBaseStepsToday] = useState(null);
  const [sessionSteps, setSessionSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  const threshold = 1.35;
  const lastPeakRef = useRef(Date.now());

  useEffect(() => {
    if (initialBaseSteps === null) return;

    setBaseStepsToday(initialBaseSteps);
    setSessionSteps(0);
  }, [initialBaseSteps]);

  useEffect(() => {
    if (baseStepsToday === null) return;
    if (Platform.OS === "web") return;

    const startTracking = async () => {
      const available = await Accelerometer.isAvailableAsync();
      setIsAvailable(available);

      if (!available) return;

      Accelerometer.setUpdateInterval(100);

      if (!globalSubscription) {
        globalSubscription = Accelerometer.addListener(({ x, y, z }) => {
          const mag = Math.sqrt(x * x + y * y + z * z);
          const now = Date.now();

          if (mag > threshold && now - lastPeakRef.current > 350) {
            lastPeakRef.current = now;

            setSessionSteps((prev) => {
              const next = prev + 1;
              const absolute = baseStepsToday + next;
              updateMetrics(absolute);
              logToBackend(absolute);
              return next;
            });
          }
        });
      }
    };

    startTracking();
  }, [baseStepsToday]);

  const updateMetrics = (absolute) => {
    const stepLengthMeters = 0.78;
    const meters = absolute * stepLengthMeters;
    const miles = meters / 1609.34;
    const caloriesBurned = absolute * userWeight * 0.0005;

    setDistance(miles);
    setCalories(caloriesBurned);
  };

  const logToBackend = async (stepsCount) => {
    try {
      const userStr = await AsyncStorage.getItem("user");
      if (!userStr) return;
      const user = JSON.parse(userStr);

      const miles = distance;
      const caloriesBurned = calories;

      await fetch(`${process.env.EXPO_PUBLIC_API_URL}/steps/log`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          stepsCount,
          miles,
          caloriesBurned,
        }),
      });

      console.log("Sent step log →", { stepsCount, miles, caloriesBurned });
    } catch (e) {
      console.log("Backend log failed:", e.message);
    }
  };

  return {
    isAvailable,
    steps: baseStepsToday === null ? 0 : baseStepsToday + sessionSteps,
    distance,
    calories,
  };
}