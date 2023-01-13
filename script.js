// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r', 
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Option for password characters
    // Make prompt for each character type - done
    // Create if condition to:
    // Store answer as boolean expression
// Use this data to create to concate array
  // Create if condiotion to add choosen arrays to create new big array
// Use concated array to pick random letters 
// Create password


let passwordlength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  let userChoice = [];
  while(true){
      passwordlength = prompt("Please provide password lenght between 10 and 64 characters");
        if(passwordlength >= 10 && passwordlength <= 64){
          break;
        }
  }
  let lowerCaseOption = confirm("Include lowercase characters?");
  let upperCaseOption = confirm("Include uppercase characters?");
  let numericOption = confirm("Include numeric characters?");
  let specialCharOption = confirm("Include special characters?");
      
  if(lowerCaseOption){
    userChoice = userChoice.concat(lowerCasedCharacters);
  }
  if(upperCaseOption){
    userChoice = userChoice.concat(upperCasedCharacters);
  }
  if(numericOption){
    userChoice = userChoice.concat(numericCharacters);
  }
  if(specialCharOption){
    userChoice = userChoice.concat(specialCharacters)
  }
  return userChoice;
  //ask for input of pass charc amount
}


// Function for getting a random element from an array
function getRandom(arr) {
  let userChoiceRandom = arr[Math.floor(Math.random()*arr.length)];
  return userChoiceRandom;
}

// Function to generate password with user input
// Needs to go thru concat array and pick random chars
function generatePassword(runcode) {
  let userpassword = "";
  for (let i = 0; i < passwordlength; i++) {
       
    userpassword += getRandom(runcode);
  }
  
  return userpassword;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  let runcode = getPasswordOptions();
  
  let password = generatePassword(runcode);
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
