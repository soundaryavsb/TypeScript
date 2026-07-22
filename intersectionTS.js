"use strict";
console.log("------------Insection------------");
let Data1 = {
    user_name: "ABC",
    user_age: 40
};
let Data2 = {
    user_name: "PQR",
    user_age: 56
};
console.log(Data1);
console.log(Data2);
console.log("--------------------------------");
console.log("--------------Multiple Intersection------------------");
let Multiobj1 = {
    username: "ABC",
    emp_id: 1001,
    city: "Mumbai"
};
let Multiobj2 = {
    username: "PQR",
    emp_id: 1002
};
console.log(Multiobj1);
console.log(Multiobj2);
console.log("--------------------------------");
console.log("-------------Intersection with Method-------------------");
let action1 = {
    log_in: () => {
        console.log("You have logged in successfully.");
    },
    log_out: () => {
        console.log("You have logged out successfully.");
    }
};
action1.log_in();
action1.log_out();
console.log("--------------------------------");
console.log("--------intersection with UNION datatype--------");
let obj1 = {
    std_name: "ABC",
    emp_id: "1001"
};
let obj2 = {
    std_name: "PQR",
    emp_id: 8338
};
console.log(obj1);
console.log(obj2);
console.log("-------------------------");
console.log("-------Type Assertion--------");
let aliname = "TypeScript";
let name1 = aliname;
console.log(typeof aliname);
console.log(typeof name1);
console.log("-------------------------");
