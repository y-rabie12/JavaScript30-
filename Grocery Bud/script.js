


// Select all relevant items
const listContainer = document.querySelector('.list-container')

const submitBtn = document.querySelector('.btn')

const input = document.querySelector('input')

const message = document.querySelector('.message')

const clearAllBtn =  document.querySelector('.remove-items')



// Shows the proper message when a certain action is done
const displayMessage=  function(messageText,messageType){
    message.innerHTML = messageText;
    message.className = messageType;
}

// Clears all the content of the message
const clearMessage =  function(){
    message.innerHTML = ''
    message.className = ''
}


// Display each entry
const displayEntry =  function(){
    let html = `<div class="entry"> <p class="list">${input.value} </p> <button><i class="fa-solid fa-trash"></i></button>
    <button><i class="fa-solid fa-pen-to-square"></i></button>
    </div>`
    listContainer.insertAdjacentHTML('afterbegin',html)
    displayMessage('Item has been added', 'add-message')
    setTimeout(clearMessage,1000)
}


// Removes the specified entry , once the trash icon is clicked
const removeEntry =  function(e){
     if(e.target.classList.contains('fa-trash')){
         let parent = e.target.closest('div')
         parent.remove();
         displayMessage('Item has been deleted','remove-message')
         setTimeout(clearMessage,1000)
     }
}






// Event Listeners 
submitBtn.addEventListener('click',displayEntry.bind(this))

listContainer.addEventListener('click',removeEntry)




