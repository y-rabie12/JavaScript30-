// We need to implement two things 



const navLinks =  document.querySelector('.nav_links')

const navBar = document.querySelector('.navbar')

// Smooth Scroll

navLinks.addEventListener('click',function(e){
     if(e.target.classList.contains('nav_link')){
         e.preventDefault()
         let id = e.target.textContent.toLowerCase()
         let el =  document.querySelector(`#${id}`)
         el.scrollIntoView({behavior:'smooth'})
     }
})
