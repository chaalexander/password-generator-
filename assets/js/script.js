
var generateBtn = document.querySelector("#generate");
var lowerValue;
var upperValue;
var numberValue;
var specialValue;
var pwdLengthValue;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var passLength = prompt(" Choose a length of at least 8 Characters and no more than 128. ");
  var passCriteria = [];
  if (passLength >= 8 && passLength <= 128) {
    pwdLengthValue = parseInt(passLength);

    var lowerletter = confirm("Do you want lowercase letters?");
    var upperletter = confirm("Do you want uppercase letters?");
    var number = confirm("Do you want numbers?");
    var special = confirm("Do you want special characters?");
  }
   else {
    alert("Please try again!");
  } 
  
    if (lowerletter===true) {
      lowerValue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (i = 0; i < lowerValue.length; i++) {
          passCriteria.push(lowerValue[i]);
        }
    }
  
    if (upperletter===true) {
      upperValue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        for (i = 0; i < upperValue.length; i++) {
          passCriteria.push(upperValue[i]);
      }
    }
  
    if (number===true) {
      numberValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      for (i = 0; i < numberValue.length; i++) {
        passCriteria.push(numberValue[i]);
      }
    }
  
    if (special===true) {
      specialValue = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ":", ";", "'", "<", ">", "?", "/", "`", "~"];
      for (i = 0; i < specialValue.length; i++) {
        passCriteria.push(specialValue[i]);
      }
    }
    
    var newPassword = ""
    for (var i = 0; i < pwdLengthValue; i++) {
      newPassword += passCriteria[Math.floor(Math.random() * passCriteria.length)];
    }
    return newPassword;
}



generateBtn.addEventListener("click", () => {
  writePassword;
 
});