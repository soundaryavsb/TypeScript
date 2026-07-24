//* 1. create two type alias first type alias of students with properties of name and age. second type alias of course with properties of courseName and duration.
console.log("-----Question 1------");
type Student={
    name:string,
    age:number
}
type Course={
    courseName:string,
    duration:number
}

let student1:Student={
    name:"Arya",
    age:28
}
let course1:Course={
    courseName:"TypeScript",
    duration:2
}

console.log(student1);
console.log(course1);

console.log("-----Question 2------");
//* 2. create three type alias where the first type alias is of person where properties are name and age. Second type alias is employee which consist properties of emp_id and department and the third type alias of salary with property as sal annotate each property some datatype. then create a single type alias using multiple intersection combine all the type alias together and create an object.
type Person={
    name:string,
    age:number
}
type Employee={
    emp_id:number,
    department:string
}
type Salary={
    sal:number,
}
type employeeRecords=Person&Employee&Salary;
let allDetails1:employeeRecords={
    name:"Arya",
    age:28,
    emp_id: 1001,
    department: "Tester",
    sal:200000
}
console.log(allDetails1);

console.log("-----Question 3------");
//* 3. create two type alias where the first type alias is of login consist two properties username and password and the second type alias is of profile consist of properties of email and phone_no.Create a function that accepts an intersection type parameter (intersection with functional parameter) 
type Login={
    username:string
    password:string
}
type Profile={
    email:string
    phoneno:number
}
function data(a:Login&Profile){
    console.log(a);
}
let object:Login&Profile={
    username:"Admin",
    password:"Admin@123",
    email:"Admin@gmail.com",
    phoneno:9988776655
}
data(object);

//* 4. create two type alias where the first is of customer with properties as customer_name and order_id, the second is of payment with properties of amount and payment_method. create a function process_order() that accepts a parameter using intersection of both types and print the detail.  
type customer={
    customer_name:string
    order_id:number
}
type payment={
    amount:number
    payment_method:string
}
function process_order(a:customer&payment){
console.log(a);
}
let object1:customer&payment={
    customer_name:"Charu",
    order_id:2345,
    amount:3200,
    payment_method:"UPI"
}
process_order(object1);