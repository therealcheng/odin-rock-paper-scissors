import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector('#counter'));

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = function () {
  const choice = ['rock', 'paper', 'scissors']; // array
  // pick random string from array
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]; // rand 1-3
  // console.log(computerChoice);
  return computerChoice;
};

const playerWins = function () {
  console.log(`PLAYER WINS`);
  playerScore++;
  document.querySelector(
    '.score'
  ).innerHTML = `<h1>Score: player ${playerScore} computer ${computerScore}</h1>`;
};

const computerWins = function () {
  console.log(`COMPUTER WINS`);
  computerScore++;
  document.querySelector(
    '.score'
  ).innerHTML = `<h1>Score: player ${playerScore} computer ${computerScore}</h1>`;
};

const gameLogic = function (player, computer) {
  if (player == computer) {
    return console.log('DRAW');
  }
  if (player == 'rock' && computer == 'paper') {
    playerWins();
  } else if (player == 'rock' && computer == 'scissors') {
    computerWins();
  }
  if (player == 'paper' && computer == 'rock') {
    playerWins();
  } else if (player == 'paper' && computer == 'scissors') {
    computerWins();
  }
  if (player == 'scissors' && computer == 'paper') {
    playerWins();
  } else if (player == 'scissors' && computer == 'rock') {
    computerWins();
  }
};

const input = document.getElementById('choice');
const submit = document.getElementById('submit');

input.addEventListener('click', (e) => {
  e.preventDefault();
  input.value = '';
});

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const playerChoice = input.value.toLowerCase();
  const computerChoice = getComputerChoice();
  console.log(
    `Player chooses: ${playerChoice},`,
    `Computer chooses: ${computerChoice}`
  );
  gameLogic(playerChoice, computerChoice);
});
