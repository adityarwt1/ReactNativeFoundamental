import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const appearnce = () => {
  const theme = useTheme();
  const isdark = theme.dark ? true : false;
  /// this is the theme base in the react native
  console.log(theme);
  return (
    <View>
      <Text style={[styles]}>appearnce</Text>
    </View>
  );
};

export default appearnce;

const styles = StyleSheet.create({});
