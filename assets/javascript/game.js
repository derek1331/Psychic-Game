var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"]
var wins = 0;
var losses = 0;
var guessesLeft = [];
var yourGuesses = [];

var newLetterToGuess = letters[Math.floor(Math.random() * letters.length)];


var reset = function() {
    newLetterToGuess = [];
}
    



document.onload = function(event) {

    var newLetterToGuess = letters[Math.floor(Math.random() * letters.length)];


    document.onkeypress = function()
        yourGuesses = String.fromCharCode(event.keyCode).
            toLowerCase();

        
            
    if (userguess==newLetterToGuess) {
            wins++;
            reset();

    }
     
            

        var html = 
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>" +
        "<p>Your Guesses so far: " + yourGuesses + "</p>";
    
        
        document.querySelector("#game").innerHTML = html;      

}
   


                   

// get aplphabet
// get random letter for current game
// store user guesses
// store guessLeft
// store wins
// store loses
// reset