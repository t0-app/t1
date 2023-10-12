import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Page1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Page1 - (tab)/page1</Text>
      <Link href={"/(tabs)/page2"} style={{ color: "blue" }}>
        (tab)/page2
      </Link>
      <Link href={"/"} style={{ color: "blue" }}>
        {"/"}
      </Link>
    </View>
  );
}
