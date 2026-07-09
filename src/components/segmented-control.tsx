import { Theme } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-theme";
import {
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

type SegmentedControlProps = {
  options: string[]; // array of strings
  selectedOption: string;
  onOptionPress: (option: Theme) => void; // callback function that takes a Theme as an argument and returns nothing
};

// how props are destructured
export default function SegmentedControl({
  options,
  selectedOption,
  onOptionPress,
}: SegmentedControlProps) {
  const theme = useTheme();
  // on the right is the react native hook that returns the screen dimensions eg. { width: 390, height: 844, scale: 3, fontScale: 1 }
  // I destructure the width and rename it to windowWidth
  const { width: windowWidth } = useWindowDimensions();

  const segmentControlWidth = windowWidth - 40;
  const itemWidth = segmentControlWidth / options.length;

  //   animation style goes here
  const segmentAnimation = useAnimatedStyle(() => {
    return {
      left: withTiming(itemWidth * options.indexOf(selectedOption) + 5),
    };
  }, [selectedOption, options, itemWidth]);

  return (
    <ThemedView
      type="backgroundHeader"
      style={[styles.container, { width: segmentControlWidth }]}
    >
      {/* this will be the segment */}
      <Animated.View
        style={[
          styles.segmentStyle,
          {
            // play with the left property to change position of the segment
            width: itemWidth - 10,
            backgroundColor: theme.background,
          },
          segmentAnimation,
        ]}
      />
      {options.map((option) => {
        return (
          <TouchableOpacity
            key={option}
            //   onPress fires when user taps an option
            onPress={() => onOptionPress(option as Theme)}
            style={{
              width: itemWidth,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ThemedText style={{ letterSpacing: 1.2 }} type="small">
              {option.split("")[0].toLocaleUpperCase() + option.slice(1)}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    borderRadius: 9999,
  },
  segmentStyle: {
    borderRadius: 9999,
    // Unified cross-platform box shadow
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    height: "83%",
    top: "8%",
    position: "absolute",
  },
});
