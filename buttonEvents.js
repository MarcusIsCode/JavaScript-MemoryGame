const startBox = document.querySelector('.start');
const input = document.querySelector('input');
const startBtn = document.querySelector('.startBtn');



const statsContainer = document.querySelector('.statsContainer')
function player(name){
    this.name = name;
    this.moves = 0;
    this.level = 1
    this.correct = 0;
}

let playor = new player();


const creatPlayerStats= () =>{
    
    /* const boxStats = document.createElement('div')
    boxStats.classList.add('boxStats');
    statsContainer.appendChild(boxStats);
    */
   const boxStats = elFactory(
       'div',{class: 'boxStats' },"",
       elFactory('p', {class:'plyName'}),"",
       elFactory('p',{class:'level'}),"",
       elFactory('p', { class: 'moves' }), ""
   )
   statsContainer.appendChild(boxStats);
   
     
    const plyName = document.querySelector('.plyName');
    const level = document.querySelector('.level');
    const move = document.querySelector('.moves'); 

    playor.name = input.value; 
    plyName.textContent =playor.name
    level.textContent ='Level: ' + playor.level;
    move.textContent = 'Moves: ' + playor.moves; 
}
startBtn.addEventListener('click', () => {
    creatPlayerStats(); 
    
    startBox.classList.add('hideStart');
}) 




