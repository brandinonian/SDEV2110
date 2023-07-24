let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let specials = ['!', '@', '#', '$', '%', '&', '?'];

let charSet = 0;
let charIndex = 0;
let passChar = "";
let password = "";


for (let i = 0; i < 12; i++) {
    
    charSet = Math.floor(Math.random() * 4);

    if (charSet === 0){
        charIndex = Math.floor(Math.random() * 25);
        passChar = upperCase[charIndex];
    } else if (charSet === 1){
        charIndex = Math.floor(Math.random() * 25);
        passChar = lowerCase[charIndex];
    } else if (charSet === 2){
        charIndex = Math.floor(Math.random() * 9);
        passChar = nums[charIndex];
    } else if (charSet === 3){
        charIndex = Math.floor(Math.random() * 6);
        passChar = specials[charIndex];
    }
    
    password += passChar;
}

console.log(`New password: ${password}`);