"use strict";
//? special datatype - The special datatype is defined as not normal datatype like primitive datatype having string or number but the special datatype is based on the behaviour of the datatype
/**
 * there are four types of special datatype-
 * 1. any datatype
 * 2. unknown datatype
 * 3. void datatype
 * 4. never datatype
 */
//? any - An any datatype is a datatype which is consider to be a special datatype because it bahaves like a javascript because it does not check the type of the value, it can store any kind of datatype value to a variable
console.log("-------any--------");
let data = "TypeScript";
data = 10;
console.log(data);
//? unknown - It is also a type of special datatype in typescript which is consider to be the safer version of the any datatype.
console.log("-------unknown--------");
let data2 = "Hello";
// data2 =12
console.log(typeof data2);
if (typeof data2 == "string") {
    console.log(data2.toUpperCase());
    // console.log(data2*10); //* Error
}
else if (typeof data2 == "number") {
    console.log(data2 * 10);
    // console.log(data2.toUpperCase()); //* Error
}
else {
    console.log("not satisfied the condition");
    // console.log(data2.toUpperCase()); //* Error
    // console.log(data2*10); //* Error
}
//? any and unknown
console.log(data * 10);
// console.log(data.toUpperCase());
console.log(data2);
// console.log(data2*10); 
// console.log(data2.toUpperCase());
// !Explanation for "any" and "unknown": When do operations
/*
* any: It doesnt through the error at the compile time and It is through error only in a run time. It is not typesafe. and it is deprecated.
* unknown: It through error when try to print the output even the datatype is correct also. Cannot use it without checking a datatype(typeof data).
* It is through a error at the compile time itself.
*/
//? void - The void datatype is used for not returning anything
function data3(name) {
    // return name;
    console.log(name);
}
console.log(data3("Ankita"));
//? never - never datattype is used for returning nothing. It does not have a end. It should have a endless loop or throw the error. 
//? never - never have a end
// function data4():never{
//     while(true){
//         console.log("TypeScript");
//     }
//     console.log("Javascript");
// }
// data4()
// function data5():never{
//     console.log("never datatype");
//     throw new Error("Typescript is having an error message.")
// }
// data5()
