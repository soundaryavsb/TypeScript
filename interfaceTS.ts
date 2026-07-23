//? interface - An interface is a concept in typescript which is used to define the structure of the object and it tells the compiler what property and method it should hold.

//! syntax - interface terface_name{}

//? interface with an object:
interface student{
    student_name:string,
    student_age:number,
    student_details():void
}
let student1:student={
    student_name:"ABC",
    student_age:30,
    student_details() {
        console.log(`Student name: ${this.student_name}, student age: ${this.student_age}`);
    },
}
student1.student_details();

//? Interface with an optional parameter:
interface details{
    user_name:string,
    user_age:number,
    user_address?:string
}
let userDetails1:details={
    user_name:"ABC",
    user_age:30
}
console.log(userDetails1);
// let userDetails2:details={ //! Error: missing madatory field
//     user_name="PQR",
//     user_address:"Pugalur"
// }

//? interface with a function:
interface calculation{
    (a:number,b:number):number
}
let add:calculation=(x,y)=>{
    return x+y;
}
console.log(add(50,50));

let sub:calculation=(p,q)=>{
    return p-q;
}
console.log(sub(80,40));

//? interface with method:
interface demo{
    add():void
}
let obj1:demo={
    add:()=>{
        console.log("The addition operation is a+b");
    }
}
obj1.add()

interface demo2{
    add(a:number,b:number):number
}
let obj2:demo2={
    add(a, b) {
        return a+b;
    },
}
console.log(obj2.add(27,19));

//? interface intersection:
//There are two ways of combining the interface together
//! First Way:
interface first{
    first:string
}
interface second{
    second:number
}
type interfaceJoinWay1=first&second;
let interway1:interfaceJoinWay1={
    first:"Ready",
    second:19
}
console.log(interway1);
//! Second Way:
interface firstSet{
    first:string
}
interface secondSet extends firstSet{
    second:number
}
let interway2:secondSet={
    first:"Riya",
    second:27
}
console.log(interway2);

//! interface and type alias difference
type array1=string[];
let arr11:array1=["a","b","c","d"];
console.log(arr11);

interface array2{
    p1:string[]
}
let array21:array2={
    p1:["a","b","c","d"]
}
console.log(array21);

//? Declaration merging
interface employee{
    name:string
}
interface employee{
    salary:number
}
let employee_details:employee={
    name:"Arya",
    salary:120000
}
console.log(employee_details);





