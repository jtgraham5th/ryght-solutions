export default function formatISODate(isoDateString) {
    const date = new Date(isoDateString);

    // Invalid date
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }

    let day = date.getDate();
    let month = date.getMonth() + 1; // getMonth() is zero-indexed
    const year = date.getFullYear();

    // ensure month and day are two digits
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;

    return month + "/" + day + "/" + year;
}