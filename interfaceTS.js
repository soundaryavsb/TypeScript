"use strict";
//? interface - An interface is a concept in typescript which is used to define the structure of the object and it tells the compiler what property and method it should hold.
let student1 = {
    student_name: "ABC",
    student_age: 30,
    student_details() {
        console.log(`Student name: ${this.student_name}, student age: ${this.student_age}`);
    },
};
student1.student_details();
let userDetails1 = {
    user_name: "ABC",
    user_age: 30
};
console.log(userDetails1);
let add = (x, y) => {
    return x + y;
};
console.log(add(50, 50));
let sub = (p, q) => {
    return p - q;
};
console.log(sub(80, 40));
let obj1 = {
    add: () => {
        console.log("The addition operation is a+b");
    }
};
obj1.add();
let obj2 = {
    add(a, b) {
        return a + b;
    },
};
console.log(obj2.add(27, 19));
let interway1 = {
    first: "Ready",
    second: 19
};
console.log(interway1);
let interway2 = {
    first: "Riya",
    second: 27
};
console.log(interway2);
let arr11 = ["a", "b", "c", "d"];
console.log(arr11);
let array21 = {
    p1: ["a", "b", "c", "d"]
};
console.log(array21);
let employee_details = {
    name: "Arya",
    salary: 120000
};
console.log(employee_details);
