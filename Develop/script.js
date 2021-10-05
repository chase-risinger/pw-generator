// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var lettersUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', '/'];
var pwPool = [];
var includeLower = false;
var includeUpper = false;
var includeNum = false;
var includeSpec = false;
var fillOutForm = true;

// Write password to the #password input

function getNumberOfChars() {
  var numberOfChars = window.prompt("How many characters? 8-128");
  if (numberOfChars < 8 || numberOfChars > 128) {
    window.alert("Please enter a number between 8 and 128");
    return false
  }
  else {
    return numberOfChars
  }

}

function determineCharType() {
  var includeLower1 = window.confirm("Would you like to include Lower Case?")
  var includeUpper1 = window.confirm("Would you like to include Upper Case?")
  var includeNum1 = window.confirm("Would you like to include Numbers?")
  var includeSpec1 = window.confirm("Would you like to include Special Characters?")

}

function pickRandom(charPool) {
  return charPool[Math.floor(Math.random() * (charPool.length))]

};

function check() {
  if (includeLower1) {
    pwPool = pwPool.concat(lettersLower);
    console.log(pwPool);
  }
  if (includeUpper1) {
    pwPool = pwPool.concat(lettersUpper);
    console.log(pwPool);
  }
  if (includeNum1) {
    pwPool = pwPool.concat(numbers);
    console.log(pwPool);
  }
  if (includeSpec1) {
    pwPool = pwPool.concat(specChars);
    console.log(pwPool);
  }
}

function noUserInput() {
  if (!includeLower1 || !includeUpper1 || !includeNum1 || !includeSpec1) {
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
  getNumberOfChars()
  determineCharType()
  noUserInput()
  var charNum = numberOfChars;
  check()
  var password = generatePassword(charNum).join('');
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  pwPool = [];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
