import './styles.css';
import BoardGame from './modules/gameFunctionality.js';

const form = document.querySelector('form');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refresh = document.querySelector('.refresh');

const board = new BoardGame();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerName = name.value;
  const playerScore = score.value;
  board.addScoreDetails(playerName, playerScore);
  form.reset();
});

const loadScore = async () => {
  await board.getScoreDetails();
  board.displayScores();
};
refresh.addEventListener('click', () => {
  loadScore();
});

window.onload = () => {
  loadScore();
};
