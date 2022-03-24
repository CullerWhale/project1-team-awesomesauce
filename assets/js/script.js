const questionsAPI = 10;
var apiUrl = 'https://opentdb.com/api.php?amount='+ questionsAPI;

// 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple'



// var questionEl = document.getElementById("question");
// const choices = Array.from(document.getElementsByClassName("choice-text"));
// const questionCounterText = document.getElementById('questionCounter');
// const scoreText = document.getElementById('score');

// var currentQuestion = {};
// var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
// var availableQuestions = [];

// remove the imageSRC property from this when we add code to call GIPHY API
var ourQuestions = [
    {question : "Who is the best teacher?", 
    incorrect_answers : ["Bruce Willis", "Nicholas Cage", "Michelle Pfeiffer"], 
    correct_answer : "Rommel Villagomez",
    imageSRC: "./assets/rommel.jpg" }, 

    {question : "Who is the best TA?", 
    incorrect_answers : ["Arnold Schwarzenegger", "Sylvester Stallone", "Jackie Chan"], 
    correct_answer : "Colin Goodale",
    imageSRC: "./assets/colin.jpg" }, 

    {question : "Another question?", 
    incorrect_answers : ["Yes! Great idea!", "No!", "Maybe"], 
    correct_answer : "Splunge",
    imageSRC: "./assets/splunge.jpg" } 


];

mainClickHandler = function(event) {
    targetEl = event.target;

    if (targetEl.matches("#start-quiz")) {
        startQuiz();
    }
    else if (targetEl.matches(".choice-text")){
        var answerText = targetEl.textContent;
        checkAnswer(answerText);
    }
    else if (targetEl.matches(".next-question")) {
        questionCounter++;
        gifContainerEl.innerHTML = "";
        if (questionCounter < ourQuestions.length) {
            renderQuestion();
            renderPossibleAnswers();
        }
        else {
            // change this part to calling a function to end the quiz
            console.log("Ending quiz.");
            gifContainerEl.innerHTML = "We ran out of questions. We don't have an end quiz functionality yet";
        }
    }
}

//Connect to empty question div and answer div
var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
var gifContainerEl = document.querySelector("#gif-page");

//insert our questions 
function renderQuestion () {
    var currentQuestion = document.createElement('div');
    currentQuestion.textContent = ourQuestions[questionCounter].question;
    questions.appendChild(currentQuestion);
    //for loop?  

}

renderQuestion();

//put correct and incorrect answers together. WARNING: this forces us to use the logic (user selected answer == correct_answer) to check if answer was correct  since incorrect_answer now includes correct_answer 
function combineAnswers() {
    
    for (let i = 0; i < ourQuestions.length; i++) {
        var incorrectAnswers  = ourQuestions[i].incorrect_answers;
        incorrectAnswers.push(ourQuestions[i].correct_answer);
        
    }

}

combineAnswers();

function checkAnswer(answerText) {
    if (answerText == ourQuestions[questionCounter].correct_answer) {
        console.log('question is correct');
    } else {
        console.log('question is incorrect');
    };

    questions.innerHTML = "";
    answerList.innerHTML = "";
    var gifEl = document.createElement('img');
    gifEl.src = ourQuestions[questionCounter].imageSRC;
    gifContainerEl.appendChild(gifEl);

    var nextQuestionBtn = document.createElement('button');
    nextQuestionBtn.className = "next-question"
    nextQuestionBtn.textContent = 'Next Question';
    gifContainerEl.appendChild(nextQuestionBtn);
}

//render answers
var answerList = document.querySelector("#answers");

//render possible answers
function renderPossibleAnswers() {
    for (var i = 0; i < ourQuestions[questionCounter].incorrect_answers.length; i++) {
        //create a button for each possible answer 
        var answerButtonEl = document.createElement('button');
        answerButtonEl.className = "choice-text"
        answerButtonEl.textContent = ourQuestions[questionCounter].incorrect_answers[i];
        answerList.appendChild(answerButtonEl);
    };
};
renderPossibleAnswers();

startGame = function() {
    questionCounter = 0;
    score = 0;
   // rest of function  
  //   getNewQuestion();
      renderQuestion();
      renderAnswers();
      
};

document.addEventListener("click", mainClickHandler);


// older work 


//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;
