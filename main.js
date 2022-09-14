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
let winner;

const getComputerChoice = function () {
  const choice = ['rock', 'paper', 'scissors']; // array
  let computerChoice = choice[Math.floor(Math.random() * choice.length)]; // rand 1-3
  return computerChoice;
};

const htmlUpdate = function (winMsg) {
  document.querySelector(
    '.score'
  ).innerHTML = `<h1>${winMsg}<br> Score: player ${playerScore} computer ${computerScore}</h1>`;
};

const playerWins = function () {
  playerScore++;
  htmlUpdate('PLAYER WINS!');
};

const computerWins = function () {
  computerScore++;
  htmlUpdate('COMPUTER WINS!');
};

const draw = function () {
  htmlUpdate();
};

const gameLogic = function (player, computer) {
  if (player == computer) {
    draw();
    htmlUpdate('DRAW');
    return;
  }
  if (
    (player == 'rock' && computer == 'paper') ||
    (player == 'paper' && computer == 'rock') ||
    (player == 'scissors' && computer == 'paper')
  ) {
    playerWins();
  } else if (
    (player == 'rock' && computer == 'scissors') ||
    (player == 'paper' && computer == 'scissors') ||
    (player == 'scissors' && computer == 'rock')
  ) {
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
