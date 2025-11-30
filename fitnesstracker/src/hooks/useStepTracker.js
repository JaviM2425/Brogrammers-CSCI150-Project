import { useState, useEffect, useRef } from "react";
import { Accelerometer } from "expo-sensors";
import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useStepTracker(initialBaseSteps, userWeight = 70) {
  const [isAvailable, setIsAvailable] = useState(false);
  const [baseStepsToday, setBaseStepsToday] = useState(null);
  const [sessionSteps, setSessionSteps] = useState(0);
  const [distance, setDistance] = useState(0);
  const [calories, setCalories] = useState(0);

  const threshold = 1.35;
  const lastPeakRef = useRef(Date.now());
  const subscriptionRef = useRef(null);
  const baseStepsRef = useRef(0);
  const weightRef = useRef(userWeight);

  useEffect(() => {
    weightRef.current = userWeight || 70;
  }, [userWeight]);

  useEffect(() => {
    if (initialBaseSteps === null) return;

    setBaseStepsToday(initialBaseSteps);
    setSessionSteps(0);
    baseStepsRef.current = initialBaseSteps;
    updateMetrics(initialBaseSteps, weightRef.current);
  }, [initialBaseSteps]);

  useEffect(() => {
    baseStepsRef.current = baseStepsToday ?? 0;
  }, [baseStepsToday]);

  useEffect(() => {
    if (baseStepsToday === null) return;
    if (Platform.OS === "web") return;

    let cancelled = false;

    const startTracking = async () => {
      const available = await Accelerometer.isAvailableAsync();
      if (!cancelled) setIsAvailable(available);

      if (!available) return;

      Accelerometer.setUpdateInterval(100);

      subscriptionRef.current?.remove?.();

      subscriptionRef.current = Accelerometer.addListener(({ x, y, z }) => {
        const mag = Math.sqrt(x * x + y * y + z * z);
        const now = Date.now();

        if (mag > threshold && now - lastPeakRef.current > 350) {
          lastPeakRef.current = now;

          setSessionSteps((prev) => {
            const next = prev + 1;
            const absolute = baseStepsRef.current + next;
            const metrics = updateMetrics(absolute, weightRef.current);
            logToBackend(absolute, metrics);
            return next;
          });
        }
      });
    };
    startTracking();

    return () => {
      cancelled = true;
      subscriptionRef.current?.remove?.();
      subscriptionRef.current = null;
    };
  }, [baseStepsToday]);

  const computeMetrics = (absolute, weight) => {
    const stepLengthMeters = 0.78;
    const meters = absolute * stepLengthMeters;
    const miles = meters / 1609.34;
    const caloriesBurned = absolute * (weight || 70) * 0.0005;
    return { miles, caloriesBurned };
  };

  const updateMetrics = (absolute, weight = weightRef.current) => {
    const { miles, caloriesBurned } = computeMetrics(absolute, weight);
    setDistance(miles);
    setCalories(caloriesBurned);
    return { miles, caloriesBurned };
  };

  const logToBackend = async (stepsCount, metricsOverride) => {
    try {
      const userStr = await AsyncStorage.getItem("user");
      if (!userStr) return;
      const user = JSON.parse(userStr);

      const { miles, caloriesBurned } =
        metricsOverride || computeMetrics(stepsCount, weightRef.current);

      await fetch(`${process.env.EXPO_PUBLIC_API_URL}/steps/log`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          stepsCount,
          distance: miles,
          calories: caloriesBurned,
          miles,
          caloriesBurned,
        }),
      });

      console.log("Sent step log", {
        userId: user.id,
        stepsCount,
        miles,
        caloriesBurned,
      });
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