import defaultStyles from "@/styles/defautltStyles";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.textWhite}>Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profiles" style={defaultStyles.textWhite}>
        Go to Profile
      </Link>
    </View>
  );
}
