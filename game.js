

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
var winLabel = document.getElementById("win-label");
var loseLabel = document.getElementById("lose-label");
var winScore = document.getElementById("win-score");
var loseScore = document.getElementById("lose-score");

//divs
var winResult = document.getElementById("win-result");
var currentWord = document.getElementById("current-word");
var guessRemaining = document.getElementById("guess-remaining");
var alreadyGuessed = document.getElementById("already-guessed");


//declaring game 
var game = ['dog', 'house', 'cat', 'laptop'];
var wins = 0;
var losses = 0;
var attemptsLeft = 10;
var gameRunning = false;
var pickedWord = "";

var pickedWordPlaceHolderArr = [];
var guessLetterBank = [];
var incorrectLetterBank = [];

//create new game function

document.onkeyup = function (event) {
    var gameRunning = true;
    var attemptsLeft = 10;
    var pickedWordPlaceHolderArr = [];
    var guessLetterBank = [];
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

    //write new game to the dom 
    guessRemaining.textContent = attemptsLeft;
    currentWord.textContent = pickedWordPlaceHolderArr.join(" ");
    alreadyGuessed.textContent = incorrectLetterBank;




    letterGuess = function (letter) {
        console.log(letter);

        if (gameRunning === true && guessLetterBank.indexOf(letter) === -1) {
            //run game here
            guessLetterBank.push(letter);

            //check if guessed letter is in picked word 

            for (var i = 0; i < pickedWord.length; i++) {
                if (pickedWord[i].toLocaleLowerCase() === letter.toLocaleLowerCase()) {

                    pickedWordPlaceHolderArr[i] = pickedWord[i];
                }
            }

            currentWord.textContent = pickedWordPlaceHolderArr.join(" ");


        }
        else {
            if (!gameRunning) {
                alert("game isnt running, refresh page");
            }
            else {
                alert("you're already guessed letter");
            }
        }



    }

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);

    }




    checkIncorrect = function (letter) {
        if (
            pickedWordPlaceHolderArr.indexOf(letter.toLocaleLowerCase()) === -1
            &&
            pickedWordPlaceHolderArr.indexOf(letter.toLocalUpperCase()) === -1
        )

            
        attemptsLeft --;
        incorrectLetterBank.push(letter);
            
        alreadyGuessed.textContent = incorrectLetterBank.join(" ");
        guessRemaining.textContent = attemptsLeft; 
            

    }

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        checkIncorrect(event.key);

    }



//check for loss

    checkLoss = function () {
        if (attemptsLeft === 0 ) {
            losses ++;

            loseScore.textContent = losses;

        }


    }

//check for win 

    checkWin = function () {
        if (pickedWord.toLocaleLowerCase() === pickedWordPlaceHolderArr.join ("").toLocaleLowerCase())

        {
            wins++;

            winScore.textContent = wins;

        }
    }


}











// 1:20