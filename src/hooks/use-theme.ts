/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

// get the Colors dictionary from theme
import { Colors } from "@/constants/theme";
import { ThemeContext } from "@/contexts/theme-context";
import { useContext } from "react";
// import { ThemeContext } from "expo-router/build/react-navigation";
import { useColorScheme } from "react-native";
// grabs the useColorScheme hook from react native

export function useTheme() {
  // get the current color scheme of user device
  // this hook uses a listener and actively listens to changes in device theme and re-renders when it changes
  // const scheme = useColorScheme();
  // // const scheme = useContext(ThemeContext);
  // // setting the theme to either light or dark
  // const theme = scheme === "unspecified" ? "light" : scheme;
  // // returns the set of colors that belong to only that theme
  // return Colors[theme];

  const { mode } = useContext(ThemeContext);
  const deviceScheme = useColorScheme();

  const resolvedDeviceScheme =
    deviceScheme === "unspecified" || !deviceScheme ? "light" : deviceScheme;

  const resolvedTheme = mode === "system" ? resolvedDeviceScheme : mode;

  return Colors[resolvedTheme];
}
