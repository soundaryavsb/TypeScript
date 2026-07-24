"use strict";
//* task - 1. Create a variable role that can only be: "admin", "user", "guest" and assign different values and display the role.
let role;
role = "user";
console.log(role);
// role="manager"; //!Error : Type '"manager"' is not assignable to type '"admin" | "user" | "guest"
//* 2. Create a variable direction that accepts only: "left", "right", "up", "down".
let direction;
direction = "left";
console.log(direction);
//* 3. Create a variable dayType that can only be: "weekday", "weekend".
let dayType;
dayType = "weekend";
console.log(dayType);
//* 4. Create a function that accepts order status: "pending" | "processing" | "delivered" and prints the status.
function orderStatus(status) {
    return status;
}
console.log("The order is accepted");
console.log("The order is", orderStatus("pending"));
console.log("The order is", orderStatus("processing"));
console.log("The order is", orderStatus("delivered"));
// orderStatus("cancelled"); //!Error
//* 5. Create a function that accepts only: "cash" | "card" | "upi" and returns a success message.
function payment(method) {
    return method + " payment successful";
}
console.log(payment("cash"));
console.log(payment("card"));
console.log(payment("upi"));
let employee1 = {
    id: 101,
    name: "Arya",
    department: "Finance"
};
console.log(employee1);
let vehicle1 = "bike";
console.log(vehicle1);
let vehicle2 = "truck";
console.log(vehicle2);
//* 8. Create an object with: orderId, itemName, status ("placed" | "preparing" | "delivered").
let foodOrder;
foodOrder = {
    orderId: 101,
    itemName: "Chicken",
    status: "delivered"
};
console.log(foodOrder);
let product1 = {
    productName: "Atomic Habits",
    stockStatus: "In Stock"
};
console.log(product1);
function whetherApp(weatherNow) {
    if (weatherNow === "sunny") {
        console.log("Today mostly sunny...Enjoy the sunlight");
    }
    else if (weatherNow === "rainy") {
        console.log("Today rain may come...Don't forget your umbrella and don't forget to enjoy the rain");
    }
    else if (weatherNow === "cloudy") {
        console.log("Today mostly cloudy.Enjoy the view of dewdrops on the grass and drive slow and steady");
    }
    else {
        console.log("It is normal day");
    }
}
whetherApp("sunny");
whetherApp("rainy");
