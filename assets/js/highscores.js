// const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

for (i = 0; i < highScores.length; i++) {
  var score = highScores[i];
  var scoreLiEl = $("<li>")
    .addClass("high-score")
    .text(score.name + " - " + score.score);
  $("#highScoresList").append(scoreLiEl);
}