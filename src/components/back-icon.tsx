import { useTheme } from "@/hooks/use-theme";
import Ionicons from "@react-native-vector-icons/ionicons";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function BackIcon() {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={25} color={theme.textSubtitle} />
    </TouchableOpacity>
  );
}
