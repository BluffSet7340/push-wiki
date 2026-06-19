import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import { Image } from "expo-image";
import { Stack, useRouter } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView type="background" style={{ paddingBottom: insets.bottom }}>
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
        <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 16 }}>
          <ThemedText
            themeColor="textTitle"
            type="title"
            style={{ paddingBottom: 16 }}
          >
            The Celestial Dance of the North
          </ThemedText>
          <View
            style={{
              height: 1,
              backgroundColor: theme.lineBreak,
              width: 48,
              marginBottom: 16,
            }}
          ></View>
          <ThemedText themeColor="text" type="default">
            The Aurora Borealis, or Northern Lights, is a natural light display
            in the Earth's sky, predominantly seen in high-latitude regions.
            This phenomenon is the result of disturbances in the magnetosphere
            caused by solar wind.
          </ThemedText>
          <View>
            {/* <Pressable
              style={[styles.button, { backgroundColor: theme.textSubtitle }]}
            >
              <ThemedText type="medium" style={{ color: "white" }}>
                Read More
              </ThemedText>
            </Pressable> */}
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.textSubtitle }]}
            >
              <ThemedText type="medium" style={{ color: "white" }}>
                Read More
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 16,
    paddingBottom: 16,
    maxWidth: 147,
    borderRadius: 999,
    marginTop: 80,
    marginBottom: 80,
    marginLeft: "auto",
    marginRight: "auto",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
  },
});
