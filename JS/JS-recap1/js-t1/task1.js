const celsius = parseInt(prompt('Give temperature in Celsius.'));
const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;
document.querySelector('#fahrenheit').innerHTML = 'Fahrenheit: ' + fahrenheit;
document.querySelector('#kelvin').innerHTML = 'Kelvin: ' + kelvin;
