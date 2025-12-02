import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from './Navbar';

// Simple Step Counter without SVG
export function SimpleStepCounter({ steps = 6500, goal = 10000 }) {
  const progress = Math.min(steps / goal, 1);
  const progressWidth = progress * 200;

  return (
    <View style={styles.stepContainer}>
      <Text style={styles.stepTitle}>Steps Today</Text>
      <Text style={styles.stepCount}>{steps.toLocaleString()}</Text>
      <Text style={styles.stepGoal}>Goal: {goal.toLocaleString()}</Text>
      
      <View style={styles.circleContainer}>
        <Svg height="160" width="160">
          {/* Background circle */}
          <Circle
            cx="80"
            cy="80"
            r="70"
            stroke="#E0E0E0"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Progress circle */}
          <Circle
            cx="80"
            cy="80"
            r="70"
            stroke="#4CAF50"
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={`${progress * 440} 440`}
            strokeLinecap="round"
            transform="rotate(-90 80 80)"
          />
          {/* Percentage text */}
          <SvgText
            x="80"
            y="75"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill="#4CAF50"
          >
            {Math.round(progress * 100)}%
          </SvgText>
          {/* Steps text */}
          <SvgText
            x="80"
            y="95"
            textAnchor="middle"
            fontSize="12"
            fill="#666"
          >
            {steps.toLocaleString()} steps
          </SvgText>
        </Svg>
      </View>
    </View>
  );
}

// Simple Weight Chart without external library
export function SimpleWeightChart() {
  const weights = [75.2, 74.8, 74.5, 74.1, 73.8, 73.5];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  return (
    <View style={styles.chartContainer}>
      <Text style={styles.chartTitle}>Weight Progress</Text>
      <View style={styles.chartArea}>
        {weights.map((weight, index) => (
          <View key={index} style={styles.chartBar}>
            <View style={[styles.bar, { height: (weight - 70) * 10 }]} />
            <Text style={styles.barLabel}>{months[index]}</Text>
            <Text style={styles.weightLabel}>{weight}kg</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

// Weekly Calories Tracker
export function WeeklyCaloriesTracker() {
  const weeklyCalories = [1850, 2100, 1950, 2200, 1800, 2050, 1900];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dailyGoal = 2000;

  return (
    <View style={styles.caloriesContainer}>
      <Text style={styles.chartTitle}>Weekly Calories</Text>
      <View style={styles.caloriesGrid}>
        {days.map((day, index) => {
          const calories = weeklyCalories[index];
          const progress = Math.min(calories / dailyGoal, 1.2);
          const isOverGoal = calories > dailyGoal;
          
          return (
            <View key={index} style={styles.calorieDay}>
              <Text style={styles.dayLabel}>{day}</Text>
              <View style={styles.calorieBarContainer}>
                <View style={[
                  styles.calorieBar,
                  {
                    height: progress * 80,
                    backgroundColor: isOverGoal ? '#FF5722' : '#4CAF50'
                  }
                ]} />
              </View>
              <Text style={styles.calorieValue}>{calories}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.goalLine}>
        <Text style={styles.goalText}>Goal: {dailyGoal} cal/day</Text>
      </View>
    </View>
  );
}

// Combined Demo Component
export default function SimpleVisuals({ navigation}) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loadUser = async () => {
      const stored = await AsyncStorage.getItem("user");
      if (stored) setUser(JSON.parse(stored));
    };
    loadUser();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Fitness Visuals Test</Text>
        
        <View style={styles.section}>
          <SimpleStepCounter steps={5564} goal={10000} />
        </View>

        <View style={styles.section}>
          <SimpleWeightChart />
        </View>

        <View style={styles.section}>
          <WeeklyCaloriesTracker />
        </View>

        <View style={styles.section}>
          <WeeklyWorkoutsPanel user={user} />
        </View>

      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
}

// Weekly workouts panel (moved from Home)
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
        <Text style={styles.chartTitle}>This Week’s Workouts ({weeklyTotal})</Text>
        {weeklyLoading && <Text style={styles.smallChip}>Loading...</Text>}
        {weeklyError && <Text style={styles.errorText}>{weeklyError}</Text>}
      </View>

      {weeklyWorkouts.every(d => d.count === 0) ? (
        <Text style={styles.calorieValue}>No workouts logged this week.</Text>
      ) : (
        weeklyWorkouts.map((day) => (
          <View key={day.date} style={{ marginBottom: 10 }}>
            <Text style={styles.weekLabel}>{day.label} ({day.count})</Text>
            {day.items.map((w) => (
              <Text key={w.id} style={styles.calorieValue}>
                {w.exerciseName} {w.sets && w.reps ? `- ${w.sets}x${w.reps}` : ""} {w.weight ? `${w.weight} lbs` : ""}
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
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    elevation: 2,
  },
  stepContainer: {
    alignItems: 'center',
    padding: 20,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stepCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  stepGoal: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  chartContainer: {
    padding: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  chartArea: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 150,
  },
  chartBar: {
    alignItems: 'center',
  },
  bar: {
    width: 20,
    backgroundColor: '#2196F3',
    borderRadius: 2,
    marginBottom: 5,
  },
  barLabel: {
    fontSize: 12,
    color: '#666',
  },
  weightLabel: {
    fontSize: 10,
    color: '#333',
    marginTop: 2,
  },
  caloriesContainer: {
    padding: 20,
  },
  caloriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 120,
    marginBottom: 10,
  },
  calorieDay: {
    alignItems: 'center',
    flex: 1,
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  calorieBarContainer: {
    height: 80,
    width: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  calorieBar: {
    width: 20,
    borderRadius: 2,
    minHeight: 5,
  },
  calorieValue: {
    fontSize: 10,
    marginTop: 5,
    color: '#666',
  },
  goalLine: {
    alignItems: 'center',
    marginTop: 10,
  },
  goalText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
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
