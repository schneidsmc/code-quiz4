var user = document.getElementsByClassName("s-text")
var home = document.querySelector("#gohome")
var clearBtn = document.querySelector(".clearBtn")
var hsListContainer = document.querySelector('#highscoreList')
var highScoreList = JSON.parse(localStorage.getItem('userScore')) || []
// Get high scores from local storage
console.log(highScoreList)
// Apply those scores and corresponding initals to the innerhtml text

// Clear Scores button erases local storage of recent scores
clearBtn.addEventListener('click', function clearLocalStorage() {
    localStorage.clear();
    renderList();
    clearList()
    function clearList(){
        hsListContainer.textContent = ' '
    }
  })
 
home.addEventListener('click', function gohome() {
    window.location.href = "index.html";
})


// The following function renders items in a todo list as <li> elements
function renderList() {
    highScoreList.sort(function(a, b) {
        return b.score - a.score;
    });
    var topThreeScores = highScoreList.slice(0, 3);
    
    console.log(topThreeScores)
      
    // Clear existing content in the container
    hsListContainer.textContent = ' ';


    // Iterate over topThreeScores and create li elements
    topThreeScores.forEach(function(scoreObj, index) {
        let li = document.createElement("li");
        li.textContent = scoreObj.username + ": " + scoreObj.score;
        li.setAttribute("data-index", index);
        hsListContainer.appendChild(li);
    });
 }
  

renderList()
