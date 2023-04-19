// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
const numbers = "1234567890";
const special = "!?@#$%^&*-+=";
const all = lowerCase + upperCase + numbers + special;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(Math.random(all));
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
