// Assignment Code
var generateBtn = document.querySelector("#generate");


//Function to generatePassword
function generatePassword(){
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
  var charnum = "0123456789";
  var Uchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lchars = "abcdefghijklmnopqrstuvwxyz";
  var specialchars = "!@#$%^&*";

  // var pcriteria = ["lowercase", "uppercase", "numeric", "schar"];
  var lowercase = confirm ("Would you like your password to have lowercase?");
  console.log("lowercase is "+ lowercase);
  var uppercase = confirm ("Would you like your password to have uppercase?");
  console.log("Uppercase is "+ uppercase);
  var numeric = confirm ("Would you like your password to have numeric?");
  console.log("numeric is "+ numeric);
  var schar = confirm ("Would you like your password to have special characters?");
  console.log("special char is "+ schar);

  var string_length = prompt("How long would you like your password to be? Choose between 8 to 128");
  var string = '';
  for (var i=0; i<string_length; i++) {

    // function createRN(randomn){
    // //generate random number to var=randomn
    // var randomn = Math.floor(Math.random() * chars.length);  
    // return randomn();
    // }



    var randomn = Math.floor(Math.random() * chars.length);  
    // var randomnum = Math.floor(Math.random() * lchars.length);  
    // var randomnum2 = Math.floor(Math.random() * Uchars.length);  
    // var randomnum3 = Math.floor(Math.random() * charnum.length);  
    // var randomnum4 = Math.floor(Math.random() * specialchars.length); 
    // console.log(randomnum);
    // console.log(randomnum2);
    // console.log(randomnum3);
    // console.log(randomnum4); 
      // //check conditions
      // if (lowercase === true){
      //   var randomnum = Math.floor(Math.random() * lchars.length);  
      //   console.log(randomnum);
      // } else
      // if (uppercase === true){
      //   var randomnum2 = Math.floor(Math.random() * Uchars.length);  
      //   console.log(randomnum2);
      // } else     
      // if (charnum === true){
      //   var randomnum3 = Math.floor(Math.random() * charnum.length);  
      //   console.log(randomnum3);
      // } else if (schar === true){
      //   var randomnum4 = Math.floor(Math.random() * specialchars.length); 
      //   console.log(randomnum4); 
      // }
      

      string += chars.substring(randomn,randomn+1);
  }
  return string;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password (DONE)
// THEN I am presented with a series of prompts for password criteria (DONE)
// WHEN prompted for password criteria (DONE)
// THEN I select which criteria to include in the password (DONE)
// WHEN prompted for the length of the password (DONE)
// THEN I choose a length of at least 8 characters and no more than 128 characters (DONE)
// WHEN prompted for character types to include in the password (DONE)
// THEN I choose lowercase, uppercase, numeric, and/or special characters (DONE)
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
