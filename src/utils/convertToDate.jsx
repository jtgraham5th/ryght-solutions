export default function convertToDate(time) {
  let date = new Date();
  date.setHours(time.substr(0, 1));
  date.setMinutes(time.substr(3, 2));
  if (time.substr(6, 2) === "AM" && date.getHours() === 12) {
    date.setHours(0);
  }
  if (time.substr(6, 2) === "AM") {
    return date;
  }
  if (time.substr(6, 2) === "PM" && date.getHours() < 12) {
    date.setHours(date.getHours() + 12);
  }
  return date;
}
