import SegmentedControl from "@/components/segmented-control";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ThemeContext } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-theme";
import { Stack, useRouter } from "expo-router";
import { useContext } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const options = ["light", "dark", "system"];

export default function settings() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { mode, setTheme } = useContext(ThemeContext);

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
          // headerStyle: { backgroundColor: theme.backgroundHeader },
          title: "Settings",
          // headerLeft: () => {
          //   return (
          //     <HeaderBackButton
          //       onPress={() => router.back()} // router.back pops the settings screen and we go back to the home screen
          //       tintColor={theme.text}
          //       style={{
          //         paddingLeft: 20,
          //       }}
          //     />
          //   );
          // },
          headerBackVisible: true,
          headerTintColor: theme.text,
        }}
      />
      {/* <ThemedText>{date}</ThemedText> */}
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
        <TouchableOpacity>
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
        </TouchableOpacity>
      </ThemedView>
      {/* add animation of the pill button sliding from left to right based on selection */}
      <ThemedView style={{ marginTop: 80, flexDirection: "column", gap: 16 }}>
        <ThemedText
          type="small"
          style={{ marginBottom: 16, letterSpacing: 1.2 }}
        >
          THEME
        </ThemedText>
        <SegmentedControl
          options={options}
          selectedOption={mode} // selected option is passed
          onOptionPress={setTheme} // update the option
        />
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
