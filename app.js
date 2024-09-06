// Assignment: IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// Question: 01

// var char = prompt("Enter a character (number or letter):");

// var asciiCode = char.charCodeAt(0);

// if (asciiCode >= 48 && asciiCode <= 57) {
//     alert("You entered a number.");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     alert("You entered an uppercase letter.");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     alert("You entered a lowercase letter.");
// } else {
//     alert("Invalid input. Please enter a valid number or letter.");
// }

// Question: 02

// var number = propmt("Enter a number:");

// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else if (number === 0) {
//     alert("The number is zero.");
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

// Question: 03

// var number = prompt("Enter a number:");

// if (number > 0) {
//     alert("The number is positive.");
// } else if (number < 0) {
//     alert("The number is negative.");
// } else if (number === 0) {
//     alert("The number is zero.");
// } else {
//     alert("Invalid input. Please enter a valid number.");
// }

// Question: 04

// var char = prompt("Enter a character:").toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     alert(true);  // Agar vowel hai to 'true' return hoga
// } else {
//     alert(false);  // Agar vowel nahi hai to 'false' return hoga
// }

// Question: 05

// var correctPassword = "mySecret123";

// var userPassword = prompt("Please enter your password:");

// if (userPassword === "") {
//     // (i) Agar user ne koi password enter nahi kiya, to yeh message show karega
//     alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//     // (ii) Agar user ka password correct hai, to yeh message show karega
//     alert("Correct! The password you entered matches the original password.");
// } else {
//     // Agar user ka password incorrect hai, to yeh message show karega
//     alert("Incorrect password.");
// }

// Question: 06

// var greeting;
// var hour = 13;

// if (hour < 12) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }

// alert(greeting);

// Question: 07

// var time = parseInt(prompt("Enter time in 24-hour clock format (like 1900 for 7 PM):"));

// if (time >= '0000' && time < 1200) {
//     alert("Good Morning!");  // Subah ka waqt
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");  // Dopahar ka waqt
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!");  // Shaam ka waqt
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!");  // Raat ka waqt
// } else {
//     alert("Invalid time input! Please enter a valid time in 24-hour format.");
// }
