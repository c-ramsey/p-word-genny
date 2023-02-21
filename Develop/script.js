// Assignment code here

// create arrays for available charaters 

// create propmt to ask for user length and character type preferences 

// create function to take preferences and generate password with available characters 

// display pword 

// availiable character arrays

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "=", ">", "<", "?", "@", "^", "_", "`", "{", "|", "{", "~"]

// empty array to add pw to 

var newPw= [];

// create function for taking user length preference 

function generatePassword() {

  var pwLength = prompt("Set desired length for password between 8 and 128 characters.");

  var placeHolder = document.querySelector("#password[placeholder]").textContent;

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength) === true) {
    alert("Nah dawg I said between 8 and 128! wyd??");
    return generatePassword();
  }
  
  else {
    pwCriteria.pwLength = pwLength
  }

  promptUser();

// create function for taking character type preferences 

  
    if (newPw) {
      newPw = [];
     
      // run the random character function over the value that user entered for pwLength
     
      for (var i = 0; i < pwLength; i++) {
        randomChar();
      }
    }
    
   
    // returns the generated password without the commas included
    return newPw.join("");
  }
  
    
  

  function  promptUser() {

    // ask if they want to include capital letters
    
    var confirmCapital = confirm("Would you like capital letters in your pword?");
    pwCriteria.includeUpper = confirmCapital;
  
    // ask if they want to include lowercase letters
    
    var confirmLower = confirm("How bout some lower case?");
    pwCriteria.includeLower = confirmLower;
  
    // ask if they want to include numbers
    
    var confirmNum = confirm("How do you feel about some numbers?");
    pwCriteria.includeNum = confirmNum;
  
    // ask if they want to include special characters
    
    var confirmSpecial = confirm("And lastly, special characters?");
    pwCriteria.includeSpecial = confirmSpecial;
  
    // check if the values all equal false - if so will rerun user prompts
   
    if (pwCriteria.includeUpper === false && pwCriteria.includeLower === false && pwCriteria.includeNum === false && pwCriteria.includeSpecial === false) {
      alert("We really got to do this again? Alright then, damn.");
      return promptUser();
    }
  }


// create object to hold pwCriteria 

var pwCriteria = {
  pwLength: 0,
  includeUpper: null,
  includeLower: null,
  includeNum: null,
  includeSpecial: null
}

function randomChar() {
  // create an empty array that adds the specific character arrays from above only if their pwCriteria === true
  var pwCharArray = [];

  if (pwCriteria.includeUpper === true) {
    pwCharArray = pwCharArray.concat(upperCase);
  }

  if (pwCriteria.includeLower === true) {
    pwCharArray = pwCharArray.concat(lowerCase);
  }

  if (pwCriteria.includeNum === true) {
    pwCharArray = pwCharArray.concat(numericList);
  }

  if (pwCriteria.includeSpecial === true) {
    pwCharArray = pwCharArray.concat(specialChar);
  }

  // use math.random function to pick a random character from the array
  var randomCharSelected = pwCharArray[Math.floor(Math.random() * pwCharArray.length)];

  return newPw = newPw.concat(randomCharSelected);

  }




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

