import React, { useState, useEffect, use } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/api/client';

export default function App() {
  const [message, setMessage] = useState('Connecting to server...');

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await api.get('/test');
        setMessage(response.data.message || "Connection successful!");
      } catch (error) {
        console.error(error);
        setMessage('Connection failed.');
      }
    };
    testConnection();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
});
