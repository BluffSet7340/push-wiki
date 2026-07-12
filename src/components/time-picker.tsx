import { DateTimePicker, Host } from "@expo/ui/jetpack-compose";
import { useState } from "react";
import { Modal, StyleSheet } from "react-native";
import { ThemedView } from "./themed-view";

export default function TimePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  //   const theme = useTheme();

  return (
    <Modal presentationStyle="overFullScreen">
      <ThemedView type="backgroundHeader" style={styles.container}>
        <Host matchContents={{ vertical: true }} style={{ width: "100%" }}>
          <DateTimePicker
            onDateSelected={(date) => {
              setSelectedDate(date);
              console.log(selectedDate);
            }}
            displayedComponents="hourAndMinute"
            initialDate={selectedDate.toISOString()}
            is24Hour={false}
          />
        </Host>
      </ThemedView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    borderRadius: 24,
    // backgroundColor: "lightcoral",
    // fontFamily: "PlayfairDisplay_400Regular",
    // width: "100%",
  },
});
