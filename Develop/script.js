// Assignment code here

//DOM ELEMENTS
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEL = document.getElementById('uppercase');
const lowercaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');

const lengthPrompt = prompt('How long would you like your password?')
const uppercasePrompt = prompt('Would you like to include uppercase letters? Yes or No')
const lowercasePrompt = prompt('Would you like to include lowercase letters? Yes or No')
const numbersPrompt = prompt('Would you like to inclued numbers? Yes or No')
const symbolsPrompt = prompt('Would you like to inclued symbols? Yes or No')

function writePassword() {
  generateBtn.addEventListener('click');
}
generateBtn.addEventListener("click", writePassword);
console.log('you clicked the btn');

const generateRandom = {
  lower: getRandomUpper,
  upper: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// GENERATE FUNCTIONS

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};

function getRandomSymbol(){
  const symbols = '!@#$%^&*()_+{}|:<>?~`-=[]\;,./';
  return String.fromCharCode[Math.floor(Math.random() * symbols.length)]
};






// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");
// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
//  
