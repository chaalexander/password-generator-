// 8 minimo- 128 maximo
// fazer prompt perguntando se:
// - quer  lowercase
// - quer uppercase
// - quer numeric
// - quer special caratcer
// quando for criado o password aparecer na caixa ou como alerta!



// Prompt with the questons for the password.
const lowerCase = console.log (lowerCase); 
("Do you want Lowercase?");
const upperCase = console.log (upperCase);
("Do you want Uppercase?");
const numeric = console.log (numeric);
("Do you want Numbers?");
const special = console.log (special);
("Do you want Special Characters?");
const length = console.log (length);
("Choose your password length. At least 8 no more than 128 characters");

// creating var with the value of the password
var valueLetLow = "abcdefghijklmnopqrstuvwxyz";
var valueLetUp = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";
var valueNumb = "0123456789";
var valueSpecial = "!@#$%^&*()_+";

console.log (valueLetUp.length);
console.log (valueLetLow);
console.log (valueNumb);
console.log (valueSpecial);



// Assignment Code
var generateBtn = document.querySelector("#generate")



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

