export default function formatDate(newDate) {
  if (newDate instanceof Date || (typeof newDate === 'number' && !isNaN(newDate))) {
    const formattedDate = new Date(newDate).toISOString().slice(0, 10).replace("T", " ");
    return formattedDate
  } else {
    const formattedDate = new Date().toISOString().slice(0, 10).replace("T", " ");
    return formattedDate
  }
}