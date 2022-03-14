
const container =  document.querySelector('.container')

document.addEventListener('keydown', function(e){
     container.innerHTML = '';

     const html = `
        <div class="key">
         ${e.key}
         <small> event.key </small>
        </div>
        <div class="key">
           ${e.keyCode}
           <small>event.keyCode</small>
        </div>
        <div class="key">
           ${e.code}
           <small>event.code</small>
       </div>
     `
     container.insertAdjacentHTML('afterbegin',html)
})