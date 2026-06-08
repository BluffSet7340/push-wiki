import { StackTitle } from "expo-router/build/layouts/stack-utils";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function settings() {
  return (
    <SafeAreaView edges={["right", "bottom", "left"]} style={styles.container}>
      <StackTitle style={styles.headerStyle}>Settings</StackTitle>
      <Text>Hey I just met you</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightcoral",
  },
  headerStyle: {
    fontFamily: "PlayfairDisplay_400Regular", // extra google font can be used now without import statement
  },
});
