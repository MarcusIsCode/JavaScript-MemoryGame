
//setTimeout(a,6300);   

const moves = document.querySelector('.moves');
const container = document.querySelector('.container');
let countMoves = 0;
let correct = 0;

function cardsObjs(id,div){
    this.id = id;
    this.div = document.createElement("div")
    this.div.classList.add("level1");

}

let compareArray = [];// för att gemföra 2 värden
let cardsArray =[];
let cardsArray2 = [];
let allCards = [];
let wrongCards = [];



//creaing all the cards  with objects and putting them into a array 'allcards'
for (let i = 0; i < 8; i++) {
   
    const theCard = new cardsObjs(i,'');
    const theCard2 = new cardsObjs(i,'');
    cardsArray[i] = theCard;
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2); 

    //shuffles the array (function.js)  
    shuffleArray(allCards);
}



//adding click event to every div
for (let g = 0; g < 16; g++) {
        
    let card = allCards[g]
    
    // adding the divs to the container inside index.html
    container.appendChild(card.div);
    
    //adding clickevent
    card.div.addEventListener('click',(event)=>{
        
        showCard(event,card.id)
        
        let onclick = true;
        
        if(event.target){
            onclick = false;
        }else{
            onclick = true;
        }
        console.log(onclick);
        

        //for the card;
        countMoves+=1;
        //show all moves
        displayText(moves,countMoves);  
        
        compareArray.push(card.id);
        wrongCards.push(event.target) 
    
        
        
       // console.log(compareArray)
                //if correct
            if (compareArray[0] === compareArray[1] ){
                console.log('yey')
    
                correct+=1;
                compareArray =[];
                wrongCards =[];  
                //wining
                if(correct === cardsArray.length){
                    console.log('you won')
                }
                
               // console.log(correct);
                
                //if wrongs
            } else if (compareArray[0] !== compareArray[1] && compareArray.length>1){
                
                if(wrongCards.length >1){
                    
                    hideCard(wrongCards,'show')
                    console.log ('ney')
                } 
                compareArray=[];
                console.log(compareArray)
                
            }
  
        
    },false) 
    
}

