var startButton = document.getElementById("start")
var hsPage = document.getElementById("highS")
var lightMode = document.getElementById("lightMode")

// Start game button takes user to questions.html

startButton.addEventListener('click', function(){
    window.location.href = 'questions.html'
})

// hsPage button takes user to the highscore page where the local storage dispalys the top three scores