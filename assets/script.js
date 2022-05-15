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

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

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

function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choiceA.textContent = questions[questionIndex].choices[0];
    choiceB.textContent = questions[questionIndex].choices[1];
    choiceC.textContent = questions[questionIndex].choices[2];
    choiceD.textContent = questions[questionIndex].choices[3];
}

//after question is answered,show if correct  or wrong
function checkAnswer(answer){
    var lineBreak =document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

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

function chooseA(){checkAnswer(0);}
function chooseB(){checkAnswer(1);}
function chooseC(){checkAnswer(2);}
function chooseD(){checkAnswer(3);}

//when all question are answered or timer reaches 0 game over
function gameOver(){
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";


    //show final score
    finalScore.textContent =correctAns;
}
 
// enter initial and store highscore in local storage
function storeHighScores(event){
    event.preventDefult();

    //stop function is initial is blank
    if (initialInput.value === ""){
        alert("Please enter your initials!");
        return;
    }

    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";   


    //store scores into local storage
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;

    if (savedHighScores === null){
        scoresArray =[];
    }else{
        scoresArray = JSON.parse(savedHighScores)
    }

    var userScore ={
        initials: initialInput.value,
        score:finalScore.textContent
    };

    console.log(userScore);
    scoresArray.push(userScore);

    //stringify array in order to store in local
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores",scoresArrayString);

    //show current highscores
    showHighScores();
}

//function to show high scores
var i = 0;
function showHighScores(){

    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";

    var savedHighScores = localStorage.getItem("high scores");

    //check if there is any in local storage
    if (savedHighScores === null){
        return;
    }
    console.log(savedHighScores);

    var storedHighScores = JSON.parse(savedHighScores);

    for(; i < storedHighScores.length; i++){
        var eachNewHighScore =document.createElement("p");
        eachNewHighScore.innerHTML = storedHighScores[i].initials + ":" + storedHighScores[i].score;
        listOfHighScores.appendChild(eachNewHighScore);
    }
}

//add event listeners

startQuizBtn.addEventListener("click",newQuiz);
choiceA.addEventListener("click",chooseA);
choiceB.addEventListener("click",chooseB);
choiceC.addEventListener("click",chooseC);
choiceD.addEventListener("click",chooseD);

submitInitialBtn.addEventListener("click", function(event){ 
    storeHighScores(event);
});

viewHighScore.addEventListener("click", function(event){
    showHighScores(event);
});

goBackBtn.addEventListener("click", function() {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
});

clearHighScoreBtn.addEventListener("click",function(){
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML ="High Scores Cleared!";
    listOfHighScores.setAttribute("style","font-family:'Archivo', sans-serif; font-style: italic;")
});