

const container = document.querySelector('.container')

const allPanels =  document.querySelectorAll('.panel')

console.log(allPanels)
container.addEventListener('click',function(e){
    if(e.target.classList.contains('panel')){
      allPanels.forEach( el => el.classList.remove('active'))
      e.target.classList.add('active')
    }
})