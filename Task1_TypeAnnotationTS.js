"use strict";
/*
* 1. Create a login system variable:
* username --> string
* password --> string
* isLoggedIn --> boolean
*/
let loginSystem;
loginSystem = {
    username: "Soundarya",
    password: "Admin@123",
    isLoggedIn: true
};
console.log(loginSystem);
console.log(loginSystem.username);
console.log(loginSystem.password);
console.log(loginSystem.isLoggedIn);
/*
* 2. Create an online shopping bill:
* productName
* price
* quantity
* totalPrice
*/
let onlineShoppingBill;
onlineShoppingBill = {
    productName: "Soap",
    price: 100,
    quantity: 2,
    totalPrice: 0
};
onlineShoppingBill.totalPrice = onlineShoppingBill.price * onlineShoppingBill.quantity;
console.log(onlineShoppingBill);
/*
* 3. create employee details using annotation
*/
let employeeDetails;
employeeDetails = {
    emp_ID: 1,
    emp_Name: "Raj",
    emp_job: "Developer",
    emp_deptno: 10,
    emp_salary: 300000,
    emp_isPermanent: true
};
console.log(employeeDetails);
/*
* 4. create a hospital patient object.
*/
let hospitalPatient;
hospitalPatient = {
    patient_id: 1,
    patient_name: "Krish",
    patient_gender: "M",
    patient_age: 89,
    patient_disease: "fever",
    doctor_name: "Siva",
    room_number: 5,
    isAdmitted: true
};
console.log(hospitalPatient);
console.log("Patient Name: " + hospitalPatient.patient_name);
console.log("Is admitted: " + hospitalPatient.isAdmitted);
console.log("Doctor Name: " + hospitalPatient.doctor_name);
console.log("Room number: " + hospitalPatient.room_number);
/*
* 5. create a food delivery order object.
*/
let foodDelivery;
foodDelivery = {
    order_ID: 1,
    customer_Name: "Murnal",
    restaurant_Name: "Mugal",
    food_item: "Mugal Briyani",
    food_price: 250,
    quantity: 2,
    total_amount: 0,
    payment_method: "UPI",
    isDelivered: false
};
foodDelivery.total_amount = foodDelivery.food_price * foodDelivery.quantity;
console.log(foodDelivery);
/*
* 6. create a movie booking object.
*/
let movieBooking;
movieBooking = {
    booking_id: 123,
    customer_name: "Manu",
    movie_name: "100 saami",
    theatre_name: "Ambika",
    seat_number: [19, 20, 21, 22, 23, 24, 25, 26, 27],
    ticket_price: 350,
    number_of_Ticket: 0,
    total_price: 0,
    isbooked: true
};
movieBooking.number_of_Ticket = movieBooking.seat_number.length;
movieBooking.total_price = movieBooking.ticket_price * movieBooking.number_of_Ticket;
console.log("Number of ticket: " + movieBooking.number_of_Ticket);
console.log("Ticket price: " + movieBooking.ticket_price);
console.log("Total price: " + movieBooking.total_price);
console.log(movieBooking);
/*
* 7. create a bank customer profile.
*/
let bankCustomer;
bankCustomer = {
    customer_id: 1927,
    customer_name: "Reshmi",
    account_number: "IOB1919701906",
    account_type: "current",
    dob: "19/06/1990",
    aadhaar_number: 123412340987,
    pan_number: "LRSMV1927L",
    phone_number: 7019270698,
    address: {
        address1: "23,Malai",
        city: "Chennai",
        pincode: 600001
    },
    minimum_balance: 25000,
    isActive: true
};
console.log(bankCustomer);
/*
* 8. create a mobile recharge plan object.
*/
let mobileRecharge;
mobileRecharge = {
    Internet_Service_Provider: "airtel",
    mobile_number: 7019270698,
    plan_name: "Unlimited 365 days",
    plan_validity: 365,
    data_Limit: "2 GB/day",
    price: 3999,
    discount: 300,
    isActive: true
};
mobileRecharge.price -= mobileRecharge.discount;
console.log(mobileRecharge);
console.log("plan validity: " + mobileRecharge.plan_validity + " days");
/*
* 9. create weather details object:
* temperature
* city
* isRaining
*/
let weather;
weather = {
    temperature_in_cel: 37,
    city: "Chennai",
    isRaining: false
};
console.log(weather);
/*
* 10. create a student report card using type annotations.
*/
let studentReportCard;
studentReportCard = {
    tamil: 95,
    english: 88,
    maths: 100,
    science: 98,
    social: 99,
    total: 0,
    grade: 'A'
};
studentReportCard.total = studentReportCard.tamil + studentReportCard.english + studentReportCard.maths + studentReportCard.science + studentReportCard.social;
console.log(studentReportCard);
