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
                console.log(allCards)
                allCards[0].div.classList.remove('show');
                allCards[0].div.innerHTML = "";
                allCards = []

                allCardss();
                console.log(allCards)

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
                startBox.classList.remove('hideStart');
                break;
            default:
                console.log('somthing went wrong')
        }


    })
}

for (let i = 0; i < 1; i++) {

    const theCard = new cardsObjs(i, '');
    const theCard2 = new cardsObjs(i, '');
    cardsArray[i] = theCard;
    cardsArray2[i] = theCard2;
    allCards = cardsArray.concat(cardsArray2);

    //shuffles the array (function.js)  
    shuffleArray(allCards);
}

//where all card are
//const container = document.querySelector('.container');

//name variables for start up window

let compareArray = [];
let wrongCards = [];

let cardsArray = [];
let cardsArray2 = [];
let allCards = [];




correct = playor.correct
//adding click event to every div
for (let g = 0; g < allCards.length; g++) {

    let card = allCards[g]

    // adding the divs to the container inside index.html
    container.appendChild(card.div);
    //adding clickevent
    card.div.addEventListener('click', (event) => {

        const move = document.querySelector('.moves');

        showCard(event)
        //push objct id into array
        compareArray.push(card.id);
        //push div into array
        wrongCards.push(event.target)
        move.textContent = 'Moves: ' + (playor.moves += 1);

        /** ---- the logic win or no win  **/

        //if won
        if (compareArray[0] === compareArray[1]) {
            console.log('yey')
            //if correct you get a point
            correct += 1;
            console.log(correct)
            //both arrays gets empty so you can compare 2 new ones
            compareArray = [];
            wrongCards = [];
            //wining
            if (correct === cardsArray.length) {
                console.log('you won')
                wining();
            }


            //if wrongs
        } else if (compareArray[0] !== compareArray[1] && compareArray.length > 1) {

            if (wrongCards.length > 2) {
                compareArray = [];
                hideCard(wrongCards, 'show')
                wrongCards = [];

                showCard(event, card.id)
                compareArray.push(card.id);
                wrongCards.push(event.target)
            }
        }
    }, false)
} 
