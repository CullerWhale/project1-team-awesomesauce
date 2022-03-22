// var questionEl = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

var ourQuestions = [
    {question : "Who is the best teacher?", 
    incorrect_answers : ["Bruce Willis", "Nicholas Cage", "Michelle Pfeiffer"], 
    correct_answer : "Rommel Villagomez" }, 

    {question : "Who is the best TA?", 
    incorrect_answers : ["Arnold Schwarzenegger", "Sylvester Stallone", "Jackie Chan"], 
    correct_answer : "Colin Goodale" }, 

    {question : "Another question?", 
    incorrect_answers : ["Yes! Great idea!", "No!", "Maybe"], 
    correct_answer : "Splunge" } 


];

//Connect to empty question div and answer div
var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
var j = 0;

//insert our questions 
function renderQuestion () {
    var currentQuestion = document.createElement('div');
    currentQuestion.textContent = ourQuestions[j].question;
    questions.appendChild(currentQuestion);
    alert('Noice');

    // for (let i = 0; i < ourQuestions[j].question.length; i++) {
    //     var questionEl = document.getElementById("question");
    //     questionEl.textContent = ourQuestions[j].question

        // var quest = questions.question[i].textContent;
        // questionEl.textContent = quest; 
        // console.log(quest);
    // }

}

renderQuestion();

//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

var checkAnswer = function(answer) {
  if (answer == "3") {}
};


startGame = () => {
  questionCounter = 0;
  score = 0;
 // rest of function  
//   getNewQuestion();
    renderQuestion();
};

// getNewQuestion = () => {

//   if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
//     localStorage.setItem("mostRecentScore", score);
//     // go to end of page
//     //return window.location.assign('./end.html');
//   }
//   questionCounter++;
//   questionCounterText.innerHTML = `${questionCounter}/${MAX_QUESTIONS}`;
// // rest of function
//   acceptingAnswers = true;
// };

// choices.forEach(choice => {
//   choice.addEventListener('click', e => {
//     if(!acceptingAnswers) return;

//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedAnswer = selectedChoice.dataset["number"];

//     // finish function, include if below
//     if (classToApply === "correct") {
//       incrementScore(CORRECT_BONUS);
//     }

//     getNewQuestion();
//   });
// });

// incrementScore = num => {
//   score += num;
//   scoreText.innerHTML = score;
// }

// startGame();