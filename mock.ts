function fun<T>(a:T[]):T{
    return a[0]
}
fun<number>([10,20,30]);
fun<string>(["10","20","30"]);

//class student class employee method 
class employee{
details(){
    console.log("I am employee");
}
}
class student extends employee{
details(){
    console.log("I am student");
}
}
let objstu=new student();
objstu.details();
let objemp=new employee();
objemp.details();
