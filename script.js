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

for (let i = 0; i < 8; i++) {
   
    
    const theCard = new cardsObjs(i,'',bgColors[i]);
    const theCard2 = new cardsObjs(i,'',bgColors[i]);
    cardsArray[i] = theCard
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2);
    
    //sconsole.log (cardsArray)
}
console.log(allCards)
//console.log(cardsArray)

for (let g = 0; g < 16; g++) {
    allCards[g].div.textContent = allCards[g].id;
    let card = allCards[g]
        
    
    container.appendChild(card.div);
    
    allCards[g].div.addEventListener('click',(event)=>{
        
        let click = event.target;
        countMoves+=1
        displayText(moves,countMoves);  
        
        
        if(click === card.div){
            compareArray.push(card.id);
            console.log(compareArray)
  
            if (compareArray[0] === compareArray[1]){
                
                
                click.classList.add('dispNone');
                
               
                correct+=1;
                
                if(cardsArray.length >2){
                    compareArray =[];
                }

            } else if (compareArray[0] !== compareArray[1] && compareArray.length>1){
                
                compareArray=[];

            }else if ( correct === cardsArray.length){
                    console.log('you won')
                }
            }
            
        
    }) 
    
}



