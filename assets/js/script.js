// TODO: SORTING OF SCORES, STORAGE AND RETREIVAL OF SCORES 
// need to figure out render method: get list items as array, sort, iterate create li and append
// render scores when view scores button clicked
// check if list items can be "get" as an array, or convert HTML collection to array

var timer = document.getElementById("time-left");
var timeLeft = 60;
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials-input");
var gameInterval;
var scoreList = document.getElementById("score-list")
// need to redirect functions with highscorelistitems to push and pull from storage instead of html
var highScoresListItems = document.getElementsByClassName("highscorelistitem")
// Answer buttons
var q1Wrong = document.getElementsByClassName("q1inc");
var q1Right = document.getElementById("q1cor");
var q2Wrong = document.getElementsByClassName("q2inc");
var q2Right = document.getElementById("q2cor");
var q3Wrong = document.getElementsByClassName("q3inc");
var q3Right = document.getElementById("q3cor");

// Other buttons
var startButton = document.getElementById("start-button");
var highScoreButton = document.getElementById("highscore-button")
var submitInitialsButton = document.getElementById("submit-button")
var goBackButton = document.getElementById("back-button");
var clearScoresButton = document.getElementById("clear-scores");

// "Screens", visibility will toggle through button functions
var highScores = document.getElementById("highscore-screen");
var beforeStart = document.getElementById("before-start");
var question1 = document.getElementById("question1-container");
var question2 = document.getElementById("question2-container");
var question3 = document.getElementById("question3-container");
var doneScreen = document.getElementById("done-page")

// Various functions
function startGame() {
    gameInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(gameInterval);
            toHighscores();
        }
    }, 1000);
    
    beforeStart.setAttribute("style", "display:none");
    question1.setAttribute("style", "display:visible")
}

function toQuestionTwo() {
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "display:visible");
}

function toQuestionThree() {
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "display:visible");
}

function toDoneScreen() {
    question3.setAttribute("style", "display:none");
    doneScreen.setAttribute("style", "display:visible");
    clearInterval(gameInterval);
    finalScore.textContent = timeLeft;
}

function toHighscores() {
    question1.setAttribute("style", "display:none");
    question2.setAttribute("style", "display:none");
    question3.setAttribute("style", "display:none");
    beforeStart.setAttribute("style", "display:none");
    highScoreButton.setAttribute("style", "display:none");
    doneScreen.setAttribute("style", "display:none");
    highScores.setAttribute("style", "display:visible");
    clearInterval(gameInterval);
}
// needs work, may scrap
function renderHighscores() {
localStorage.getItem("scores", highScoresListItems)

}
// needs work, may scrap
function storeHighscores() {
localStorage.setItem("scores", highScoresListItems)
}

//  Button functionality with event listeners
for (var i=0; i<q1Wrong.length; i++) {
    q1Wrong[i].addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft= timeLeft-10;
        toQuestionTwo();
    })
}

for (var i=0; i<q2Wrong.length; i++) {
    q2Wrong[i].addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft= timeLeft-10;
        toQuestionThree();
    })
}

for (var i=0; i<q3Wrong.length; i++) {
    q3Wrong[i].addEventListener("click", function(event) {
        event.stopPropagation();
        timeLeft= timeLeft-10;
        toDoneScreen();
        timer.textContent=timeLeft;
    })
}

q1Right.addEventListener("click", function(event) {
    event.stopPropagation();
    toQuestionTwo();
})

q2Right.addEventListener("click", function(event) {
    event.stopPropagation();
    toQuestionThree();
})

q3Right.addEventListener("click", function(event) {
    event.stopPropagation();
    toDoneScreen();
})

// need to add storage of scores, sorting of scores, rendering of scores
submitInitialsButton.addEventListener("click", function(event) {
    event.stopPropagation();
    if (!initialsInput.value) {
        alert("Please enter your initials!")} else {
    doneScreen.setAttribute("style", "display:none")
    var scoreInitials = document.createElement("li")
    scoreInitials.textContent =" " + timeLeft + " - " + initialsInput.value;
    scoreList.append(scoreInitials)
    scoreInitials.className += "highscorelistitem";
    initialsInput.value = "";
    toHighscores();
    }
})

goBackButton.addEventListener("click", function(event) {
    event.stopPropagation();
    timeLeft=60;
    timer.textContent=timeLeft;
    highScores.setAttribute("style", "display:none");
    beforeStart.setAttribute("style", "display:visible");
    highScoreButton.setAttribute("style", "display:visible");
})

highScoreButton.addEventListener("click", function(event) {
    event.stopPropagation();
    toHighscores();
})

startButton.addEventListener("click", function(event) {
    event.stopPropagation();
    startGame();
})

clearScoresButton.addEventListener("click", function(event) {
    event.stopPropagation();
     for (var i=highScoresListItems.length - 1; i >= 0; --i) {
        highScoresListItems[i].remove();
     }
})
