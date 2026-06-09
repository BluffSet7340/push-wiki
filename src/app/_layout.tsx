import { Inter_400Regular } from "@expo-google-fonts/inter";
import { PlayfairDisplay_400Regular } from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync(); // prevents auto-hiding so that fonts can get time to load first

// applies to the index and settings screen
export default function RootLayout() {
  const [loaded, error] = useFonts({
    PlayfairDisplay_400Regular,
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

  return <Stack />;
}
