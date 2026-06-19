import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import statusBarHeight from "expo-constants";
import { Stack, useRouter } from "expo-router";
import { HeaderBackButton } from "expo-router/build/react-navigation";
import { StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function settings() {
  const remove = statusBarHeight.statusBarHeight;
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView type="background" style={{ paddingBottom: insets.bottom }}>
      <Stack.Screen
        options={{
          title: "Settings",
          headerLeft: () => {
            return (
              <HeaderBackButton
                onPress={() => router.back()} // router.back pops the settings screen and we go back to the home screen
                tintColor={theme.text}
                style={{
                  paddingLeft: 20,
                }}
              />
            );
          },
        }}
      />
      <ThemedText>DAILY NOTIFICATION TIME</ThemedText>
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
