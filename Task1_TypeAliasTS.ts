//! Type Alias - Assignment
//* 1. Create an online shopping product type alias.
type onlineShopping=string[];
let product1:onlineShopping=["Note","Pen","Pencil","Soap"];
console.log(product1);
console.log("---------------------------");
//* 2. Create a student report card
type reportCard={
    Tamil:number,
    English:number,
    Maths:number,
    Science:number,
    Social:number,
}
let student1:reportCard={
    Tamil:90,
    English:89,
    Maths:99,
    Science:98,
    Social:99,
}
let student2:reportCard={
    Tamil:89,
    English:78,
    Maths:89,
    Science:78,
    Social:90,
}
console.log(student1);
console.log(student2);
console.log("---------------------------");
//* 3. Create employee payroll detail
type payroll=[]