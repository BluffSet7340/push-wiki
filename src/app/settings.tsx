import BackIcon from "@/components/back-icon";
import Header from "@/components/header";
import SegmentedControl from "@/components/segmented-control";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ThemeContext } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-theme";
import { schedulePushNotification } from "@/services/push-notification";
import { storage } from "@/storage/storage";
import { convertTimetoHoursAndMinutes } from "@/utils/convertTimetoHourAndMinutes";
import { Host, TimePickerDialog } from "@expo/ui/jetpack-compose";
import { useContext, useEffect, useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const options = ["light", "dark", "system"];
const defaultTime = "2026-07-15T08:00:00+04:00"; // This is 8AM, assuming no time is set

export default function settings() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { mode, setTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  const storagedTime = new Date(storage.getString("time") || defaultTime);
  // might have to be moved to global context??
  const [selectedTime, setSelectedTime] = useState(storagedTime);
  // derive display values directly during re-render
  const displayTime = convertTimetoHoursAndMinutes(selectedTime);

  // useEffect to save the time
  useEffect(() => {
    storage.set("time", selectedTime.toISOString());
    schedulePushNotification();
  }, [selectedTime]);

  // how a void function is classified
  const toggleModal = (): void => {
    setModalVisible(!modalVisible);
  };

  return (
    <ThemedView
      type="background"
      style={{
        paddingBottom: insets.bottom + 80,
        height: "100%",
      }}
    >
      <Header title="Settings" leftElement={<BackIcon />} />
      <ThemedView
        style={{
          paddingTop: 32,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <ThemedText
          type="small"
          style={{ marginBottom: 16, letterSpacing: 1.2 }}
        >
          DAILY NOTIFICATION TIME
        </ThemedText>

        <Modal
          visible={modalVisible}
          onRequestClose={toggleModal}
          animationType="fade"
          transparent={true}
        >
          <Host matchContents={{ vertical: true }} style={{ width: "100%" }}>
            <TimePickerDialog
              onDateSelected={(time) => {
                setSelectedTime(time);
                // Initially I was setting the state and immediately using that value for my function.
                // But due to react's scheduling nature, I would always get the older value, not the latest
                // The solution is to declare a const variable up top, call the function on the set value and voila, no stale closures
                //// setTime = convertTimetoHoursAndMinutes(selectedTime);
                setModalVisible(false);
              }}
              initialDate={selectedTime.toISOString()}
              is24Hour={false}
              confirmButtonLabel="OK" // Custom Confirm Label
              dismissButtonLabel="Cancel" // Custom Cancel Label
              onDismissRequest={() => {
                setModalVisible(false);
              }}
            />
          </Host>
        </Modal>

        <ThemedView
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <ThemedText
            type="medium"
            themeColor="textTitle"
            style={{
              fontFamily: "Inter400Regular",
            }}
          >
            Send my daily article at
          </ThemedText>
          {/* pill shaped button - should be pressable or touchable opacity */}
          <TouchableOpacity onPress={() => toggleModal()}>
            <ThemedView
              style={{
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16,
                paddingRight: 16,
                borderRadius: 9999,
                borderColor: theme.pillStroke,
                borderWidth: 1,
                alignSelf: "flex-start",
              }}
            >
              <ThemedText themeColor="textSubtitle" type="clock">
                {displayTime?.hoursAndMinutes}{" "}
                <ThemedText themeColor="text" type="clock">
                  {displayTime?.amOrPm}
                </ThemedText>
              </ThemedText>
            </ThemedView>
          </TouchableOpacity>
        </ThemedView>
        {/* add animation of the pill button sliding from left to right based on selection */}
        <ThemedView style={{ marginTop: 80, flexDirection: "column", gap: 16 }}>
          <ThemedText
            type="small"
            style={{ marginBottom: 16, letterSpacing: 1.2 }}
          >
            THEME
          </ThemedText>
          <SegmentedControl
            options={options}
            selectedOption={mode} // selected option is passed
            onOptionPress={setTheme} // update the option
          />
          <ThemedText
            type="medium"
            themeColor="text"
            style={{ fontFamily: "Inter_400Regular" }}
          >
            Choose a reading environment. 'System' will follow your device
            preferences.
          </ThemedText>
        </ThemedView>
        {/* <Text>
          <Button
            title="Press to schedule a notification"
            onPress={async () => {
              await schedulePushNotification();
            }}
          />
        </Text> */}
      </ThemedView>
    </ThemedView>
  );
}
