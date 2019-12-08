

const statsContainer = document.querySelector('.statsContainer')


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


const startBox = document.querySelector('.start');
//creat new player and resets stats
const startBtn = document.querySelector('.startBtn');
let deck = 4;
let levelNum = 1

startBtn.addEventListener('click', (event) => {    
    creatPlayerStats(event); 
    allCardsfunc(deck);
    startBox.classList.add('hideStart');


}) 



const buttonArray = []
const retry = document.querySelector('.reset');
const reset = document.querySelector('.retry');
const nexLevel = document.querySelector('.NextLevel');
const newPly = document.querySelector('.newP')
buttonArray.push(retry, reset, nexLevel, newPly);




for (let y = 0; y < buttonArray.length; y++) {
    
    buttonArray[y].addEventListener('click', (event) => {
        let click = event.target;
        switch (click) {
            case buttonArray[0]://reset     
                resetStats()
                break;
            case buttonArray[1]://retry
                resetStats()
                break;
            case buttonArray[2]://next Level
                newLevel(deck,levelNum )
                break;
                case buttonArray[3]://new player btn
                deck = 4;
                startBox.classList.remove('hideStart');
                resetCardContainer();
                allCardsfunc(deck);
                console.log(event.target)
                break;
            default:
                console.log('somthing went wrong')
        }


    })
}