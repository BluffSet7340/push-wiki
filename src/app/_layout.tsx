import { ThemeContextProvider } from "@/contexts/theme-context";
import { setNotificationChannel } from "@/services/push-notification";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  PlayfairDisplay_400Regular,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
} from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import * as Notifications from "expo-notifications";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync(); // prevents auto-hiding so that fonts can get time to load first

// applies to the index and settings screen
export default function RootLayout() {
  const colorScheme = useColorScheme(); // can be light or dark

  const [loaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold,
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular,
  });

  // setting up notifications
  useEffect(() => {
    setNotificationChannel();
    const subscription = Notifications.addNotificationResponseReceivedListener(
      () => {
        console.log("Does this get triggered?");
      },
    );
    return () => subscription.remove();
  }, []);

  // use effect for laoding fonts
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
    <ThemeContextProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false,
              statusBarHidden: true,
              // the jitter is gone and I can see that for a very short amount of time, the styling on the settings screen header is removed and reverts back to default
              animation: "fade",
              animationDuration: 200,
            }}
          />
        </SafeAreaProvider>
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
