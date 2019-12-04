const startBox = document.querySelector('.start');
const input = document.querySelector('input');
const startBtn = document.querySelector('.startBtn');

startBtn.addEventListener('click', () => {

    const name = input.value;
    playerName.textContent = name;
    startBox.classList.add('hideStart');

})
console.log(countMoves)

function player(name, correct, moves) {
    this.name = name;
    this.moves = moves;
    this.correct = correct;
}