const input_1x = parseInt(prompt('Give a value for first x coordinate. '));
const input_1y = parseInt(prompt('Give a value for first y coordinate. '));
const input_2x = parseInt(prompt('Give a value for second x coordinate.'));
const input_2y = parseInt(prompt('Give a value for second y coordinate.'));
const distance = Math.sqrt(
    Math.pow(input_2x - input_1x, 2) + Math.pow(input_2y - input_1y, 2)
);

document.querySelector('#answer').innerHTML = distance;
