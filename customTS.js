"use strict";
//? union datatype
let example;
example = "Typescript";
example = 150;
example = true;
console.log(example);
//?union with array:
let data2 = ["ankita", 1560, 8926, "yello", "red"];
console.log(data2);
//? union with an object:
let obj;
obj = {
    username: "ABC",
    userage: 30,
    userid: 15003
};
console.log(obj);
obj = {
    username: "ABC",
    userage: 30,
    userid: "ABC123"
};
console.log(obj);
//? union with functional parameter
function demo(userid) {
    console.log("user id is ", userid);
}
demo("ABC");
demo(123);
// demo(true);
//? union type narrowing - It is defined as the one of the type of union datatype where we need to check the type of the value assigned to a variable before it is been executed. Union Type narrowing is always written inside a function.
function demo2(example) {
    if (typeof example == "string") {
        return example.toUpperCase();
    }
    else if (typeof example == "number") {
        return example * 10;
    }
}
console.log(demo2("TypeScript"));
console.log(demo2(10));
let username = "Raya";
console.log(username);
let username2 = "Arya";
console.log(username2);
// let num:demo1=95; //!will get an error
console.log("---------------------------");
let user1 = {
    person_name: "Arya",
    person_age: 23,
    person_id: 1001
};
console.log(user1);
let user2 = {
    person_name: "Zooya",
    person_age: 28,
    person_id: "1002"
};
console.log(user2);
console.log("---------------------------");
//!without type alias:
let obj2;
obj2 = {
    person_name: "Laksu",
    person_age: 35,
    person_id: "1003"
};
console.log(obj2);
console.log("---------------------------");
obj2 = {
    person_name: "Manu",
    person_age: 45,
    person_id: "1004"
};
console.log(obj2);
console.log("---------------------------");
let obj3;
obj3 = {
    person_name: "Bai",
    person_age: 30,
    person_id: 1005
};
console.log(obj3);
console.log("---------------------------");
let array1 = ["a", "b", "c", "d"];
console.log(array1);
console.log("---------------------------");
let array2 = [101, 102, 103];
console.log(array2);
console.log("---------------------------");
let array3 = [true, false, true];
console.log(array3);
console.log("---------------------------");
let array4 = ["store", 123, true, "ready"];
console.log(array4);
console.log("---------------------------");
let add = (p, q) => {
    return p + q;
};
let sub = (p, q) => {
    return p - q;
};
console.log(add(10, 20));
console.log(sub(100, 50));
console.log("---------------------------");
let product1 = ["Note", "Pen", "Pencil", "Soap"];
console.log(product1);
console.log("---------------------------");
let student1 = {
    Tamil: 90,
    English: 89,
    Maths: 99,
    Science: 98,
    Social: 99,
};
let student2 = {
    Tamil: 89,
    English: 78,
    Maths: 89,
    Science: 78,
    Social: 90,
};
console.log(student1);
console.log(student2);
console.log("---------------------------");
