var characterlength = 0;
var choiceArray = [];

// var SpecialCharArr =['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']', '^','`','{','|','}','~','"'];
// // '\^_`{|}~"
var specialCharArr = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '`', '{', '|', '}', '~', '"'];
var lowCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// // Assignment code here


// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// // Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}


function generatePassword() {
  var password = "";
  for (var i = 0; i < characterlength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length)
    password = password + choiceArr[randomIndex];
  }
  return password;
}


function getPrompts() {
  choiceArr = [];
  characterlength = parseInt(prompt("How many charcter do you want your pass to be from 8-128?"));

  if (isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
    alert("character length has to be a number, 8-128 digits. Please try again")
    return false;
  }

  var lowerCaseChoice = confirm("would you like lowercase letters in your password?")
  if (lowerCaseChoice === true) {
    choiceArr = choiceArr.concat(lowCaseArr);
  }
  var upperChoice = confirm("Would you like uppercase letters in your password?")
  if (upperChoice === true) {
    // if (confirm("would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  var SpecialCharChoice = confirm("would you like to use special characters in your password?")
  if (SpecialCharChoice === true) {
    // if (confirm("would you like special charcters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }

  var numberChoice = confirm("would you like to use numbers in your password?")
  if (numberChoice === true) {
    // if (confirm("would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
 
  
  if (lowerCaseChoice === false && upperChoice === false && SpecialCharChoice === false && numberChoice === false) {
    alert("Must choose one type of charcter to have in a password")
    getPrompts()
  }
  return true
}
