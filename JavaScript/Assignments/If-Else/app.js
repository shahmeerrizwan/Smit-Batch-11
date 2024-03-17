// QUESTION NO 1 :


// let number = prompt("Enter any number ");

// if (number.length == 0) {
//     alert("Empty Input")
// } else if (number % 3 == 0) {
//     alert(number + " is divisible by 3 and divisible number is " + number / 3)
// } else if (isNaN(number)) {
//     alert("Enter a Valid Number")
// } else {
//     alert(number + " is not divisible by 3")
// }



// PRACTICE

// let number = prompt("Enter Any Number");

// if (number.length == 0) {
//     alert("Empty Input")
// } else if (number % 3 == 0) {
//     alert(number + " is divisible by 3 and divisible number is " + number / 3)
// } else if (isNaN(number)) {
//     alert("Enter a Valid Number")
// } else {
//     alert(number + " is not divisible by 3")
// }



// QUESTION NO 2 :

// let number = +prompt("Enter any number");

// if (number % 2 == 0) {
//     alert(number + " is Even")
// } else if (isNaN(number)) {
//     alert("Enter a Valid Number")
// } else {
//     alert(number + " is Odd")
// }


// QUESTION NO 3 :

// let age = +prompt("Enter Your Age");
// if (age == 0) {
//     alert("Empty Input")
// } else if (age >= 18) {
//     alert(age + " is Too Old Enough")
// } else if (isNaN(age)) {
//     alert("Enter a Valid Number")
// } else {
//     alert(age + " is Too Young")
// }




// QUESTION NO 4 :

// let name = prompt("Enter Your Name ");

// if (name == "shahmeer") {
//     alert("Hello, Shahmeer ! It's great to see you!")
// }



// QUESTION NO 5 :

// Switch CASE


// QUESTION NO 6 :

// let input = prompt("Enter a character:");

// if (input.length === 1) {
//     let charCode = input.charCodeAt(0);

//     if (charCode >= 48 && charCode <= 57) {
//         console.log("The input is a number.");
//     }
//     else if (charCode >= 65 && charCode <= 90) {
//         console.log("The input is an uppercase letter.");
//     }
//     else if (charCode >= 97 && charCode <= 122) {
//         console.log("The input is a lowercase letter.");
//     }
//     else {
//         console.log("The input is neither a number nor a letter.");
//     }
// } else {
//     console.log("Invalid input. Please enter a single character.");
// }




// QUESTION NO 6 :



// let userInput = prompt("Enter Anything");

// if (!isNaN(userInput)) {
//     alert("this is number")
// } else if (/[a-z]/.test(userInput)) {
//     alert("small letter")
// } else if (/[A-Z]/.test(userInput)) {
//     alert("capital letter")
// }else {
//     alert("Not a Number")
// }



// PRACTICE



// let userInput = prompt("Enter Anything");

// if (!isNaN(userInput) && userInput.length >= 2) {
//     alert(` ${userInput} is Numbers`)
// } else if (!isNaN(userInput) && userInput.length === 1) {
//     alert(`${userInput} is only one letter`)
// } else if (/[a-z]/.test(userInput) && userInput.length === 1) {
//     alert(`${userInput} is Small Letter and only one letter`)
// } else if (/[A-Z]/.test(userInput) && userInput.length === 1) {
//     alert(`${userInput} is capital Letter and only one letter`)
// } else if (/[A-Z]/.test(userInput)) {
//     alert(`${userInput} is Alphabets In Upercase`)
// } else if (/[a-z]/.test(userInput)) {
//     alert(`${userInput} is Alphabets In lowercase`)
// } else (
//     alert("!Error")
// )




// QUESTION NO 07 :

// let calculate = +prompt("Enter a first Number ");
// let operator = prompt("Enter a operator you want to perform only  + , - , * , / , % ");
// let calculate2 = +prompt("Enter a secound Number ");


// if (operator == "+") {
//     alert(calculate + calculate2)
// } else if (operator == "-") {
//     alert(calculate - calculate2)
// } else if (operator == "/") {
//     alert(calculate / calculate2)
// } else if (operator == "%") {
//     alert(calculate % calculate2)
// } else if (operator == "*") {
//     alert(calculate * calculate2)
// } else {
//     alert("Empty ")
// }




