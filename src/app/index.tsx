import GearIcon from "@/components/gear-icon";
import Header from "@/components/header";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useTheme } from "@/hooks/use-theme";
import { getFeaturedArticle } from "@/services/wikimedia";
import { storage } from "@/storage/storage";
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
      const lastFetch = storage.getString("lastFetchDate");
      const today = new Date().toDateString();

      try {
        // when the user first installs the app
        if (
          storage.getString("article") === undefined &&
          lastFetch === undefined
        ) {
          const data = await getFeaturedArticle();
          setFeaturedArticle(data);
          const dataJson = JSON.stringify(data);
          // storing data when it is fetched
          storage.set("article", dataJson);
          storage.set("lastFetchDate", today);
        }
        // when the dates do not match
        else if (lastFetch !== today) {
          const data = await getFeaturedArticle();
          setFeaturedArticle(data);
          const dataJson = JSON.stringify(data);
          // storing data when it is fetched
          storage.set("article", dataJson);
          storage.set("lastFetchDate", today);
        } else {
          // already exists
          const data = JSON.parse(storage.getString("article") as string);

          setFeaturedArticle(data);
        }
      } catch (error) {
        // console.log("Here is the issue: ", error);
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
      {/* set to never to prevent the bouncing effect when overscrolling from bottom to top */}
      <ScrollView overScrollMode="never">
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
              height: 2,
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
