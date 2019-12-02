
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
// arrays to compare with
let compareArray = [];
//to create the cards used 2 arrays
let cardsArray =[];
let cardsArray2 = [];
//array used to shuffel and easier compare.
let allCards = [];
//used to changed style on wrong cards
let wrongCards = [];



//creaing all the cards  with objects and putting them into a array 'allcards'
for (let i = 0; i < 1; i++) {
   
    const theCard = new cardsObjs(i,'');
    const theCard2 = new cardsObjs(i,'');
    cardsArray[i] = theCard;
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2); 

    //shuffles the array (function.js)  
    shuffleArray(allCards);
    console.log(allCards)
}
displayText(moves, 'Moves:'+countMoves);  

//adding click event to every div
for (let g = 0; g < allCards.length; g++) {
        
    let card = allCards[g]
    
    // adding the divs to the container inside index.html
    container.appendChild(card.div);
    
    //adding clickevent
    card.div.addEventListener('click',(event)=>{
        
        showCard(event,card.id)
        console.log(card.id);
        //for the card;
        countMoves+=1;
        //show all moves
        displayText(moves,'Moves:'+countMoves);  
        //push objct id into array
        compareArray.push(card.id);
        //push div into array
        wrongCards.push(event.target) 
    
     /** ---- the logic win or no win  **/   
        
        //if won
            if (compareArray[0] === compareArray[1] ){
                console.log('yey')
                //if correct you get a point
                correct+=1;
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
                    //hides the card
                    compareArray=[];  
                    hideCard(wrongCards,'show')
                    wrongCards = [];
                    console.log ('ney')//**  remove later  
                        //add a new card for the next klick
                        showCard(event, card.id)
                        compareArray.push(card.id);
                        wrongCards.push(event.target)
                } 
               
                
            }
  
        
    },false) 
    
}

