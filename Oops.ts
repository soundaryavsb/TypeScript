//? OOPS - OOPs stands for Object Oriented Programming System which is used for providing class and object and with the help of OOPS we can manage the code and it is making the code reusable.

/*
* types of OOPs concept
* 1. class and object
* 2. inhertance
* 3. method overriding
* 4. method overloading
* 5. Access modifier - Private, Public and Protected
* 6. Encapsulation
*/
//? class and object
/**
 * class - It is a blue print of an object.
 * object - It is a real time entity which is consisting some properties.
 * constructor - A constructor is a keyword which is used for initialising the value for the property of an object.
 */
class user{
    username:string
    userage:number
    constructor(a:string,b:number){
        this.username=a;
        this.userage=b;
    }
}
let user1=new user("Ankita",30); //--> creating the object with the blue print as a class.
console.log(user1);

let user2=new user("Soundarya",28);
console.log(user2);

//?Inheritance - Inheritance means inheriting properties and methods parent class to child class.
class animals{
    animal_name:string
    constructor(a:string){
        this.animal_name=a;
    }
    sound(){
        console.log("This is an animal sound");
    }
}
class dog extends animals{
    sound_child(){
        console.log(`This is a dog and its name is ${this.animal_name}`);
    }
}
let obj=new dog("Puppy");
obj.sound_child();
obj.sound();
console.log(obj.animal_name);

//? method overridding -  A method overridding is a concept in which the method provided by the parent class is getting overridden by the child class and all the class are having the same method name.
class animal{
    sound(){
        console.log("This is a sound of an animal");
    }
}
class cat extends animal{
    sound(){
        console.log("This is a cat sound");
    }
}
let obj1 =new cat();
obj1.sound();
let obj2=new animal();
obj2.sound();

//? method overloading - In method overloading there is a same method name but different parameter.
class overload{
    add(a:number,b:number):number; //! --> First condition: where we are having two parameter.
    add(a:number,b:number,c:number):number; //! --> Second condition: where we are overloaded with one more parameter
    add(a:number,b:number,c?:number):number{
        if(c!==undefined)
        {
            return a+b+c;
        }
        else{
            return a+b;
        }
    }
}
let cal=new overload();
console.log(cal.add(90,10));
console.log(cal.add(30,50,20));
// console.log(cal.add(20)); //!Error
// console.log(cal.add(20,30,40,50)); //!Error

//? Access Modifier - private, public and protected

//? private - A private access modifier is accessible only inside the class but not outside the class.
class student{
    private std_id:number
    constructor(a:number){
        this.std_id=a;
    }
    access_method(){
        console.log(this.std_id); //! access the property within the class
    }
}
let objPrivate=new student(15);
objPrivate.access_method();
// console.log(objPrivate.std_id); //!access the property outside the class --> o/p: Error

//? public - A public access modifier can able to access the property or method inside the class as well as outside the class.
class studentPublic{
    public std_id:number
    constructor(a:number)
    {
        this.std_id=a;
    }
    access_method(){
        console.log(this.std_id); //! access the property within the class
    }
}
let objPublic=new studentPublic(60);
objPublic.access_method();
console.log(objPublic.std_id); //! access the property outside the class

//? Protected - The protected access modifier can able to access the property or method inside the class, inside the child class but not outside the class.
class studentProtected{
    protected std_id:number
    constructor(a:number){
        this.std_id=a;
    }
    access_method(){
        console.log(this.std_id); //! access the property within the class
    }
}
class child extends studentProtected{
    child_method(){
        console.log(this.std_id); //! access the property within the class
    }
}
let objProtected=new child(19);
objProtected.access_method();
objProtected.child_method();
// console.log(objProtected.std_id); //!Error: cannot access protected property outside the class

//? Encapsulation - An Encapsulation is used for hiding the internal data into one class and controlling the access using the methods.

class bank{
    private amt:number=1500
    deposit(credit:number){
        this.amt+=credit;
    }
    balance(){
        return this.amt;
    }
}
let bankAccount=new bank();
// console.log(bankAccount.amt);//!Error
console.log(bankAccount.balance());
bankAccount.deposit(15000);
console.log(bankAccount.balance());