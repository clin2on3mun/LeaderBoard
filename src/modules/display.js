const display = (Scores, domObj) => {
  Scores.forEach((score) => {
    domObj.innerHTML += `<li>${score.name}: <span>${score.score}</span></li>`;
  });
};

export default display;