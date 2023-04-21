// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var length = window.prompt("How many characters do you want the password to be?");
  let password = "";
  var passwordText = document.querySelector("#password");
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ;"
  var numbers = "1234567890";
  var special = "!?@#$%^&*-+=";
  var includeSpecials = window.confirm('Would you like to include symbols?');
  var includeNumbers = window.confirm('Would you like to include numbers?');
  var includeLowerCase = window.confirm('Would you like to include lower case letters?');
  var includeUpperCase = window.confirm('Would you like to include upper case letters?');
  
  if (includeSpecials) {
    password += special;
    window.alert("The password will include special symbols");
  }
  if (includeLowerCase) {
    password += lowerCase;
    window.alert("The password will include lowercase letters");
  }
  if (includeUpperCase) {
    password += upperCase;
    window.alert("The password will include uppercase letters");
  }
  if (includeNumbers) {
    password += numbers;
    window.alert("The password will include numbers");
  }
  passwordText.value = password;

  for(var i = 0, n = charset.length; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * n));
    return password;
  }
}

console.log(password)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
