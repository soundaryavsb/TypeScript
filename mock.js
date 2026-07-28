"use strict";
function fun(a) {
    return a[0];
}
fun([10, 20, 30]);
fun(["10", "20", "30"]);
//class student class employee method 
class employee {
    details() {
        console.log("I am employee");
    }
}
class student extends employee {
    details() {
        console.log("I am student");
    }
}
let objstu = new student();
objstu.details();
let objemp = new employee();
objemp.details();
