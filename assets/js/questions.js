var timer = document.querySelector(".timer")
var scoreText = document.querySelector(".score")
var qcontainer = document.querySelector(".q-container")
var choices = Array.from(document.getElementsByClassName("c-text"))
var result = document.querySelector(".right-wrong")


var timeLeft = 60
let currentQ = {}
let userAnswer = true
let score = 0
let questionCount = 0
let availQuestion = []

var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choice1:'alerts', 
    choice2: 'booleans', 
    choice3: 'strings', 
    choice4: 'numbers',
    answer: 1,
  },
  {
    question: 'The condition in an if / else statement is enclosed within ____.',
    choice1: 'quotes', 
    choice2: 'curly brackets', 
    choice3: 'parenthesis', 
    choice4: 'square brackets',
    answer: 3,
  },
  {
    question: 'Arrays in JavaScript can be used to store ____.',
    choice1: 'numbers and strings',
    choice2: 'other arrays',
    choice3: 'booleans',
    choice4: 'all of the above',
    answer: 4,
  },
  {
    question: 'String values must be enclosed within ____ when being assigned to variables.',
    choice1: 'commas', 
    choice2: 'quotes',
    choice3: 'curly bracket',
    choice4: 'parenthesis',
    answer: 2,
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choice1: 'JavaScript',
    choice2: 'terminal / bash',
    choice3: 'for loops',
    choice4: 'console.log',
    answer: 4,
  },
];

const scorePoints = 100
const maxQuestion = 5

 // Timer begins when user clicks start game
 function startTimer() {
  var timer = document.querySelector(".timer")
  console.log(timer)
  if (!timer) {
    console.error("Element with id 'timer' not found");
    return;
    }
    var timeInterval = setInterval(function(){
      if (timeLeft >= 1) {
        timer.textContent = timeLeft + ''
      } else {
        clearInterval(timeInterval)
        return window.location.assign('submit.html')
      }
      timeLeft--
    }, 1000)
 }

// Function called startGame going through the methods of the code quiz
function startGame() {
  startTimer()
  questionCount = 0
  score = 0
  availQuestion = [...questions]
  getNewQuestion()
}

// Random question is displayed with corresponding four chcoices


function getNewQuestion() {
  result.textContent = ""
  if (availQuestion.length === 0 || questionCount > maxQuestion) {
    localStorage.setItem('finalScore', score)
    return window.location.assign('submit.html')
  }

  const questionIndex = Math.floor(Math.random() * availQuestion.length)
  currentQ = questions[questionIndex]
  qcontainer.textContent = currentQ.question
  console.log(currentQ.question)

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.textContent = currentQ['choice' + number]
  })
  availQuestion.splice(questionIndex, 1)

  userAnswer = true

}
// When user picks the correct answer it turns green || incorrect it turns red
choices.forEach(choices => {
    choices.addEventListener('click', e => {
      if(!userAnswer) return

      userAnswer = false
      const selectedChoice = e.target
      const selectedAnswer = selectedChoice.dataset['number']

      let classToApply = selectedAnswer == currentQ.answer ? 'correct' : 'incorrect'

      if(classToApply === 'correct') {
      incrementScore(scorePoints)
      result.setAttribute('class', "correct")
      result.textContent = 'Right!'
      }

      if(classToApply === 'incorrect') {
        result.setAttribute('class', "incorrect")
        result.textContent = 'Wrong!'
        timeLeft-=5
        }

      selectedChoice.parentElement.classList.add(classToApply)

      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
      }, 1000 )
  })
})

// When answer is correct, score is increased by 100
incrementScore = num => {
  score += num
  scoreText.textContent = score
  console.log(score)
}

// Call game to function
startGame()


// When answered correct
  // A hidden display appears showing 'Right!' at the bottom

// subtracts 5 secs from timer and goes to the next question
  // A hidden display appears showing 'Wrong!' at the bottom

// the final score is stored in the local storage

// User is then taken to the submit.html page
