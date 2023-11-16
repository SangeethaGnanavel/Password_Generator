// Global Variables
let passwordLength;
let bLowercase = false;
let bUppercase = false;
let bNumeric = false;
let bSpecial = false;
let password;
let generateBtn = document.querySelector("#generate");

// Function to Generate random password
function writePassword() {
  GetPasswordLength();
  GetCharacterTypes();
  GeneratePassword();
  // display generated password
  document.getElementById("password").value = password;
}
// Function to check the length of the password
function GetPasswordLength() {
  while (true) {
    passwordLength = window.prompt("Enter length of your password");
    if (passwordLength < 8 || passwordLength >= 128) {
      alert(
        "Choose a length of at least 8 characters and no more than 128 characters"
      );
    } else break;
  }
}
// Function to get the character type for the password
function GetCharacterTypes() {
  while (true) {
    bLowercase = window.confirm("Should Password include Lowercase letter?");
    bUppercase = window.confirm("Should Password include Uppercase letter?");
    bNumeric = window.confirm("Should Password include Number value?");
    bSpecial = window.confirm("Should Password include Special Charecter?");
    // validate atleast one character type selection
    if (!(bLowercase || bUppercase || bNumeric || bSpecial)) {
      alert("At least one of the character type should be selected");
    } else break;
  }
}
// function to generate random password
function GeneratePassword() {
  let chars = "";
  let charNumeric = "0123456789";
  let charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charLower = "abcdefghijklmnopqrstuvwxyz";
  let charSpecial = "!”#$%&’()*+,-./:;<=>?@[]^_`{|}~";
  // Build string based on user selection of character type
  if (bLowercase) {
    chars = chars + charLower;
  }
  if (bUppercase) {
    chars = chars + charUpper;
  }
  if (bNumeric) {
    chars = chars + charNumeric;
  }
  if (bSpecial) {
    chars = chars + charSpecial;
  }

  let regeneratepasswordbLcase = 0;
  let regeneratepasswordbUcase = 0;
  let regeneratepasswordbNumeric = 0;
  let regeneratepasswordbSpecial = 0;

  do {
    password = "";
    //random password generator
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length + 1);
      password += chars.charAt(randomNumber);
    }

    let passwordcharArray = password.split("");
    //Logic to check atleast one character presence from user selection
    if (bLowercase) {
      for (let index = 0; index < passwordcharArray.length - 1; index++) {
        if (charLower.indexOf(passwordcharArray[index]) >= 0) {
          regeneratepasswordbLcase = 0;
          break;
        } else {
          regeneratepasswordbLcase = 1;
        }
      }
    }

    if (bUppercase) {
      for (let index = 0; index < passwordcharArray.length - 1; index++) {
        if (charUpper.indexOf(passwordcharArray[index]) >= 0) {
          regeneratepasswordbUcase = 0;
          break;
        } else {
          regeneratepasswordbUcase = 1;
        }
      }
    }

    if (bNumeric) {
      for (let index = 0; index < passwordcharArray.length - 1; index++) {
        if (charNumeric.indexOf(passwordcharArray[index]) >= 0) {
          regeneratepasswordbNumeric = 0;
          break;
        } else {
          regeneratepasswordbNumeric = 1;
        }
      }
    }

    if (bSpecial) {
      for (let index = 0; index < passwordcharArray.length - 1; index++) {
        if (charSpecial.indexOf(passwordcharArray[index]) >= 0) {
          regeneratepasswordbSpecial = 0;
          break;
        } else {
          regeneratepasswordbSpecial = 1;
        }
      }
    }
  } while (
    // Continue regenerate password if atleast one character is not present from user selection
    regeneratepasswordbLcase == 1 ||
    regeneratepasswordbUcase == 1 ||
    regeneratepasswordbNumeric == 1 ||
    regeneratepasswordbSpecial == 1
  );
}

generateBtn.addEventListener("click", writePassword);
