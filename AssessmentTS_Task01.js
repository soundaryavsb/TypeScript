"use strict";
//* 1. create two type alias first type alias of students with properties of name and age. second type alias of course with properties of courseName and duration.
console.log("-----Question 1------");
let student1 = {
    name: "Arya",
    age: 28
};
let course1 = {
    courseName: "TypeScript",
    duration: 2
};
console.log(student1);
console.log(course1);
console.log("-----Question 2------");
let allDetails1 = {
    name: "Arya",
    age: 28,
    emp_id: 1001,
    department: "Tester",
    sal: 200000
};
console.log(allDetails1);
console.log("-----Question 3------");
function data(a) {
    console.log(a);
}
let object = {
    username: "Admin",
    password: "Admin@123",
    email: "Admin@gmail.com",
    phoneno: 9988776655
};
data(object);
function process_order(a) {
    console.log(a);
}
let object1 = {
    customer_name: "Charu",
    order_id: 2345,
    amount: 3200,
    payment_method: "UPI"
};
process_order(object1);
