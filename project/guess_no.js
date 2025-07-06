let no =  parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')

const userinput = document.querySelector('#guessField') 
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(chai){
        chai.preventDefault()
        const guess = parseInt(userinput.value)
        // console.log(guess);
        validateGuess(guess)
        
    })
}

function validateGuess(guess){ //it is important in further future project
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }
    else if(guess < 1){
        alert('Please enter a  number greater than 1')
    }
    else if(guess > 100){
        alert('Please enter a  number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            display(`Game Over, Random Number was ${no}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === no){
        display(`You guess it right`);
        endGame();
    }
    else if(guess < no){
        display(`No is too low`)
    }
    else if(guess  > no){
        display(`No is too high`)
    }
}

function display(message){
    lowOrHi.innerHTML = `<h2> ${message} </h2>`; 
}

function displayGuess(guess){
    userinput.value = ''
    guessSlot.innerHTML += `${guess}   `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        no =  parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true;
    })
}

function endGame(){
    userinput.value = ''
    userinput.setAttribute('disabled','')
        p.classList.add('button')
        p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`
        startover.appendChild(p)
        playGame = false
        newGame()
}