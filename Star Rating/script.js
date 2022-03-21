'use strict';


// Select the elements

const ratings = document.querySelectorAll('.fa-star')

const ratingContainer = document.querySelector('.rating-container');

const starCount = document.querySelector('.star-count')


// Use event delagation
ratingContainer.addEventListener('click',function(e){
    
    // Matching condition
    if(e.target.classList.contains('fa-star')){
        
       // Id for the selected element
       let id = parseInt(e.target.getAttribute('id'))

       // If the target element has already the confirmed class
       if(e.target.classList.contains('confirmed')){
        
           // Remove 'confirmed' from all elements after it
           ratings.forEach( rate => {
               let id1 = parseInt(rate.getAttribute('id'))
               if(id1 > id) rate.classList.remove('confirmed')
           })
          
       }
       // If the target element doesn't have the 'confirmed' class
       else {
         
        // Add the class to the target element and all elements before it
        ratings.forEach( rate => {
            let id1 = parseInt(rate.getAttribute('id'))
            if(id1 <= id) rate.classList.add('confirmed')
        })
       
       }
       starCount.textContent = id
    }
})
