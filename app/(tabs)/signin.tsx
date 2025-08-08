import React from "react";
import { StyleSheet, Text, View } from "react-native";

const login = () => {
  return (
    <View style={styles.mainview}>
      <View style={styles.signinContent}>
        <Text>Heloo</Text>
        <Text>Heloo</Text>
        <Text>Heloo</Text>
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
    borderWidth: 1,
    height: 100,
    borderRadius: 10,
    borderColor: "#f",
    padding: 10,
    // Shadow properties for iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 1,
  },
});
