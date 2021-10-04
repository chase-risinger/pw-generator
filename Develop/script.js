// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '='];
var includeLower = false;
var includeUpper = false;
var includeNum = false;
var includeSpec = false;
var fillOutForm = true;
// Write password to the #password input

function pickRandom(charPool) {
  return lettersLower[Math.floor(Math.random() * (charPool.length))]

};

function check() {
  if (document.getElementById("lower-case").checked === true) {
    includeLower = true;
    console.log('include lower');
  }
  if (document.getElementById("upper-case").checked === true) {
    includeUpper = true;
    console.log('include upper');
  }
  if (document.getElementById("numbers").checked === true) {
    includeNum = true;
    console.log('include number');
  }
  if (document.getElementById("spec-chars").checked === true) {
    includeSpec = true;
    console.log('include spec');
  }
}

function generatePassword(charNum) {
  pw = [];
  for (var i = 0; i < charNum; i++) {
    pw.push(pickRandom(lettersLower));
  };
  return pw;

}


function writePassword() {
  var charNum = parseInt(document.getElementById("char-length").value);
  console.log(charNum);
  var password = generatePassword(charNum);
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
