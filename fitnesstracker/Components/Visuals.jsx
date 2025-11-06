import React from "react";
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';

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
export default function SimpleVisuals() {
  return (
    <ScrollView style={styles.container}>
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

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
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
});


export  function Visuals() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Visuals</Text>
        </View>
    );
}

/*const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});*/