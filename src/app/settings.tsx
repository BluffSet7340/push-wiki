import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import statusBarHeight from "expo-constants";
import { Stack, useRouter } from "expo-router";
import { HeaderBackButton } from "expo-router/build/react-navigation";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function settings() {
  const remove = statusBarHeight.statusBarHeight;
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      type="background"
      style={{
        paddingBottom: insets.bottom,
        paddingTop: 32,
        paddingLeft: 20,
        paddingRight: 20,
        height: "100%",
      }}
    >
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
      <ThemedText type="small" style={{ marginBottom: 16, letterSpacing: 1.2 }}>
        DAILY NOTIFICATION TIME
      </ThemedText>
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <ThemedText
          type="medium"
          themeColor="textTitle"
          style={{
            fontFamily: "Inter400Regular",
          }}
        >
          Send my daily article at
        </ThemedText>
        {/* pill shaped button - should be pressable or touchable opacity */}
        <ThemedView
          style={{
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            borderRadius: 9999,
            borderColor: theme.pillStroke,
            borderWidth: 1,
            alignSelf: "flex-start",
          }}
        >
          <ThemedText themeColor="textSubtitle" type="clock">
            8:30{" "}
            <ThemedText themeColor="text" type="clock">
              AM
            </ThemedText>
          </ThemedText>
        </ThemedView>
      </ThemedView>
      {/* add animation of the pill button sliding from left to right based on selection */}
      <ThemedView style={{ marginTop: 80, flexDirection: "column", gap: 16 }}>
        <ThemedText
          type="small"
          style={{ marginBottom: 16, letterSpacing: 1.2 }}
        >
          THEME
        </ThemedText>
        <ThemedView
          style={{
            flexDirection: "row",
            backgroundColor: theme.backgroundHeader,
            paddingTop: 16,
            paddingBottom: 16,
            justifyContent: "space-evenly",
            gap: 48,
            borderRadius: 9999,
          }}
        >
          <ThemedText
            themeColor="text"
            type="small"
            style={{ letterSpacing: 1.2 }}
          >
            Light
          </ThemedText>
          <ThemedText
            themeColor="text"
            type="small"
            style={{ letterSpacing: 1.2 }}
          >
            Dark
          </ThemedText>
          <ThemedText
            themeColor="text"
            type="small"
            style={{ letterSpacing: 1.2 }}
          >
            System
          </ThemedText>
        </ThemedView>
        <ThemedText
          type="medium"
          themeColor="text"
          style={{ fontFamily: "Inter_400Regular" }}
        >
          Choose a reading environment. 'System' will follow your device
          preferences.
        </ThemedText>
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
