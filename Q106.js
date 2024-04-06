"use strict";
// Question106:Determine if a given year is a leap year using comparison operator
function leapYear(leap) {
    return (leap % 4 === 0 && leap % 100 !== 0);
}
console.log(leapYear(2024));
console.log(leapYear(2010));
