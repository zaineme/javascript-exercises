const convertToCelsius = function(number) {
  let celsius = (number - 32) / 1.8;
  if (!Number.isInteger(celsius)) {
    celsius = +celsius.toFixed(1);
  }
  return celsius;
};

const convertToFahrenheit = function(number) {
  let fahrenheit = (number * 1.8) + 32;
  if (!Number.isInteger(fahrenheit)) {
    fahrenheit = +fahrenheit.toFixed(1);
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
