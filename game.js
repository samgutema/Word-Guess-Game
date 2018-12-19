

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
    var game = ["dog", "house", "cat", "laptop"]
    var wins = 0;
    var losses = 0;
    var attemptsLeft = 10;
    var gameRunning = false;
    var pickedWord= "";

    var pickedWordPlaceHolder = [];
    var guessLetterBank = [];
    var incorrectLetterBank = [];

//create new game function

    document.onkeyup= function (newGame) {
        var gameRunning = true;
        var attemptsLeft = 10;
        var pickedWordPlaceHolder = [];
        var guessLetterBank = [];
        var incorrectLetterBank = [];

//pick random new word
        pickedWord = game [Math.floor(Math.random()* game.length)];

//create placeholder out of picked word 
        for (var i=0; i<pickedWord.length; i++) {
            if (pickedWord [i] === " ") {
                pickedWordPlaceHolder.push("");
            }
            else {
                pickedWordPlaceHolder.push("_");
            }
        }

         //write new game to the dom 
         guessRemaining.textContent = guessRemaining;
        currentWord.textContent = pickedWordPlaceHolder.join("");
        alreadyGuessed.textContent = incorrectLetterBank;

    
   

        letterGuess = function (letter){
            console.log(letter);

            if (gameRunning === true && guessLetterBank.indexOf(letter) === -1) {
                //run game here
                guessLetterBank.push(letter);

                //check if guessed letter is in picked word 

                for (var j = 0; j < pickedWord.length; j++ ) {
                    if (pickedWord[j].toLocaleLowerCase() === letter.toLocaleLowerCase() ){
                        pickedWordPlaceHolder[j] === pickedWord[j];
                    }
                }

                currentWord.textContent = pickedWordPlaceHolder.join("");
            }
            else {
                if (!gameRunning) {
                    alert ("game isnt running, refresh page"); }
                    else {
                        alert ("you're already playing");
                    }
                }

            }

            if (event.keyCode >= 65 && event.keyCode <=90 ) {
                letterGuess(event.key);

            }

        }

            

        
    

