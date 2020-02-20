// Dom elements

const password = document.getElementById ("password");
const generateBtn = document.getElementById ("generate");
const lowerElement = document.getElementsByName ("lowerCase");
const upperElement = document.getElementsByName ("upperCase");
const number = document.getElementsByName ("numeric");
const specialElement = document.getElementsByName ("special");
const lenghtElement = document.getElementsByName("length"); 


const randomFunc = {  
    lowerLetter: LowerCase,
    upperLetter: UpperCase,
    number: NumberCase,
    specialCharacter: Special,
};


// Event button
generateBtn.addEventListener("click", () =>{

    const lowerCase = prompt
    ("Do you want Lowercase?");
    if (true) {
        (return String.fromCharCode (Math.floor(Math.random() * 26) + 97);)
    }
    const upperCase = prompt
    ("Do you want Uppercase?");
    if (true) {
        (return String.fromCharCode (Math.floor(Math.random() * 26) + 65);)
     }
    const numeric = prompt
    ("Do you want Numbers?");
 if (true) {
        (return String.fromCharCode (Math.floor(Math.random() * 10) + 48);)
    }

    const special = prompt
    ("Do you want Special Characters?");
    const length = prompt
    ("Choose your password length. At least 8 no more than 128 characters");


   
});



function UpperCase (){
    
    }

console.log(UpperCase()); 

function NumberCase (){
    
    }

console.log(NumberCase()); 

function Special (){
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
    }

console.log(Special()); 