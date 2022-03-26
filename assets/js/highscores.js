// const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// highScoresList.innerHTML = highScores
//   highScores
//     .map(score => {
//       return `<li class="high-score">${score.name} - ${score.score}</li>`;
//     })
//     .join("");

for (i = 0; i < highScores.length; i++) {
  var score = highScores[i];
  var scoreLiEl = $("<li>")
    .addClass("high-score")
    .text(score.name + " - " + score.score);
  $("#highScoresList").append(scoreLiEl);
}