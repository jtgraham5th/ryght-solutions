export default function formatTime(newTime) {
  if (!(newTime instanceof Date)) newTime = Date.now();
  let hours = newTime.getHours();
  let minutes = newTime.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = hours + ":" + minutes + " " + ampm;
  return time;
}
