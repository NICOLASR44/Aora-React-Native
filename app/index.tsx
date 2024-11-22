import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <Text className="text-3xl text-blue-400">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profiles" className="text-2xl text-white">
        Go to Profile
      </Link>
    </View>
  );
}