// QUESTION NO 8 :


// let time = +prompt("Enter Time");

// if (time >= "0000 " && time < "1200") {
//     alert("Good Morning")
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon")
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening")
// } else {
//     alert("Good Nyt")
// }




// QUESTION NO 9 :

// let year = prompt("Enter a year");

// if (!isNaN(year) && year.toString().length === 4) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         console.log(year + " is a leap year.");
//     } else {
//         console.log(year + " is not a leap year.");
//     }
// } else {
//     console.log("Invalid input. Please enter a valid year in YYYY format.");
// }




// QUESTION NO 10 :


// let correctPassword = "12345";

// let userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     alert("Correct ! The password you entered matches the original password.");
// } else {
//     alert("Incorrect password.");
// }




// QUESTION NO 11 :


// let firstName = prompt("Enter Your Name");
// if (firstName == "fahad") {
//     alert("Hello Fahad !");
// } else {
//     alert("You Are Not Fahad")
// }



// QUESTION NO 12 :


// var greeting;
// var hour = prompt("Enter hour");
// if (hour <= 18) {
//     greeting = "Good day";
//     alert("Good Day")
// }
// else {
//     greeting = "Good evening";
//     alert("Good Evening")
// }



// QUESTION NO 13 :



// const num1 = parseInt(prompt("Enter the first integer"));
// const num2 = parseInt(prompt("Enter the second integer"));

// if (num1 === num2) {
//     console.log("Both numbers are equal.");
// } else {
//     console.log("The larger number is " + (num1 > num2 ? num1 : num2));
// }


// QUESTION NO 14 :


// let num = +prompt("Write a Number");

// if (num < 0) {
//     console.log("The Number Is Negative");
// } else if (num === 0) {
//     console.log("The Number Is Zero");
// }
// else {
//     console.log("The Number Is Positive");
// }



// QUESTION NO 15 :

// const now = prompt("Enter a Time in Number like 13 = 1pm");


// if (now >= 6 && now < 9) {
//     console.log("Breakfast is served.");
// } else if (now >= 11 && now <= 13) {
//     console.log("Time for lunch.");
// } else if (now >= 17 && now < 20) {
//     console.log("It's dinner time.");
// } else {
//     console.log("Sorry, you'll have to wait, or go get a snack.");
// }




// QUESTION NO 16 :


// let variable = true;

// let variableType;

// if (typeof variable === "number") {
//     variableType = "number";
// } else if (typeof variable === "string") {
//     variableType = "string";
// } else if (typeof variable === "boolean") {
//     variableType = "boolean";
// } else if (typeof variable === "undefined") {
//     variableType = "undefined";
// } else {
//     variableType = "unknown";
// }

// console.log("The type of the variable is :", variableType);



// QUESTION NO 17 :


// const vovel = prompt("Enter a Alphabet");

// const isVowel = ['a', 'e', 'i', 'o', 'u'].includes(vovel.toLowerCase());

// if (isVowel) {
//     console.log("True");
// } else {
//     console.log("False");
// }




// QUESTION NO 18 :


// if (10 !== 8) {
//     console.log(true);
// } else {
//     console.log(false);
// }


// QUESTION NO 19 :

// let month = +prompt("Enter a Month Number");

// if (month == 1) {
//     alert("January")
// } else if (month == 2) {
//     alert("Febraury")
// } else if (month == 3) {
//     alert("March")
// } else if (month == 4) {
//     alert("April")
// } else if (month == 5) {
//     alert("May")
// } else if (month == 6) {
//     alert("June")
// } else if (month == 7) {
//     alert("July")
// } else if (month == 8) {
//     alert("August")
// } else if (month == 9) {
//     alert("September")
// } else if (month == 10) {
//     alert("October")
// } else if (month == 11) {
//     alert("November")
// } else if (month == 12) {
//     alert("December")
// } else {
//     alert("Enter a Correct Month Number")
// }



// QUESTION NO 20 :

// const age = prompt("Enter your age ");
// const voteable = age < 18 ? "Too young" : "Old enough";

// console.log(voteable);