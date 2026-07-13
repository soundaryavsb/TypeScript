let a:number=100;
console.log(a);

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

let num:number=10; //!integer value
console.log(num);

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
