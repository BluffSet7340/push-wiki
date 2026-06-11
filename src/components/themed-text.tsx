import { StyleSheet, Text, type TextProps } from "react-native";

import { ThemeColor } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export type ThemedTextProps = TextProps & {
  type?: "default" | "title" | "small" | "medium" | "subtitle" | "link";
  themeColor?: ThemeColor;
};

export function ThemedText({
  style,
  type = "default",
  themeColor,
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? "text"] },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "small" && styles.small,
        type === "medium" && styles.medium,
        type === "subtitle" && styles.subtitle,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter_600SemiBold",
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Inter_400Regular",
  },
  default: {
    fontSize: 20,
    lineHeight: 32,
    fontFamily: "Inter_400Regular",
  },
  title: {
    // be sure to add bold styling or use appropriate weight font
    fontSize: 36,
    lineHeight: 45,
    fontFamily: "PlayfairDisplay_700Bold",
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter_600SemiBold",
  },
  link: {
    lineHeight: 24,
    fontSize: 16,
    fontFamily: "Inter_500Medium",
  },
});
