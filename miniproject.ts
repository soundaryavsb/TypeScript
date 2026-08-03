//* Mini project
//* 1. create an interface of student provides some properties as name, marks (in an array format) then write a function that calculate the average and return based upon the result the grades (A, B, C and fail).
interface student{
    name:string,
    marks:number[]
}
function calculateGrade(studentdetails: student):string{
    if(studentdetails.marks.length>0)
    {
    let total=studentdetails.marks.reduce((a,b)=>a+b)
    let avg=total/studentdetails.marks.length;
    if(avg>=80)
    {
        return "A";
    }
    else if(avg>=60)
    {
        return "B";
    }
    else if(avg>=35)
    {
        return "C";
    }
    else{
        return "Fail";
    }
}else{
    return "Enter marks";
}
}
let student1:student={
    name:"Arya",
    marks:[99,89,99,98,68]
}
let student2:student={
    name:"Raj",
    marks:[]
}
console.log(calculateGrade(student1));
console.log(calculateGrade(student2));

//* 2. create a type alias as task then add some properties as id, title, is_completed then provide three function as add task, completed and delete the task.

type Task={
    id:number,
    title:string,
    is_completed:boolean
}
let taskList:Task[]=[];

function addtask(a:Task){
    taskList.push(a);
}
function completed(a:number){
    
}
function deletetask(a:102){

}
let object1:Task={
        id:101,
        title:"Requirement Analysis",
        is_completed:false    
    }
console.log(taskList);
addtask(object1);
console.log(taskList);
let object2:Task={
    id:102,
    title:"Data Collection",
    is_completed:true
}
addtask(object2);
console.log(taskList);
completed(102);
    // {
    //     id:101,
    //     title:"Requirement Analysis",
    //     is_completed:false
    // },
    // {
    //     id:102,
    //     title:"Data Collection",
    //     is_completed:true
    // }
    //  id:103,
    // title:"Done",
    // is_completed:true
/*
3.create a union type which is accepting number or string values then perform operation as +,*,-,/ use type narrowing concept over here.4.create an interface for user properties as name, email and create one more interface as admin with role and permission as the properties and then do the intersection and provide a function to display the full details.   */
let value:number|string;
value="10"
if(typeof value as string)
{
    // value=number of value;
}