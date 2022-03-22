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
    //for loop?
    alert('Good Luck!');    

}

renderQuestion();




//combine incorrect and correct answers on a single basis
a = ourQuestions[0].correct_answer;
console.log(a);
b = ourQuestions[0].incorrect_answers;

c = b.concat([a]);
console.log(c);

//fail to put that into a loop?
function possibleAnswers() {
    for (let i = 0; i < ourQuestions.length; i++) {
        var correctAnswer = ourQuestions[i].correct_answer;
        var incorrectAnswer = ourQuestions[i].incorrect_answers;
        var combinedAnswers = incorrectAnswer.concat([correctAnswer]);
    
        // ourQuestions = ourQuestions.concat(combinedAnswers);
        ourQuestions.concat(combinedAnswers);
        // console.log(ourQuestions[i]);

        //very close:
        // var combinedAnswers = ourQuestions[i].correct_answer.concat([ourQuestions[i].incorrect_answers]);
        // console.log(combinedAnswers)
    }
}

// possibleAnswers();


//put correct and incorrect answers together. WARNING: this forces us to use the logic (user selected answer == correct_answer) to check if answer was correct  since incorrect_answer now includes correct_answer 
function combineAnswers() {
    
    for (let i = 0; i < ourQuestions.length; i++) {
        var incorrectAnswers  = ourQuestions[i].incorrect_answers;
        // var correctAnswer = ourQuestions[i].correct_answer;
        // var allAnswers = incorrectAnswers.push(ourQuestions[i].correct_answer);
        incorrectAnswers.push(ourQuestions[i].correct_answer);
        
    }
    
    // console.log(allAnswers);
    // console.log(incorrectAnswers);
    // console.log(ourQuestions);

}

combineAnswers();


//render answers
var answerList = document.querySelector("#answers");

//render one answer button
// var answer1= document.createElement('button');
// answer1.textContent = ourQuestions[0].incorrect_answers[0]; 
// answerList.appendChild(answer1);
// answer1.addEventListener('click', function() {
//     alert('Success!');
// });


//render possible answers
function renderPossibleAnswers() {
    j = 0;
    for (var i = 0; i < ourQuestions[j].incorrect_answers.length; i++) {
        //create a button for each possible answer 
        var answers = document.createElement('button');
        answers.textContent = ourQuestions[j].incorrect_answers[i];
        answerList.appendChild(answers);
        

        answers.addEventListener("click", function () {
            //check that button works 
            // alert('Success!');
            
            //check if the selected answer was correct. 
            console.log(this.textContent);
            // console.log(ourQuestions);
            if (this.textContent == ourQuestions[j].correct_answer) {
              console.log('question is correct');
              var gif = document.createElement('img');
              gif.src = "./assets/rommel.jpg"
              document.body.appendChild(gif);


              //go to next question
              var nextQuestionBtn = document.createElement('button');
              document.body.appendChild(nextQuestionBtn);
              nextQuestionBtn.textContent = 'Next Question';



              

              //add event listener for next question
              nextQuestionBtn.addEventListener('click', function() {
                alert('Success!');
                document.body.removeChild(gif);
                document.body.removeChild(nextQuestionBtn);
                document.body.removeChild(answerList);
                document.body.removeChild(questions);
                j++;
                i++;
                // nextQuestion();
                var next = document.createElement('button');
                next.textContent = 'test';
                // next.textContent = ourQuestions[j].incorrect_answers[i];
                answerList.appendChild(next);
                //final fail. 



                // how?! nextQuestion();
                
                // how?! renderQuestion(j);

                //Fail
                // var newQuestion = document.createElement('div');
                // newQuestion.textContent = ourQuestions[i].question;
                // questions.appendChild(newQuestion);
              });
              
            } 
        });
    };
};
renderPossibleAnswers();





//redo

//Connect to empty question div and answer div
var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
// var j = 0;


function nextQuestion(j) {
    for (var i = 0; i < ourQuestions[j].incorrect_answers.length; i++) {
        //create a button for each possible answer 
        var answers = document.createElement('button');
        answers.textContent = ourQuestions[j].incorrect_answers[i];
        answerList.appendChild(answers);

        
//one way to insert our question
    // var currentQuestion = document.createElement('div');
    // currentQuestion.textContent = ourQuestions[j].question;
    // questions.appendChild(currentQuestion);


}


//loop through questions fail 

// console.log(ourQuestions);
// function nextQuestion() {
//     console.log(ourQuestions.length);


//     for (let i = 0; i < ourQuestions.length; i++) {
//         const currentQuestion = ourQuestions[i+1];
        //HOW?! renderQuestion();

        // var nextQuestion = document.createElement('div');
        // nextQuestion.textContent = ourQuestions[j].question;
        // questions.appendChild(nextQuestion);
}

// }











startGame = () => {
    questionCounter = 0;
    score = 0;
   // rest of function  
  //   getNewQuestion();
      renderQuestion();
      renderAnswers();
      
  };



// older work 


//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;

var checkAnswer = function(answer) {
  if (answer == "3") {}
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