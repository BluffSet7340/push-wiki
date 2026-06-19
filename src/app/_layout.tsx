import { ThemedText } from "@/components/themed-text";
import { useTheme } from "@/hooks/use-theme";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
// import { Button } from "expo-router/build/react-navigation";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "../../example/src/hooks/use-color-scheme.web";

SplashScreen.preventAutoHideAsync(); // prevents auto-hiding so that fonts can get time to load first

// applies to the index and settings screen
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  const [loaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      // now remove the splashscreen
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  // loaded and error part of the dependency array

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ backgroundColor: theme.background }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.backgroundHeader,
            },
            // props is aware of the screens that I have in the app folder
            // I did this so that I could centralize the styling of the header
            headerTitle: (props) => (
              <ThemedText
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  paddingTop: 10,
                  paddingBottom: 16,
                }}
                themeColor="textTitle"
                type="title"
              >
                {props.children}
              </ThemedText>
            ),
            headerTitleAlign: "center",
            statusBarHidden: true,
          }}
        />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
