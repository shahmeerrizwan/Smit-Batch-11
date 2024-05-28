


// const data = [
// {
// name : "shahmeer",
// fname: "rizwan"
// },
// {
//     college : "PECHS ",
//     age :18,
//     },
// {
//     institute:"SMIT",
//     batch:"WMA - 11"

// }
// ]
// let data1 = JSON.parse(data)
// console.log(data1.name);

// localStorage.setItem('data', JSON.stringify(data));
// // for (let i = 0; i < data1.length; i++) {
// //    document.write(JSON.parse(data1[i]));

// // }





















// const data = [
//     {
//     name : "shahmeer",
//     fname: "rizwan"
//     },
//     {
//         college : "PECHS ",
//         age :18,
//         },
//     {
//         institute:"SMIT",
//         batch:"WMA - 11"

//     }
//     ]



//     localStorage.setItem('data', JSON.stringify(data));
//     const storedData = JSON.parse(localStorage.getItem('data'));
//     const display = document.getElementById('dataDisplay');

//     if (storedData && storedData.length > 0) {

//         let dataString = '';

//         for (let i = 0; i < storedData.length; i++) {
//             const item = storedData[i];
//             for (const key in item) {
//                 if (item.hasOwnProperty(key)) {
//                     dataString += `${key} : ${item[key]} \n`; 
//                 }
//             }
//          }
//         display.textContent = dataString;
//     } else {
//         display.textContent = 'No data found in localStorage.';
//     }




































//   const storedData = JSON.parse(localStorage.getItem('data'));
//   const display = document.getElementById('dataDisplay');

// localStorage.setItem('data', JSON.stringify(data));
//   if (storedData && storedData.length > 0) {
//     display.textContent = JSON.parse(storedData)
//     // console.log(storedData);
//   } else {
//       display.textContent = 'No data found in localStorage.';
//   }


// const storedData = JSON.parse(localStorage.getItem('data'));
// const display = document.getElementById('dataDisplay');

// if (storedData && storedData.length > 0) {
//     let dataString = '';
//     storedData.forEach(item => {
//         // Concatenate the properties of each object
//         Object.keys(item).forEach(key => {
//             dataString += `${key}: ${item[key]} `;
//         });

//     });
//     display.textContent = dataString;
// } else {
//     display.textContent = 'No data found in localStorage.';
// }
















let allUsers = [];

let users = localStorage.getItem('users');


if (users !== null) {
    allUsers = JSON.parse(users)
}



function signup(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Check if the email already exists
    let existingUser = allUsers.find(user => user.email === email);
    localStorage.setItem('name', name.value)
    if (existingUser) {
        alert("Email already registered Go And Login Your Account");
        email = "";
        name = "";
        password = "";
        location.href = 'login.html'
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    }

    allUsers.push(user);
    localStorage.setItem('users', JSON.stringify(allUsers));

    location.href = 'login.html';
}


function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);

    if (filterUser.length) {
        alert("user login succesful")
    } else {
        alert("password incorrect")
    }
    location.href = 'loginPage.html'
}