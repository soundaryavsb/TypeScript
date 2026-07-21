"use strict";
//! Task - Special datatype
//* 1. create a function that accepts two parameter of any datatype and return their sum.
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 8));
//* 2. create a variable of type unknown and a string value to it then check whether it is a string or not if it is a string datatype convert it into an uppercase.
let val = "Ready";
if (typeof val == "string") {
    console.log(val.toUpperCase());
}
//* 3. store a number in an unknown variable and check if it is a number and if it is then print its square.
let num = 10;
if (typeof num == "number") {
    console.log(num * num);
}
//* 4. create a function that accepts unknown value and if it is a string then print the length if it is a number then print the square otherwise print invalid input.
function demo(a) {
    if (typeof a == "string") {
        console.log(a.length);
    }
    else if (typeof a == "number") {
        console.log(a * a);
    }
    else {
        console.log("invalid input");
    }
}
//* 5. create a function that prints your name and the function should not return anything.(hint - void datatype)
function demo1(a) {
    console.log(a);
}
demo1("Soundarya");
//* 6. create a function that accepts name and course print both the values and return nothing.
function demo2(name, course) {
    console.log("Name: ", name, "and Course: ", course);
}
demo2("Soundarya", "TypeScript");
//* 7. create a function that throw an error message.
function demoerror() {
    throw new Error("Hi, I am never special datatype error message");
}
demoerror();
//* 8. create a function that continuously prints a number in an infinite loop.
function demoloop() {
    let a = 0;
    while (true) {
        a++;
        console.log(a);
    }
    console.log("End");
}
demoloop();
