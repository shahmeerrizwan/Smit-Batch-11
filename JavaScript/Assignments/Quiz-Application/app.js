
var questions = [
    {
        question: '1 ) What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
    },
    {
        question: '2 ) Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
    },
    {
        question: '3 ) Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
    },
    {
        question: '4 ) What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
    },
    {
        question: '5 ) What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
    },
    {
        question: '6 ) Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
    },
    {
        question: '7 ) Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
    },
    {
        question: '8 ) What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    },
    {
        question: '9 ) Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',

    },
    {
        question: '10 ) Choose the correct HTML element to define bold text:',
        option1: '<bold>',
        option2: '<b>',
        option3: '<strong>',
    }
]


var question = document.getElementById("ques");
let index = 0;

function next() {

    if (index > questions.length - 1) {
        alert("end");

    } else {
        var ques1 = document.getElementById("ques")
        ques1.innerText = questions[index].question
        var opt1 = document.getElementById("opt1")
        opt1.innerText = questions[index].option1
        var opt2 = document.getElementById("opt2")
        opt2.innerText = questions[index].option2
        var opt3 = document.getElementById("opt3")
        opt3.innerText = questions[index].option3
        index++
    }


}
next();