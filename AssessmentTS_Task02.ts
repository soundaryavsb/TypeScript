//* task - 1. Create a variable role that can only be: "admin", "user", "guest" and assign different values and display the role.
let role:"admin"|"user"|"guest";
role="user";
console.log(role);
// role="manager"; //!Error : Type '"manager"' is not assignable to type '"admin" | "user" | "guest"

//* 2. Create a variable direction that accepts only: "left", "right", "up", "down".
let direction:"left"|"right"|"up"|"down";
direction="left";
console.log(direction);

//* 3. Create a variable dayType that can only be: "weekday", "weekend".
let dayType:"weekday"|"weekend"
dayType="weekend"
console.log(dayType);

//* 4. Create a function that accepts order status: "pending" | "processing" | "delivered" and prints the status.
function orderStatus(status:"pending"|"processing"|"delivered"):string{
    return status;
}
console.log("The order is accepted");
console.log("The order is",orderStatus("pending"));
console.log("The order is",orderStatus("processing"));
console.log("The order is",orderStatus("delivered"));
// orderStatus("cancelled"); //!Error

//* 5. Create a function that accepts only: "cash" | "card" | "upi" and returns a success message.
function payment(method:"cash"|"card"|"upi"):string{
    return method+" payment successful";
}
console.log(payment("cash"));
console.log(payment("card"));
console.log(payment("upi"));
// console.log(payment("property")); //!Error

//* 6. Create a type alias: type Department = "HR" | "IT" | "Finance"; Use it in an employee object.
type Department="HR"|"IT"|"Finance";
type Employee={
    id:number,
    name:string,
    department:Department
}
let employee1:Employee={
    id:101,
    name:"Arya",
    department:"Finance"
}
console.log(employee1);

//* 7. Create a type alias: type Vehicle = "car" | "bike" | "truck"; Create variables using this type.
type Vehicle="car"|"bike"|"truck";
let vehicle1:Vehicle="bike";
console.log(vehicle1);
let vehicle2:Vehicle="truck"
console.log(vehicle2);

//* 8. Create an object with: orderId, itemName, status ("placed" | "preparing" | "delivered").
let foodOrder:{
    orderId:number,
    itemName:string,
    status:"placed"|"preparing"|"delivered"
}
foodOrder={
    orderId:101,
    itemName:"Chicken",
    status:"delivered"
}
console.log(foodOrder);

//* 9. Create a product object where stock status can only be: "In Stock" | "Out of Stock".
type product={
    productName:string,
    stockStatus:"In Stock"|"Out of Stock"
}
let product1:product={
productName:"Atomic Habits",
stockStatus:"In Stock"
}
console.log(product1);

//* 10. Create a weather app that accepts only: "sunny" | "rainy" | "cloudy" and displays different messages.  
type weather="sunny"|"rainy"|"cloudy";
function whetherApp(weatherNow:weather){
if(weatherNow==="sunny"){
console.log("Today mostly sunny...Enjoy the sunlight");
}
else if(weatherNow==="rainy")
{
    console.log("Today rain may come...Don't forget your umbrella and don't forget to enjoy the rain");
}
else if(weatherNow==="cloudy")
{
    console.log("Today mostly cloudy.Enjoy the view of dewdrops on the grass and drive slow and steady")
}
else{
    console.log("It is normal day");
}
}
whetherApp("sunny");
whetherApp("rainy");
