import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Loyout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="add" options={{ headerShown: false, href: null }} />
      <Tabs.Screen name="Hello" options={{ headerShown: false, href: null }} />
    </Tabs>
  );
};

export default Loyout;

const styles = StyleSheet.create({});
