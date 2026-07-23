"use strict";
//? Generics
//?generics with function
function demo(data) {
    console.log(data);
}
demo(10);
demo("Ready");
//? Multiple generics
function props(data) {
    console.log(data);
}
props(100);
// props<string,number,boolean>(null); //! Error: Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'
//? Generics with an array
function arr(data) {
    console.log(data);
}
arr(["TypeScript", "PlayWright", 10, 100, "boolean"]);
let obj1 = {
    value1: 10,
    value2: 20
};
console.log(obj1);
//* Task - Generics
//* 1. create a generic function that returns whatever value is passed.
function demo1(data) {
    return data;
}
console.log(demo1(10));
console.log(demo1("Hello"));
//* 2. create a generic function that return the first element of an array.
function demo2(data) {
    return data[0];
}
console.log(demo2([90, 80, 70, 60]));
console.log(demo2(["JavaScript", "TypeScript", "PlayWright"]));
console.log(demo2(["Type", 10, "yes", true, null, undefined]));
//* 3. create a generic function that takes a value and return it inside an array.
function demo3(data) {
    return [data];
}
console.log(demo3("Type"));
console.log(demo3(100));
console.log(demo3(true));
let demo41 = {
    name: "Ready",
    age: 5
};
console.log(demo41);
//* 5. create a function that takes two values of different type and return a tuple
function demo5(a, b) {
    return [a, b];
}
console.log(demo5("TypeScript", 10));
console.log(demo5(true, "Life"));
