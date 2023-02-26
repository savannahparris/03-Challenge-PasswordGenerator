// Array's for passwords
let lowercaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let uppercaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbersArray = [0,1,2,3,4,5,6,7,8,9]
let specialArray = ["~","!","@","#","$","%","&","*"]

function generatePassword() {

// Passowrd Prompts
let lengthAlert = prompt('How long do you want your password to be? (Please select a number 8-128)')
let lowercaseAlert = prompt('Include lowercase letters? Y or N')
let uppercaseAlert = prompt('Include uppercase letters? Y or N')
let numbersAlert = prompt('Include numbers? Y or N')
let specialAlert = prompt('Include special characters? Y or N')

// Alert to enforce one criteria must be selected
if (lowercaseAlert === null && uppercaseAlert === null && numbersAlert === null && specialAlert === null){
  alert('At least one criteria must be selected')
}

// Developing password
lengthAlert = parseInt(lengthAlert)
lowercaseAlert = lowercaseAlert.toUpperCase();
uppercaseAlert = uppercaseAlert.toUpperCase();
numbersAlert = numbersAlert.toUpperCase();
specialAlert = specialAlert.toUpperCase();

  if (lengthAlert == null || isNaN(lengthAlert) || lengthAlert < 8 || lengthAlert > 128 ) {
    alert('Your first input was not a valid number, please try again and select a number 8-128');
    return;
  }

  if (!lowercaseAlert && !uppercaseAlert && !numbersAlert && !specialAlert){
    alert('At least one criteria must be selected, please input "yes" for at least one criteria')
  }
  
  let userChoices = [];
  if (lowercaseAlert === 'Y') {
    userChoices = userChoices.concat(lowercaseArray)
    console.log(userChoices)
  }
  if (uppercaseAlert === 'Y') {
    userChoices = userChoices.concat(uppercaseArray)
    console.log(userChoices)
  }
  if (numbersAlert === 'Y') {
    userChoices = userChoices.concat(numbersArray)
    console.log(userChoices)
  }
  if (specialAlert === 'Y') {
    userChoices = userChoices.concat(specialArray)
    console.log(userChoices)
  }  
  
 for (let i = 0; i < lengthAlert; i++){
  let shuffled = [...userChoices].sort(() => .5 - Math.random())
  let password = shuffled.slice(0, lengthAlert).join("")
 }
 return password
} 


let generateBtn = document.querySelector("#generate");


function writePassword() {

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword)