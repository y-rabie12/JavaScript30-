'use strict';

// Select the score for each player

const botScoreBoard = document.querySelector('[data-bot]')

const playerScoreBoard = document.querySelector('[data-you]')


// Select the message

const message =  document.querySelector('.message')


// Select the buttons container 

const btns = document.querySelector('.btns')


// Variables to store choices for each player.
let playerChoice = '';
let botChoice = '';

// Scores 
let playerScore = 0
let botScore = 0


// Function to determine the choice of the bot
const botChoiceFunc = function(){
    const choices = ['Rock','Paper','Scissors']
    let index = Math.trunc(Math.random()*choices.length)
    return choices[index]
}



// Function to show which one is the winner
const showWinner = function(winnerScore, scoreBoard){
    scoreBoard.innerText = winnerScore
    let str = ''
    if(scoreBoard === playerScoreBoard){
    str = `You chose ${playerChoice}. Bot chose ${botChoice}. You win! 🎇`
    return str
}
    else{
        str = `You chose ${playerChoice}. Bot chose ${botChoice}. You lose! 😞`
        return str
    }
}




btns.addEventListener('click', function(e){

    // guard clause in case the user clicks on an area outside of the buttons
    if(!e.target.classList.contains('btn')) return

     playerChoice = e.target.textContent.trim()
     botChoice = botChoiceFunc()
    

    // List all different possibilities
    if(playerChoice === 'Rock'){
       
        if(botChoice === 'Scissors') {
            playerScore++
            message.innerText  =   showWinner(playerScore,playerScoreBoard)
        }
        else if (botChoice === 'Paper') {
            botScore++
            message.innerText = showWinner(botScore,botScoreBoard)
        }
        
    }
    else if (playerChoice === 'Paper'){
        
         if (botChoice === 'Rock') {
             playerScore++
             message.innerText = showWinner(playerScore,playerScoreBoard)
            }
         else if(botChoice === 'Scissors') {
             botScore++
             message.innerText = showWinner(botScore,botScoreBoard)
            }
        
    }
    else if (playerChoice === 'Scissors'){
        if (botChoice === 'Paper') {
            playerScore++
            message.innerText  = showWinner(playerScore,playerScoreBoard)
        }
        else if(botChoice === 'Rock')  {
            botScore++
            message.innerText  = showWinner(botScore,botScoreBoard)
        }
    } 

    if(playerChoice === botChoice) {
        let str = `You chose ${playerChoice}. Bot chose ${botChoice}. It's a tie.🙃`
        message.innerText  = str
    }
})
