let dayOfWeek = 7;

let result =
  dayOfWeek === 0
    ? "Sunday"
    : dayOfWeek === 1
    ? "Monday"
    : dayOfWeek === 2
    ? "Tuesday"
    : dayOfWeek === 3
    ? "Wednesday"
    : dayOfWeek === 4
    ? "Thursday"
    : dayOfWeek === 5
    ? "Friday"
    : dayOfWeek === 6
    ? "Saturday"
    : "Not found";
console.log(result);
