const form = document.querySelector('form')
const input = document.querySelector('input')
const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
const codeDisplay = document.querySelector('.code-display')
const refreshBtn = document.querySelector('.btn2')

let randChar = ''

function randCharGenerator () {
    randChar = ''
    for (let i = 1; i<=6; i++) {
        const randNum = Math.floor(Math.random() * characters.length)
       randChar += characters.charAt(randNum)
    }
    codeDisplay.textContent = randChar
    console.log(randChar)
}

function handleSubmit (event) {
    event.preventDefault() 
    const inputVal = input.value 
    if (inputVal === '') {
        alert("You need to write something")
    } else {
        if (inputVal === randChar) {
            alert("Succes")
        } else {
            alert("Failure")
        }
    }
    input.value = ''
}

form.addEventListener('submit', handleSubmit)
refreshBtn.addEventListener('click', randCharGenerator)
randCharGenerator()