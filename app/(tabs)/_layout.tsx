import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Layout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="signin"
          options={{ headerShown: false, tabBarLabel: "SignIn" }}
        />
      </Tabs>
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
