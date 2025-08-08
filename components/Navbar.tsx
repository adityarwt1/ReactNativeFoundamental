import { StyleSheet, Text, View } from "react-native";

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
    <View style={style.mainview}>
      <Text>This is navbar</Text>
      <Text>This is navbar</Text>
      <Text>This is navbar</Text>
      <Text>This is navbar</Text>
    </View>
  );
}

const style = StyleSheet.create({
  mainview: {
    margin: "auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
