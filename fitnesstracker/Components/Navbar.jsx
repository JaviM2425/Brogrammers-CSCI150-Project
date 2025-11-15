import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useSafeAreaInsets, SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Navbar({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['bottom']} style={styles.SafeAreaView}>
      <View style={[styles.container, { paddingBottom: Math.max(insets.bottom,8) }]}>

        <View style={styles.container}>

          <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('WorkoutManager')}>
            <Text style={styles.text}>Workout Manager</Text>
          </TouchableOpacity>
        </View>
  
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Visuals')}>
          <Text style={styles.text}>Visuals</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.text}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    elevation: 0,    
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333333',
    fontSize: Math.min(width * 0.037, 20),
    fontWeight: '600',
  },
  active: {
    color: '#2196F3',
  },
  buttonGroup: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  SafeAreaView: {
    backgroundColor: '#000000ff' 
  },
});
