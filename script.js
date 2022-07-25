'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let previousGuess;
let isActive = true;
const check = document.querySelector('.check');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const click = function(){
const guess = Number(document.querySelector('.guess').value);
  // When there is no input
if (!guess) {
  displayMessage('⛔️ No number!');
}
  // When input is less than 1 or higher than 20
else if(guess < 1 | guess > 20){
  displayMessage('⛔️ Invalid number!');
}
  // When player wins
 else if (guess === secretNumber) {
  displayMessage('🎉 Correct Number!');
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector(`h1`).textContent = `Congratulations!`;

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  // When guess is wrong
} else if (guess !== secretNumber) {
  if(previousGuess === guess){
    displayMessage('⛔️ Enter different number!');
  }
  else if (score > 11) {
    displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    score--;
    document.querySelector('.score').textContent = score;
    previousGuess = guess;
  } else {
    displayMessage('😭 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
}
if (document.querySelector(`.score`).textContent === `0` | document.querySelector(`h1`).textContent === `Congratulations!`){
check.classList.add(`hide`);
  }
}

const enter = function(e){
  if(isActive === true){
  if(e.key === `Enter`){
    const guess = Number(document.querySelector('.guess').value);
    // When there is no input
    if (!guess) {
      displayMessage('⛔️ No number!');
    }
      // When input is less than 1 or higher than 20
    else if(guess < 1 | guess > 20){
      displayMessage('⛔️ Invalid number!');
    }
      // When player wins
     else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector(`h1`).textContent = `Congratulations!`;
      isActive = false;
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
  
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if(previousGuess === guess){
        displayMessage('⛔️ Enter different number!');
      }
      else if (score > 11) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
        previousGuess = guess;
      } else {
        score = 0;
        isActive = false;
        displayMessage('😭 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
    if (document.querySelector(`.score`).textContent === `0` | document.querySelector(`h1`).textContent === `Congratulations!`){
      check.classList.add(`hide`);
        }
  }
 }
}

document.addEventListener(`keydown`, enter)
document.querySelector('.check').addEventListener(`click`, click);

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  isActive = true;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.guess').value = '';
  check.classList.remove(`hide`);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
