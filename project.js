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
    }
  }
};

deposit();

