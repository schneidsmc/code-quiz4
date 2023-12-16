var user = document.getElementsByClassName("s-text")
var home = document.getElementsByClassName("gohome")
var highScoreList = JSON.parse(localStorage.getItem('highScores')) || []
// Get high scores from local storage

// Apply those scores and corresponding initals to the innerhtml text

// Clear Scores button erases local storage of recent scores
function clearStorage() {
    localStorage.clear();
  }

// home button to redirect user to idex.html page

