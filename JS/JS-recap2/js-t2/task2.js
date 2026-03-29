let numbers = [];

for (let i = 0; i < 5; i++) {
    numbers.push(Number(prompt('enter number')));
}

console.log('numbers:', numbers);

if (numbers.includes(Number(prompt('enter number to be checked')))) {
    console.log('number is included');
} else {
    console.log('number is NOT included');
}

numbers.pop();

console.log('updated numbers:', numbers);

numbers.sort((a, b) => a - b);

console.log('sorted numbers:', numbers);
