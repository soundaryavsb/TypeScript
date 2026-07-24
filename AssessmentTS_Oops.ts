//* task - 1. Create a class Student with:
//* --> public property: name
//* --> private property: marks
//* --> protected property: rollNo
//* Tasks:
//* a. Create a method to display student details.
//* b. Try accessing all properties outside the class.
//* c. Observe which properties are accessible.
class Student{
    public name:string
    private marks:number[]
    protected rollNo:number
    constructor(a:string,b:number[],c:number){
        this.name=a;
        this.marks=b;
        this.rollNo=c
    }
    student_details(){
        console.log(`Student name: ${this.name}, marks: ${this.marks}, rollno: ${this.rollNo}`);
    }
}
let studentObj=new Student("Ani",[56,67,78,89,99],1);
studentObj.student_details();
console.log(studentObj.name); //O/P: Ani //!can access public property ouside the class
// studentObj.marks; //!Error: cannot access private property outside the class.
// studentObj.rollNo; //! Error: cannot access protected property outside the class

//* 2. Create a class Employee where the Properties are:
//* a. public employee Name
//* b. private salary
//* c. protected department
//* and Create methods:
//* a. getSalary()
//* b. displayEmployee()
//* --> Create a child class Manager and access the protected property.
class Employee{
    public employeeName:string
    private salary:number
    protected department:string
    constructor(a:string,b:number,c:string){
        this.employeeName=a;
        this.salary=b;
        this.department=c
    }
    getsalary(){
        return this.salary;
    }
    displayEmployee(){
        console.log(`Employee Name: ${this.employeeName}, salary: ${this.salary}, department: ${this.department}`);
    }
}
class Manager extends Employee{
    departmentDetails(){
        console.log(`department: ${this.department}`);
    }
}
let mgrObj1=new Manager("Arya",120000,"Tester");
console.log("Salary:",mgrObj1.getsalary());
console.log("Employee Details: ");
mgrObj1.displayEmployee();
mgrObj1.departmentDetails();

//* 3. Create a class Product with:
//* a. Private properties:
//* productName
//* price
//* b. Methods:
//* setProduct(name, price)
//* getProductDetails()
//* Requirements:
//* a. Do not allow direct access to price.
//* b. Validate price should not be negative.
class Product{
    private productName:string="";
    private price:number=0;
    setProduct(a:string,b:number){
        this.productName=a;
        this.price=b;
    }
    getProductDetails(){
        if(this.price>=0)
        {
            console.log(`Product name is ${this.productName} and its price is ${this.price}`);
        }
        else{
            console.log("Price in negative value not acceptable");
        }
    }
}
let prodObj=new Product();
prodObj.setProduct("Board",2000);
prodObj.getProductDetails();
prodObj.setProduct("Board",-2000);
prodObj.getProductDetails();

//* 4. Create overloaded method area().
class overload{
    area(s:number):number;
    area(l:number,w:number):number;
    area(a:number,b?:number){
        if(b!==undefined){
            return a*b;
        }
        else
        {
            return a*a;
        }
    }
}
let overloadObj=new overload();
console.log("Area of Square:",overloadObj.area(5));
console.log("Area of Rectangle:",overloadObj.area(5,6));

//* 5. Mini Project - 
//* Create classes:
//* -> Account
//* Properties:
//* a. private balance
//* b. public accountHolder
//* c. protected accountType
//* Methods:
//* deposit()
//* withdraw()
//* getBalance()
//* -> Create child class:
//* SavingsAccount
//* Add:
//* interest calculation method
//* Use:
//* --> Access modifiers
//* --> Encapsulation
//* --> Method overloading
//* in the project. 
class Account{
    private balance:number=1000;
    public accountHolder:string="Arya";
    protected accountType:string="Saving";

    deposit(amount:number):void;
    deposit(amount:string):void;
    deposit(a:number|string):void{
        this.balance+=Number(a);
    }

    withdraw(amount:number):void;
    withdraw(amount:string):void;
    withdraw(a:number|string){
        this.balance-=Number(a);
    }

    getBalance():number{
        return this.balance;
    }
}
class SavingsAccount extends Account{
    interestCalculation():number{
        return ((this.getBalance()*4*1)/100);
    }
}

let interest=new SavingsAccount();
console.log("balance:",interest.getBalance()," and Starting interest:",interest.interestCalculation());
interest.deposit(interest.interestCalculation());

interest.deposit(10000);
console.log("balance after deposit:",interest.getBalance(),"Interest after deposit:",interest.interestCalculation());
interest.deposit(interest.interestCalculation());

interest.withdraw(5000);
console.log("balance after withdraw:",interest.getBalance(),"Interest after withdraw:",interest.interestCalculation());

interest.deposit("3000");
console.log("balance after deposit:",interest.getBalance(),"Interest after deposit:",interest.interestCalculation());
interest.deposit(interest.interestCalculation());

interest.withdraw("4000");
console.log("balance after withdraw:",interest.getBalance(),"Interest after withdraw:",interest.interestCalculation());

console.log("Final balance: ",Number((interest.getBalance()+interest.interestCalculation()).toFixed(2)));
