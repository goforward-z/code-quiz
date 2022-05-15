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


//functions

//when I clicked start button ,timer starts
var totalTime = 151;
function newQuiz(){
    questionIndex =0;
    totalTime =150;
    timeLeft.textContent = totalTime;
    initialInput.textContent ="";

    var startTimer = setInterval(function(){
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <=0){
            clearInterval(startTimer);
            if(questionIndex < questions.length - 1){
                gameOver();
            }
        }
    },1000); 
    showQuiz();
};

//then presented with question and choices
function showQuiz(){
    nextQuestion();

}

function nextQuestion(){
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choiceC[2];
    choiceD.textContent = questions[questionIndex].choiceD[3];
}

//after question is answered,show if correct  or wrong
function checkAnswer(answer){
    var lineBreak =document.getElementById("lineBrek");

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]){
        //correct answer,add 1 score to final score
        correctAns++;
        answerCheck.textContent ="Correct!";
    }else{
        //wrong answer,deduct 10 second from timer
        totalTime -= 10;
        timeLeft.textContent = totalTime;
        answerCheck.textContent ="Wrong! The correct answer is:" + questions[questionIndex].answer;

    } 
    questionIndex++;
    //repeat with the rest questions
    if(questionIndex< questions.length){
        nextQuestion();
    }else{
        //if no more question,run game over function
        gameOver();
    }
}

function chosseA(){checkAnswer(0);}
function chooseB(){checkAnswer(1);}
function chooseC(){checkAnswer(2);}
function choiceD(){checkAnswer(3);}

//when all question are answered or timer reaches 0 game over
function gameOver(){

    //show final score
    finalScore.textContent =correctAns;
}
