//!Type Inference
/*
* 1. Create an online shopping product using inferred types.
*/
let shop={
    product_Name:"Note",
    price:60,
    quantity:3,
    inStock:true}
console.log(shop);
console.log(typeof shop);

/*
* 2. Create employee salary details
*/
let employeeSalaryDetails={
    emp_ID:192706,
    designation:"Associate",
    salary:200000,
    bonus:50000,
    total:250000,
    isPermanent:true
}
console.log(employeeSalaryDetails);
console.log(typeof employeeSalaryDetails);
console.log(typeof employeeSalaryDetails.designation);
console.log(typeof employeeSalaryDetails.total);

/*
* 3. Create student report card.
*/
let stuReportCard={
    tamil:95,
    english:88,
    maths:100,
    science:98,
    social:99,
    total:0,
    grade:'A'
}
stuReportCard.total=stuReportCard.tamil+stuReportCard.english+stuReportCard.maths+stuReportCard.science+stuReportCard.social;
console.log(stuReportCard);

/*
* 4. Create login credential object
*/
let loginCredential={
    username:"SoundaryaS",
    password:"Admin@123",
    isLoggedIn: true
}
console.log(loginCredential);
console.log(loginCredential.username);
console.log(loginCredential.password);
console.log(loginCredential.isLoggedIn);

/*
* 5. Create weather app data
*/
let weatherApp={
    temperature_in_cel:32,
    city:"Bangaluru",
    isRaining:false
}
console.log(weatherApp);

/*
* 6. Create food order details
*/
let foodOrder={
    order_ID:1,
    customer_Name:"Murnal",
    restaurant_Name:"Mugal",
    food_item:"Mugal Briyani",
    food_price:250,
    quantity:2,
    total_amount:0,
    payment_method:"UPI",
    isDelivered:false
}
foodOrder.total_amount=foodOrder.food_price*foodOrder.quantity;
console.log(foodOrder);

/*
* 7. Create mobile recharge details
*/
let mobileRechargeDetails={
    Internet_Service_Provider:"airtel",
    mobile_number:7019270698,
    plan_name:"Unlimited 365 days",
    plan_validity:365,
    data_Limit:"2 GB/day",
    price:3999,
    discount:300,
    isActive:true

}
mobileRechargeDetails.price-=mobileRechargeDetails.discount;
console.log(mobileRechargeDetails);
console.log("plan validity: "+mobileRechargeDetails.plan_validity+" days");

/*
* 8. Create ATM account balance tracker
*/
let accountBalance={
    customer_id:1927,
    customer_name:"Reshmi",
    balance:250000,
    withdraw:10000,
    remainingBalance:0,
    isActive:true
}
accountBalance.remainingBalance=accountBalance.balance-accountBalance.withdraw;
console.log(accountBalance);

/*
* 9. Create movie ticket booking object.
*/
let movieTicketBooking={
    booking_id:123,
    customer_name:"Manu",
    movie_name:"100 saami",
    theatre_name:"Ambika",
    seat_number:[19,20,21,22,23,24,25,26,27],
    ticket_price:350,
    number_of_Ticket:0,
    total_price:0,
    isbooked:true
}
movieTicketBooking.number_of_Ticket=movieTicketBooking.seat_number.length;
movieTicketBooking.total_price=movieTicketBooking.ticket_price*movieTicketBooking.number_of_Ticket;
console.log("Number of ticket: "+movieTicketBooking.number_of_Ticket);
console.log("Ticket price: "+movieTicketBooking.ticket_price);
console.log("Total price: "+movieTicketBooking.total_price);
console.log(movieTicketBooking);

/*
* 10. Create a classroom student list using inference
*/
let classRoomStudent={
    class:"10th standard",
    classTeacher:"Ramasamy",
    totalStudent:43,
    section:"C",
    classMonitor:"Rahul",
    isPresent:true
}
console.log(classRoomStudent);
