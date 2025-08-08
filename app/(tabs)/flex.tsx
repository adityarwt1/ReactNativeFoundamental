import React from "react";
import { StyleSheet, View } from "react-native";

const flex = () => {
  return (
    <View>
      <View></View>
    </View>
  );
};
/// reactnavite ye sab karane ke liye agar flec ko joda jaye to 1 + 1 + 1 + 1 = 4 part me equealy devide hoke hoga
// justify and the every thing work like stypesheet
export default flex;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: "black",
  },
});
