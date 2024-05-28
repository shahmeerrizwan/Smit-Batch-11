
var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
]

let allUsers = [];
let users = localStorage.getItem('users');


var ques = document.getElementById('question')
var index = 0
var btn = document.getElementById('btn')
var score = 0
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var sec = document.getElementById('sec')


function nextQuestion() {
    var options = document.getElementsByName('ans')
    console.log(options);
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            var selectedNumber = options[i].value
            var selectedAnswer = questions[index - 1][`option${selectedNumber}`]
            var correctOption = questions[index - 1].correctOption
            if (selectedAnswer == correctOption) {
                score++
            }
        }
        options[i].checked = false
        btn.disabled = true
    }
    if (index > questions.length - 1) {
        console.log((score / questions.length) * 100 + "%")
    }
    else {
        ques.innerText = questions[index].question
        opt1.innerText = questions[index].option1
        opt2.innerText = questions[index].option2
        opt3.innerText = questions[index].option3
        index++
    }
}
nextQuestion()





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
        nextQuestion();
    } else {
        alert("password incorrect")
    }
    location.href = 'loginPage.html'
}




function btnClick() {
    btn.disabled = false
}


