import React from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

const scrollview = () => {
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: "red" }} horizontal>
      <Text>scrollview</Text>
    </ScrollView>
  );
};
/// scrool for the horizontal and the other
export default scrollview;

const styles = StyleSheet.create({});
