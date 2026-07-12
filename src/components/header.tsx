// Claude generated this template for me, made adjustments to the View and Text components
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type HeaderProps = {
  title: string;
  // ReactNode represents all of the things that react can render
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
};

export default function Header({
  title,
  leftElement,
  rightElement,
}: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      type="backgroundHeader"
      style={[styles.container, { paddingTop: 10 + insets.top }]}
    >
      <ThemedView type="backgroundHeader" style={styles.leftSlot}>
        {leftElement}
      </ThemedView>
      <ThemedView type="backgroundHeader" style={styles.titleSlot}>
        <ThemedText type="title" themeColor="textTitle">
          {title}
        </ThemedText>
      </ThemedView>
      <ThemedView type="backgroundHeader" style={styles.rightSlot}>
        {rightElement}
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 16,
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  leftSlot: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 6,
    paddingLeft: 20,
  },
  titleSlot: { flex: 3, alignItems: "center" },
  rightSlot: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 6,
    paddingRight: 20,
  },
});
