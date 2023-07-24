const contestants = [
{coder: "Brandon", score: 5.7, speed: 72 },
{coder: "Holly", score: 4.5, speed: 41},
{coder: "Jaime", score: 3.3, speed: 71},
{coder: "David", score: 7.8, speed: 79},
{coder: "Peggy", score: 6.1, speed: 54},
{coder: "Bert", score: 8.0, speed: 55},
{coder: "Eric", score: 4.9, speed: 47},
{coder: "Van", score: 6.5, speed: 73},
{coder: "Darin", score: 5.1, speed: 48},
{coder: "William", score: 3.8, speed: 39}
]

// list participants
console.log('Programming Contest Participants')
contestants.forEach(contestant => console.log(`${contestant.coder} scored ${contestant.score} in ${contestant.speed} minutes`));

console.log('\n');

// filter for BEST
const bestCoders = contestants.filter(contestant => {
    return contestant.score > 5 && contestant.speed < 60;
});

console.log(`After Filtering for BEST, array is ${bestCoders.length}`);
bestCoders.forEach(contestant => {
    console.log(`${contestant.coder} scored ${contestant.score} in ${contestant.speed} minues`)
});

console.log('\n');

// filter for GOOD
const goodCoders = contestants.filter(contestant => {
    return contestant.score > 5 || contestant.speed < 60;
});

console.log(`After Filtering for GOOD, array is ${goodCoders.length}`);
goodCoders.forEach(contestant => {
    console.log(`${contestant.coder} scored ${contestant.score} in ${contestant.speed} minues`)
});

console.log('\n')

// sort BEST
bestCoders.sort((a, b) => b.score - a.score);
console.log('Programming Contest, BEST, sorted by score')
console.log(`Style Gold goes to ${bestCoders[0].coder}, score of ${bestCoders[0].score}`);
console.log(`Style Silver goes to ${bestCoders[1].coder}, score of ${bestCoders[1].score}`);
console.log(`Style Bronze goes to ${bestCoders[2].coder}, score of ${bestCoders[2].score}`);

bestCoders.sort((a, b) => a.speed - b.speed);
console.log('Programming Contest, BEST, sorted by speed')
console.log(`Speed Gold goes to ${bestCoders[0].coder}, speed of ${bestCoders[0].speed}`);
console.log(`Speed Silver goes to ${bestCoders[1].coder}, speed of ${bestCoders[1].speed}`);
console.log(`Speed Bronze goes to ${bestCoders[2].coder}, speed of ${bestCoders[2].speed}`);

console.log('\n')

// sort GOOD
goodCoders.sort((a, b) => b.score - a.score);
console.log('Programming Contest, GOOD, sorted by score')
console.log(`Style Gold goes to ${goodCoders[0].coder}, score of ${goodCoders[0].score}`);
console.log(`Style Silver goes to ${goodCoders[1].coder}, score of ${goodCoders[1].score}`);
console.log(`Style Bronze goes to ${goodCoders[2].coder}, score of ${goodCoders[2].score}`);


goodCoders.sort((a, b) => a.speed - b.speed);
console.log('Programming Contest, GOOD, sorted by speed')
console.log(`Speed Gold goes to ${goodCoders[0].coder}, speed of ${goodCoders[0].speed}`);
console.log(`Speed Silver goes to ${goodCoders[1].coder}, speed of ${goodCoders[1].speed}`);
console.log(`Speed Bronze goes to ${goodCoders[2].coder}, speed of ${goodCoders[2].speed}`);