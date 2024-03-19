// QUESTION NO 1 :


// let name = prompt("Enter Your Name ");
// alert(`Hi, ${name}`)


// QUESTION NO 2 :


// let number = prompt("Enter a number you want to generate table");
// let table = "<h3>Multiplication Table of " + number + "</h3>";

// if (number == "") {
//     number = 5;
// }
// for (let i = 1; i <= 10; i++) {
//     table += number + " × " + i + " = " + (number * i) + "<br>";
// }

// document.write(table);


// QUESTION NO 3 :


// let cityName = prompt("Enter Your City Name ").toLowerCase();

// if (cityName == "karachi") {
//     alert("Welcome to City of Lights")
// }



// QUESTION NO 4 :


// let gender = prompt("Enter Your Gender ").toLowerCase();

// if (gender == "male") {
//     alert("Good Morning Sir");
// } else if (gender == "female") {
//     alert("Good Morning Ma'am")
// } else {
//     alert("Please Enter the Correct Gender");
// }



// QUESTION NO 5 :


// let color = prompt("Enter a Traffic Signal Color").toLowerCase();

// if (color == "red") {
//     alert("Vehicles Must Stop")
// } else if (color == "yellow") {
//     alert("Vehicles Should Get Ready To Move")
// } else if (color == "green") {
//     alert("Vehicles can move now")
// } else {
//     alert("Enter Only Traffic Signal Color")
// }




// QUESTION NO 6 :


// let maxAge = 20;
// let currentAge = +prompt("Enter Your Age");

// if (currentAge <= maxAge) {
//     alert("You Are Wellcome")
// }



// QUESTION NO 7 :


// let fuel = +prompt("Enter Your Car Fuel");

// if (fuel <= 0.25) {
//     alert("Please Refill The Fuel In Your Car")
// } else {
//     alert("No Need To Fuel")
// }


// QUESTION NO 8 :

// A)
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

//                    Correct


// B)
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

//                    Incorrect // False


// C)

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true"); // FALSE
// }
// if (c === 13) {
//     alert("condition 2 is true"); // TRUE
// }
// if (++c < 14) {
//     alert("condition 3 is true"); // FALSE
// }
// if (c === 14) {
//     alert("condition 4 is true");  // TRUE
// }


// D)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

//               Correct 


// E)

// if (true) {
//     alert("True");  // TRUE
// }
// if (false) {
//     alert("False"); //FALSE 
// }


// F)

// if ("car" < "cat") {
//     alert("car is smaller than cat");  // TRUE
// }



// QUESTION NO 9 )


// let physicsMarks = +prompt("Enter Your Physics Marks");
// let chemMarks = +prompt("Enter Your Chemistry Marks");
// let mathMarks = +prompt("Enter Your Maths Marks");


// let total = physicsMarks + chemMarks + mathMarks
// let marks = 300;
// let grade;
// let remarks;

// let percentage = total / marks * 100


// if (percentage >= 80) {
//     grade = "A-One Grade"
//     remarks = "Excellent"
// } else if (percentage >= 70) {
//     grade = "A Grade"
//     remarks = "Good"
// }
// else if (percentage >= 60) {
//     grade = "B Grade"
//     remarks = "You Need To Improve"
// } else {
//     grade = "Fail"
//     remarks = "Sory"
// }

// document.write(`
// <table border="2px">
// <tr>
// <th>Marks You Obtained</th>
// <th>Marks Obtained in Physics</th>
// <th>Marks Obtained in Chemistry</th>
// <th>Marks Obtained in Maths</th>
// <th>Total Marks</th>
// <th>Percentage</th>
// <th>Grade</th>
// <th>Remarks</th>
// </tr>
// <tr>
// <td>${total}</td>
// <td>${physicsMarks}</td>
// <td>${chemMarks}</td>
// <td>${mathMarks}</td>
// <td>${marks}</td>
// <td>${percentage.toFixed(2)} %</td>
// <td>${grade}</td>
// <td>${remarks}</td>
// </tr>
// </table>
// `)



// QUESTION NO 10 ;

let item1 = prompt("Enter a First item Name You Purchased");
let item2 = prompt("Enter a Second item Name You Purchased");
let price1 = +prompt("Enter a Price Of First Item");
let price2 = +prompt("Enter a Price Of Second Item");
let quantity1 = +prompt("Enter a Quantity Of First Item");
let quantity2 = +prompt("Enter a Quantity Of Second Item");
let shipping = 250;
let price;
let saveRupee;
let finalPrice = price1 + price2
if (finalPrice >= 2000) {
    price = finalPrice - (finalPrice * 0.10)
    saveRupee = finalPrice - price
} else {
    price = 0
}
document.write(`<h1>Shopping Cart</h1> 
<br>
You Purchased ${item1} & ${item2} .<br>
The Price of Item 1 is ${price1} .<br>
The Price of Item 2 is ${price2} . <br>
The Quantity of Item 1 is ${quantity1} .<br>
The Quantity of Item 2 is ${quantity2} .<br>
<br>
Shipping Charges ${shipping} .
<br>
Total Cost Of Your Order Is ${finalPrice} PKR .<br>
Discount Price After 10% Discount is ${price} PKR Save Rupess is ${saveRupee} .
`)