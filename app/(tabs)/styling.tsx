import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

const styling = () => {
  return (
    <SafeAreaView style={styles.mainview}>
      <Text>styling</Text>
    </SafeAreaView>
  );
};

export default styling;

const styles = StyleSheet.create({
  mainview: {
    width: "100%",
    backgroundColor: "red",
  },
});
