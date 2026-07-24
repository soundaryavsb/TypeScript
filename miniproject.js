"use strict";
function calculateGrade(studentdetails) {
    if (studentdetails.marks.length > 0) {
        let total = studentdetails.marks.reduce((a, b) => a + b);
        let avg = total / studentdetails.marks.length;
        if (avg >= 80) {
            return "A";
        }
        else if (avg >= 60) {
            return "B";
        }
        else if (avg >= 35) {
            return "C";
        }
        else {
            return "Fail";
        }
    }
    else {
        return "Enter marks";
    }
}
let student1 = {
    name: "Arya",
    marks: [99, 89, 99, 98, 68]
};
let student2 = {
    name: "Raj",
    marks: []
};
console.log(calculateGrade(student1));
console.log(calculateGrade(student2));
// type task={
//     id:number,
//     title:string,
//     is_completed:boolean
// }
// function addtask:task{
//     id=5,
//     title:"Add submit button",
//     is_completed:true
// }
// function completed(){
// }
// function deletetask(){
// }
//* 2. create a type alias as task then add some properties as id, title, is_completed then provide three function as add task, completed and delete the task.
/*
3.create a union type which is accepting number or string values then perform operation as +,*,-,/ use type narrowing concept over here.4.create an interface for user properties as name, email and create one more interface as admin with role and permission as the properties and then do the intersection and provide a function to display the full details.   */ 
