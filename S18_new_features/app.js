// part 1
const firstArray = [5, 2, 10, 12, 7, 8, 12, 4];
const secondArray = [22.2, 33.3, 44.4, 55.5, 100];
const thirdArray = [3, 98, 34, 8, 73, 67, 18, 3, 93];
const fourthArray = [93.5, 27.9, 34.9, 29.9, 25.9, 93.0];


const findAverage = (...nums) => {
    console.log(nums);

    let numsLength = nums.length;
    let total = nums.reduce((total, num) => total + num, 0);
    let average = total / numsLength;

    console.log(`There are ${numsLength} numbers which total ${total}`);
    console.log(`The avg of those numbers is ${average}`);
}

console.log('Numbers and Averages');
findAverage(...firstArray);
findAverage(...secondArray);
findAverage(...thirdArray);
findAverage(...fourthArray);



// part 2
const session1 = [
    'Ann Adams', 'Ann Smith', 'Ben Benson',
    'Carl Cards', 'Daniel Dern', 'Emma Earnest',
    'Frank Forrest', 'Brandon Phillips', 'Willem Dafoe', 'Tim Henson', 'Misha Mansoor'];

const session2 = [
    'Ann Adams', 'Greg Grant', 'Harry Heber',
    'Carl Cards', 'Emma Earnest', 'Jack Jones',
    'Mary Marks', 'Ann Smith', 'Brandon Phillips', 'Tim Henson'];

const allSessions = [...session1, ...session2];
const attendeeSet = new Set([...allSessions]);


const logAttendees = (attendees) => {
    attendees.forEach(person => console.log(person));
}

console.log('\n\n\n\n\nSession Attendees');
console.log(`Numher of attendees at session 1: ${session1.length}`);
console.log(`Number of attendees at session 2: ${session2.length}`);
console.log('\n\nCombine sessions')
console.log(allSessions);
console.log(`Number of attendees at both sessions: ${allSessions.length}`);
logAttendees(allSessions);
console.log('\n\nRemove duplicate attendess');
console.log(attendeeSet);
console.log(`Number of individual attendees: ${attendeeSet.size}`);
logAttendees(attendeeSet);