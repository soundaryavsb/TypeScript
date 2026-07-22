console.log("------------Insection------------");
//? Intersection
type user1={
    user_name:string
}
type user2={
    user_age:number
}
type user= user1 & user2;
let Data1:user={
user_name:"ABC",
user_age:40
}
let Data2:user={
    user_name:"PQR",
    user_age:56
}
console.log(Data1);
console.log(Data2);
console.log("--------------------------------");

console.log("--------------Multiple Intersection------------------");
//? Multiple intersection
type person={
    username:string; //!type alias 1
}
type emp={
    emp_id?:number; //!type alias 2
}
type address={
    city?:string; //!type alias 3
}
type result=person&emp&address; //! intersection with type alias 1, 2, 3
let Multiobj1: result={
    username:"ABC",
    emp_id:1001,
    city:"Mumbai"
}
let Multiobj2:result={
    username:"PQR",
    emp_id:1002
}
console.log(Multiobj1);
console.log(Multiobj2);
console.log("--------------------------------");

console.log("-------------Intersection with Method-------------------");
//? intersection with method
type login={
    log_in():void
}
type logout={
    log_out():void
}
type action=login&logout;
let action1:action={
    log_in:()=>{
        console.log("You have logged in successfully.");
    },
    log_out:()=>{
        console.log("You have logged out successfully.");
    }
}
action1.log_in();
action1.log_out();
console.log("--------------------------------");

console.log("--------intersection with UNION datatype--------");
//? intersection with UNION datatype
type student={
    std_name:string
}
type emp_detail={
    emp_id:string|number
}
type combine=student&emp_detail;

let obj1:combine={
    std_name:"ABC",
    emp_id:"1001"
}
let obj2:combine={
    std_name:"PQR",
    emp_id:8338
}
console.log(obj1);
console.log(obj2);
console.log("-------------------------");

console.log("-------Type Assertion--------");
let aliname:unknown="TypeScript"
let name1=aliname as number;
console.log(typeof aliname);
console.log(typeof name1);
console.log("-------------------------");