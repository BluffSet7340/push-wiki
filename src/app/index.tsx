import { ThemedView } from "@/components/themed-view";
import { Link, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function Index() {
  return (
    <ThemedView type="background" style={styles.container}>
      <Stack.Screen options={{ title: "PushWiki" }} />
      <Text style={styles.textStyles}>see me now</Text>
      <Link href="/settings">
        <Text>Go to here</Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    fontFamily: "PlayfairDisplay_400Regular",
    color: "red",
  },
});
