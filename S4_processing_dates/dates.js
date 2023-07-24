const date = "9/4/2006";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let mm = "";
let dd = "";
let yy = "";

function deconstruct(date) {
    mm = date.slice(0, date.indexOf('/'));
    dd = date.slice(date.indexOf('/') + 1, date.lastIndexOf('/'));
    yy = date.slice(date.lastIndexOf('/') + 1);

}

function standardFormat () {
    const monthName = months[mm - 1];
    const standardDate = `${monthName} ${dd}, ${yy}`;
    return `standard format: ${standardDate}`;
}

function europeanFormat () {
    const euroDate = `${dd}/${mm}/${yy}`;
    return `euro format: ${euroDate}`;
}

function militaryFormat () {
    const monthName = months[mm - 1];
    const militaryDate = `${dd}, ${monthName} ${yy}`;
    return `military format: ${militaryDate}`;
}

function altFormat () {
    const altDate = `MM = ${mm}, DD = ${dd}, YY = ${yy}`;
    return altDate;
}

console.log(date);
deconstruct(date);
console.log(standardFormat(date));
console.log(europeanFormat(date));
console.log(militaryFormat(date));
console.log(altFormat(date));
