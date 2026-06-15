/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

// get the Colors dictionary from theme
import { Colors } from "@/constants/theme";
// grabs the useColorScheme hook from react native
import { useColorScheme } from "@/hooks/use-color-scheme";

export function useTheme() {
  // get the current color scheme of user device
  const scheme = useColorScheme();
  // setting the theme to either light or dark
  const theme = scheme === "unspecified" ? "light" : scheme;
  // returns the set of colors that belong to only that theme
  return Colors[theme];
}
