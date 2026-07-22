"use strict";
console.log("------Advanced method of an array-----------");
let a = [1, 2, 5, 10, 20, 40];
let a2 = a.map((n) => n * 2);
let a3 = a.filter((n) => n >= 10);
let a4 = a.reduce((a, b) => a + b);
console.log(a);
console.log(a2);
console.log(a3);
console.log(a4);
console.log("----------Special datatype---------");
let b = "Ready";
console.log(b);
console.log(b.toUpperCase());
console.log(typeof b);
b = 10;
console.log(b);
console.log(b * 10);
console.log(typeof b);
console.log("-------------------------------------");
let b1 = "Sold";
console.log(b1);
// console.log(b1.toUpperCase()); //!Error
console.log(typeof b1);
b1 = 4;
console.log(b1);
// console.log(b1*b1); //!Error
console.log(typeof b1);
if (typeof b1 == "string") {
    console.log(b1.toUpperCase());
}
else if (typeof b1 == "number") {
    console.log(b1 * b1);
}
else {
    console.log("not string not number");
}
console.log("--------------------------------------");
function b2(name) {
    console.log("Hi", name);
}
b2("Arya");
