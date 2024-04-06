"use strict";
// Question107:Write a condition using logical operators that checks if a number is divisible by both 2 and .
function divisibleByTwoumbers(num1) {
    return num1 % 2 === 0 && num1 % 3 === 0;
}
const numberCheck = 10;
if (divisibleByTwoumbers(numberCheck)) {
    console.log(`${numberCheck} is divisible by both 2 and and 3`);
}
else {
    console.log(`${numberCheck} is not divisible by both 2 and and 3`);
}
