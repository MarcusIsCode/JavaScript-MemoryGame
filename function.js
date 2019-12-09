
//**function for geting cards */
const allCardsfunc = (numberOfCards) => {

    for (let i = 0; i < numberOfCards; i++) {

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
//creaing the stats for the player box moves etc
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

const input = document.querySelector('input');
//creating player stats
function player(id,name,mov,level) {
    this.id = id;
    this.name = name;
    this.mov =  mov;
    this.level = level;
    this.boxStats = elFactory('div', { class: 'boxStats' },"",
                    elFactory('p', { class: 'plyName' },name,),"",
                    elFactory('p', { class: 'level' },"Level: " +level,), "",
                    elFactory('p', { class: 'moves' },"Moves: "+ mov,),""
                     )
}

let playStats = new player(1,input.value, 0, 1);
let playerArray = [];
const creatPlayerStats = () => {
    
    let arrLength = playerArray.length
    
    const playStats = new player(arrLength, (input.value === "") ? "anon" : input.value,0, 1);
  
    playerArray.push(playStats);
        
    playerArray.sort(function (a, b) {
        return a.id - b.id || a.name.localeCompare(b.name);
    });

    playerArray.reverse();
    
    statsContainer.appendChild(playerArray[0].boxStats);
    statsContainer.insertBefore(playerArray[0].boxStats, statsContainer.childNodes[0]);
    resetStats();

}


//checking if card is correct
let correct = 0;
let moves = 0;
const newPlayerBox = document.querySelector('.newPlayerText')

const funcCard= (event) => {
    moves+=1;
    document.querySelector('.moves').innerHTML ="Moves: "+ moves;
        //showing the value;
        showCard(event)
        //for geting thevalue of the cards 
        let i = divCards.indexOf(event.target);
        let cardValue = allCards[i].id;
        let click = event.target
        //push objct id into array
        compareArray.push(cardValue);
        //push div into array
        wrongCards.push(click)
    
  
    //if wining
    if (compareArray[0] === compareArray[1]) {
        //if correct you get a point
        correct += 1;
   
        //both arrays gets empty so you can compare 2 new ones
        compareArray = [];
        wrongCards = [];
        //wining
        if (correct === cardsArray.length && levelNum  < 3 ) {
            correct = 0;
            wining();
        } else if (correct === cardsArray.length && levelNum === 3){
            startBox.classList.remove('hideStart');
            newPlayerBox.innerHTML = `Congratilasion you Won!,<br> your score is: ${moves} <br>Next player write your name!`;
            levelNum = 0;
            deck = 0;
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
const popUpp = document.querySelector('.popup')

const wining =() =>{
    popUpp.classList.add('showPopup')
}
const resetCardContainer =()=>{
    container.innerHTML = "";
    cardsArray = [];
    cardsArray2 = [];
    allCards = [];
}

 const resetStats =()=>{
     resetCardContainer();
     allCardsfunc(8)
     hideCard(divCards, 'show')
     shuffleArray(allCards);
     popUpp.classList.remove('showPopup')
     moves = 0;
     correct= 0;
     document.querySelector('.moves').innerHTML = "Moves: " + 0;
     document.querySelector('.level').innerHTML = "Level: " + 1;
 }
 
 const newLevel = ()=>{
    deck += 8; 
    levelNum+=1;
    document.querySelector('.level').innerHTML = "Level: " + levelNum;
    container.innerHTML = "",
    resetCardContainer();
    allCardsfunc(deck);
    hideCard(divCards, 'show')
    popUpp.classList.remove('showPopup')
   
    if(levelNum > 2){
        container.classList.remove('gridOne')
        container.classList.add('gridTwo')
    }else{
        container.classList.add('gridOne')
        container.classList.remove('gridTwo')
    }
}