const container = document.querySelector('.container');
const form = document.querySelector('.guess-form');
const guessField = document.querySelector('.guessField');
const guesses = document.querySelector('.guesses');
const result = document.querySelector('.result');

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Number: ' + randomNumber);
let numGuesses = 0;

form.addEventListener('submit', e => {
    e.preventDefault();

    let userGuess = Number(guessField.value);
    numGuesses += 1;

    // display previous guesses
    if(numGuesses == 1){
        guesses.innerHTML = `Previous guesses: ${userGuess}  `;
    } else {
        guesses.innerHTML += `${userGuess}  `;
    }

    // test the user guess
    if(userGuess == randomNumber){
        result.innerHTML = `Well done! ${randomNumber} was correct!`;
        result.setAttribute('class', 'justRight');
        gameOver();
        console.log('win');
    } else if(numGuesses == 10){
        result.innerHTML = '!!! Too many attempts, GAME OVER !!!';
        result.setAttribute('class', 'tooMany');
        gameOver();
        console.log('too many guesses');
    } else if(userGuess > randomNumber){
            result.innerHTML = 'WRONG, that guess was too BIG';
            result.setAttribute('class', 'tooBig');
            console.log('too big');
    } else {
        result.innerHTML = 'WRONG, that guess was too small';
        result.setAttribute('class', 'tooSmall');
        console.log('too small');
    }
});

function gameOver() {
    guessField.disabled = true;

    // add reset button
    const resetButton = document.createElement('button');
    resetButton.innerHTML = 'Start new game';
    container.appendChild(resetButton);
    resetButton.focus();

    // reset the game
    resetButton.addEventListener('click', e => {
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessField.value = null;
        guesses.innerHTML = '';
        result.innerHTML = '';
        result.classList.remove('justRight', 'tooMany');
        randomNumber = Math.floor(Math.random() * 100) + 1;
        numGuesses = 0;
        guessField.focus();
        console.log('reset');
        console.log('New number: ' + randomNumber);
    });
}