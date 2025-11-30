import React, { useLayoutEffect, useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { AuthContext } from "../App";
import Navbar from "./Navbar";

export default function Settings({ navigation, route }) {
  const mode = route?.params?.mode;
  const { logout, user, updateUser } = useContext(AuthContext);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  useEffect(() => {
    if (mode === "hw") {
      setHeight(user?.height ? String(user.height) : "");
      setWeight(user?.weight ? String(user.weight) : "");
    }
  }, [mode, user]);

  // Dynamically toggle header visibility
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: !!mode,
      title: 
      mode == "username" ? "Change Username" :
      mode == "password" ? "Change Password" :
      mode == "hw" ? "Edit Height & Weight" :
      "Settings",
    });
  }, [navigation, mode]);

  const handleLogout = async () => {
    await logout();
  };

  const saveHeightWeight = async () => {
    if (!user?.id) {
      Alert.alert("Not logged in", "Log in again to update your profile.");
      return;
    }

    try {
      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          height: height ? parseFloat(height) : null,
          weight: weight ? parseFloat(weight) : null,
        }),
      });

      const json = await res.json();
      if (!res.ok || !json?.user) {
        throw new Error(json?.error || "Failed to update profile");
      }

      await updateUser({
        height: json.user.height,
        weight: json.user.weight,
      });

      Alert.alert("Saved", "Height and weight updated.");
      navigation.goBack();
    } catch (e) {
      Alert.alert("Update failed", e.message || "Please try again.");
    }
  };

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
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          placeholder="Weight (kg)"
          keyboardType="numeric"
          style={styles.input}
          value={weight}
          onChangeText={setWeight}
        />

        <TouchableOpacity
          style={[styles2.button, styles2.loginButton]}
          onPress={saveHeightWeight}
        >
          <Text style={styles2.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex:1}}>
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

      <TouchableOpacity
        style={[styles3.button, styles3.loginButton]}
        onPress={handleLogout}
      >
        <Text style={styles3.buttonText}>Log out</Text>
      </TouchableOpacity>

    </View>
    <Navbar navigation={navigation} />
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

const styles3 = StyleSheet.create({
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: "#f00808ff",
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
