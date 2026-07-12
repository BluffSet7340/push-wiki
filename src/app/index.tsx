import GearIcon from "@/components/gear-icon";
import Header from "@/components/header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { getFeaturedArticle } from "@/services/wikimedia";
import { Article } from "@/types/Article";
import { blurhash } from "@/types/BlurHash";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getFeaturedArticle();
        setFeaturedArticle(data);
      } catch (error) {
        console.log("Here is the issue: ", error);
      }
    };

    fetchArticle();
  }, []);

  while (!featuredArticle) {
    return (
      <ThemedView
        type="background"
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size={"large"} color={"black"} />
      </ThemedView>
    );
  }

  return (
    <ThemedView type="background" style={{ paddingBottom: insets.bottom + 80 }}>
      <Header title="PushWiki" rightElement={<GearIcon />} />
      <ScrollView>
        <Image
          source={{
            uri: featuredArticle?.tfa?.originalimage?.source || "",
          }}
          placeholder={{ blurhash }}
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
            {featuredArticle?.tfa.normalizedtitle}
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
            {featuredArticle?.tfa.extract}
          </ThemedText>
          <View>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: theme.textSubtitle }]}
              onPress={async () =>
                await Linking.openURL(
                  // it looks like it could be null but trust me it is not
                  featuredArticle?.tfa.content_urls.mobile.page,
                  // 'slack://open?team=123456'
                )
              }
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
