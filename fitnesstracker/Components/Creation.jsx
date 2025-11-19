import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AuthContext } from '../App';
import api from '../src/api/client';

export default function Creation({ navigation }) {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleCreateAccount = async () => {
    if (!username || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill out all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      const response = await api.post("/register", {
        username,
        password,
        height: height ? parseFloat(height) : null,
        weight: weight ? parseFloat(weight) : null,
      });

      if (response.data.success) {
        Alert.alert("Success", "Account created successfully!");
        login(response.data.user);
      } else {
        Alert.alert("Error", response.data.message || "Account creation failed.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Unable to connect to the server.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

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
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#2196F3"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Height (optional)"
        placeholderTextColor="#2196F3"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />

      <TextInput
        style={styles.input}
        placeholder="Weight (optional)"
        placeholderTextColor="#2196F3"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: "#2196F3", marginTop: 15 }}>Back to Login</Text>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2196F3"
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
    backgroundColor: "#2196F3",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});