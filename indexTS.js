"use strict";
let atype = 100;
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
let data = 600;
// comiler version :- let data:
data = 100;
console.log(data);
let a1; //!with respect to type inference
a1 = 10;
console.log(a1);
a1 = "TypeScript";
console.log(a1);
let a2; //! with respect to type Annotation
a2 = 500;
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
let a3 = 'hi everyone.';
console.log(a3); //! Single quote
let b3 = "let's go";
console.log(b3); //! double quote
let age = 30;
console.log(`my age is ${age}`); //! backticks
//? number - A number datatype is a primitive datatype which is used to store a number value.
let num1 = 10; //!integer value
console.log(num1);
let num2 = 15.60;
console.log(num2); //! decimal value
let num3 = -250; //! negative value
console.log(num3);
//? bigint - bigint is a primitive datatype which is used to store a large value which is exceeding the limit of normal number value.
let num4 = 123121212312334234354565466n;
console.log(num4);
// ?boolean - A boolean datatype is  a primitive datatype which is used to provide either true or false value.
let isPresent = true;
console.log(isPresent);
// boolean = "Sold"; //Error: 'boolean' only refers to a type, but is being used as a value here.
// console.log(isPresent);
//? null - A null datatype is primitive datatype which delibrately makes a variable as empty.
let laterData = null;
console.log(laterData);
//? Undefined - An undefined datatype is a primitive datatype which is used for creating a variable but not assigned any value to it.
let example;
example = undefined;
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
let user = {
    userName: "Rahul",
    userAge: 30,
    userIsActive: true
};
console.log(user);
//!Object- Way 2: Second approach of assigning a value to an object
let user2;
user2 = {
    userName: "Lalitha",
    userAge: 30,
    userIsActive: true
};
console.log(user2);
// ? Accessing and updating a value in an object
console.log(user2.userName);
user2.userAge = 56;
console.log(user2);
//? Type annotation of an object with optional parameter/ optional property
//? Optional parameter - An optional parameter is a concept in typescript which is used to make a perticular property or a parameter as an optional that means not mandatory. It is denoted with a ? mark.
let user3;
user3 = {
    userName: "Rahul",
    userIsActive: true
};
console.log(user3);
//? nested object - A nested object is defined as an another inside another object.
let user4;
user4 = {
    userName: "Rahul",
    userIsActive: true,
    userAddress: {
        city: "Namakkal",
        pincode: 600001
    }
};
console.log(user4);
console.log(user4.userAddress.city);
//? Type annotation or an object with method - (A method is defined as a function which is written inside an object as a property.)
//Example 1:
let calculator;
calculator = {
    add: (a, b) => {
        return a + b;
    }
};
console.log(calculator.add(50, 100));
//Example 2:
let car;
car = {
    car_color: "black",
    car_brand: "BMW",
    car_speed: 120,
    car_start: () => {
        console.log("These is a car start");
    },
    car_stop: () => {
        console.log("These is a car stop");
    },
    car_accelerate: () => {
        console.log("These is a car accelarate");
    }
};
car.car_start();
car.car_accelerate();
car.car_stop();
//? Object with an array:
let product;
product = {
    product_name: "SAMSUNG",
    product_price: 158000,
    product_description: ["Smart phone", "128GB", "white", "3 year warrenty"]
};
console.log(product);
//Task 1:
/*
* 1. Create an object using a function(method) with type annotation where you take two numbers and perform addition, subtraction, division, multiplication to that number.
*/
let basicCalculator;
basicCalculator = {
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    div: (a, b) => a / b,
    mul: (a, b) => { return a * b; }
};
console.log(basicCalculator.add(10, 5));
console.log(basicCalculator.sub(10, 5));
console.log(basicCalculator.div(10, 5));
console.log(basicCalculator.mul(10, 5));
//Task 2:
/*
* 2. Create an object of library with type annotation where properties are - library_name(string),books(strings of array)
*/
let library;
library = {
    library_name: "v.u.c",
    books: ["Automic Habit", "Rich and Poor Dad", "Deep Work"]
};
console.log(library);
//Task 3:
/*
*3. Create an object of school with type annotation where properties are school_name(string),principal_name(string)and one nested property of class which contains properties of class_number(number) and student_count(number).
*/
let school;
school = {
    school_name: "PSF School",
    principal_name: "Siva Ranjini",
    class: {
        class_number: 104,
        student_count: 58
    }
};
console.log(school);
//Task 4:
/*
*4. create an object of an employee with type annotation and its properties are emp_id(number),emp_name(string),emp_dept(string),emp_sal(number);here emp_name is optional
*/
let employee;
employee = {
    emp_id: 1,
    emp_dept: "Tester",
    emp_sal: 200000
};
console.log(employee);
// ?Array - An array is non primitive datatype which is used to store a collection of items and it is represented by a [].
// ! It is consisting two types - 
/*
* Homogenous array - Same datatype value.
* Heterogenous array - different datatype values,
*/
//? Homogeneous array - It is one of the type of array in typescript where an array is consisting the elements of same datatype.
let array = ["ride", "work", "joy", "happy", "productive"];
console.log(array);
//? Accessing and updating value of an element in an array
console.log(array[2]); //!accessing
array[2] = "enjoy"; //!updating
console.log(array);
//? Basic method of an array:
/*
* push --> Add element at the end of an array
* pop --> Remove element at the end of an array
* shift --> Remove element at the beginning of an array
* unshift --> Add element at the beginning of an array
*/
//? push() - It is used to add an element to the last/ end of the array.
let color = ["red", "pink", "yellow", "black", "white"];
console.log("---original array----");
console.log(color);
console.log("---push - blue----");
color.push("blue");
console.log(color);
//? pop() - It is used to remove the last element of the array.
console.log("----pop - remove element at the end-----");
color.pop();
console.log(color);
//?unshift() - It is used to add the element to the start of an array
console.log("---unshift - gray----");
color.unshift("gray");
console.log(color);
//? shift() - It is used to remove the starting elelmet of the array.
console.log("----shift - remove element at the beginning------");
color.shift();
console.log(color);
//? Advance method of an array
/*
 * map
 * filter
 * reduce
 */
