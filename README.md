# Team Awesomesauce

Howdy, world!

# Outline 

Homepage: 

High Score Link
Message
Start Button

Question Pages:

Question/Answer Options

Post-Question Page:

Giphy and Correct/Incorrect
Answer

Score Page:

Message
Total Score
Name Entry Feild
Save/Submit Button (Link to High Score Page)

High Score Page:

List of High Scores
Link Back to Home Page


## Functionality Outline

### Homepage
- Message about the website (i.e. this is a quiz website)
- High Score link sends user to high score page
- Possibly have drop-downs for number of questions and category (default is any category)
- Start quiz button starts the quiz and sends user to quiz question page

### Quiz
- Questions are fetched from OpenTriviaDB API.
- Questions are displayed, with the prompt first and then the answer choices
- Each answer choice has a button to select that choice
- All answer choice buttons advance to GIPHY page

### Giphy page
- Message about whether answer was correct
- Add a gif from GIPHY API (probably based on correct answer)
- Button to send user back to next question, or to end quiz page if all questions have been answered

### End quiz page
- Message that the quiz is over
- Tell the user their score
- Entry form for name
- When form is submitted, save high score with the name into local storage. Then go to high score page

### High score page
- Load high scores from localStorage
- Display scores and name
- Button to send user back to homepage