var timer = document.getElementById("time-left");
var timeLeft = 60;
// Answer buttons (only first incorrect answer button functions for some reason)
var q1Wrong = document.getElementById("q1inc");
var q1Right = document.getElementById("q1cor");
var q2Wrong = document.getElementById("q2inc");
var q2Right = document.getElementById("q2cor");
var q3Wrong = document.getElementById("q3inc");
var q3Right = document.getElementById("q3cor");

var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("highscore-button")
var highScores = document.getElementById("highscore-screen");

var questioncont = document.getElementById("before-start");
var question1 = document.getElementById("question1-container");
var question2 = document.getElementById("question2-container");
var question3 = document.getElementById("question3-container");

function toHighscores() {
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "display:none");
    questioncont.setAttribute("style", "display:none");
    highScores.setAttribute("style", "display:visible");
}

function startGame() {
    timer.textContent = timeLeft;
    var gameInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(gameInterval);
            toHighscores();
        }
    }, 1000);
    
    questioncont.setAttribute("style", "display:none");
    question1.setAttribute("style", "display:visible")


    function toQuestionTwo() {
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "display:visible");
    }

    function toQuestionThree() {
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "display:visible");
    }

    q1Wrong.addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft= timeLeft-10;
        toQuestionTwo();
    })
    
    q1Right.addEventListener("click", function(event) {
        event.stopPropagation();
        toQuestionTwo();
    })

    q2Right.addEventListener("click", function(event) {
        event.stopPropagation();
        toQuestionThree();
    })

    q2Wrong.addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft = timeLeft-10;
        toQuestionThree();
    })

    q3Wrong.addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft = timeLeft-10;
        toHighscores();
        clearInterval(gameInterval);
        timer.textContent=timeLeft;
    })

    q3Right.addEventListener("click", function(event) {
        event.stopPropagation();
        toHighscores();
    })
}


highScoreButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toHighscores();
})

startButton.addEventListener("click", function(event) {
    event.stopPropagation();
    startGame();
})

