const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


console.log(highScores);
console.log(highScoresList);

// $('#topFiveScores tr:last').after('<td> </td>');
// Im not sure what to do next but would love to learn


function createRow() {
//find table
var table=document.getElementById('topFiveScores');

//create empty row
row=table.insertrow(0)
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);

cell1.innerHTML = 'New high score!';
cell2.innerHTML = "Another one!";  
};

createRow();


// highScoresList.innerHTML = highScores
//   highScores
//     .map(score => {
//       return `<li class="high-score">${score.name} - ${score.score}</li>`;
//     })
//     .join("");
