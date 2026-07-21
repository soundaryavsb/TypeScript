//? union datatype - In typescript a union datatype is a type of datatype which is used to store multiple type of data into a variable.

let example:String | number | Boolean
example = "Typescript"
example=150
example=true
console.log(example);

//?union with array:
let data2:(string | number)[] = ["ankita",1560,8926,"yello","red"]
console.log(data2);

//? union with an object:
let obj:{
    username:string,
    userage:number,
    userid:string|number
}
obj={
    username : "ABC",
    userage : 30,
    userid : 15003
}
console.log(obj);

obj={
    username : "ABC",
    userage : 30,
    userid : "ABC123"
}
console.log(obj);

//? union with functional parameter
function demo(userid:string|number){
console.log("user id is ",userid);
}
demo("ABC");    //!with a string value
demo(123); //! witha number value
// demo(true); //! Error: Only string, number allowed.

//? union type narrowing - It is defined as the one of the type of union datatype where we need to check the type of the value assigned to a variable before it is been executed. Union Type narrowing is always written inside a function.
function demo2(example:string|number){
    if(typeof example=="string")
    {
        return example.toUpperCase();
        // return example=false //!boolean cannot assign for string and number
    }
    else if(typeof example == "number")
    {
        return example*10;
    }
}
console.log(demo2("TypeScript"));
console.log(demo2(10));
// console.log(demo2(true));

//?Type Alias - It is one concept of the custom datatype where we provide a alias name consisting a structure of an element.

//!Syntax - type custom_name/alias_name = type

//? type alias with a varible:
type demo1 =string

let username:demo1="Raya"
console.log(username);

let username2:demo1="Arya"
console.log(username2);

// let num:demo1=95; //! Error: string only allowed
console.log("---------------------------");

//? type alias with object:
type obj={
    person_name :string,
    person_age:number,
    person_id: string|number
}
let user1:obj={
    person_name:"Arya",
    person_age:23,
    person_id:1001
}
console.log(user1);
let user2:obj={
    person_name:"Zooya",
    person_age:28,
    person_id:"1002"
}
console.log(user2);
console.log("---------------------------");
//!without type alias:
let obj2:{
    person_name :string,
    person_age:number,
    person_id: string|number
}
obj2={
    person_name:"Laksu",
    person_age:35,
    person_id:"1003"
}
console.log(obj2);
console.log("---------------------------");
obj2={
    person_name:"Manu",
    person_age:45,
    person_id:"1004"
}
console.log(obj2);
console.log("---------------------------");
let obj3:{
    person_name :string,
    person_age:number,
    person_id: string|number
}
obj3={
    person_name:"Bai",
    person_age:30,
    person_id:1005
}
console.log(obj3);
console.log("---------------------------");

//? Type Alias with an Array:
type value=(string | number | boolean)[]
let array1:value=["a","b","c","d"];
console.log(array1);
console.log("---------------------------");
let array2:value=[101,102,103];
console.log(array2);
console.log("---------------------------");
let array3:value=[true,false,true];
console.log(array3);
console.log("---------------------------");
let array4:value=["store",123,true,"ready"]
console.log(array4);
console.log("---------------------------");

//? Type alias with function
type demo=(a:number,b:number)=>number;

let add:demo=(p,q)=>{
    return p+q;
}
let sub:demo=(p,q)=>{
    return p-q;
}
console.log(add(10,20));
console.log(sub(100,50));

console.log("---------------------------");