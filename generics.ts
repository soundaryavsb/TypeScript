//? Generics

//?generics with function
function demo<T>(data: T){
    console.log(data);
}
demo<number>(10);
demo<string>("Ready");

//? Multiple generics
function props<L,M,N>(data: L|M|N){
    console.log(data);
}
props<string,number,boolean>(100);
// props<string,number,boolean>(null); //! Error: Argument of type 'null' is not assignable to parameter of type 'string | number | boolean'

//? Generics with an array
function arr<K,V>(data: (K|V)[]){
    console.log(data);
}
arr<number,string>(["TypeScript","PlayWright",10,100,"boolean"]);

//? Generics with an interface
interface one<T>{
    value1:number
}
interface two{
    value2:number
}
type interface_task=one<number>&two;
let obj1:interface_task={
    value1:10,
    value2:20
}
console.log(obj1);

//* Task - Generics
//* 1. create a generic function that returns whatever value is passed.
function demo1<T>(data: T):T{
return data;
}
console.log(demo1(10));
console.log(demo1("Hello"));

//* 2. create a generic function that return the first element of an array.
function demo2<T>(data: T[]):T{
return data[0];
}
console.log(demo2<number>([90,80,70,60]));
console.log(demo2<string>(["JavaScript","TypeScript","PlayWright"]));
console.log(demo2(["Type",10,"yes",true,null,undefined]));

//* 3. create a generic function that takes a value and return it inside an array.
function demo3<T>(data: T):T[]{
 return [data];
}
console.log(demo3("Type"));
console.log(demo3(100));
console.log(demo3(true));

//* 4. create a generic interface with a property as name and age.
interface demo4<M,N>{
    name:M,
    age:N
}
let demo41:demo4<string,number>={
    name:"Ready",
    age:5
}
console.log(demo41);

//* 5. create a function that takes two values of different type and return a tuple
function demo5<M,N>(a:M ,b:N):[M,N]{
     return [a,b];
}
console.log(demo5("TypeScript",10));
console.log(demo5(true,"Life"));

