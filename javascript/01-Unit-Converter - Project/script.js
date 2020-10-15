//assing a constant value in kelvin
const kelvin = 293;

//converting kelvin into celcius
celsius = kelvin - 273;

//calculating fahrenheit
fahrenheit = celsius * (9/5) + 32;

//round off decimals
fahrenheit = Math.round(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//converting celsius into Newton Scale
newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} degrees Newton Scale.`);