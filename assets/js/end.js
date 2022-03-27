var username = document.getElementById('username');
var saveScoreBtn = document.getElementById('saveScoreBtn');
var finalScore = document.getElementById('finalScore');
var mostRecentScore = localStorage.getItem('mostRecentScore');


var highScores = JSON.parse(localStorage.getItem("highScores"));
if (!highScores) {
  highScores = [];
};
console.log(highScores);

var MAX_HIGH_SCORES = 5;

finalScore.innerText = "Final Score: " + mostRecentScore;

saveHighScore = function(event) {
  event.preventDefault();
  console.log("clicked the save");
  var score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort( (a,b) => b.score - a.score)
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  // window.location.assign('./highscores.html');
  document.location.href = "./highscores.html";
};

