import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../App';
import api from '../src/api/client';

export default function Login({ navigation }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both username and password.");
      return;
    }

    try {
      const response = await api.post("/login", { username, password });

      if (response.data?.success) {
        // Save user using global auth context
        login(response.data.user);
      } else {
        Alert.alert("Error", "Login Failed.");
      }
    } catch (error) {
      console.error("Login Error", error);
      Alert.alert("Error", "Unable to connect to the server.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#2196F3"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#2196F3"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
   backButton: {
    position: "absolute",
    top: 60,
    left: 20,
  },
  backText: {
    fontSize: 18,
    color: "#2196F3",
    fontWeight: "bold",
  },
  title: {
    fontSize: 28,
    color: "#2196F3",
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 45,
    borderColor: "#000000ff",
    color: "#2196F3",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4CAF50",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});