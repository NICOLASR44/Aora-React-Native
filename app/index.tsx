import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-thin">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-2xl font-medium">
        Go to Home
      </Link>
    </View>
  );
}
