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
  var includeSpecials = window.alert('Would you like to include symbols?');
  var includeNumbers = window.alert('Would you like to include numbers?');
  var includeLowerCase = window.alert('Would you like to include lower case letters?');
  var includeUpperCase = window.alert('Would you like to include upper case letters?');
  
  if (includeSpecials) {
    charset += special;
    window.alert("The password will include special symbols");
  }
  if (includeLowerCase) {
    charset += lowerCase;
    window.alert("The password will include lowercase letters");
  }
  if (includeUpperCase) {
    charset += upperCase;
    window.alert("The password will include uppercase letters");
  }
  if (includeNumbers) {
    charset += numbers;
    window.alert("The password will include numbers");
  }
  passwordText.value = password;

  for(var i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
    return password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
