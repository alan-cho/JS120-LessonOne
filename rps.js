const readline = require("readline-sync");

function createPlayer(playerType) {
  return {
    playerType: playerType,
    move: null,

    choose() {
      const choices = ["rock", "paper", "scissors"];
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log("Choose rock, paper, or scissors: ");
          choice = readline.question();

          if (choices.includes(choice)) {
            break;
          }

          console.log("Please enter a valid move.");
        }

        this.move = choice;
      } else {
        let randomIndex = Math.floor(Math.random * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === "human";
    },
  };
}

function createMove() {
  return {
    // possible state: type of move (paper, rock, scissors)
  };
}

function createRule() {
  return {
    // possible state? not clear whether Rules need state
  };
}

// Since we don't yet know where to put `compare`, let's define
// it as an ordinary function.
let compare = function (move1, move2) {
  // not yet implemented
};

const RPSGame = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
