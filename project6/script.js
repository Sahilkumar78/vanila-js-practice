const modelBtn = document.querySelector('.model-btn');
const closeBtn = document.querySelector('.close-btn')
const modal = document.querySelector('.model-overlay')


modelBtn.addEventListener('click', function(){
     modal.classList.add('open-modal');
})

closeBtn.addEventListener('click', function(){
     
     modal.classList.remove('open-modal')
})