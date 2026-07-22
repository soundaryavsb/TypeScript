"use strict";
//? literal datatype:
console.log("-----------literal with string------------");
//? literal with string
let data;
data = "TypeScript";
console.log(data);
// data="PlayWright"; //!Error: Type '"PlayWright"' is not assignable to type '"TypeScript"'
// data=5; //! Error: Type '5' is not assignable to type '"TypeScript"'
console.log("-----------literal with number--------------");
//? literal with number
let num;
num = 18;
console.log(num);
console.log("-----------literal with object---------------");
//? literal with object
let user;
user = {
    userName: "Arya",
    userAge: 24,
    address: "Mumbai"
};
console.log(user);
user.userName = "Riya";
// user.userAge=35; //! Error: Type '35' is not assignable to type '24'
// user.address="Velur" //! Error: Type '"Velur"' is not assignable to type '"Mumbai"'
console.log(user);
console.log("------------literal with function and special data type void------");
//? literal with function
function theme(color) {
    console.log(color);
}
theme("White");
// theme("Black"); //!Error: Argument of type '"Black"' is not assignable to parameter of type '"White"'.
console.log("------------literal with function and union------");
//? literal with function and union
function theme1(color) {
    console.log(color);
}
theme1("White");
theme1("Black");
// theme1("Purple"); //!Error: Argument of type '"Purple"' is not assignable to parameter of type '"White" | "Black"'.
