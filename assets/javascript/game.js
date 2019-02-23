var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var lettersTyped = [];

var winsCounter = document.getElementById("wins-counter");
var lossesCounter = document.getElementById("losses-counter");
var guessesCounter = document.getElementById("guesses-left");
var userInputLog = document.getElementById("user-input-log");

var psychicThinking = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(psychicThinking);

document.onkeyup = function(event) {
    var userTry = event.key.toLowerCase();
    
    if (userTry === psychicThinking) {
        lettersTyped = [];
        wins++;
        guessesLeft = 0;
        psychicThinking = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(psychicThinking);
    }

    else {
        lettersTyped.push(userTry);
        losses++;
            if (guessesLeft < 0) {
                guessesLeft = 9;
                lettersTyped = "";
            }
            
            else {
                guessesLeft--;
            };
    }

    winsCounter.textContent = "Wins: " + wins;
    lossesCounter.textContent = "Losses: " + losses;
    guessesCounter.textContent = "Guesses Left: " + guessesLeft;
    userInputLog.textContent = "Your guesses so far: " + lettersTyped;
    
}
