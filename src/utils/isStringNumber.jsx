export default function isStringNumber(str) {
  if (!isNaN(str) && !isNaN(parseFloat(str))) return parseInt(str);
  return str;
}
