const posInt = parseInt(prompt('Enter a positive integer.'));
let sum = 0;
if (posInt >= 1) {
    for (let i = 1; i < posInt + 1; i++) {
        sum += i;
    }

    document.querySelector('#sum').innerHTML = 'Sum of integers: ' + sum;
} else {
    document.querySelector('#sum').innerHTML = 'Invalid input.';
}
