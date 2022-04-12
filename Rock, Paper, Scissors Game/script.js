'use strict';



// Select the score for each player

const botScoreBoard = document.querySelector('[data-bot]')

const playerScoreBoard = document.querySelector('[data-you]')


// Select the message

const message =  document.querySelector('.message')


// Select the buttons container 

const btns = document.querySelector('.btns')


// Array for bot to randomly choose from
const choices = ['Rock','Paper','Scissors']



const chooseRandom  =  function(arr = choices){
    let index = Math.trunc(Math.random()*arr.length)
    return arr[index]
}


// Variables to store choices for each player.
let playerChoice = '';
let botChoice = '';

// Scores 

let playerScore = 0
let botScore = 0

// Event Listener

btns.addEventListener('click', function(e){
    // guard clause
    if(!e.target.classList.contains('btn')) return

    let playerChoice = e.target.textContent.trim()
    let botChoice = chooseRandom()
    

    // List of different possibilities
    if(playerChoice === 'Rock'){
       
        if(botChoice === 'Scissors'){
            playerScore++
            playerScoreBoard.innerText = playerScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You win`
            message.innerText  = str
        }
        else if (botChoice === 'Paper'){
            botScore++
            botScoreBoard.innerText = botScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You lose`
            message.innerText  = str
        }
    }
    else if (playerChoice === 'Paper'){
        if(botChoice === 'Scissors'){
            botScore++
            botScoreBoard.innerText = botScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You lose`
            message.innerText  = str
        }
        else if (botChoice === 'Rock'){
            playerScore++
            playerScoreBoard.innerText = playerScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You win`
            message.innerText  = str
        }
    }
    else if (playerChoice === 'Scissors'){
        if(botChoice === 'Rock'){
            botScore++
            botScoreBoard.innerText = botScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You lose`
            message.innerText  = str
        }
        else if (botChoice === 'Paper'){
            playerScore++
            playerScoreBoard.innerText = playerScore
            let str = `You chose ${playerChoice}. Bot chose ${botChoice}. You win`
            message.innerText  = str
        }
    } 

    if(playerChoice === botChoice) {
        let str = `You chose ${playerChoice}. Bot chose ${botChoice}. It's a tie.`
        message.innerText  = str
    }
})
