import React, { createContext, useContext, useEffect, useState } from "react";
import useStepTracker from "../hooks/useStepTracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StepTrackerContext = createContext(null);

export function StepTrackerProvider({ children, user }) {
  const [initialBaseSteps, setInitialBaseSteps] = useState(null);

  useEffect(() => {
    if (!user?.id) {
      setInitialBaseSteps(null);
      return;
    }
    setInitialBaseSteps(null);

    const loadBackendSteps = async () => {
      try {
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/steps/today?userId=${user.id}`);
        const json = await res.json();

        const steps = json?.steps ?? 0;
        setInitialBaseSteps(steps);

        const today = new Date().toDateString();
        await AsyncStorage.setItem("steps_date", today);
        await AsyncStorage.setItem("steps_base", String(steps));

      } catch (e) {
        console.log("Failed to load backend steps:", e.message);
        setInitialBaseSteps(0);
      }
    };

    loadBackendSteps();
  }, [user]);
  const tracker = useStepTracker(initialBaseSteps, user?.weight ?? 70);

  return (
    <StepTrackerContext.Provider value={tracker}>
      {children}
    </StepTrackerContext.Provider>
  );
}

export function useStepTrackerContext() {
  return useContext(StepTrackerContext);
}
