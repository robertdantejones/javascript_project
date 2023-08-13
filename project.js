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

const getBet = (balance) => {
  // making the user enter the bet again if it's invalid.
  while (true) {
    const bet = prompt("Enter the total bet: ");
    // convert bet amount amount to integer
    // note to self: "numberBet" made as a variable bc you would want to add to it or subtract from it.
    const numberBet = parseFloat(bet);

    // check validity in number
    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
      console.log("Bet amount is invalid, please try again.");
      //returns amount if user enters a valid input
    } else {
      return numberBet;
    }
  }
};

// note to self: allowed for the value to be changed. 
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);


