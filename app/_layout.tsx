import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import defaultStyles from "@/styles/defautltStyles";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
