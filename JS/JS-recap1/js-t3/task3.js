const side_1 = prompt('Side 1 lenght.');
const side_2 = prompt('Side 2 lenght.');
const side_3 = prompt('Side 3 lenght.');

if (side_1 == side_2 && side_2 == side_3) {
    type = 'equilateral';
}
if (
    (side_1 == side_2 && side_2 != side_3) ||
    (side_1 != side_2 && side_2 == side_3) ||
    (side_1 == side_3 && side_2 != side_1)
) {
    type = 'isosceles';
}
if (side_1 != side_2 && side_1 != side_3 && side_2 != side_3) {
    type = 'scalene';
}

document.querySelector('#answer').innerHTML = 'Triange is a ' + type;
