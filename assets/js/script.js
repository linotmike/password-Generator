var generateBtn = document.querySelector("#generate");

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var specialCharacter = "!@#$%^&*()";

function generatePassword() {
 
  var length = prompt("how many characters would you like?");
  if (length < 8 || length > 128) {
    alert("password can only be 8 to 120 characters long");
  }
  
  var password = ""; 
  var characters = "";
  var lowercaseConfirm = confirm("Do you want to include lowercase ?"); 
  var uppercaseConfirm = confirm("Do you want to include uppercase ?"); 
  var numericConfirm = confirm("Do you want to include numeric ?"); 
  var specialCharacterConfirm = confirm(
    "Do you want to include specialCharacter ?"
  ); 
  if (lowercaseConfirm) {
    characters.concat(lowercase);
    characters = characters.concat(lowercase);
  }

  if (uppercaseConfirm) {
    characters = characters.concat(uppercase);
  }

  if (numericConfirm) {
    characters = characters.concat(numeric);
  }

  if (specialCharacterConfirm) {
    characters = characters.concat(specialCharacter);
  }
  console.log(characters);
 

  if (
    !lowercaseConfirm &&
    !uppercaseConfirm &&
    !numericConfirm &&
    !specialCharacterConfirm
  ) {
    alert("you must select at least one character");
    return;
    
  }

  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}


function writePassword() {
  var length = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = length;
}

generateBtn.addEventListener("click", writePassword);
