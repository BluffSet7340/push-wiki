import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import statusBarHeight from "expo-constants";
import { Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function settings() {
  const remove = statusBarHeight.statusBarHeight;

  return (
    <ThemedView type="background">
      <Stack.Screen options={{ title: "Settings" }} />
      <Text>Hey I just met you</Text>
      <Text>This is the height of this phone's status bar {remove}</Text>
      <ThemedText type="title">Who let the ebola virus out again?</ThemedText>
      <ThemedView type="backgroundHeader">
        <ThemedText type="subtitle">Can you see this as well?</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightcoral",
    fontFamily: "PlayfairDisplay_400Regular",
  },
});
