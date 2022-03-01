const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let len = colors.length;

const navEl =  document.querySelector('nav')

const clickButton =  document.querySelector('.clickMe')

const main = document.querySelector('main')

const span = document.querySelector('span')


// Random Color Function
let generateRandomColor = function(min=0,max){
    return Math.trunc(Math.random()*(max-min))
}


// Adding an event listener to choose between simple and hex button
navEl.addEventListener('click',function(e){
    if(e.target.classList.contains('btn')){
        let word = e.target.dataset.word
        if(word === 'simple') len = colors.length
        else len = hexColors.length
    }
})


// Adding an event listener to generate random color
clickButton.addEventListener('click',function(e){
    if(len === 16){
       let str = '#'
       while(str.length < 7){
           let index =  generateRandomColor(0,len)
           str+= hexColors[index]
       }
       main.style.backgroundColor = str;
       span.innerHTML = str;
       span.style.color = str;
    }
    else {
        let color =  colors[generateRandomColor(0,len)]
        main.style.backgroundColor =  color;
        span.innerHTML = color
        span.style.color = color
    }
})
