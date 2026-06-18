/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export const Colors = {
  light: {
    text: "#454557",
    textTitle: "#1A1C1B",
    textSubtitle: "#1100E1",
    background: "#F9F9F7",
    backgroundHeader: "#EEEEEC",
    lineBreak: "#C6C4DA",
  },
  dark: {
    text: "#CCCCCC",
    textTitle: "#FFFFFF",
    textSubtitle: "#3233FF",
    background: "#333333",
    backgroundHeader: "#131313",
    lineBreak: "#333333",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;
