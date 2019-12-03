
const displayText =(a,b)=>{
    a.textContent = b ;
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

const showCard =(event,id)=>{
    event.target.classList.add('show')
   return event.target.innerHTML = `<h4>${id}</h4>`
}

const wining =() =>{
    const popUpp = document.querySelector('.popup')
    popUpp.classList.add('showPopup')
    console.log(popUpp)
}

//add a placeholder for clickevent to hide it behind when clicked
