

//if the letter pressed is not part of the word, the letter pressed 
//should display under Letter already pressed - should not work if pressed twice 

//if the letter pressed is not part of the word, Number of Guesses remaining should decrease 


// if user guesses all words correctly before running out of remaining words, 
//User Successfully Guess Word message should dsiplay - scoreboard should update 


//if user runs out of remaining words count, GAME OVER shoudl siplay - scoreboard should upate 



// Creates an array that lists out all of words to be played
//  var wordChoices = ["dog"];

//    // Creating variables to hold the number of wins, losses, and ties. They start at 0.


//score board


//divs


var $currentWord = document.getElementById("current-word");
var $guessRemaining = document.getElementById("guess-remaining");
var $alreadyGuessed = document.getElementById("already-guessed");
var $winScore = document.getElementById("win-score");
var $loseScore = document.getElementById("lose-score");


//declaring game 
var game = ["dog", "house", "cat", "laptop"];
// var game = ["a b c d e f g h i j k l m n o p q r s t u v w x y z"];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var gameRunning = false;
var pickedWord = " ";
var pickedWordPlaceHolderArr = [];
var guessLetterBank = [];
var incorrectLetterBank = [];

//create new game function



// function newGame(){
var gameRunning = true;
var attemptsLeft = 10;
var guessLetterBank = [];
var pickedWordPlaceHolderArr = [];
var incorrectLetterBank = [];

//pick random new word
pickedWord = game[Math.floor(Math.random() * game.length)];

//create placeholder out of picked word 
for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
        pickedWordPlaceHolderArr.push(" ");
    }
    else {
        pickedWordPlaceHolderArr.push("_");
    }



}
$guessRemaining.textContent = attemptsLeft;
$currentWord.textContent = pickedWordPlaceHolderArr.join(" ");
$alreadyGuessed.textContent = incorrectLetterBank;


function letterGuess(letter) {
    // console.log(letter);

    if (gameRunning === true && guessLetterBank.indexOf(letter) === -1) {
        //run game here
        incorrectLetterBank.push(letter);
        attemptsLeft--;

        if (attemptsLeft === 0) { alert("game over" + losses--) }
        else if (pickedWord.toLocaleLowerCase() === pickedWordPlaceHolderArr.join("").toLocaleLowerCase()) { alert("winner" + wins++) }


        for (var i = 0; i < pickedWord.length; i++) {
            if (pickedWord[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {

                pickedWordPlaceHolderArr[i] = pickedWord[i];
            }
        }

        $currentWord.textContent = pickedWordPlaceHolderArr.join(" ");
        $alreadyGuessed.textContent = incorrectLetterBank;
        $guessRemaining.textContent = attemptsLeft;
        $loseScore.textContent = losses;
        $winScore.textContent = wins;


    }

}

document.onkeyup = function (event) {

   // if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);

    //}
}

