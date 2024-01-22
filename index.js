console.log("Hello World!");
//What the current temperature outside will be
let currentTemp = 60;
let isRaining = true;

function weatherMessage

if (currentTemp <= 40) {
  console.log(`It's ${currentTemp} degrees outside.  Wear a heavy jacket.`);
} else if (currentTemp <= 60) {
  console.log(`It's ${currentTemp} degrees outside.  Wear a jacket.`);
} else if (currentTemp <= 70) {
  console.log(`It's ${currentTemp} degrees outside.  Wear a light jacket.`);
} else {
  console.log(`It's hot out today!  No jacket needed!`);
}
if (isRaining) {
  console.log("it's raining, too, so you should bring an umbrella!");
} else {
  console.log("No rain today, you can leave the umbrella at home!");
}
console.log(
  isRaining
    ? "It's raining, so you should bring an umbrella!"
    : "It's not raining, so no umbrella needed!"
);