import { getData, postData } from './api.js';

function Scoredetail(name, score) {
  this.user = name;
  this.score = score;
}
export default class BoardGame {
  constructor() {
    this.score = [];
  }

    addScoreDetails=(name, score) => {
      const scores = new Scoredetail(name, score);
      postData(scores);
    }

    getScoreDetails = async () => {
      const score = await getData();
      this.score = score;
    }

    displayScores = () => {
      const list = document.getElementById('list-of-score');
      list.innerHTML = '';
      this.score.forEach((score) => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        li.textContent = `${score.user} :`;
        span.textContent = `${score.score}`;
        list.appendChild(li);
        li.appendChild(span);
      });
    };
}
