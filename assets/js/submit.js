var finalScore = document.querySelector(".finalscore")
var username = document.querySelector(".username")
var submit = document.querySelector(".submit")


// Get user score from quiz and disply it in the .finalscore.value

// localStorage.setItem('score', JSON.stringify(finalScore));
listScore();

function listScore() {
    var finalScore = JSON.parse(localStorage.getItem('finalScore'));
    console.log(finalScore)
    if (finalScore !== null){
        document.querySelector('.finalScore').textContent = finalScore
    }
}

// Allow user to type in initals with the submit button disabled until values are typed in the input

// clicking submit saves score with initials

// The local storage only saves the top three scores and splices the remaing scores

// Clicking submit automatically takes the user to the highscore.html page