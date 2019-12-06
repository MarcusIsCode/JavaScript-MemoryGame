



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
const input = document.querySelector('input');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
   
    creatPlayerStats(); 
    allCardsfunc();
    let divs = document.querySelectorAll('.level1')

    startBox.classList.add('hideStart');
}) 


const level = document.querySelector('.level');

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
            case buttonArray[0]:
                console.log('reset')
                console.log(buttonArray[0])
                allCards.forEach(element => {
                    console.log(element);
                });

                break;
            case buttonArray[1]:
                console.log('retry')
                console.log(buttonArray[1])
                break;
            case buttonArray[2]:
                console.log('nextlevel')
                console.log(buttonArray[2])
                break;
            case buttonArray[3]:
                console.log('new player');
                startBox.classList.remove('hideStart');
                console.log(buttonArray[3])
                break;
            default:
                console.log('somthing went wrong')
        }


    })
}