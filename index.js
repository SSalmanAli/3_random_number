#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = await inquirer.prompt([
    {
        name: "firstNumber",
        type: "string",
        message: "Enter the number of Last Question"
    },
]);
const randomNumber2 = Math.floor(Math.random() * randomNumber.firstNumber + 1);
console.log(`1. ${randomNumber2}`);
const randomNumber3 = Math.floor(Math.random() * randomNumber.firstNumber + 1);
console.log(`2. ${randomNumber3}`);
const randomNumber4 = Math.floor(Math.random() * randomNumber.firstNumber + 1);
console.log(`3. ${randomNumber4}`);
