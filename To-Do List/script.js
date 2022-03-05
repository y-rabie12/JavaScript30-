'use strict';



// Selected the elements
const input =  document.querySelector('.todo');

const submitBtn = document.querySelector('.btn')

const todoContainer =  document.querySelector('.todos-container');


// Function to display each to do entry
const displayEntry = function(){
    if(!input.value) return;

    let entryContainer = document.createElement('div')
    let entry = document.createElement('span')
    let removeBtn =  document.createElement('button')
    removeBtn.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`
    removeBtn.classList.add('removeBtn')
    entry.innerHTML = `${input.value}`
    entryContainer.append(entry,removeBtn)
    entryContainer.className = 'styleEntry';
    todoContainer.append(entryContainer)
}

// Function to mark whether a to do is completed or not
const markComplete = function(e){
   if(e.target.classList.contains('styleEntry')){
       e.target.classList.toggle('complete')
   }
}



//  Event Listeners
submitBtn.addEventListener('click',displayEntry)

todoContainer.addEventListener('click',markComplete)

todoContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('fa-times')){
        let parent = e.target.closest('.styleEntry')
        parent.remove()
    }
})
