export function moneyFormatter(num) {
  num = Number(num); // Convert num to a number if it's not already
  if (isNaN(num)) {
    return ""; // or handle this case in a way that fits your needs
  }

  let p = num.toFixed(2).split(".");
  return (
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}
