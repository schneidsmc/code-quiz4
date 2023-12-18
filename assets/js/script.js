var startButton = document.querySelector("#start")
var hsPage = document.querySelector("#highS")
var lightMode = document.getElementById("lightMode")

// Start game button takes user to questions.html

startButton.addEventListener('click', function(){
    window.location.href = 'questions.html'
})

hsPage.addEventListener('click', function () {
    window.location.href = "highscore.html";
})


// hsPage button takes user to the highscore page where the local storage dispalys the top three scores