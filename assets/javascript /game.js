

    document.onkeyup = function(event)
    {

    var userpick = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerwin;
    var result =  document.getElementById("result");
    
    if(event.key == computerGuess)
    {

      
      result.textContent = "Draw";
    }
    else if(computerpick == "r" && event.key == "p")
    {
        result.textContent = "You wins";
    }
    else if(computerpick == "p" && event.key == "r")
    {
        result.textContent = "Computer Wins";
    }
    }

var LetterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//Store something
//Compare something 
//Check something
//If true display something 


// if user presses  any letter on keyboard, and if the letter 
//is part of the word, it should display under Current Word

var myWords = ["The", "quick", "brown" , "fox", "jumps" , "over" , "the" , "lazy" , "dog"]

document.onkeyup = function(event)
{


//if the letter pressed is not part of the word, the letter pressed 
//should display under Letter already pressed - should not work if pressed twice 

//if the letter pressed is not part of the word, Number of Guesses remaining should decrease 


// if user guesses all words correctly before running out of remaining words, 
//User Successfully Guess Word message should dsiplay - scoreboard should update 


//if user runs out of remaining words count, GAME OVER shoudl siplay - scoreboard should upate 
