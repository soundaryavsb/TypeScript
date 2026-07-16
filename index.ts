//? Type Annotation - Type Annotation is a concept in which we explicitly provide a datatype to a variable

//! syntax - declaraction_type_of_variable variable_name : datatype = value.
// let a : number = "10";
// console.log(a);

/**
 * the reason why we go for type annotation - 
 * type annotation is providing type safety.
 * type annotation is providing code readability.
 * type annotion prevents run time error and it provides compile time error.
 * 
//? common type of type annotation - 
 * Primitive datatype 
 * Array 
 * object 
 */

//? Type Inference - the type inference is used for not providing the datatype to a variable. internally the compiler will assign the datatype to a variable based upon the value assigned to it.

// let data = 600
//compiler version :- let data : number = "TypeScript"
// data = 100
// console.log(data);

// let a;                      //! with respect to type inference
// a = 10;
// a = "TypeScript"
// console.log(a);

// let a : number;              //! with respect to type Annotation
// a = 500;
// console.log(a);

//? Datatype - A datatype is defined as the concept in which we decide what kind value is been provided to a variable.
/**
 * there are 4 types of datatype in typescript - 
 * primitive datatype
 * non primitive datatype
 * tuple
 * special datatype
 * custome datatype
 */

//? Primitive datatype - A primitive datatype is one of the datatype of typescrip which is used to sore a single value and the natur of the primitive datatype is immutable.
/**
 * string
 * number
 * bigint
 * boolean
 * null
 * undefined
 */

//? string - A string is a primitive datatype which is used to store a collection of characters which are enclosed within the '', "" ,``

// let a : string = 'hi everyone, a very good morning after the session i will be sending the notes.'
// console.log(a);                         //! --> single quote

// let b :string = " let's go for party."
// console.log(b);                         //! --> double quote

// let age : number = 30
// console.log(`my age is ${age}`);       //! --> backticks

//? number - A number datatypee is a primitive datatype which is used to store a number value.

// let num : number = 10;           //! --> integer value
// console.log(num);

// let num : number = 15.60;        //! --> decimal value
// console.log(num);

// let num : number = -250;        //! --> negative value
// console.log(num);

//? bigint - bigint is a primitive datatype which is used to store a large value which is exceeding the limit of normal number value.

// let num : bigint = 123456789000523698714581215221n
// console.log(num);

//? boolean - A boolean datatype is a primitive datatype which is used to provide either true or false value.

// let isPresent : boolean = true;
// console.log(isPresent);

//? null - A null ddatatype is a primitive datatype which delibrately makes a variable as empty.

// let data : null = null;
// console.log(data);

//? undefined - An undefined datatype is a primitve datatype which is used for creating a variable but not assigning any value to it.

// let example : undefined
// example = undefined
// console.log(example);

//? non - primitive datatype - A non primitive datatype is used to store a collection elements and the nature of a non primitive datatype is mutable.
/**
 * Types of non primitive datatype - 
 * object
 * array
 * function.
 */

//? Object - An object is a real time entity which is consisting a property and that property is been provided in a form of key : value pair.

//? Type Annotation of an Object - 

//! first approach of assigning a value to an object. - 

// let user : {
//     username : string,
//     userage : number,
//     userIsActive : boolean
// } = {
//     username : "Ankita",
//     userage : 35,
//     userIsActive : false
// }
// console.log(user);

//! Second approach of assigning a value to an object. - 

// let user : {
//     username : string,
//     userage : number,
//     userIsActive : boolean
// }
// user = {
//     username : "Lalitha",
//     userage : 30,
//     userIsActive : true
// }
// console.log(user);

//? Accessing and updating a value in an object - 

// let user : {
//     username : string,
//     userage : number,
//     userIsActive : boolean
// }
// user = {
//     username : "Lalitha",
//     userage : 30,
//     userIsActive : true
// }
// user.userIsActive = false
// console.log(user);

//? Type Annotation of an object with optional parameter / optional property- 

//? optional parameter - An optional parameter is a concept in typescript which is used to make a particular property or a parameter as an optional that means not mandatory. It is denoted with a ?.

