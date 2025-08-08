import { useAuth } from "@clerk/clerk-expo";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const login = () => {
  const fetchauthData = async () => {
    const auth = useAuth();
    console.log(auth);
  };

  fetchauthData();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.signinContent}>
        <Text style={styles.title}>Sign In (Securopass) </Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signinContent: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    height: 300,
    borderRadius: 10,
    borderColor: "#f",
    paddingHorizontal: 50,
    paddingVertical: 30,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
