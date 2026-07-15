let atype:number=100;
console.log(atype);

//?Type Annotation - Type Annotation is a concept in which we explicitly provide a datatype to a variable

// ! syntax - declaration_type_of_variable variable_name : datatype = value;
// let a1:number ="10"; //Error: Type 'string' is not assignable to type 'number'.
// console.log(a1);

/*  
* The reason why we go for type annotation: 
* Type annotation is providing type safety.
* Type annotation is providing code readability.
* Type annotation prevents run time error and it provides compile time error
*/

// ? Common type of annotation

/* 
* Primitive datatype
* Array
* Object
*/

//? Type inference:
//? The Type inference is used for not providing the datatype to a variable. Internally the compiler will assign the datatype to a variable based upon the value assigned to it.

let data=600
// comiler version :- let data:
data=100
console.log(data);

let a1; //!with respect to type inference
a1=10;
console.log(a1);
a1="TypeScript"
console.log(a1);

let a2:number; //! with respect to type Annotation
a2=500;
console.log(a2);
// a2="TypeScript"; //?Error: Type 'string' is not assignable to type 'number'.
// console.log(a2);

//? Datatype - A datatype is defined as the concept in which we decide what kind value is been provided to a variable
/*
* There are 4 type of datatype in typescript
* Primitive datatype
* Non-Primitive datatype
* tuple
* special datatype
* costume datatype
*/

//? Prmitive datatype - A primitive datatype is one of the datatype of typescript which is used to store a single value and nature of the primitive datatype is immutable.
/*
* string
* number
* bigint
* boolean
* null
* undefined
*/

//? String - A String is a primitive datatype which is used to store a collection of charaters which are enclosed within the '',"",``

let a3:string='hi everyone.'
console.log(a3); //! Single quote

let b3:string="let's go"
console.log(b3); //! double quote

let age:number=30
console.log(`my age is ${age}`); //! backticks

//? number - A number datatype is a primitive datatype which is used to store a number value.

let num1:number=10; //!integer value
console.log(num1);

let num2:number=15.60;
console.log(num2); //! decimal value

let num3:number=-250; //! negative value
console.log(num3);

//? bigint - bigint is a primitive datatype which is used to store a large value which is exceeding the limit of normal number value.

let num4:bigint=123121212312334234354565466n;
console.log(num4);

// ?boolean - A boolean datatype is  a primitive datatype which is used to provide either true or false value.
let isPresent: boolean = true;
console.log(isPresent);
// boolean = "Sold"; //Error: 'boolean' only refers to a type, but is being used as a value here.
// console.log(isPresent);

//? null - A null datatype is primitive datatype which delibrately makes a variable as empty.
let laterData:null=null;
console.log(laterData);

//? Undefined - An undefined datatype is a primitive datatype which is used for creating a variable but not assigned any value to it.
let example: undefined
example=undefined;
console.log(example);


//? Non-Primitive data type - A nonprimitive datatype is used to store a collection elements and the nature of non-primitive datatype is mutable.
/* 
* Type of non-primitive datatype
* Object
* Array
* funtion
*/

//? Object - An object is a real time entity which is consisting  a property and that property is been provided in a form  of key value pair.

//? Type annotation of an object -
//!Object- Way 1: first approach of assinging a value to an object
let user:{
    userName: String,
    userAge: number,
    userIsActive:boolean
}={
    userName:"Rahul",
    userAge:30,
    userIsActive:true
}
console.log(user);

//!Object- Way 2: Second approach of assigning a value to an object
let user2:{
    userName: String,
    userAge: number,
    userIsActive:boolean
}
user2={
    userName:"Lalitha",
    userAge:30,
    userIsActive:true
}
console.log(user2);
// ? Accessing and updating a value in an object
console.log(user2.userName);
user2.userAge=56;
console.log(user2);

//? Type annotation of an object with optional parameter/ optional property

//? Optional parameter - An optional parameter is a concept in typescript which is used to make a perticular property or a parameter as an optional that means not mandatory. It is denoted with a ? mark.

let user3:{
    userName: String,
    userAge?: number, // question mark added. --> then it will became optional
    userIsActive:boolean
}
user3={
    userName:"Rahul",
    userIsActive:true
}
console.log(user3);

//? nested object - A nested object is defined as an another inside another object.

let user4:{
    userName: String,
    userAge?: number, // question mark added.
    userIsActive:boolean
    userAddress:{
        city: String,
        pincode: number
    }
}
user4={
    userName:"Rahul",
    userIsActive:true,
    userAddress:{
        city: "Pugalur",
        pincode:600001
    }
}
console.log(user4);
console.log(user4.userAddress.city); 

//? Type annotation or an object with method - (A method is defined as a function which is written inside an object as a property.)

