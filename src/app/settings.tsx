import BackIcon from "@/components/back-icon";
import Header from "@/components/header";
import SegmentedControl from "@/components/segmented-control";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ThemeContext } from "@/contexts/theme-context";
import { useTheme } from "@/hooks/use-theme";
import { Host, TimePickerDialog } from "@expo/ui/jetpack-compose";
import { useContext, useState } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const options = ["light", "dark", "system"];

type TIME = {
  hoursAndMinutes: string;
  amOrPm: "AM" | "PM" | "";
};

export default function settings() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const { mode, setTheme } = useContext(ThemeContext);
  const [modalVisible, setModalVisible] = useState(false);
  // might have to be moved to global context??
  const [selectedTime, setSelectedTime] = useState(new Date());

  let setTime: TIME = {
    hoursAndMinutes: "8:30",
    amOrPm: "PM",
  };

  // how a void function is classified
  const toggleModal = (): void => {
    setModalVisible(!modalVisible);
  };

  const convertTimetoHoursAndMinutes = (time: Date): TIME => {
    let extractedTime: TIME = {
      hoursAndMinutes: "",
      amOrPm: "",
    };
    const extractedHour = time.getHours();
    const extractedMinute = time.getMinutes();

    // let me set the am or pm flag
    if (extractedHour >= 0 && extractedHour <= 11) {
      extractedTime.amOrPm = "AM";
    } else {
      extractedTime.amOrPm = "PM";
    }

    // logic to set the hour and minute
    if (extractedHour === 0) {
      extractedTime.hoursAndMinutes = "12" + ":" + extractedMinute.toString();
    } else if (extractedHour > 12) {
      let normalizedHour = extractedHour - 12;
      extractedTime.hoursAndMinutes =
        normalizedHour.toString() + ":" + extractedMinute.toString();
    } else {
      extractedTime.hoursAndMinutes =
        extractedHour.toString() + ":" + extractedMinute.toString();
    }

    console.log(extractedTime);
    return extractedTime;
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
                setTime = convertTimetoHoursAndMinutes(selectedTime);
                // setModalVisible(false);
                // console.log(selectedTime.getHours());
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
                {setTime?.hoursAndMinutes}{" "}
                <ThemedText themeColor="text" type="clock">
                  {setTime?.amOrPm}
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
      </ThemedView>
    </ThemedView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     // backgroundColor: "lightcoral",
//     // fontFamily: "PlayfairDisplay_400Regular",
//     paddingTop: 24,
//     borderRadius: 24,
//   },
// });
