// Assignment Code
var generateBtn = document.querySelector("#generate");

const possiblities = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+/{}[]:;?<>,.-=",
};



function generatePassword () {
  var numberPasswordLength = prompt("Pick a password length between 8 and 120 characters.");

  if (!numberPasswordLength) {
    return;
  }

  if (numberPasswordLength < 8 || numberPasswordLength > 128) {
  alert ("Please pick a value between 8 and 120.");
  return;
  };

  
  



  //Confirming Characters
  var lowerCaseConfirm = confirm("Do you want to use lowercase letters?");
  var upperCaseConfirm = confirm("Do you want to use uppercase letters?");
  var numberCaseConfirm = confirm("Do you want to use numbers?");
  var specialCharCaseConfirm = confirm("Do you want to use special characters?");


  var totalChar = ""
  if (lowerCaseConfirm === true) {
    totalChar = totalChar +  (possiblities.lowerCase)
  }
  if (upperCaseConfirm === true) {
    totalChar = totalChar + (possiblities.upperCase)
  }
  if (numberCaseConfirm === true) {
    totalChar = totalChar + (possiblities.number)
  }

  if (specialCharCaseConfirm === true) {
    totalChar = totalChar + (possiblities.symbol)
  }






  let password = "";

  //var totalChar = possiblities.lowerCase.concat(possiblities.upperCase,possiblities.number,possiblities.symbol);
  
  


  //Random possiblities
  
    for (let i = 0; i < numberPasswordLength; i++) {
      const totalGen = totalChar [Math.floor(Math.random() * totalChar.length)];
      password = password + totalGen ;
    }



    console.log("<<----->>");
  return password;
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
