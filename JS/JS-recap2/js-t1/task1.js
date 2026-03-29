
const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

console.log('Fruits:', fruits);

console.log('length:', fruits.length);
console.log('fruit at index 2:', fruits[2]);
console.log('last fruit:', fruits[fruits.length-1]);

const vegetables = [];

for (let i = 0; i < 3; i++) {
    vegetables.push(prompt('Enter vegetable n.'+(i+1)));
}

console.log('Vegetables:', vegetables);

console.log('length:', vegetables.length);
