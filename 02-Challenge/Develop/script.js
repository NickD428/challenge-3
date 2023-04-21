// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var charset = '';
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
  var numbers = "1234567890";
  var special = "!?@#$%^&*-+=";
  var includeSpecials = confirm('Would you like to include symbols?');
  var includeNumbers = confirm('Would you like to include numbers?');
  var includeLowerCase = confirm('Would you like to include lower case letters?');
  var includeUpperCase = confirm('Would you like to include upper case letters?');
  
  if (includeSpecials) {

  }
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
