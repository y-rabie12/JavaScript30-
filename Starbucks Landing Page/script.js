'use strict';


// select main image


const mainImage =  document.querySelector('.main-img')

const thumbnails =  document.querySelector('.thumbnails')

const semiCircle =  document.querySelector('.circle')

thumbnails.addEventListener('click',function(e){
    if(e.target.classList.contains('thumb')){
        let id = e.target.getAttribute('data-id')
        let imageSource = `images/img${id}.png`
        mainImage.src = imageSource;

        if(id === '1') semiCircle.style.backgroundColor = '#017143'
        else if (id === '2') semiCircle.style.backgroundColor = '#eb7495'
        else if (id === '3') semiCircle.style.backgroundColor = '#d752b1'
    }
})

