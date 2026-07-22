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
let Alldetails1 = {
    name: "Arya",
    age: 28,
    emp_id: 1001,
    department: "Tester",
    sal: 200000
};
console.log(Alldetails1);
console.log("-----Question 3------");
let loginFun1 = {
    auth(userName, password) {
        console.log("User Name:", userName, "Password: ", password);
    }
};
let profileFun1 = {
    prof(email, phone_no) {
        console.log("email ID: ", email, "Phone Number:", phone_no);
    }
};
loginFun1.auth("Admin", "Admin123");
profileFun1.prof("Admin@gmail.com", 9923422719);
/*


4. create two type alias where the first is of customer with properties as customer_name and order_id, the second is of payment with properties of amount and payment_method. create a function process_order() that accepts a parameter using intersection of both types and print the detail.
*/ 
