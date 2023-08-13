// 1. Deposit some money
// 2. determine number of lines to bet on
// 2. Collect a bet amount
// 3. collect a bet amount 
// 4. spin the slot machine
// 5. check if the user won
// 6. give the user their winnings or take bet if lost.
// 7. play again

//import prompt-sync with require function to get user input for slot
const prompt = require("prompt-sync")(); 

// creating the structure of the slot machine.
const ROWS = 3;
const COLS = 3;

// symbols for each column and value set.
const SYMBOLS_COUNT = {
    "A" : 2,
    "B" : 4,
    "C" : 6,
    "D" : 8
}

// multiplier for each symbol
const SYMBOL_VALUES = {
    "A" : 5,
    "B" : 4,
    "C" : 3,
    "D" : 2
}

// create a function for user to enter deposit amount
const deposit = () => {
// making the user enter the number again if it's invalid. 
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    // convert deposit amount to integer
    // note to self: "numberDepositAmount" made as a variable bc you would want to add to it or subtract from it.
    const numberDepositAmount = parseFloat(depositAmount);

    // check validity in number
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    //returns amount if user enters a valid input
    } else {
        return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  // making the user enter the number of lines again if it's invalid.
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    // convert line amount to integer
    // note to self: "numberOfLines" made as a variable bc you would want to add to it or subtract from it.
    const numberOfLines = parseFloat(lines);

    // check validity in number
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again.");
      //returns amount if user enters a valid input
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  // making the user enter the bet again if it's invalid.
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    // convert bet amount amount to integer
    // note to self: "numberBet" made as a variable bc you would want to add to it or subtract from it.
    const numberBet = parseFloat(bet);

    // check validity in number
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Bet amount is invalid, please try again.");
      //returns amount if user enters a valid input
    } else {
      return numberBet;
    }
  }
};

// function that "spins the slot machine"
const spin = () => {
    // generate array that selects all possible symbols
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT))
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }

    const reels = [[], [], []];
    for (let i=0; i < COLS; i++){
        // copying symbols into this array.
        // removing symbols so user wont choose them again.
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
                const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};
const reels = spin(); 
console.log(reels);

// note to self: allowed for the value to be changed. 
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);



