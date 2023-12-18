var mostRecentScoreScore = document.querySelector(".finalscore")
var username = document.querySelector(".username")
var submit = document.querySelector("#submit")
var initals = document.querySelector('#initials')

const maxHsList = 5


// Get user score from quiz and disply it in the .finalscore

listScore();

function listScore() {
    var finalScore = JSON.parse(localStorage.getItem('finalScore'));
    console.log(finalScore)
    if (finalScore !== null){
        document.querySelector('.finalScore').textContent = 'Score: ' + finalScore
    }

}

submit.addEventListener("click", function(event) {
    event.preventDefault();
    var mostRecentScoreScore = JSON.parse(localStorage.getItem("finalScore"))
    
    var scoreList = JSON.parse(localStorage.getItem("userScore")) || [];
   
    var userScore = {
      username: initials.value,
      score: mostRecentScoreScore
    };
    
    scoreList.push(userScore);

    localStorage.setItem("userScore", JSON.stringify(scoreList));
    console.log(userScore)

    window.location.href = "highscore.html";
    
})    


// Allow user to type in initals with the submit button disabled until values are typed in the input

// clicking submit saves score with initials

// The local storage only saves the top three scores and splices the remaing scores

// Clicking submit automatically takes the user to the highscore.html page

