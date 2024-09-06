// Function to check the type of character
var checkCharacter;
// Ensure the input is a single character
if (char.length !== 1) {
    console.log("Please enter a single character.");
    return;
}

// Get the ASCII code of the character
const asciiCode = char.charCodeAt(0);

// Check if the character is a number
if (asciiCode >= 48 && asciiCode <= 57) { // ASCII codes for '0' to '9'
    console.log("The character is a number.");
}
// Check if the character is an uppercase letter
else if (asciiCode >= 65 && asciiCode <= 90) { // ASCII codes for 'A' to 'Z'
    console.log("The character is an uppercase letter.");
}
// Check if the character is a lowercase letter
else if (asciiCode >= 97 && asciiCode <= 122) { // ASCII codes for 'a' to 'z'
    console.log("The character is a lowercase letter.");
}
// Character is none of the above
else {
    console.log("The character is neither a number nor a letter.");
}


