

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


//creat new player and resets stats
const startBox = document.querySelector('.start');
const startBtn = document.querySelector('.startBtn');
let deck = 1;// ---shuld change
let levelNum = 1

startBtn.addEventListener('click', (event) => {    
    if(levelNum ===3){
        deck =1 //! need to change this
        levelNum = 1;
    }
    resetCardContainer();
    allCardsfunc(deck);

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
                newLevel()
                break;
                case buttonArray[3]://new player btn
                deck = 1; //! need to change 
                startBox.classList.remove('hideStart');
                newPlayerBox.innerHTML = "Write your name player"
                break;
            default:
                console.log('somthing went wrong')
        }


    })
}