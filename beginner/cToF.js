const tempC = 8.5;

function convertCtoF(tempInC) {
  return tempInC * 1.8 + 32;
}

console.log(`${tempC}°C is equal to ${convertCtoF(tempC)}°F`);

//How I (CK) did it
//Const tempC commented out b/c declared above

//const tempC = 8.5;
function cToF(temp) {
  const tempF = temp * (9 / 5) + 32;
  console.log(`${temp} degrees Celsius is equal to ${tempF} Fahrenheit`);
}
cToF(tempC);
