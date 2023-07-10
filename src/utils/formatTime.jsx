import moment from 'moment';

export default function formatTime(newTime) {
  let time;
  if (newTime instanceof Date) {
    time = moment(newTime).format('hh:mm A');
  } else {
    time = moment().format('hh:mm A');
  }
  return time;
}