//Example 1:
let calculator : {
    add : (a:number,b:number) => number
}
calculator={
    add:(a, b)=> {
        return a+b
    }
}
console.log(calculator.add(50,100));

//Example 2:
let car:{
    car_color:string,
    car_brand:string,
    car_speed:number,
    car_start:()=>void,
    car_stop:()=>void,
    car_accelerate:()=>void
}
car={
    car_color:"black",
    car_brand:"BMW",
    car_speed:120,
    car_start:()=>{
        console.log("These is a car start");
    },
    car_stop:()=>{
        console.log("These is a car stop");
    },
    car_accelerate:()=>{
        console.log("These is a car accelarate");
    }
}
car.car_start();
car.car_accelerate();
car.car_stop();

//? Object with an array:
let product:{
    // key:value
    product_name:string,
    product_price:number,
    product_description:string[]
}
product={
    product_name:"SAMSUNG",
    product_price:158000,
    product_description:["Smart phone","128GB","white","3 year warrenty"]
}
console.log(product);

//Task 1:
/*
* 1. Create an object using a function(method) with type annotation where you take two numbers and perform addition, subtraction, division, multiplication to that number.
*/
let basicCalculator : {
    add:(a:number,b:number)=>number,
    sub:(a:number,b:number)=>number,
    div:(a:number,b:number)=>number,
    mul:(a:number,b:number)=>number
}
basicCalculator={
    add:(a,b)=>a+b,
    sub:(a,b)=>a-b,
    div:(a,b)=>a/b,
    mul:(a,b)=>{return a*b}
}
console.log(basicCalculator.add(10,5));
console.log(basicCalculator.sub(10,5));
console.log(basicCalculator.div(10,5));
console.log(basicCalculator.mul(10,5));
//Task 2:
/*
* 2. Create an object of library with type annotation where properties are - library_name(string),books(strings of array)
*/
let library:{
    library_name:string,
    books:string[]
}
library={
    library_name:"v.u.c",
    books:["Automic Habit","Rich and Poor Dad","Deep Work"]
}
console.log(library);

//Task 3:
/*
*3. Create an object of school with type annotation where properties are school_name(string),principal_name(string)and one nested property of class which contains properties of class_number(number) and student_count(number).
*/
let school:{
    school_name:string,
    principal_name:string,
    class:{
        class_number:number,
        student_count:number
    }
}
school={
    school_name:"PSF School",
    principal_name:"Siva Ranjini",
    class:{
        class_number:104,
        student_count:58
    }
}
console.log(school);

//Task 4:
/*
*4. create an object of an employee with type annotation and its properties are emp_id(number),emp_name(string),emp_dept(string),emp_sal(number);here emp_name is optional
*/
let employee:{
    emp_id:number,
    emp_name?:string,
    emp_dept:string,
    emp_sal:number
}
employee={
    emp_id:1,
    emp_dept:"Tester",
    emp_sal:200000
}
console.log(employee);

// ?Array - An array is non primitive datatype which is used to store a collection of items and it is represented by a [].
// ! It is consisting two types - 
/*
* Homogenous array - Same datatype value.
* Heterogenous array - different datatype values,
*/

let array:string[]=["ride","work","joy","happy","productive"];
console.log(array);
console.log(array[2]);
array[2]="enjoy";
console.log(array);

let color:string[]=["red","pink","yellow","black","white"];
console.log("---original array----")
console.log(color);
console.log("---push - blue----");
color.push("blue");
console.log(color);
console.log("----pop - remove element at the end-----");
color.pop();
console.log(color);
console.log("---unshift - gray----");
color.unshift("gray");
console.log(color);
console.log("----shift - remove element at the beginning------");
color.shift();
console.log(color);

//Task: array homogeneous
//! 1. Create an array which stores marks of a student using type annotation. 
let student:number[]=[80,90,99,100,97];
console.log(student);
//! 2. create an array of fruits name with type annotation 
let fruitsName:string[]=["orange","guva","apple","banana"]; 
console.log(fruitsName);
//! 3. create an array of scores and using push method add somes scores into an array with type annotation. 
let score:number[]=[];
score.push(100);
score.push(99);
score.push(98);
console.log(score);
//! 4. create an array of numbers with type annotation where use the filter method to print only the even numbers present in the array. 
let evenNum:number[]=[10,55,22,74,93];
let even:number[]=evenNum.filter((a)=>{
    return a%2==0;
})
console.log(even);
//! 5. create a nested array with type annotation of number. 
let NestedArray:string[][]=[
    ["Hi","Hello","Hey"],["welcome","Good Morning","Good Evening"],["Friends","students","people"]]
console.log(NestedArray);


