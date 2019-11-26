
const container = document.querySelector('.container')
let cardsArray =[];
let compareArray = [];// för att gemföra 2 värden
let wrongCardArray =[];
let count = 1;
let countMoves = 0;
for (let i = 0; i < 16; i++) {
    const card = document.createElement("div");
    
    card.classList.add("level1");
    card.style.color ="tan"
    card.textContent = (i+i)%16;
    cardsArray[i] = card;
    
    
}



    for (let index = 0; index < cardsArray.length; index++) {
         cardsArray[index].addEventListener('click', (event) => {
           countMoves++;
          // console.log(countMoves);
            const x = event.target.innerHTML;
            compareArray.push(x);
            
            const y = event.target;
            y.style.color ="black";
            wrongCardArray.push(y);
          
             let card1 =compareArray[0];
             let card2 = compareArray[1];
            
          
            
                if (card1 === card2) {
                    compareArray = [];
                    wrongCardArray = [];
                    count = 1;
                } else if(card1 !== card2 && count ===2)  {
                    wrongCardArray.forEach(wrong => {
                        wrong.style.color='tan';//sätta någon delay
                    });
                    compareArray = [];
                    count =1;
                  
                    
                }else{
                    count++;
                    console.log(count)
                }

            
           
           
        
        }) 
    
    
    }

    
    
cardsArray.forEach(card => {
    
    container.appendChild(card);
});
/* const cards = (x) =>{
    return x;
} */