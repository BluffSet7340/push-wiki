import statusBarHeight from "expo-constants";
import { StackTitle } from "expo-router/build/layouts/stack-utils";
import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function settings() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const remove = statusBarHeight.statusBarHeight;

  return (
    <View style={{ backgroundColor: "lightcoral" }}>
      <StackTitle style={styles.headerStyle}>Settings</StackTitle>
      <Text>Hey I just met you</Text>
      <Text>This is the height of this phone's status bar {remove}</Text>
    </View>
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
    backgroundColor: "yellow",
  },
});