//? map() - The map() is the advane method of an array which is used for iterating each and every element of an array.
console.log("-----array - Map()------");
//! Syntax - new_array : datatype[] = old_array_name.map((paramter)=>{})
let num = [10, 20, 30, 40];
let new_num = num.map((a) => {
    return a * 5;
});
console.log(new_num);
//? filter() - The filter() is used to filter the elements of an array based on the filter condition.
console.log("-----array - filter()-----");
//! Syntax - new_array:datatype[]=old_array_name.filter((parameter)=>{})
let numfil = [10, 20, 30, 40];
let numfilter = numfil.filter((n) => {
    return n > 25;
});
console.log(numfilter);
//? reduce - the reduce() is used to merge all the elements of an array together and get a single element.
console.log("-----array - reduce()------");
//! Syntax - new_array:datatype[]=old_array_name.reduce((accumalator,current_value)=>{})
let numredu = [10, 20, 30, 40];
let numreduce = numredu.reduce((a, c) => {
    return a + c;
});
console.log(numreduce);
//* Note: accumulator default value is 0.
//* a=0, c=10 => a+c=10 => a=10
//* a=10, c=20 => a+c=30 => a=30
//* a=30, c=30 => a+c=60 => a=60
//* a=60, c=40 => a+c=100 => a=100
//* return 100;
//? nested array - an array presented inside an other array.
console.log("-----nested array-----");
//! syntax data_name:datatype[][]=[[],[]]
let numarray = [
    [1, 2, 3], [4, 5], [6, 7, 8, 9]
];
console.log(numarray);
//? Readonly array - The readonly array is used to prevent an array from kind modification.
console.log("---readonly array----");
//! Only for an array the readonly property is provided in two ways:
console.log("----First Approach: readonly----");
//The first approach of providing readonly array:
let demo = [10, 20, 30];
// demo[1]=100; //* Error: cannot change the value when the data array is readonly
// demo.push(40); //* Error: cannot push/add the value when the data array is readonly
// demo.pop(); //* Error: cannot pop/remove the value when the data array is readonly
console.log(demo); //* only possible to read the data in the array when using 'readonly'.
console.log("----Second Approach: ReadonlyArray<data_type>----");
//The second approach of providing the readonly array:
//Example 1:
let demosec = [10, 20, 30];
console.log(demosec);
demosec = [101, 102, 103, 104]; //!Entire change array possible when array is Readonly
console.log(demosec);
//Example 2:
let employeeROA;
employeeROA = [
    {
        empId: ["101"],
        empName: "Arya"
    },
    {
        empId: ["102"],
        empName: "Raya"
    }
];
console.log(employeeROA);
console.log(employeeROA[0]);
employeeROA[0].empName = "Zooya";
console.log(employeeROA[0]);
// employeeROA[0].empId="104"; //!Error: cannot update a single value. But can update whole array.
employeeROA[0].empId = ["104"];
console.log(employeeROA[0]);
//Task: array homogeneous
//! 1. Create an array which stores marks of a student using type annotation. 
let student = [80, 90, 99, 100, 97];
console.log(student);
//! 2. create an array of fruits name with type annotation 
let fruitsName = ["orange", "guva", "apple", "banana"];
console.log(fruitsName);
//! 3. create an array of scores and using push method add somes scores into an array with type annotation. 
let score = [];
score.push(100);
score.push(99);
score.push(98);
console.log(score);
//! 4. create an array of numbers with type annotation where use the filter method to print only the even numbers present in the array. 
let evenNum = [10, 55, 22, 74, 93];
let even = evenNum.filter((a) => {
    return a % 2 == 0;
});
console.log(even);
//! 5. create a nested array with type annotation of number. 
let NestedArray = [
    ["Hi", "Hello", "Hey"], ["welcome", "Good Morning", "Good Evening"], ["Friends", "students", "people"]
];
console.log(NestedArray);
//? function - A function is  a non primitive datatype which is a reusable block of code which is used for performing a task.
console.log("----function-----");
//! function function_name(){//task to perform}function_name()
//* string+number
function demofun(a, b) {
    console.log(a + b);
    console.log("This is a typescript session");
}
demofun("Score", 100);
//* number+string
function demofun3(a, b) {
    console.log(a + b);
}
demofun3(1, "st Rank");
//* string+string
function demofun2(a, b) {
    console.log(a + b);
}
demofun2("Score ", "here");
//* number+boolean
// function demofun4(a:number,b:boolean){
//     console.log(a+b); //!number+boolean not possible
// }
//* string+boolean
function demofun5(a, b) {
    console.log(a + b);
}
demofun5("Hello", true);
//* Note: 
//* number+number --> possible
//* string+number/ number+string --> possible
//* string+string --> possible
//* number+boolean --> not possible
//* string+boolean --> possible 
//? tuple - Tuple is a special datatype in typescript which is used to store a collection of elements. Here the sequesnce of the elements matter the most.
console.log("----tuple----");
//! Syntax - declaration_type_of_variable variable : [datatype] = [values]
let datatuple1 = ["TypeScript", 7, true, "PlayWright"];
console.log(datatuple1);
//? tuple accessing and updating:
let datatuple2 = ["TypeScript", 7, true, "PlayWright"];
// datatuple2[1]="write" ;//* Error: cannot assign a different data value
console.log(datatuple2);
//?tuple with an optional parameter:
let datatuple3;
// datatuple3=["a","b",4] //* cannot assign 3rd value as number datatype
datatuple3 = ["a", "b", , 4]; //* need to have empty value
console.log(datatuple3);
//? tuple with a functional parameter:
//!Return muliple values using an array
function demoFunPara1(a) {
    return [a[0] * 5, a[1] * 2, a[2], a[0] * 100]; //* return multiple value using array. Note it is depend on how many inputs we provided
}
console.log(demoFunPara1([1, 2, true]));
//! Return multiple value using an object
function demoFunPara2(a) {
    return {
        k1: a[0],
        k2: a[0] * 10,
        k3: a[1] - 10,
        k4: a[2],
        k5: a[2] + "Hey Object boolean"
    };
}
console.log(demoFunPara2([3, 100, false]));
//!function, parameter=>array datatype
function demoTupleFun(a) {
    return [a[0] * 10, a[1].map((n) => n * 5)];
}
console.log(demoTupleFun([1, [1, 2]]));
//? tuple with an array:
console.log("----tuple with an array-------");
let data_array = [
    [10, ["Hi", "Hello"]],
    [20, ["Arya", "Raya", "Zooya"]],
    [30, ["Welcome"]]
];
console.log(data_array);
//Task: tuple
//! 1. create a tuple that stores student name and age. 
let student_detail = ["Raya", 23];
console.log(student_detail);
//! 2. create a tuple of a store that contains product details. 
let product_details = ["Car", 3000000];
console.log(product_details);
//! 3. create an array of tuple to store employee details (emp_id, emp_name). 
let employee_details = [
    [1, "Arya"], [2, "Riya"], [3, "Zooya"]
];
console.log(employee_details);
//! 4. create a function that returns a tuple (status, order_id). 
function Orders(order_details) {
    // return order_details;
    return `order status - ${order_details[0]}, order id - ${order_details[1]}.`;
}
console.log(Orders([true, 123]));
//! 5. create a tuple for user details (username, age, address- optional)
let user_details = ["Arya", 5];
console.log(user_details);
