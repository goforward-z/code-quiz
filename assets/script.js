//define a set of questions
const questions =[
    {
        question:"Inside which HTML element do wo put the JavaScript?",
        choices:["a.<js>", "b,<javascript>","c.<scripting>","d.<script>"],
        answer:"d.<script>"
    },
    {
        question:"string values must be enclosed within____ when being assigned to variables.",
        choices:["a.commas","b.curly brackets", "c.quotes","d.parenthesis"],
        answer:"c.quotes"
    },
    {
        question:"arrays in JavaScript can be used to store_____.",
        choices:["a. numbers and strings","b.other arrays","c.booleans","d.all of the above"],
        answer:"b.other arrays"
    },
    {
        question:"commonly uesd data types DO NOT include:",
        choices:["a.strings","b.booleans","c.alerts","d.numbers"],
        answer:"c.alerts"
    },
    {
        question:"how do you creat a function in javascript",
        choices:["a.function=MyFunction","b.function MyFunction()","c.function:myFunction()","d.createMyFunction()"],
        answer:"b.function myFunction()"
    }

];

//define variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialBtn =document.getElementById("sumbitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");

var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighCoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScore");

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;