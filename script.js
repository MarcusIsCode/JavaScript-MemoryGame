const bgColors = ['#3c8ac0', '#821afa', '#821afa', '#77eb85', '#2e9966']

const moves = document.querySelector('.moves');
const container = document.querySelector('.container');
let compareArray = [];// för att gemföra 2 värden
let countMoves = 0;
let correct = 0;

function cardsObjs(id,div,background){
    this.id = id;
    this.div = document.createElement("div")
    this.div.classList.add("level1");
    this.background = background;
}

let cardsArray =[];
let cardsArray2 = []
let allCards = [];


//creaing all the cards  with objects and putting them into a array 'allcards'
for (let i = 0; i < 8; i++) {
   
    const theCard = new cardsObjs(i,'',bgColors[i]);
    const theCard2 = new cardsObjs(i,'',bgColors[i]);
    cardsArray[i] = theCard;
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2);   
   
}
console.log(allCards)



//adding click event to every div
for (let g = 0; g < 16; g++) {
    let card = allCards[g]
    
    // adding the divs to the container inside index.html
    container.appendChild(card.div);
    
    //adding clickevent
    allCards[g].div.addEventListener('click',(event)=>{
        //for the card;
        
        console.log(event.target);
        event.target.appendChild(showCard());
        countMoves+=1;
        displayText(moves,countMoves);  
        compareArray.push(card.id);
        
           
        
        console.log(compareArray)
  
            if (compareArray[0] === compareArray[1] ){
                console.log(compareArray.length)
               console.log('yey')
                correct+=1;
                compareArray =[];
                //wining
                if(correct === cardsArray.length){
                    console.log('you won')
                }
                
                console.log(correct);
                

            } else if (compareArray[0] !== compareArray[1] && compareArray.length>1){
                
                compareArray=[];

            }
           
            
        
    }) 
    
}


