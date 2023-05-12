//CREATE some VAR:
//1. for theOPEN Button
//1.for the MODAL CONTAINER
//1. fo CLOSE Button

let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

//Event Listeners
//Apply on "openBtn"
openBtn.addEventListener('click', function(){
  //INSIDE here - we're using CSS Styling
  modalContainer.style.display = 'block'; //display "block" becatse #MODAL-CONTAINER(in style.css) is "display:none;"
  //NOw- we wanna to display on "block". When we click on the "opentButton/Where's my modal?" - to SHOW us the MODAL.
});

closeBtn.addEventListener('click', function(){
  modalContainer.style.display = 'none';
})

//When we click outside the Modal
window.addEventListener('click', (e)=>{
  if(e.target === modalContainer){
    modalContainer.style.display = 'none';
  }
})


//The target PROPERTY returns the element where the event occured.(???)
//returns THE Element - that TRIGGERS the EVENT. (in this case - it's gonna be OUR WINDOW.)