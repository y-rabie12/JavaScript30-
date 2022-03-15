// Select all buttons

const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let id = e.target.textContent.trim();
        let audio = document.querySelector(`#${id}`)
        audio.play();
    })
})