import { Image } from "expo-image";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Index Page</Text>
      <Image
        style={{ width: 100, height: 200 }}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYqoKTu_o3Zns2yExbst2Co84Gpc2Q1RJbA&s",
        }}
      />

      <TouchableOpacity onPress={() => alert("hello")}>
        <Text>Button</Text>
      </TouchableOpacity>

      <Pressable
        style={{ padding: 10, backgroundColor: "yellow" }}
        onPress={() => alert("this from the pressable componenct")}
      >
        <Text>This is the pressable button </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  link: {
    marginTop: 10,
    fontSize: 18,
    color: "blue",
  },
});
