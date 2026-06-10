import { StackTitle } from "expo-router/build/layouts/stack-utils";
import { StyleSheet, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function settings() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <StackTitle style={styles.headerStyle}>Settings</StackTitle>
      <Text>Hey I just met you</Text>
      {/* <StatusBar  /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightcoral",
    fontFamily: "PlayfairDisplay_400Regular",
  },
  headerStyle: {
    fontFamily: "Inter_400Regular", // extra google font can be used now without import statement
    color: "red",
  },
});
