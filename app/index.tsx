import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import "../global.css";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-3xl text-blue-400">Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profiles" className="text-white-500 mt-4">
        Go to Profile
      </Link>
    </View>
  );
}
