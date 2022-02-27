'use strict';

// First select all the elements

const userName = document.querySelector('.name');



const  email =  document.querySelector('.email')


const password = document.querySelector('.pass');



const confirm1 = document.querySelector('.pass2')


const btn = document.querySelector('.btn')



const showError =  function(input , message){
      const formControl = input.parentElement
      input.classList.add('error');
      let small =  formControl.querySelector('small')
      small.style.visibility = 'visible'
      small.innerText = message;
}

const showSuccess = function(input){
    const formControl = input.parentElement
    let small =  formControl.querySelector('small')
    small.style.visibility = 'hidden'
    input.classList.add('correct')
    input.classList.remove('error')
   
}



// Validate email 

const validateEmail =  function(input){
    let re = /\S+@\S+\.\S+/;
    if(re.test(input.value)){
        showSuccess(input)
    }
    else{
        showError(input, `Email is not valid`)
    }
}



const checkRequired =  function(inputArr){
    inputArr.forEach(function(input){
       if(input.value.trim() === ''){
           
           showError(input, `${capitalizeId(input)} is required`);
       }
       else{
           showSuccess(input)
       }
    })
}

const checkLength = function(input,min,max){
    if(input.value.length < min){
        showError(input, `${capitalizeId(input)} must be at least ${min} characters`)
    }
    else if(input.value.length >  max){
        showError(input, `${capitalizeId(input)} mustn't exceed ${max} characters` )
    }
    else{
        showSuccess(input)
    }
}

const capitalizeId = function(input){
    let id =  input.id
    return id[0].toUpperCase() + id.substring(1)
}

const confirmPass = function(pass1,pass2){
    if(pass1.value !== pass2.value){
        showError(pass2,`Passwords don't match`)
    }
    
}

btn.addEventListener('click', function(e){
    e.preventDefault()

    checkRequired([userName,password,confirm1,email])
    checkLength(userName,3,15);
    checkLength(password,6,25);
    validateEmail(email)
    confirmPass(password,confirm1)
})





    