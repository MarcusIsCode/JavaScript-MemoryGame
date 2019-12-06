

const allCardsfunc = () => {

    for (let i = 0; i < 2; i++) {

        const theCard = new cardsObjs(i, '');
        const theCard2 = new cardsObjs(i, '');
        cardsArray[i] = theCard;
        cardsArray2[i] = theCard2;
        allCards = cardsArray.concat(cardsArray2);
        //shuffles the array (function.js)  
        shuffleArray(allCards);

    }

    for (let c = 0; c < allCards.length; c++) {
        // push the div into it's own array
        divCards.push(allCards[c].div);
        //use then push out the divs
        container.appendChild(divCards[c]);
        //this is done to use the same index when chosing card

    }

}


function player(name, id = 0) {
    this.id = id;
    this.name = name;
    this.moves = 0;
    this.level = 1
    this.correct = 0;
}
let x = 1;
const playor = new player("", x);

const creatPlayerStats = () => {
    const boxStats = elFactory(
        'div', { class: 'boxStats' }, "",
        elFactory('p', { class: 'plyName' }), "",
        elFactory('p', { class: 'level' }), "",
        elFactory('p', { class: 'moves' }), ""
    )
    statsContainer.appendChild(boxStats);
    const plyName = document.querySelector('.plyName');
    const level = document.querySelector('.level');
    const move = document.querySelector('.moves');

    playor.name = input.value;
    plyName.textContent = playor.name
    level.textContent = 'Level: ' + playor.level;
    move.textContent = 'Moves: ' + playor.moves;
}


let correct = playor.correct

const funcCard= (event) => {
   
        const move = document.querySelector('.moves'); 
        //showing the value;
        showCard(event)
        //for geting thevalue of the cards 
        let i = divCards.indexOf(event.target);
        let cardValue = allCards[i].id;
        
        let click = event.target
        console.log(click)
        //push objct id into array
        compareArray.push(cardValue);
        //push div into array
        wrongCards.push(click)
     
      
      move.textContent ='Moves: '+ (playor.moves +=1);
    
  
    //if won
    if (compareArray[0] === compareArray[1]) {
        console.log('yey')
        //if correct you get a point
        correct += 1;
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

            showCard(event)
            compareArray.push(cardValue);
            wrongCards.push(click)
        }
    }
    

}





//creating elements 
const elFactory = (type, attributes, ...children) => {
    const el = document.createElement(type)

    for (key in attributes) {
        el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
        if (typeof child === 'string') {
            el.appendChild(document.createTextNode(child))
        } else {
            el.appendChild(child)
        }
    })

    return el
}
//shuffles array
const shuffleArray=(array)=> {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

const hideCard =(array,b) =>{
    
    for (let i = 0; i < array.length; i++){
        array[i].classList.remove(b)
        array[i].innerHTML ="";
    }        
}

const showCard =(event)=>{

   let i = divCards.indexOf(event.target)
    event.target.classList.add('show')
   
    return event.target.innerHTML = `<h4>${allCards[i].id}</h4>`
}

const wining =() =>{
    console.log(allCards)
    const popUpp = document.querySelector('.popup')
    popUpp.classList.add('showPopup')
    console.log(popUpp)
}


