import { ThemedText } from "@/components/themed-text";
import { ThemeContextProvider } from "@/contexts/theme-context";
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
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "react-native";

SplashScreen.preventAutoHideAsync(); // prevents auto-hiding so that fonts can get time to load first

// applies to the index and settings screen
export default function RootLayout() {
  const colorScheme = useColorScheme(); // can be light or dark
  // const [toggle, setToggle] = useState({ mode: "dark" });

  // const updateToggle = (newTheme: { mode: string }): void => {
  //   let mode;
  //   if (!newTheme) {
  //     mode = toggle.mode === "dark" ? "dark" : "light";
  //     newTheme = {
  //       mode,
  //     };
  //   }
  //   setToggle(newTheme);
  // };

  const [loaded, error] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_600SemiBold,
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
    <ThemeContextProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
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
    </ThemeContextProvider>
  );
}
