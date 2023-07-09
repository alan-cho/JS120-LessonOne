function createPlayer() {
  return {
    // possible state: player name?
    // possible state: player's current move?

    choose() {
      // not yet implemented
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
  human: createPlayer(),
  computer: createPlayer(),

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
