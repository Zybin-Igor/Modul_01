"use strict";
/*console.log(1);
const userName = "John";
let userNumbe = 25;
userNumbe = 24;
*/
/*const storeName = 'My shop';

const storeDescription = {
    budget: 10000,
    employees: ['Ihor', 'Tetyana', 'Masha'],
    products: {
        soap: 100,
        water: 50
    },
    open:true
}; 
*/
// const storeName = 'My awesome store';
// const storeDescription = {
//     budget: 10000,
//     employees: ['Alex', 'John', 'Sam'],
//     products: {
//         'soap': 20,
//         'water': 5
//     },
//     open: true
// };
//alert('Hello!');
//const result = confirm("Are you here?");
//console.log(result);
//const answer = prompt("Вам есть 18?", "18");
//console.log(typeof (answer));
/*Interpolation
 */
let total = 0, count = 1;
while (count <= 10) {
    total += count;
   count += 1;
}
console.log(total);
console.log(sum(range(1, 10))); //не работает код sum is not defined
const answer = [];

answer[0] = prompt('What your first name?','');
answer[1] = prompt('What your last name?','');
answer[2] = prompt('How you old?','');
document.write(answer);

//let incr=10,
//dicr=10;

//console.log(++dicr);
//console.log(--incr);