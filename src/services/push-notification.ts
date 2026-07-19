import { storage } from "@/storage/storage";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export async function schedulePushNotification() {
  // these lines of code could be cleaner...
  const userSetTime = storage.getString("time");

  if (userSetTime === undefined) {
    console.log("Set a time please");
    return;
  }

  const hours = new Date(userSetTime).getHours();
  const minutes = new Date(userSetTime).getMinutes();

  // cancel all previous notifications
  await Notifications.cancelAllScheduledNotificationsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "You've got a Wikipedia article to read! 📬",
      body: "Click to read it!",
    },
    // happens daily at the user set time
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      // seconds: 2,
      hour: hours,
      minute: minutes,
    },
  });
}

export async function setNotificationChannel() {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("dailyArticle", {
      name: "Daily Article",
      importance: Notifications.AndroidImportance.DEFAULT,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
}

export function requestPermissionsAsync() {
  return Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
    },
  });
}
