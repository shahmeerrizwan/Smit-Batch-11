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

    if (email === "" || password === "" || userName === "") {
        alert("Please fill out all the information first");
    } else if (existingUser) {
        alert("Email already registered. Please login.");
        location.href = 'login.html';
        return;
    } else {
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
}
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill out all the information first");
    } else {
        let filterUser = allUsers.filter(data => data.email === email && data.password === password);

        if (filterUser.length) {
            alert("User login successful");
            location.href = 'quiz.html';
        } else {
            alert("Incorrect email or password");
        }
    }
}



