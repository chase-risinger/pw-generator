// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


// Write password to the #password input

function pickRandom(charPool) {
  return lettersLower[Math.floor(Math.random() * (charPool.length))]

};
console.log(pickRandom(lettersLower));
console.log(pickRandom(lettersLower));
console.log(pickRandom(lettersLower));


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