// let user : {
//     username : string,
//     userage : number,
//     userIsActive ?: boolean
// }
// user = {
//     username : "Lalitha",
//     userage : 30,
// }
// console.log(user);

//? nested object - A nested object is defined as an object inside another object.

// let user : {
//     username : string,
//     userage : number,
//     userIspresent : boolean,
//     userAddress : {
//         city : string
//     }
// }
// user = {
//     username : "Ankita",
//     userage : 30,
//     userIspresent : true,
//     userAddress : {
//         city : "Mumbai"
//     }
// }
// console.log(user.userAddress.city);

//? Type annotation of an object with method - (A method is defined as a function which is written inside an object as a property)

// let car : {
//     car_color : string,
//     car_brand : string,
//     car_speed : number,
//     car_start : ()=>void,
//     car_stop : ()=>void,
//     car_accelerate : ()=>void
// }
// car = {
//     car_color : "black",
//     car_brand : "BMW",
//     car_speed : 120,
//     car_start : ()=>{
//         console.log("these is a car start");
//     },
//     car_stop : ()=>{
//         console.log("these is a car stop");
//     },
//     car_accelerate : ()=>{
//         console.log("these is a car accelerate");
//     }
// } 
// car.car_start();
// car.car_stop();
// car.car_accelerate();

//? object with an array - 

// let product : {
//     product_name : string,
//     product_price : number,
//     product_description : string[]
// }

// product = {
//     product_name : "SAMSUNG",
//     product_price : 158000,
//     product_description : ["smart phone","black","254 GB","3 year Warranty"]
// }

// console.log(product);

//? Array - An Array is non primitve datatype which is used to store a collection of items and it is represented by a [].

//! it is consisting two types - 
/**
 * Homogenous array    - same datatype value
 * heterogenous array  - different datatype values.    //!--> in union datatype 
 */

//? Homogenous array - It is one of the type of array in typescript where an array is consisting the elements of the same datatype.
//! declaration_type_of_variable variable_name : datatype[] = [value]

// let data : string[] = ["hello","everyone","good","morning","150"]
// console.log(data);

//? Accessing and updating value of an element in an array - 

// let color : string[] = ["black","white","red","orange","purple"]
// color[2] = "Pink"
// console.log(color);

//? Basic method of an array - 

/**
 * push
 * pop
 * shift
 * unshift
 */

//? push() - it is used to add an element to the last / end of the array.

// let color : string[] = ["black","white","red","orange","purple"]
// color.push("green")
// console.log(color);

//? pop() - it is used to remove the last element of the array.

// let color : string[] = [ 'black', 'white', 'red', 'orange', 'purple', 'green' ]
// color.pop()
// console.log(color);

//? unshift() - it is used to add the element to the start of the array - 

// let color : string[] = [ 'black', 'white', 'red', 'orange', 'purple']
// color.unshift("yellow")
// console.log(color);

//? shift() - it is used to remove the starting element of the array.

// let color : string[] = [ 'black', 'white', 'red', 'orange', 'purple', 'green' ]
// color.shift()
// console.log(color);

//? Advance method of an array - 

/**
 * map
 * filter
 * reduce
 */

//? map() - the map() is the advance method of an array which is used for iterating each and every element of an array.
//! Syntax -  new_array : datatype[] = old_array_name.map((paramter)=>{})

// let num : number[] = [10,20,30,40]
// let new_num : number[] = num.map((a)=>{
//     return a-5;
// })

// console.log(new_num);

//? filter() - The filter() is used to filter the elements of an array basedon the filter condition.
//! Syntax -  new_array : datatype[] = old_array_name.filter((paramter)=>{})

// let num : number[] = [10,20,30,40]
// let new_num : number[] = num.filter((n)=>{
//     return n>25;
// })
// console.log(new_num);

//? reduce - the reduce() is used to merge all the elements of an array together and get a singlee element.
//! Syntax -  new_array : datatype[] = old_array_name.reduce((accumalator, current_value)=>{})

// let num : number[] = [10,20,30,40]
// let new_num : number  = num.reduce((a,b)=>{
//     return a+b;
// })
// console.log(new_num);

//? nested array - an array present inside an other array.

// let num : number[][] = [
//     [1,2,3],[4,5,6],[8,9,10]
// ]
// console.log(num);