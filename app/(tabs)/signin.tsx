import React from "react";
import { StyleSheet, Text, View } from "react-native";

const login = () => {
  return (
    <View style={styles.mainview}>
      <Text>login</Text>
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
});
