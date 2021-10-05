// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '/', ',', '.', '?'];
var pwPool = [];
var includeLower = false;
var includeUpper = false;
var includeNum = false;
var includeSpec = false;
var fillOutForm = true;
// Write password to the #password input

function pickRandom(charPool) {
  return charPool[Math.floor(Math.random() * (charPool.length))]

};

function check() {
  if (document.getElementById("lower-case").checked === true) {
    includeLower = true;
    pwPool = pwPool.concat(lettersLower);
    console.log(pwPool);
  }
  if (document.getElementById("upper-case").checked === true) {
    includeUpper = true;
    pwPool = pwPool.concat(lettersUpper);
    console.log(pwPool);
  }
  if (document.getElementById("numbers").checked === true) {
    includeNum = true;
    pwPool = pwPool.concat(numbers);
    console.log(pwPool);
  }
  if (document.getElementById("spec-chars").checked === true) {
    includeSpec = true;
    pwPool = pwPool.concat(specChars);
    console.log(pwPool);
  }
}

function noUserInput() {
  if (!document.getElementById("spec-chars").checked && !document.getElementById("numbers").checked &&
    !document.getElementById("upper-case").checked && !document.getElementById("lower-case").checked) {
    window.alert("Please Pick at least one character-type option.");
  }
  if (!document.getElementById("char-length").value) {
    window.alert("Please select how many characters.");
  }

}

function generatePassword(charNum) {
  pw = [];
  for (var i = 0; i < charNum; i++) {
    pw.push(pickRandom(pwPool));
  };
  return pw;

}


function writePassword() {
  noUserInput()
  var charNum = parseInt(document.getElementById("char-length").value);
  check()
  var password = generatePassword(charNum).join('');
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  pwPool = [];
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);