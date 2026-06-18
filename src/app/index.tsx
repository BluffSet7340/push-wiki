import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { Link, Stack, useRouter } from "expo-router";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      type="background"
      style={[
        styles.container,
        { paddingBottom: insets.bottom, minHeight: "100%" },
      ]}
    >
      <ScrollView>
        <Stack.Screen
          options={{
            title: "PushWiki",
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => router.push("/settings")}>
                  <Ionicons
                    name="settings-outline"
                    size={25}
                    color={theme.textSubtitle}
                    style={{
                      paddingBottom: 2,
                      paddingRight: 20,
                    }}
                  />
                </TouchableOpacity>
              );
            },
          }}
        />
        <Image
          source={require("../../assets/images/sample-background-picture.png")}
          style={{
            width: "100%",
            height: 720,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 500,
          }}
        >
          Subtitle of Image
        </Text>
        <ThemedText themeColor="textTitle" type="title">
          The Celestial Dance of the North
        </ThemedText>
        <View
          style={{ height: 1, backgroundColor: theme.lineBreak, width: 48 }}
        ></View>
        <ThemedText themeColor="text" type="default">
          The Aurora Borealis, or Northern Lights, is a natural light display in
          the Earth's sky, predominantly seen in high-latitude regions. This
          phenomenon is the result of disturbances in the magnetosphere caused
          by solar wind.
        </ThemedText>
        {/* touchable opacity and text as a button */}
        <Link href="/settings">
          {/* <Text>Go to here hello hello</Text> */}
          <Button title="Ebola"></Button>
        </Link>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "coral",
    // fontFamily: "PlayfairDisplay_400Regular",
    // color: "red",
    // fontSize: 96,
  },
  button: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
  },
});
