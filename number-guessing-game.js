/* ### Number guessing game!
  * Create a file called `number-guessing-game.js`.
  * In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
  * Instead of using `prompt` and `alert`, you will have to use capabilities from NodeJS and any external module. 
  * **HINT**: there is an npm library called `prompt` that can help you with that :)
  * Save/commit/push */
  
var prompt = require('prompt');

prompt.get(['guess'], function (err, result) {
     
      if (result.guess === "12") {
          console.log("You got the right number!")
      }
      else {
      console.log("Wrong answer");
      }
    })