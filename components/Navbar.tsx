import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Navbar() {
  // const initialfetch = async () => {
  //   const respone = await fetch("https://securopass.vercel.app/api/hello", {
  //     method: "POST",
  //   });
  //   const data = await respone.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   initialfetch();
  // }, []);
  return (
    <View>
      <Text>This is navbar</Text>
    </View>
  );
}
