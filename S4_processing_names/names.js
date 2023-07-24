const myName = "Brandon Phillips";
const yourName = "Kim Smith";
const nameList = ["Brandon Phillips", "Kim Smith", "Ana Huertas"];

let firstName = "";
let lastName = "";


function splitName(name) {
    console.log(`Name being processed: ${name}`);
    firstName = name.slice(0, name.indexOf(' '));
    lastName = name.slice(name.indexOf(' ') + 1);
    console.log(`first name ${firstName}, last name ${lastName}`);
}

function reverseName(firstName, lastName) {
    console.log(`reverse name: ${lastName}, ${firstName}`);
}

function greeting(firstName, lastName) {
    const firstInitial = firstName[0];
    console.log(`greeting: Dear ${firstInitial}. ${lastName}`);
}

function processName(name) {
    splitName(name);
    reverseName(firstName, lastName);
    greeting(firstName, lastName);
}

// processName(myName);

nameList.forEach(processName);