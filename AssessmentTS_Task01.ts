
//* 1. create two type alias first type alias of students with properties of name and age. second type alias of course with properties of courseName and duration.
console.log("-----Question 1------");
type student={
    name:string,
    age:number
}
type course={
    courseName:string,
    duration:number
}

let student1:student={
    name:"Arya",
    age:28
}
let course1:course={
    courseName:"TypeScript",
    duration:2
}

console.log(student1);
console.log(course1);

console.log("-----Question 2------");
//* 2. create three type alias where the first type alias is of person where properties are name and age. Second type alias is employee which consist properties of emp_id and department and the third type alias of salary with property as sal annotate each property some datatype. then create a single type alias using multiple intersection combine all the type alias together and create an object.
type person={
    name:string,
    age:number
}
type employee={
    emp_id:number,
    department:string
}
type salary={
    sal:number,
}
type Alldetails=person&employee&salary;
let Alldetails1:Alldetails={
    name:"Arya",
    age:28,
    emp_id: 1001,
    department: "Tester",
    sal:200000
}
console.log(Alldetails1);

console.log("-----Question 3------");
//* 3. create two type alias where the first type alias is of login consist two properties username and password and the second type alias is of profile consist of properties of email and phone_no.Create a function that accepts an intersection type parameter (intersection with functional parameter) 

type loginFun={
    auth:(userName:string,password:string)=>void;
}
type profileFun={
    prof:(email:string,phone_no:number)=>void;
}
let loginFun1:loginFun={
    auth(userName,password){
        console.log("User Name:",userName,"Password: ",password);
    }
}
let profileFun1:profileFun={
    prof(email,phone_no){
        console.log("email ID: ",email,"Phone Number:",phone_no);
    }
}
loginFun1.auth("Admin","Admin123");
profileFun1.prof("Admin@gmail.com",9923422719);

//* 4. create two type alias where the first is of customer with properties as customer_name and order_id, the second is of payment with properties of amount and payment_method. create a function process_order() that accepts a parameter using intersection of both types and print the detail.  
type customer={
    // customerDetails:(customer_name:string,order_id:number)=>void;
    customer_name:string,
    order_id:number
}
type payment={
    // paymentDetails:(amount:number,payment_method:string)=>void;
    amount:number,
    payment_method:string
}
type process_order=()=>customer&payment;
let order1:process_order={
    customer_name:"ABC",
    order_id:101,
    

}
// type process=customer&payment;
// let process_order:{
    
// }