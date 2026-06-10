import { Link } from "expo-router";
import { StackTitle } from "expo-router/build/layouts/stack-utils";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StackTitle>PushWiki</StackTitle>
      <Text style={styles.textStyles}>see me now</Text>
      <Link href="/settings">
        <Text>Go to here</Text>
      </Link>
    </View>
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
