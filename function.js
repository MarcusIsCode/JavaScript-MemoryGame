
const displayText =(a,b)=>{
    a.textContent = b ;
}

const goThrougArray =(array,b)=>{
    array.forEach(element => {
        element;
    });
}

const shuffleArray=(array)=> {
    var currentIndex = array.length, temporaryValue, randomIndex;

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

const hideCard =(array,className) =>{
    
    array.forEach(hideCard => {
        hideCard.className.remove(className);
    });
}

const showCard =(event,id)=>{
   
   return event.target.innerHTML = `<div class='show'><h4>${id}</h4></div>`
}
//add a placeholder for clickevent to hide it behind when clicked
