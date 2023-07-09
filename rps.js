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

const RPSGame = {
  human: createPlayer("human"),
  computer: createPlayer("computer"),

  displayWelcomeMessage() {
    console.log("Welcome to Rock, Paper, Scissors!");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors. Goodbye!");
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(
      `You chose ${humanMove}, and the computer chose ${computerMove}.`
    );

    if (
      (humanMove === "rock" && computerMove === "scissors") ||
      (humanMove === "paper" && computerMove === "rock") ||
      (humanMove === "scissors" && computerMove === "paper")
    ) {
      console.log("Player wins!");
    } else if (
      (humanMove === "rock" && computerMove === "paper") ||
      (humanMove === "paper" && computerMove === "scissors") ||
      (humanMove === "scissors" && computerMove === "rock")
    ) {
      console.log("Computer wins!");
    } else {
      console.log("It's a draw!");
    }
  },

  playAgain() {
    let answer = readline.question("Would you like to play again (y or n)?");
    return answer.toLowerCase()[0] === "y";
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) {
        break;
      }
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();
