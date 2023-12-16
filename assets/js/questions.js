var timer = document.getElementsByClassName("timer")
var scoreText = document.getElementsByClassName("score")
var qcontainer = document.getElementsByClassName("q-container")
var choices = Array.from(document.getElementsByClassName("c-text"))
var result = document.getElementsByClassName("right-wrong")

let currentQ = {}
let userAnswer = true
let score = 0
let questionCount = 0
let availQuestion = []

var questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choice1:'strings', 
    choice2: 'booleans', 
    choice3: 'alerts', 
    choice4: 'numbers',
    answer: 3,
  },
  {
    question: 'The condition in an if / else statement is enclosed within ____.',
    choice1: 'quotes', 
    choice2: 'curly brackets', 
    choice3: 'parentheses', 
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
    choice2: 'curly brackets',
    choice3: 'quotes',
    choice4: 'parentheses',
    answer: 3,
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
const maxQuestion = 4

// Function called startGame going through the methods of the code quiz
  // Timer begins when user clicks start game
function startGame() {
  questionCount = 0
  score = 0
  availQuestion = [...questions]
  getNewQuestion()
}

// Random question is displayed with corresponding four chcoices

function getNewQuestion() {
  if (availQuestion.length === 0 || questionCount > maxQuestion) {
    localStorage.setItem('finalScore', score)
    return window.location.assign('/submit.html')
  }

  const questionIndex = Math.floor(Math.random() * availQuestion.length)
  currentQ = availQuestion[questionIndex]
  qcontainer.innerText = currentQ.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQ['choice' + number]
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
  scoreText.innerText = score
}

// Call game to function
startGame()


// When answered correct
  // A hidden display appears showing 'Right!' at the bottom

// subtracts 5 secs from timer and goes to the next question
  // A hidden display appears showing 'Wrong!' at the bottom

// After all the questions have been dispayed the final score is stored in the local storage

// User is then taken to the submit.html page
