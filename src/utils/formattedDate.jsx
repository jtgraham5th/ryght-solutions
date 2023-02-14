export default function formattedDate(dateString) {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}
