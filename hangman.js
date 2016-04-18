var randomWordList = ["snakes", "trampoline", "poodle", "ganja", "toulouse", "fruitfly"];
var prompt = require('prompt')
function arrays_equal(a, b) {
    return JSON.stringify(a) == JSON.stringify(b);
};


function hangManDisplay(parts) {
    console.log("|====-=====|")
    switch (parts) {
    case 6: console.log("............\n............\n............");break;
    case 5: console.log(".....o......\n............\n............");break;
    case 4: console.log(".....o......\n..../.......\n............");break;
    case 3: console.log(".....o......\n..../|......\n............");break;
    case 2: console.log(".....o......\n..../|\\.....\n............");break;
    case 1: console.log(".....o......\n..../|\\.....\n..../.......");break;
    case 0: console.log(".....o......\n..../|\\.....\n..../.\\.....");break;
    }
}

var createSpaces = function (size){
    var result = [ ];
    for (var count=0;count < size;count++) {
        result.push("_");
    }
    return result;
};

var answer = randomWordList[Math.floor(Math.random() * 5)]
var splitAnswer = answer.split("");
var spaces = createSpaces(answer.length);

function hangMan(chances) {
    prompt.get(['guess'], function (err, result) {
      var yourGuess = result.guess;

      
      if (answer.indexOf(yourGuess) >= 0){
          console.log(yourGuess + " is the right letter");
          spaces[answer.indexOf(yourGuess)] = yourGuess;
          spaces[answer.lastIndexOf(yourGuess)] = yourGuess;
          console.log(spaces);
      }
      else {
          chances -= 1;
          console.log(spaces);
          hangManDisplay(chances);
        }
        
      if (arrays_equal(splitAnswer, spaces)) {
            console.log("You win!")
      }
      
      else {
            hangMan(chances);
      }
      
      if (chances === 0) {
        console.log("You have died!");
        console.log("The answer was " + answer + "!");
        throw("Goodbye");
      }
});
}

hangMan(6);



//full hangman: console.log(".....o......\n..../|\\.....\n..../.\\.....");break;
