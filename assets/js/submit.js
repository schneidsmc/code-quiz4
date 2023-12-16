var finalScore = document.querySelector(".finalscore")
var username = document.querySelector(".username")
var submit = document.querySelector(".submit")

const highScoreList = JSON.parse(localStorage.getItem('finalScore')) || []
const maxHsList = 3
console.log(highScoreList)

// Get user score from quiz and disply it in the .finalscore.value

listScore();

function listScore() {
    var finalScore = JSON.parse(localStorage.getItem('finalScore'));
    console.log(finalScore)
    if (finalScore !== null){
        document.querySelector('.finalScore').textContent = 'Score: ' + finalScore
    }
}

// finalScore.textContent = mostRecentScore

username.addEventListener('keyup', () => {
    submit.disabled = !username.value

})

saveList = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push('score')

    highScores.sort((a,b) => {
        return b.score = a.score

    })

    highScores.splice(3)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('/')
}

// function userName() {
//     submit.addEventListener('click', e => {
//         if(!userAnswer) return
//     })
//     const hsList = ('username', 'finalScore')
//     if (username !== null) {
//         localStorage.setItem('username', username)
//     }
//     console.log(username)
// }


// Allow user to type in initals with the submit button disabled until values are typed in the input

// clicking submit saves score with initials

// The local storage only saves the top three scores and splices the remaing scores

// Clicking submit automatically takes the user to the highscore.html page



// const hsList = JSON.parse(localStorage.getItem('finalScore')) || []
// const maxHsList = 3
// console.log(finalScore)

saveList = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highscores.push('score')
}