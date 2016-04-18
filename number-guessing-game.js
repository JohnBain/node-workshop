/* ### Number guessing game!
  * Create a file called `number-guessing-game.js`.
  * In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
  * Instead of using `prompt` and `alert`, you will have to use capabilities from NodeJS and any external module. 
  * **HINT**: there is an npm library called `prompt` that can help you with that :)
  * Save/commit/push */
  
var prompt = require('prompt');

function guessingGame(num) {
    prompt.start();
    prompt.message = "Guess a number";
prompt.get(['guess'], function (err, result) {
      var yourGuess = result.guess;
      
      
      if (yourGuess === num.toFixed()) {        //prompt only seems to understand strings, but input comes as an integer. 
          console.log("You got the right number!");
      }
      else {
            console.log("Wrong answer. Guess again!");
            guessingGame(num);
      }
});
}

guessingGame(12);


/*
function ask() {
    // Ask for name until user inputs "done"
    prompt.get(['name'], function(err, result) {
        console.log('Diner name: ' + result.name);
        currentDinerName = result.name;
        if (currentDinerName === 'done') {
            console.log('We are done.');
        } else {
            ask();
        }
    });
}

ask(); */
