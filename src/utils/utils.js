// utils/utils.js
export function moneyFormatter(num) {
  num = Number(num); // Convert num to a number if it's not already

  if (isNaN(num)) {
    return ""; // Handle non-numeric values
  }

  // Format the number with commas as thousands separators
  const sign = num < 0 ? "-" : ""; // Store sign
  const absNum = Math.abs(num); // Get absolute value for formatting

  // Convert number to fixed-point notation with 2 decimal places
  const parts = absNum.toFixed(2).split(".");
  const integerPart = parts[0];
  const decimalPart = parts[1];

  // Format the integer part with commas
  const formattedIntegerPart = integerPart
    .split("")
    .reverse()
    .reduce(
      (acc, digit, i) =>
        digit === "-" ? acc : digit + (i && !(i % 3) ? "," : "") + acc,
      ""
    );

  return sign + formattedIntegerPart + "." + decimalPart;
}
