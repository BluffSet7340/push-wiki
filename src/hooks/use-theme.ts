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
  const { mode } = useContext(ThemeContext);
  const deviceScheme = useColorScheme();

  const resolvedDeviceScheme =
    deviceScheme === "unspecified" || !deviceScheme ? "light" : deviceScheme;

  const resolvedTheme = mode === "system" ? resolvedDeviceScheme : mode;

  return Colors[resolvedTheme];
}
