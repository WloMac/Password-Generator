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

let specialCharactersRandom = Math.floor(Math.random()*specialCharacters.length);
let numericCharactersRandom = Math.floor(Math.random()*numericCharacters.length);
let lowerCasedCharactersRandom = Math.floor(Math.random()*lowerCasedCharacters.length);
let upperCasedCharactersRandom = Math.floor(Math.random()*upperCasedCharacters.length);

// Option for password characters
    // Make prompt for each character type - done
    // Save user response as variable - done 
      // How to save reponse as variable? 
        // Create loop which will refuse other choose than Yes or No
            // What loop to use?
        // Create if condition to:
        // Store answer as boolean expression
// Use this data to create to concate array
  // Create if condiotion to add choosen arrays to create new big array
// Use concated array to pick random letters 
// Create password




// Function to prompt user for password options
function getPasswordOptions() {
 


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
// Needs to go thru concat array and pick random chars
function generatePassword() {
  return option1+option2+option3+option4;
  

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');


// Write password to the #password input
function writePassword() {
  promptOption();
  
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
  
}

function promptOption() {

option1 = prompt("Include lowercase characters? Y/N");
option2 = prompt("Include uppercase characters? Y/N");
option3 = prompt("Include numeric characters? Y/N");
option4 = prompt("Include special characters? Y/N"); 

}

let option1;
let option2;
let option3;
let option4;



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

//Prompt answer function

function promptAnswer() {
  
}