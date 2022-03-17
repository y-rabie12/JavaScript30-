

// List of all words 
const wordBank =  ['programming','javascript','interface','application','algorithms']

// Select the container that is used to show all individual letters
const wordContainer = document.querySelector('.word-container')

const overlay = document.querySelector('.overlay')

const message =  document.querySelector('.message')

// Selected word
let chosenWord  = ''

// Number of lives
let  chances = 5;

// Number of correct letters
let correctOnes = 0;

// Used to ensure that keys are not pressed twice
let prev = [];


// Select random word from wordBank
const randomWord =  () => Math.trunc(Math.random()*wordBank.length)



// Displays word as dashes
const displayUI =  function(){
    let index = randomWord()
    let word = wordBank[index].split('')
    word.forEach(letter => {
        let span = document.createElement('span')
        span.classList.add('word')
        wordContainer.append(span)
    });
   chosenWord = wordBank[index]
   console.log(chosenWord)
}


displayUI()        


const showMessage =  function(str){
    overlay.classList.remove('shown');
    message.innerHTML = str
}

// Used to check when to display the letters if the key is pressed correctly
const displayWord = function(e){

    let letters = wordContainer.querySelectorAll('span');

    let pressed = e.key
    
    
    if(chosenWord.includes(pressed)){
        // Checks if same key is pressed again or not
        if(prev.indexOf(pressed) > -1) return;

        // Displays the letter at specified position
        for(let i=0; i < chosenWord.length;i++){

           if(pressed === chosenWord[i]) {
               letters[i].textContent= pressed;
                 correctOnes++;
                 prev.push(pressed)
              
           }
        
        // Message displayed once all letters are correct
        if(correctOnes === chosenWord.length) {
            showMessage(`Wow! You've guessed correctly 🤩`)
            return
        }

    }
}
    // if the key pressed is not correct
    else{
         chances--
         if(chances === 0 && correctOnes < chosenWord.length) showMessage(`Wrong! Try Again! ☹️ `)
    }
}


// Event Listener
window.addEventListener('keydown',displayWord)