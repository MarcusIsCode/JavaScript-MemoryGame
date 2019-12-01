
const displayText =(a,b)=>{
    a.textContent = b ;
}

//shuffles array
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

const hideCard =(array) =>{
    
    for (let i = 0; i < array.length; i++){
        array[i].classList.remove('show')
        array[i].innerHTML ="";
              
    }        

}

const showCard =(event,id)=>{
    event.target.classList.add('show')
   return event.target.innerHTML = `<h4>${id}</h4>`
}

const wining =() =>{
    const win  = document.createElement("h2");
    document.body.appendChild(win);
    win.innerHTML = "You won";
}

//add a placeholder for clickevent to hide it behind when clicked