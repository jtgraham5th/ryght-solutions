import moment from 'moment';

export default function formatDateToday() {
    const date = moment().format("MM/DD/YY");
    return date;
}
