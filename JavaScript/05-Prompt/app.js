// A prompt box is used if you want the user to input a value.

// When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed.

// Do not overuse this method. It prevents the user from accessing other parts of the page until the box is closed.


// The prompt() method displays a dialog box that prompts the user for input.

// The prompt() method returns the input value if the user clicks "OK", otherwise it returns null.



let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
}




let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch (favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul.";
        break;
    case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
    default:
        text = "I have never heard of that one!";
}




// var studentName = prompt("Enter Name ")
// var english = +prompt("Enter english marks")
// var maths = +prompt("Enter maths marks")
// var urdu = +prompt("Enter urdu marks")
// var fsx = +prompt("Enter fsx marks")
// var chem = +prompt("Enter chem marks")
// var total = english + maths + urdu + fsx + chem
// var perc = total / 500 * 100
// var grade;

// if(perc >= 80){
//     grade = "A+"
// }
// else if(perc >= 70){
//     grade = "A"
// }

// else if(perc >= 60){
//     grade = "B"
// }

// else if(perc >= 50){
//     grade = "C"
// }

// else if(perc >= 40){
//     grade = "D"
// }
// else{
//     grade = "F"
// }

// document.write(
//     `<table border='1px'>
//     <tr>
//     <th>STUDENT NAME</th>
//     <th>ENGLISH</th>
//     <th>MATHS</th>
//     <th>URDU</th>
//     <th>FSX</th>
//     <th>CHEM</th>
//     <th>TOTAL</th>
//     <th>PERCENTAGE</th>
//     <th>GRADE</th>
//     </tr>

//     <tr>
//     <td>${studentName}</td>
//     <td>${english}</td>
//     <td>${maths}</td>
//     <td>${urdu}</td>
//     <td>${fsx}</td>
//     <td>${chem}</td>
//     <td>${total} / 500</td>
//     <td>${perc.toFixed(2)}%</td>
//     <td>${grade}</td>
//     </tr>
//     </table>`
// )
