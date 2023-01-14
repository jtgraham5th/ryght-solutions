export default function formatDateToday() {
  let today = new Date();
  let date = today.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  return date;
}
