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

    const length = prompt
    ("Choose your password length. At least 8 no more than 128 characters");
    const lowerCase = prompt
    ("Do you want Lowercase?");
    const upperCase = prompt
    ("Do you want Uppercase?");
    const numeric = prompt
    ("Do you want Numbers?");
    const special = prompt
    ("Do you want Special Characters?");
    


   
});

// function writePassword("LowerCase" + "UpperCase" + "NumberCase" + "Special" + "length") {
//     const password = generatePassword(
     
//       if (confirm === LowerCase)
//       { 
//           (return String.fromCharCode (Math.floor(Math.random() * 26) + 97);)
//     } 

//       if (confirm === UpperCase)
//       {
//         (return String.fromCharCode (Math.floor(Math.random() * 26) + 65);)
//       }

//       if (confirm === NumberCase)
//       {
//           (return String.fromCharCode (Math.floor(Math.random() * 10) + 48);)
//       }

//       if (confirm === NumberCase)
//     {
//         (return String.fromCharCode (Math.floor(Math.random() * 10) + 48);)
//     }
      
//        if (confirm === Special)
//        {
//            (return String.fromCharCode (Math.floor(Math.random() * 15) + 33);)
//        }



//     );
//     const passwordText = document.querySelector("#password");
  
//     passwordText.value = password;
  
//   }



// Functions, CharCode (http://net-comber.com/charset.html)

function LowerCase (){
return String.fromCharCode (Math.floor(Math.random() * 26) + 97);
}

console.log(LowerCase()); 

function UpperCase (){
    return String.fromCharCode (Math.floor(Math.random() * 26) + 65);
    }

console.log(UpperCase()); 

function NumberCase (){
    return String.fromCharCode (Math.floor(Math.random() * 10) + 48);
    }

console.log(NumberCase()); 

function Special (){
    return String.fromCharCode (Math.floor(Math.random() * 15) + 33);
    }

console.log(Special()); 