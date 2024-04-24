// QUESTION NO 1 :


// let num1 = 10;
// let num2 = 80;

// alert(`The Sum of ${num1} and ${num2} is ${num1 + num2}`);




// QUESTION NO 2 :

//   A Part )


// let num1 = 30;
// let num2 = 20;

// alert(`The Substraction of ${num1} and ${num2} is ${num1 - num2}`)



// B Part )


// let num1 = 20;
// let num2 = 20;

// alert(`The Multiplication Of ${num1} And ${num2} is ${num1 * num2}`)



// C Part )


// let num1 = 19;
// let num2 = 12;
// alert(`The Dividing of ${num1} And ${num2} is ${num1 / num2}`)




// D Part )


// let num1 = 10;
// let num2 = 20;

// alert(`The Remainder of ${num1} And ${num2} is ${num1 % num2}`)



// QUESTION NO 3 :


// let value;
// document.write(`"Value
// after variable declaration is ${value} " <br>`)


// let initialValue = 3;
// document.write(`The Initial Value is ${initialValue}
// <br>
// Value After Increment is ${++initialValue}
// <br>
// Value After 7 addition is ${7 + initialValue}
// <br>
// Value After Decrement is ${--initialValue}
// <br>
// The Remainder is ${initialValue % 3}
// `)


// QUESTION NO 4

// let movieTicket = 600;
// let buyTicket = 5;

// document.write(`
// Total Cost to Buy ${buyTicket} Tickets To a Movie is ${buyTicket * movieTicket} PKR
// `)


// QUESTION NO 5 :


// let number = prompt("Enter Any Number You Want To Generate Table");

// for (i = 1; i <= 10; i++) {
//     document.write(` ${number}  x   ${i}   = ${number * i}<br>`)
// }



// QUESTION NO 6 :


// PART A )
// Celsius Into Fehrenheit

// let celsius = prompt("Enter Celcius Temperature Into Fehrenheit");

// document.write(`
//  The Temperature in Celsius is ${celsius} C<sup>0</sup> And Fehrenheit is ${(celsius * 9 / 5) + 32}
// `)


// PART B )
//   Fehrenheit Into Celsius


// let fehrenheit = prompt("Enter A fehrenheit Temperature Into Celsius");

// document.write(`
// The Temperature in Fehrenheit is ${fehrenheit} F<sup>0</sup> And in Celsius is ${(fehrenheit - 32) * 5 / 9}C<sup>0</sup>
// `)




// QUESTION NO 7 :

// let Priceofitem1 = 560;
// let Priceofitem2 = 200;
// let quantityofitem1 = 2;
// let quantityofitem2 = 5;
// let shippingCharges = 150;

// document.write(`
// <center>
// <h1> SHOPPING CART </h1>
// Price of Item 1 is ${Priceofitem1}<br>
// Quantity of Item 1 is ${quantityofitem1}<br>
// Price of Item 2 is ${Priceofitem2}<br>
// Quantity of Item 2 is ${quantityofitem2}<br>
// <br>
// Shipping charges is ${shippingCharges}
// <br>
// <br>
// Total Cost Of Your Order is ${Priceofitem1 * 2 + Priceofitem2 * 5 + 150}
// </center>
// `)




// FORM USER DATA FROM PROMPT :

// let Priceofitem1 = prompt("Enter Price Of Item 1");
// let Priceofitem2 = prompt("Enter Price of Item 2");
// let quantityofitem1 = prompt("Enter Quantity of Item 1");
// let quantityofitem2 = prompt("Enter Quantity of Item2");
// let shippingCharges = 150;

// document.write(`
//  <center>
//  <h1> SHOPPING CART </h1>
//  Price of Item 1 is ${Priceofitem1}<br>
//  Quantity of Item 1 is ${quantityofitem1}<br>
//  Price of Item 2 is ${Priceofitem2}<br>
//  Quantity of Item 2 is ${quantityofitem2}<br>
//  <br>
//  Shipping charges is ${shippingCharges}
//  <br>
//  <br>
//  Total Cost Of Your Order is ${Priceofitem1 * quantityofitem1 + Priceofitem2 * quantityofitem2 + 150}
//  </center>
//  `)



