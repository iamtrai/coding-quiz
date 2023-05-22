var startButton = document.getElementById("start-button");
var timer = document.getElementById("time-left");
var timeLeft = 60;

function startGame() {
    timer.textContent = timeLeft;
    var gameInterval = setInterval(function() {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft === 0) {
            clearInterval(gameInterval);
            // window.location.href = "highscore.html";
        }
    }, 1000);
}

startButton.addEventListener("click", function(event) {
    event.stopPropagation();
    startGame();
})

