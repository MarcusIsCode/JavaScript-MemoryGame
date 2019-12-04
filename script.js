   

const moves = document.querySelector('.moves');
const playerName = document.querySelector('.plyName');
const container = document.querySelector('.container');

//name variables for start up window



let countMoves = 0;
let correct = 0;

let compareArray = [];
let wrongCards = [];

let cardsArray =[];
let cardsArray2 = [];
let allCards = [];




function cardsObjs(id,div){
    this.id = id;
    this.div = document.createElement("div")
    this.div.classList.add("level1");
}

//creaing all the cards  with objects and putting them into a array 'allcards'
for (let i = 0; i < 3; i++) {
   
    const theCard = new cardsObjs(i,'');
    const theCard2 = new cardsObjs(i,'');
    cardsArray[i] = theCard;
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2); 

    //shuffles the array (function.js)  
    shuffleArray(allCards);
}

  

//adding click event to every div
for (let g = 0; g < allCards.length; g++) {
        
    let card = allCards[g]
    
    // adding the divs to the container inside index.html
    container.appendChild(card.div);
    console.log(card)
    //adding clickevent
 card.div.addEventListener('click',(event)=>{
        
        showCard(event,card.id)
        //push objct id into array
        compareArray.push(card.id);
        //push div into array
        wrongCards.push(event.target) 
    
     /** ---- the logic win or no win  **/   
        
        //if won
            if (compareArray[0] === compareArray[1] ){
                console.log('yey')
                //if correct you get a point
              
                //both arrays gets empty so you can compare 2 new ones
                compareArray =[];
                wrongCards =[];  
                //wining
                if(correct === cardsArray.length){
                    console.log('you won')
                    wining();
                }
                
               // console.log(correct);
                
                //if wrongs
            } else if (compareArray[0] !== compareArray[1] && compareArray.length>1){
                
                if(wrongCards.length >2){
                    compareArray=[];  
                    hideCard(wrongCards,'show')
                    wrongCards = [];
                       
                        showCard(event, card.id)
                        compareArray.push(card.id);
                        wrongCards.push(event.target)
                }  
            }       
    },false)    
}