// QUESTION NO 8 :


// let marksObtained = prompt("Enter a Marks You Obtained");
// let ToatalMarks = prompt("Enter a Total Marks And I Will Generate Your Percentage");
// document.write(`
// <center>
// <h1> Mark Sheet </h1>
// <br>
// <br>
// Your Total Marks is ${marksObtained}<br>
// Your Obtained Marks is ${marksObtained}<br>
// Congratulations You Got ${marksObtained / ToatalMarks * 100}%
// </center>
// `)



// QUESTION NO 9 :


// USD DOLLARS INTO PKR

// let usd = prompt("Enter a Amount You Want To Convert USD Dollars Into PKR Currency");

// document.write(`
// <center>
// <h1> USD Dollars Into PKR </h1>
// <b> The Amount You Convert ${usd} USD into PKR is ${usd * 279.50} PKR </b>
// </center>
// `)


// PKR INTO USD DOLLARS


// let pkr = prompt("Enter Amount You Want To Convert PKR Into USD Dollars");
// document.write(`
// <center>
// <h1>Pakistanis Rupees Converter Into USD Dollars</h1>
// <b>The Amount You Convert ${pkr} PKR Into USD Dollars is ${pkr * 0.0036} USD</b>
// </center>
// `)



// QUESTION NO 10 :

// let variable = +prompt("Enter Any Number For Airthmatic Sequence");
// alert(variable + 5 * 10 / 2)



// QUESTION NO 11 :


// let birthdayYear = prompt("Enter Your Birthday Year And I Will Generate Your Age ");
// let currentYear = new Date().getFullYear();
// document.write(`
// <center>
// <h1> The Age Calculator </h1>
// <b>
// Current Year is ${currentYear} <br>
// Your Birth Year is ${birthdayYear} <br>
// <br>
// <br>
// You Are ${currentYear - birthdayYear} Years Olds
// </b>
// </center>
// `)


// QUESTION NO 12 :




// const radius = prompt("Enter A Number You Want To Circumference And Area");
// const circumference = 2 * Math.PI * radius;
// const area = Math.PI * Math.pow(radius, 2);


// document.write(`The circumference is   ${circumference.toFixed(2)}
// <br >
// The area is  ${area.toFixed(2)}
// `);





// QUESTION NO 12 :


// let num = +prompt("Enter a number");

// let preIncre = ++num;
// let postIncre = num++;
// let preDecre = --num;
// let postDecre = num--;

// document.write(`
// <center>
// <h1> Result </h1>
// The Value of ++a is : ${preIncre} <br>
// Now the Value of a is : ${preIncre}
// <br>
// <br>
// The Value of a++ is : ${postIncre} <br>
// Now the Value of a is : ${postIncre}
// <br>
// <br>
// The Value of --a is : ${preDecre} <br>
// Now the value of a is : ${preDecre}
// <br>
// <br>
// The Value of a-- is : ${postDecre} <br>
// Now the Value of a is : ${postDecre}
// </center>
// `)





// QUESTION NO 14 :



// let a = 2; // 1
// let b = 1; // 0 1

// let result = --a - --b + ++b + b--;
// //             1 -   0 +   1 + 1
// document.write(`
// a is ${a}
// <br>
// b is ${b}
// <br>
// Result is ${result}
// `)



// QUESTION NO 15 :


// let favChips = prompt("Enter Your Favourite Snacks");
// let currentAge = Number(prompt("Enter Your Current Age"));
// let maximumAge = Number(prompt("Enter Your Maximum Age"));
// let totalAge = maximumAge - currentAge;
// let days = totalAge * 365;
// let amountOfSnacksPerDay = 2;


// document.write(`
// You Will Need ${days * 2} ${favChips} to Last You Until The Ripe Old Age Of ${maximumAge} .
// `)





//                       COMPLETED 