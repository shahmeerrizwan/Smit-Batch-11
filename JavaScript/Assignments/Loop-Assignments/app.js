

//question 7

// document.write(`<h2>Counting: </h2>`)
// for (i = 1; i <= 15; i++){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Reverse Counting: </h2>')
// for (let i = 10; i >= 1; i--){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Even: </h2>')
// for (let i = 0; i <= 20; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Odd: </h2>')
// for (let i = 1; i <= 19; i += 2){
//     document.write(`${[i]}, `)
// }

// document.write('<h2>Series: </h2>')
// for (let i = 2; i <= 20; i += 2){
//     document.write(`${[i]}k, `)
// }





//question 9

// let A = [24, 53, 78, 91, 12]
// let largestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largestNum){
//         largestNum = A[i]
//     }
// }
// console.log(`The Largest number in the Array is ${[largestNum]}`);


//question 10

// let A = [24, 53, 78, 91, 12]
// let smallestNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] < smallestNum){
//         smallestNum = A[i]
//     }
// }
// console.log(`The smallest number in the Array is ${[smallestNum]}`);



//question 11

// let A = [24, 53, 78, 91, 12]

// let largeNum = A[0]
// let SmallNum = A[0]

// for (let i = 1; i < A.length; i++){
//     if (A[i] > largeNum){
//         largeNum = A[i]
//     } else if (A[i] < SmallNum){
//         SmallNum = A[i]
//     }
// }
// console.log(`The Array is ${[A]}`)
// console.log("The largest number in the array is: " + largeNum)
// console.log("The smallest number in the array is: " + SmallNum)

//question 12

// for (let i = 5; i <= 100; i += 5){
//     document.write(`${[i]}, `)
// }

//question 13

//  let students = ["Ali", "Abdullah", "Talha", "Ahsan"]
//  let scores = [58, 73, 89, 90]

//  let table = "<table border='1'><tr><th>Student Name</th><th>Score</th></tr>"

//  for ( i = 0; i < students.length; i++){
//      table += `<tr><td> ${[students[i]]} </td><td> ${[scores[i]]}</td> </tr>`
//  }
//  table += '</table>'
//  document.write(table)


//question 14 

// Given array
//  var scores = [12, 45, 3, 22, 34, 50];

//  // Ask the user for the stop value
//  var stopValue = parseInt(prompt("Enter the stop value:"));

//  // Check if the input is a valid number
//  if (!isNaN(stopValue)) {
//      // Iterate through the array and print numbers until the stop value is reached
//      var output = [];
//      for (var i = 0; i < scores.length; i++) {
//         if (scores[i] <= stopValue) {
//             output.push(scores[i]);
//    } else {
//             break;
//         }
//    }
    
//    // Print the output
//     console.log(output);
//  } else {
//      // Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }


//question 15

//  // Given 2D array
//  let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//   // Using nested for loops to print each element on a new line
//  for (let i = 0; i < A.length; i++) {
//      for (let j = 0; j < A[i].length; j++) {
//          console.log(A[i][j]);
//      }
//  }



//question 16

// Ask the user for input
//  let num = parseFloat(prompt("Enter a number:"));

//  // Check if the input is a valid number
//  if (!isNaN(num)) {
//    //   Repeat and print the value of num while num is positive
//      while (num > 0) {
//          console.log(num);
//          num -= 0.5;
//      }
//  } else {
//     //  Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid number.");
//  }


//question 17

// Using a for loop to iterate from 0 to 20
//  for (let i = 0; i <= 20; i++) {
//     //  Checking if the current number is even or odd
//      if (i % 2 === 0) {
//          console.log(i + " is even");
//      } else {
//          console.log(i + " is odd");
//      }
//  }


//question 18

 // Initialize the product variable with 1
//  let product = 1;

//  // Iterate from 1 to 7 and multiply odd numbers to the product
//  for (let i = 1; i <= 7; i++) {
//      if (i % 2 !== 0) {
//          product *= i;
//      }
//  }

//   // Output the product of odd integers
//  console.log("Product of odd integers from 1 to 7: " + product);


//question 19

// // Ask the user for the initial number of stars
//  let initialStars = parseInt(prompt("Enter the initial number of stars:"));

//  // Check if the input is a valid number
//  if (!isNaN(initialStars) && initialStars > 0) {
//     //  Loop to print lines of stars with decreasing count
//      for (let i = initialStars; i > 0; i--) {
//         let line = '';
//          // Append stars to the line
//          for (let j = 0; j < i; j++) {
//              line += '*';
//          }
//         // Print the line of stars
//          console.log(line);
//      }
//  } else {
//      // Display an error message if the input is not a valid number
//      console.log("Invalid input. Please enter a valid positive number.");
//  }


// question 20

// // Ask the user for the number of lines
// let numLines = parseInt(prompt("Enter the number of lines for pattern a:"));

// Create and display pattern a
// for (let i = 0; i < numLines; i++) {
//     let line = '';
//     for (let j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
//     console.log(numLines);
// }
// document.write('<br>');

// Create and display pattern b
// for (let i = 1; i <= numLines; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }

 // usama
 // Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }

// 9 11 23

// question 20

// // Ask the user for the number of lines
// let numLines = parseInt(prompt("Enter the number of lines for pattern a:"));

// Create and display pattern a
// for (let i = 0; i < numLines; i++) {
//     let line = '';
//     for (let j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
//     console.log(numLines);
// }
// document.write('<br>');

// Create and display pattern b
// for (let i = 1; i <= numLines; i++) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// Create and display pattern c
// for (let i = numLines; i > 0; i--) {
//     let line = '';
//     for (let j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }