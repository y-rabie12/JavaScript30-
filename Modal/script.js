// Select the elements needed 

const openModal = document.querySelector('.btn')

const modalWindow = document.querySelector('.overlay')

const closeBtn = document.querySelector('.close-btn')

// EventListeners

openModal.addEventListener('click',function(){
    modalWindow.classList.remove('hide-modal')
})

// When the user clicks on the close button
closeBtn.addEventListener('click',function(){
    modalWindow.classList.add('hide-modal')
})

// When the user presses the esc key
document.addEventListener('keydown',function(e){
    if(e.key = "Escape") modalWindow.classList.add('hide-modal')
})