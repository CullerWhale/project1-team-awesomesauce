
// currently the number of questions is hardcoded to be 10, but this would be changed if we decide to let the user choose parameters.
const questionsAPI = 10;

const CORRECT_BONUS = 10;

var categorySelection = localStorage.getItem('categoryNumber'); 
var apiUrl = 'https://opentdb.com/api.php?amount=' + questionsAPI + "&category=" + categorySelection;

//Connect to empty divs for the question prompt, answer choices, and the gifs.
var questions = document.querySelector("#question");
var possibleAnswers = document.querySelector("#answers");
var gifContainerEl = document.querySelector("#gif-page");

var ourQuestions = [];

// create variable for the running score total
var score = 0;

// create variable to track which question we are on
// this corresponds to the index in the ourQuestions array.
var questionCounter = 0;

// function to handle clicks on the game page (called from event listener at bottom of file)
mainClickHandler = function(event) {

    // get the target element of the click. This will be used to figure out what needs to be done
    targetEl = event.target;

    // if the clicked element is an answer choice button, get the text from the button and check the answer
    // after checking the answer, display the gif page (currently done from the checkAnswer function)
    if (targetEl.matches(".choice-text")){
        var answerText = targetEl.innerHTML;
        checkAnswer(answerText);
    }
    // otherwise, check if the clicked element is the button to go to the next question
    else if (targetEl.matches(".next-question")) {
        // increase the question counter by 1 (since we need to go to the next question)
        questionCounter++;
        // remove the content from the gifContainer, since we no longer want to display the gif
        gifContainerEl.innerHTML = "";
        correctTextEl.innerHTML = "";
        // if we still have questions left, then render the next question and its answers
        renderQuestion();
        renderPossibleAnswers();
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

//put correct and incorrect answers together. WARNING: this forces us to use the logic (user selected answer == correct_answer) to check if answer was correct  since incorrect_answer now includes correct_answer 
function combineAnswers() {
    
    for (let i = 0; i < ourQuestions.length; i++) {
        var incorrectAnswers  = ourQuestions[i].incorrect_answers;
        incorrectAnswers.push(ourQuestions[i].correct_answer);
    }
}

//Function to display giphy 
function renderGiphy (giphyUrl) {
    var gifImageEl = document.createElement("img");
    gifContainerEl.appendChild(gifImageEl);
    
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
        }else{
            console.log(response);
        }
    });
}

var correctTextEl = document.getElementById("correct-text");

// check if the answer is correct, and go to the gif page
function checkAnswer(answerText) {
    if (answerText == ourQuestions[questionCounter].correct_answer) {
        console.log('question is correct');
        score += CORRECT_BONUS;
        localStorage.setItem("mostRecentScore", score);  
    } else {
        console.log('question is incorrect');
    };
    correctTextEl.innerHTML = "The correct answer was " + ourQuestions[questionCounter].correct_answer;
    
    giphyTerm = ourQuestions[questionCounter].correct_answer;
    var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" + giphyTerm + "&api_key=XHlbLemqPzGoiaILFj0ZpJCpHAibx6cT&limit=1"
    console.log (giphyUrl);
    renderGiphy(giphyUrl);

    // remove the html for the question prompt and answer choices
    questions.innerHTML = "";
    answerList.innerHTML = "";

    if (questionCounter < ourQuestions.length - 1) {
        // create the button to go to the next question
        var nextQuestionBtn = document.createElement('button');
        nextQuestionBtn.className = "next-question"
        nextQuestionBtn.textContent = 'Next Question';
        gifContainerEl.appendChild(nextQuestionBtn);
    }
    else {
        var endScreenLinkEl = document.createElement('a');
        endScreenLinkEl.className = "btn";
        endScreenLinkEl.setAttribute("href", "./end.html");
        endScreenLinkEl.textContent = "End quiz"
        gifContainerEl.appendChild(endScreenLinkEl);
    }
}

//render answers
var answerList = document.querySelector("#answers");

//render possible answers
function renderPossibleAnswers() {
    for (var i = 0; i < ourQuestions[questionCounter].incorrect_answers.length; i++) {
        //create a button for each possible answer 
        var answerButtonEl = document.createElement('button');
        answerButtonEl.className = "choice-text"
        answerButtonEl.innerHTML = ourQuestions[questionCounter].incorrect_answers[i];
        answerList.appendChild(answerButtonEl);
    };
};

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
};

// start the quiz when this file is loaded (note that this file is not connected to index.html)
startQuiz();

// event listener for all clicks on the page
document.addEventListener("click", mainClickHandler);




