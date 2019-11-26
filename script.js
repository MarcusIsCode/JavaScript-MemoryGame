
const container = document.querySelector('.container')
let cardsArray =[];
let count = 0;
let countMoves = 0;
for (let i = 0; i < 16; i++) {
    const card = document.createElement("div");
    
    card.classList.add("level1");
    card.textContent = (i+i)%16;
    cardsArray[i] = card;
    
}



    for (let index = 0; index < cardsArray.length; index++) {
         cardsArray[index].addEventListener('click', (event) => {
           countMoves++;
           console.log(countMoves);
            const x = event.target.innerHTML;
            const y = event.target.innerHTML;
            console.log(x);
            if (count ==2){
                console.log(y)
            }
            if(count ===2){
                count = 1;
            }else{
                count++;
            } 
            
            if(y === x){
                console.log('hello');
            }
        
        }) 
    
    
    }

    
    
cardsArray.forEach(card => {
    
    container.appendChild(card);
});
/* const cards = (x) =>{
    return x;
} */