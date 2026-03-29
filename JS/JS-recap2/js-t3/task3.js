let numbers = [];

const output = document.querySelector('#output');
output.textContent = 'Even Numbers: ';

while (true) {
    const n = prompt('enter number, enter q once done');
    if (n === 'q') {
        break;
    }
    numbers.push(Number(n));
}
console.log(numbers);

let even = 0;
for (let n of numbers) {
    if (n % 2 === 0) {
        even++;
        output.textContent += n + ' ';
    }
}

if (even === 0) {
    output.textContent += 'None';
}
