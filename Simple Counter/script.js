

const resetBtn = document.querySelector('#reset');


const increaseBtn = document.querySelector('#increase');


const decreaseBtn = document.querySelector('#decrease');

const counterHeading =  document.querySelector('.counter')


let counter = parseInt(counterHeading.textContent)

const displayNumber =  function(){
    let color = ''
    color = (counter > 0) ? 'green':'red'
    if(counter === 0) color = 'black';
    counterHeading.style.color = color;
    counterHeading.textContent = counter
}

increaseBtn.addEventListener('click', function(){
   counter++
   displayNumber()
})

decreaseBtn.addEventListener('click',function(){
   counter--
   displayNumber()
})

resetBtn.addEventListener('click',function(){
    counter = 0
    counterHeading.style.color = 'black';
    counterHeading.textContent = 0

})



