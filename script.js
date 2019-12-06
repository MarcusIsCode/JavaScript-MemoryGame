







//creaing all the cards  with objects and putting them into a array 'allcards'

const buttonArray = []
const retry = document.querySelector('.reset');
const reset = document.querySelector('.retry');
const nexLevel = document.querySelector('.NextLevel');
const newPly = document.querySelector('.newP')
buttonArray.push(retry,reset,nexLevel,newPly);

for (let y = 0; y < buttonArray.length; y++) {
    
    
    buttonArray[y].addEventListener('click',(event)=>{
       let click = event.target;
       switch(click){
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
            console.log(buttonArray[3])    
            break;
            default:
            console.log('somthing went wrong')
       }
       
    
    })
}