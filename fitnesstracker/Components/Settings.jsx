import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function Settings({ navigation, route }) {
  const mode = route?.params?.mode;

  // --- Username tab ---
  if (mode === "username") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Change Username</Text>

        <TextInput
          placeholder="New username"
          autoCapitalize="none"
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.goBack()} // stub: no backend yet
        >
          <Text style={styles2.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // --- Password tab ---
  if (mode === "password") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>

        <TextInput
          placeholder="Current password"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="New password"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Confirm new password"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.goBack()} // stub
        >
          <Text style={styles2.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // --- Height & Weight tab ---
  if (mode === "hw") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Edit Height & Weight</Text>

        <TextInput
          placeholder="Height (cm)"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Weight (kg)"
          keyboardType="numeric"
          style={styles.input}
        />

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={() => navigation.goBack()} // stub
        >
          <Text style={styles2.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
  )};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <TouchableOpacity
        style={[styles2.button, styles2.loginButton]}
        onPress={() => navigation.push("Settings", { mode: "username" })}
      >
        <Text style={styles2.buttonText}>Change Username</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles2.button, styles2.loginButton]}
        onPress={() => navigation.push("Settings", { mode: "password" })}
      >
        <Text style={styles2.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles2.button, styles2.loginButton]}
        onPress={() => navigation.push("Settings", { mode: "hw" })}
      >
        <Text style={styles2.buttonText}>Edit Height & Weight</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

const styles2 = StyleSheet.create({
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
  },
  createButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
