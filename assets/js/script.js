// create the url that will be used to call Open Trivia DB
// currently the number of questions is hardcoded to be 10, but this would be changed if we decide to let the user choose parameters.
const questionsAPI = 10;
var apiUrl = 'https://opentdb.com/api.php?amount='+ questionsAPI;

// 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple'

var giphyTerm = 'ryan+gosling'

var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + giphyTerm + "&api_key=XHlbLemqPzGoiaILFj0ZpJCpHAibx6cT&limit=1"

//Connect to empty divs for the question prompt, answer choices, and the gifs.
var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
var gifContainerEl = document.querySelector("#gif-page");
var gifImageEl = document.querySelector('#gifImage');


fetch(giphyUrl).then(function(response) {
    // console.log(response);
    if (response.ok) {
        // var render = response.json();
        response.json().then(function (data) {
            // we can change the fixed_height to something else depending on how we want the gif to display
            var render = data.data[0].images.fixed_height.url; 
            console.log(render);
            gifImageEl.src = render;

        })
        
        // console.log(response.json());
        // gifImageEl.src = response.url.textContent;

    }


})


// if (response.ok) {
//             response.json().then(function (data) {

//                 ourQuestions = data.results;
//                 console.log(ourQuestions[0].question);
//                 // add the correct answer to the list of incorrect answers for easier display
//                 combineAnswers();
//                 // render the first question and its possible answers
//                 renderQuestion();
//                 renderPossibleAnswers();

var ourQuestions = [];





// var questionEl = document.getElementById("question");
// const choices = Array.from(document.getElementsByClassName("choice-text"));
// const questionCounterText = document.getElementById('questionCounter');
// const scoreText = document.getElementById('score');

// var currentQuestion = {};
// var acceptingAnswers = false;

// create variable for the running score total
var score = 0;
// create variable to track which question we are on
// this corresponds to the index in the ourQuestions array.
var questionCounter = 0;

// var availableQuestions = [];

// remove the imageSRC property from this when we add code to call GIPHY API
// var ourQuestions = [
//     {question : "Who is the best teacher?", 
//     incorrect_answers : ["Bruce Willis", "Nicholas Cage", "Michelle Pfeiffer"], 
//     correct_answer : "Rommel Villagomez",
//     imageSRC: "./assets/rommel.jpg" }, 

//     {question : "Who is the best TA?", 
//     incorrect_answers : ["Arnold Schwarzenegger", "Sylvester Stallone", "Jackie Chan"], 
//     correct_answer : "Colin Goodale",
//     imageSRC: "./assets/colin.jpg" }, 

//     {question : "Another question?", 
//     incorrect_answers : ["Yes! Great idea!", "No!", "Maybe"], 
//     correct_answer : "Splunge",
//     imageSRC: "./assets/splunge.jpg" } 


// ];

// function to handle clicks on the game page (called from event listener at bottom of file)
mainClickHandler = function(event) {
    // prevent the click from refreshing the page
    event.preventDefault();

    // get the target element of the click. This will be used to figure out what needs to be done
    targetEl = event.target;

    // if the clicked element is an answer choice button, get the text from the button and check the answer
    // after checking the answer, display the gif page (currently done from the checkAnswer function)
    if (targetEl.matches(".choice-text")){
        var answerText = targetEl.textContent;
        checkAnswer(answerText);
    }
    // otherwise, check if the clicked element is the button to go to the next question
    else if (targetEl.matches(".next-question")) {
        // increase the question counter by 1 (since we need to go to the next question)
        questionCounter++;
        // remove the content from the gifContainer, since we no longer want to display the gif
        gifContainerEl.innerHTML = "";
        // if we still have questions left, then render the next question and its answers
        if (questionCounter < ourQuestions.length) {
            renderQuestion();
            renderPossibleAnswers();
        }
        // if we ran out of questions, then we need to end the quiz
        else {
            // change this part to calling a function to end the quiz
            console.log("Ending quiz.");
            gifContainerEl.innerHTML = "We ran out of questions. We don't have an end quiz functionality yet";
        }
    }
}



//insert our questions 
function renderQuestion () {
    var currentQuestion = document.createElement('div');
    // make the text content of the new div be the question prompt for the current question
    currentQuestion.innerHTML = ourQuestions[questionCounter].question;
    // questions=document.querySelector('#question');
    questions.appendChild(currentQuestion);
    //for loop?  

}

// renderQuestion();

//put correct and incorrect answers together. WARNING: this forces us to use the logic (user selected answer == correct_answer) to check if answer was correct  since incorrect_answer now includes correct_answer 
function combineAnswers() {
    
    for (let i = 0; i < ourQuestions.length; i++) {
        var incorrectAnswers  = ourQuestions[i].incorrect_answers;
        incorrectAnswers.push(ourQuestions[i].correct_answer);
        
    }

}

// combineAnswers();


// check if the answer is correct, and go to the gif page
function checkAnswer(answerText) {
    if (answerText == ourQuestions[questionCounter].correct_answer) {
        console.log('question is correct');
    } else {
        console.log('question is incorrect');
    };

    // remove the html for the question prompt and answer choices
    questions.innerHTML = "";
    answerList.innerHTML = "";
    // display the gif in the gifContainer
    var gifEl = document.createElement('img');
    // when we are ready to call the GIPHY API, this will need to be changed
    gifEl.src = ourQuestions[questionCounter].imageSRC;
    gifContainerEl.appendChild(gifEl);

    // create the button to go to the next question
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
// renderPossibleAnswers();


// start the quiz
startQuiz = function() {
    // just in case, reset the values of the question counter and the score
    questionCounter = 0;
    score = 0;
    // rest of function  

    
    
    //fetch OpenTDB api
    fetch(apiUrl).then(function (response) {
        // console.log(response);

        if (response.ok) {
            response.json().then(function (data) {

                ourQuestions = data.results;
                console.log(ourQuestions[0].question);
                // add the correct answer to the list of incorrect answers for easier display
                combineAnswers();
                // render the first question and its possible answers
                renderQuestion();
                renderPossibleAnswers();

                
            });
        }
        else {

        }
    }

    )


  //   getNewQuestion();
      
      
};

// start the quiz when this file is loaded (note that this file is not connected to index.html)
startQuiz();

// event listener for all clicks on the page
document.addEventListener("click", mainClickHandler);


// older work 


//constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 20;
