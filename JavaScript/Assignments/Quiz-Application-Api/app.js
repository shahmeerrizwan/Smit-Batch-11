var questions = [
    {
        question: 'Q 1 ) Which character is used to indicate an end tag ?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: '/'
    },
    {
        question: '2 ) What is the correct HTML for creating a hyperlink ?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: `<a href="http://www.w3schools.com">W3Schools</a>`
    },
    {
        question: 'Q 3 )  What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Q 4 ) Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Q 5 ) Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'Q 6 ) What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'Q 7 ) What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Q 8 ) Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Q 9 ) Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'Q 10 ) What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
]


var ques = document.getElementById('question');
var index = 0;
var btn = document.getElementById('btn');
var score = 0;
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var sec = document.getElementById('sec');


function displayResult() {
    var result = (score / questions.length) * 100 + "%";
    var resultText = document.getElementById('resultText');
    var correct = document.getElementById('correct');

    if (score >= 7) {
        resultText.innerText = " Congratulations you are Pass 🥹❤️ and Got  " + result;
        correct.innerText = "Your Correct MCQS is " + score;

    } else {
        resultText.innerText = "Fail 🫡 and you Got : " + result;
        correct.innerText = "Your Correct MCQS is " + score;


    }
    var modal = document.getElementById("resultModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("resultModal");
    modal.style.display = "none";
    index = 0;
    score = 0;
    nextQuestion();
}


function nextQuestion() {
    var options = document.getElementsByName('ans');

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selectedNumber = options[i].value;
            var selectedAnswer = questions[index - 1][`option${selectedNumber}`]
            var correctOption = questions[index - 1].correctOption;
            if (selectedAnswer == correctOption) {
                score++
            }
        }
        options[i].checked = false;
        btn.disabled = true;
    }
    if (index > questions.length - 1) {
        console.log((score / questions.length) * 100 + "%")
        displayResult()
        i = 0
    }
    else {
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

nextQuestion()


function skip() {
    index++;
    if (index < questions.length) {
        nextQuestion(index--);
    } else {
        console.log("End of questions");
    }
}
function btnClick() {
    btn.disabled = false;
}


function countdown(elementName, minutes, seconds) {
    var element, endTime, hours, mins, msLeft, time;

    function twoDigits(n) {
        return (n <= 9 ? "0" + n : n);
    }

    function updateTimer() {
        msLeft = endTime - (+new Date);
        if (msLeft < 1000) {
            element.innerHTML = "Time is up!";
        } else {
            time = new Date(msLeft);
            hours = time.getUTCHours();
            mins = time.getUTCMinutes();
            element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
            setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
        }
    }

    element = document.getElementById(elementName);
    endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
    updateTimer();
}

countdown("ten-countdown", 10, 0);











// var questions = []; // Initialize empty array for questions

// var ques = document.getElementById('question');
// var index = 0;
// var btn = document.getElementById('btn');
// var score = 0;
// var opt1 = document.getElementById('opt1');
// var opt2 = document.getElementById('opt2');
// var opt3 = document.getElementById('opt3');
// var sec = document.getElementById('sec');

// function fetchQuestionsFromAPI() {
//     var apiUrl = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple';

//     fetch(apiUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             // Process fetched data and populate questions array
//             questions = data.results.map(function (result) {
//                 return {
//                     question: result.question,
//                     option1: result.incorrect_answers[0],
//                     option2: result.incorrect_answers[1],
//                     option3: result.incorrect_answers[2],
//                     correctOption: result.correct_answer
//                 };
//             });

//             // Start quiz with fetched questions
//             nextQuestion();
//         })
//         .catch(function (error) {
//             console.log('Error fetching questions:', error);
//         });
// }

// function displayResult() {
//     var result = (score / questions.length) * 100 + "%";
//     var resultText = document.getElementById('resultText');
//     var correct = document.getElementById('correct');

//     if (score >= 7) {
//         resultText.innerText = " Congratulations you are Pass 🥹❤️ and Got  " + result;
//         correct.innerText = "Your Correct MCQS is " + score;

//     } else {
//         resultText.innerText = "Fail 🫡 and you Got : " + result;
//         correct.innerText = "Your Correct MCQS is " + score;
//     }

//     var modal = document.getElementById("resultModal");
//     modal.style.display = "block";
// }

// function closeModal() {
//     var modal = document.getElementById("resultModal");
//     modal.style.display = "none";
//     index = 0;
//     score = 0;
//     fetchQuestionsFromAPI(); // Reset and fetch new questions for next quiz attempt
// }

// function nextQuestion() {
//     if (index >= questions.length) {
//         displayResult(); // Display result when all questions are answered
//         return;
//     }

//     // Display next question and options
//     ques.innerText = questions[index].question;
//     opt1.innerText = questions[index].option1;
//     opt2.innerText = questions[index].option2;
//     opt3.innerText = questions[index].option3;

//     index++;
// }

// function skip() {
//     nextQuestion();
// }

// function btnClick() {
//     btn.disabled = false;
// }

// function countdown(elementName, minutes, seconds) {
//     var element, endTime, hours, mins, msLeft, time;

//     function twoDigits(n) {
//         return (n <= 9 ? "0" + n : n);
//     }

//     function updateTimer() {
//         msLeft = endTime - (+new Date);
//         if (msLeft < 1000) {
//             element.innerHTML = "Time is up!";
//         } else {
//             time = new Date(msLeft);
//             hours = time.getUTCHours();
//             mins = time.getUTCMinutes();
//             element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
//             setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
//         }
//     }

//     element = document.getElementById(elementName);
//     endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
//     updateTimer();
// }

// countdown("ten-countdown", 10, 0);



// fetchQuestionsFromAPI();

