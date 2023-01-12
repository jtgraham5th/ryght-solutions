export default function formatDate(newDate) {
  if (newDate instanceof Date)
    return new Date(newDate).toISOString().slice(0, 10).replace("T", " ");
  else return new Date().toISOString().slice(0, 10).replace("T", " ");
}