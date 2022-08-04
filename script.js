const scoreElement = document.getElementById('score')
const question = document.getElementById('question')
const input = document.getElementById('input')
const form = document.getElementById('form')

let score = JSON.parse(localStorage.getItem('score'))

if (!score){
    score = 0
}

scoreElement.innerText  =`Score: ${score}`

form.addEventListener('submit', () => {
    const userAnswer = +input.value
    if (userAnswer === correctAnswer){
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})

let num1 = Math.ceil(Math.random()*10)
let num2 = Math.ceil(Math.random()*10)
question.innerText = `What is ${num1} multiplied by ${num2}`
const correctAnswer = num1 * num2

const updateLocalStorage = () => localStorage.setItem("score", JSON.stringify(score))