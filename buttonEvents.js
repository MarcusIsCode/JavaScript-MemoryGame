



const statsContainer = document.querySelector('.statsContainer')



//where all card are

//name variables for start up window

const container = document.querySelector('.container');
let compareArray = [];
let wrongCards = [];

let cardsArray = [];
let cardsArray2 = [];
let allCards = [];
let divCards =[];

function cardsObjs(id, div) {
    this.id = id;
    this.div = document.createElement("div")
    this.div.classList.add("level1");
    this.div.addEventListener('click', funcCard)
  
}


const x = 5;

//creaing all the cards  with objects and putting them into a array 'allcards'
const allCardsfunc = () => {
    
    for (let i = 0; i < x; i++) {

        const theCard = new cardsObjs(i, '');
        const theCard2 = new cardsObjs(i, '');
        cardsArray[i] = theCard;
        cardsArray2[i] = theCard2;
        allCards = cardsArray.concat(cardsArray2);
        //shuffles the array (function.js)  
        shuffleArray(allCards);   
        
    }
   
    for (let c = 0; c < allCards.length; c++) {
        divCards.push(allCards[c].div);
        container.appendChild(divCards[c]);

        //allCards[c].div.innerHTML = "<h4>" + allCards[c].id+"</h4>";
        
    }
    console.log(divCards)
    
}


const startBox = document.querySelector('.start');
const input = document.querySelector('input');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
    let newPlayer = new player(name)
    creatPlayerStats(); 
    allCardsfunc();
    let divs = document.querySelectorAll('.level1')

    startBox.classList.add('hideStart');
}) 


const level = document.querySelector('.level');

