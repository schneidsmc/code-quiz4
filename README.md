## Code Quiz

These are the directions given:
- AS A coding boot camp student I WANT to take a timed quiz on JavaScript fundamentals that stores high scoresSO THAT I can gauge my progress compared to my peers.

As a result, the coding quiz will have the following attributes:
- WHEN I click the start button THEN a timer starts and I am presented with a question
- WHEN I answer a question THEN I am presented with another question
- WHEN I answer a question incorrectly THEN time is subtracted from the clock
- WHEN all questions are answered or the timer reaches 0 THEN the game is over
- WHEN the game is over THEN I can save my initials and score

## Wireframing
- There are going to be four separate pages of this quiz. Each will have it's own HTML page. See below. 

<img src="./assets/Images/WF-codequiz-startpage.png" alt="Start Page" width="300" height="auto"> <img src="./assets/Images/WF-codequiz-questionpage.png" alt="Question Page" width="300" height="auto"> <img src="./assets/Images/WF-codequiz-score&submit.png" alt="Score & Submit" width="300" height="auto"> <img src="./assets/Images/WF-codequiz-highscorepage.png" alt="High Score Page" width="300" height="auto">

## HTML

- Four HTML pages created. The index.html page has the welcome message along with a button to start game and a button to view the highscores. The questions.html page has placeholders for all the functions that will be written in javascript. There is a div & class for the timer, score, question, choices and right/wrong. The submit.html displays the most recent score, an input box for the users initials and a submit button. The highscore.html page has placeholders for the top three scores as well as a button to take you back to the welcome page.

## CSS
- CSS was created for each of the HTML pages. Almost all of it was kept consistent throughout the four pages of HTML. There are :root at the top of each css page for the colors used. There is also a google font incorporated into this project. 

## Javascript
- There are four pages of javascript. This probably could have been combined on some of the pages but for learning purposes I kept them seperate. The script.js page has a button that takes you to the questions page and a button that takes you to the highscore page. The questions.js has the most javascript written. Variables are declared at the top of the document as well as 'let' tag lines. These are only accessible in the specific statement where they are defined. The variable for the questions and choices with the correct choice are saved here. This is communicated through a dataset linked in the html. When the user chooses the right option, it flashes green and has a word bubble pop up saying Right! When the user chooses the wrong option, it flashes red and has a word bubble pop up saying Wrong!
- There is a timer counting down at the top of the questions page that starts at 60 and subtracts an extra 5 seconds for every wrong anser choses. Once this time expires it will take you to the score page to submit your score. 
- The information on all the users and the corresponding score is stored in the localStorage. The final score is displayed above the user input and then it is added to an array where it is sorted from high to low. These top three scores are then displayed on the highscore list. 
- There is a button at the top right that will clear scores from the high score list displayed as well as the localStorage 

## Installation

- Clone this repository
* $ git clone git@github.com:schneidsmc/code-quiz4.git

## Usage

-Deployed URL
* https://schneidsmc.github.io/code-quiz4/

## Author

* [schneidsmc](https://github.com/schneidsmc)