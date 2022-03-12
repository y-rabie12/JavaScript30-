'use strict';



const progressLine =  document.querySelector('.progress')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')
const progressItems = document.querySelectorAll('.progress-item')

let currentActive = 1


const update = function(){
    progressItems.forEach(function(curr, index){
        if(index < currentActive) curr.classList.add('active');
        else curr.classList.remove('active')
    })
    let activeElements = document.querySelectorAll('.active');
     progressLine.style.width = (activeElements.length -1 )/ (progressItems.length -1) * 100 + '%'

    if(currentActive === 1) prevBtn.disabled = true;
    else if ( currentActive === progressItems.length) nextBtn.disabled = true
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}

nextBtn.addEventListener('click', function(){
    currentActive++;

    if(currentActive >  progressItems.length){
        currentActive = progressItems.length
    }
    update()
})

prevBtn.addEventListener('click',function(){
    currentActive--;
    if(currentActive < 1){
        currentActive = 1
    }

    update()
})




