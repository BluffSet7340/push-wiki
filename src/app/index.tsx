import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { Link, Stack, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Index() {
  const router = useRouter();
  const theme = useTheme();

  return (
    <ThemedView type="background" style={styles.container}>
      <Stack.Screen
        options={{
          title: "PushWiki",
          headerRight: () => {
            return (
              <TouchableOpacity onPress={() => router.push("/settings")}>
                <Ionicons
                  name="settings-outline"
                  size={25}
                  color={theme.textSubtitle}
                  style={{
                    paddingBottom: 2,
                    paddingRight: 20,
                  }}
                />
                ;
              </TouchableOpacity>
            );
          },
        }}
      />
      <Image
        source={require("../../assets/images/sample-background-picture.png")}
        style={{
          width: 100,
          height: 100,
        }}
      />
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
