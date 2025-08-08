import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Loyout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="hello" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Loyout;

const styles = StyleSheet.create({});
