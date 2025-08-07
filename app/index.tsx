import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={style.mainDiv}>
      <Text>Hello world</Text>
    </View>
  );
}

const style = StyleSheet.create({
  mainDiv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
