const employees = ['Brandon Phillips 83649', 'Toby Dawson 92374', 'Peggy Hatfield 93654', 'Korey Blankenship 27496', 'Hosea Mcdowell 95832'];

let firstName = '';
let lastName = '';
let employID = '';

let firstLetter = '';
let lastSeven = '';
let digits = '';

let newEmail = '';

function getData(user) {
    firstName = user.slice(0, user.indexOf(' '));
    lastName = user.slice(user.indexOf(' ') + 1, user.lastIndexOf(' '));
    employID = user.slice(user.lastIndexOf(' ') + 1);
}

function trimData() {
    firstLetter = firstName.slice(0, 1);
    firstLetter = firstLetter.toLowerCase();
    lastSeven = lastName.slice(0, 7);
    lastSeven = lastSeven.toLowerCase();
    digits = employID.slice(0, 2);
}

function generateEmail(user) {
    console.log('Generating email address...');
    console.log(`data to process: ${user}`);
    getData(user);
    console.log(`get data: first name: ${firstName}, last name: ${lastName}, ID: ${employID}`);
    trimData();
    console.log(`chop it: first name letter: ${firstLetter}, last name group: ${lastSeven}, id digits: ${digits}`);
    newEmail = lastSeven + firstLetter + digits + '@company.com';
    console.log(newEmail);
}


employees.forEach(generateEmail);