
var generateBtn = document.querySelector("#generate");
var lowerCaseValue;
var upperCaseValue;
var numberCaseValue;
var specialCharValue;
var passLengthValue;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLength = prompt(" Choose a length of at least 8 Characters and no more than 128. ");
  var passCriteria = [];
  if (passLength >= 8 && passLength <= 128) {
    passLengthValue = parseInt(passLength);

    var lowerCase = confirm("Do you want lowercase letters?");
    var upperCase = confirm("Do you want uppercase letters?");
    var numberCase = confirm("Do you want numbers?");
    var specialChar = confirm("Do you want special characters?");
  }
   else {
    alert("Please try again!");
  } 
  
    if (lowerCase===true) {
      lowerCaseValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (i = 0; i < lowerCaseValue.length; i++) {
          passCriteria.push(lowerCaseValue[i]);
        }
    }
  
    if (upperCase===true) {
      upperCaseValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (i = 0; i < upperCaseValue.length; i++) {
          passCriteria.push(upperCaseValue[i]);
      }
    }
  
    if (numberCase===true) {
      numberCaseValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (i = 0; i < numberCaseValue.length; i++) {
        passCriteria.push(numberCaseValue[i]);
      }
    }
  
    if (specialChar===true) {
      specialCharValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
      for (i = 0; i < specialCharValue.length; i++) {
        passCriteria.push(specialCharValue[i]);
      }
    }
    
    var newPassword = ""
    for (var i = 0; i < passLengthValue; i++) {
      newPassword += passCriteria[Math.floor(Math.random() * passCriteria.length)];
    }
    return newPassword;
}



generateBtn.addEventListener("click", () => {
  writePassword;
 
});