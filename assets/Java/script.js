// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M",'N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m",'n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ["!","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


function generatePassword (){

  let passwordLength = parseInt(window.prompt(`How many characters fo you want in your password? You can choose between 8 to 128`))


  if (Number.isNaN(passwordLength)) {
    alert(`Sorry, but that was not a number. Please try again :)`)
    return;
  } else if (passwordLength < 8) {
  alert(`Sorry, but ${passwordLength} is less than 8. Please try again :)`)
    return;
  } else if (passwordLength > 128) {
    alert(`Sorry, but ${passwordLength} is greater than 128. Please try again :)`)
    return;
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    alert(`Great! your password will have ${passwordLength} characters!`)
  }


  //What characters do you want?

  let yesLower = confirm("Would you like lowercase characters in your password?");
  console.log("lowercase:", yesLower);
  let yesUpper = confirm("Would you like to include UPPERCASE characters?");
  console.log("UPPERCASE:", yesUpper);
  let yesNumber = confirm("What about numbers?");
  console.log("Numbers:", yesNumber);
  let yesSpecial = confirm("Last question: Do you want any special characters? ");
  console.log("Special:", yesSpecial);

  if (yesLower === false && yesUpper === false && yesNumber === false && yesSpecial === false) {
    alert("Listen, bub. You have to choose at least one character type"); }


let Array = [];

if (yesLower) {
  Array = Array.concat(lower);
}
if (yesUpper) {
  Array = Array.concat(upper);
}
if (yesNumber) {
  Array = Array.concat(numbers);
}
if (yesSpecial) {
  Array = Array.concat(special);
}

let password = "";
for (let i=0; i < passwordLength; i++){
  let randomCharacter = Math.floor(Math.random() * Array.length);
  password += Array[randomCharacter];

}
return password;
}

console.log(password)
