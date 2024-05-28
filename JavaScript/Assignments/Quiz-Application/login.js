let allUsers = [];
let users = localStorage.getItem('users');

if (users !== null) {
    allUsers = JSON.parse(users)
}



function signup(event) {

    event.preventDefault();

    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let existingUser = allUsers.find(user => user.email === email);
    if (existingUser) {
        alert("Email already registered. Please login.");
        location.href = 'login.html';
        return;
    }
    let user = {
        userName: userName,
        email: email,
        password: password
    }

    allUsers.push(user);
    localStorage.setItem('users', JSON.stringify(allUsers));

    alert("Sign up successful! Please login.");
    location.href = 'login.html';
}

function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let filterUser = allUsers.filter(data => data.email === email.value && data.password === password.value);

    if (filterUser.length) {
        alert("user login succesful")
        location.href = 'loginPage.html'
        nextQuestion();
    } else {
        alert("password incorrect")
    }
}




