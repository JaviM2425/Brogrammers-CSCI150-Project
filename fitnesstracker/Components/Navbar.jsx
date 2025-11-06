import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WorkoutManager')}>
        <Text style={styles.text}>Workout Manager</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Visuals')}>
        <Text style={styles.text}>Visuals</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 8,
  },
  item: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#333333',
    fontSize: 10,
    fontWeight: '600',
  },
});
