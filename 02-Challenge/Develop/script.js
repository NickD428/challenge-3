// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword(length) {
  var length = window.prompt("How many characters do you want the password to be?");
  let password = "";
  var passwordText = document.querySelector("#password");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var special = "!?@#$%^&*-+=";
  var all = lowerCase + upperCase + numbers + special;
  var includeSpecials = window.confirm('Would you like to include symbols?');
  var includeNumbers = window.confirm('Would you like to include numbers?');
  var includeLowerCase = window.confirm('Would you like to include lower case letters?');
  var includeUpperCase = window.confirm('Would you like to include upper case letters?');
  
  if (includeSpecials) {
    password += special[Math.floor(Math.random() * special.length)];
    window.alert("The password will include special symbols");
  }
  if (includeLowerCase) {
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    window.alert("The password will include lowercase letters");
  }
  if (includeUpperCase) {
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    window.alert("The password will include uppercase letters");
  }
  if (includeNumbers) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
    window.alert("The password will include numbers");
  }

  while (password.length < length) {
    var passwordLength = Math.floor(Math.random() * all.length);
    password += all[passwordLength];
  }
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
