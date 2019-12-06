function player(name) {
    this.name = name;
    this.moves = 0;
    this.level = 1
    this.correct = 0;
}
const playor = new player();

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

const funcCard= (event) => {
   
        
        let click = event.target
      
        const move = document.querySelector('.moves'); 
        
     
        showCard(event)

        //push objct id into array
        compareArray.push(click);
        //push div into array
        console.log(compareArray)
      wrongCards.push(event.target)
      console.log(click) 
      move.textContent ='Moves: '+ (playor.moves +=1);
    
  
    //if won
    if (compareArray[0] === compareArray[1]) {
        console.log('yey')
        //if correct you get a point
        let correct = 1;
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


