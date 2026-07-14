import { TIME } from "@/types/Time";

export const convertTimetoHoursAndMinutes = (time: Date): TIME => {
  let extractedTime: TIME = {
    hoursAndMinutes: "",
    amOrPm: "",
  };
  const extractedHour = time.getHours();
  const extractedMinute = time.getMinutes().toString().padStart(2, "0");

  // let me set the am or pm flag
  if (extractedHour >= 0 && extractedHour <= 11) {
    extractedTime.amOrPm = "AM";
  } else {
    extractedTime.amOrPm = "PM";
  }

  // logic to set the hour and minute
  if (extractedHour === 0) {
    extractedTime.hoursAndMinutes = "12" + ":" + extractedMinute;
  } else if (extractedHour > 12) {
    let normalizedHour = extractedHour - 12;
    extractedTime.hoursAndMinutes =
      normalizedHour.toString() + ":" + extractedMinute;
  } else {
    extractedTime.hoursAndMinutes =
      extractedHour.toString() + ":" + extractedMinute;
  }

  console.log(extractedTime);
  return extractedTime;
};
