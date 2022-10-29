const CellsElements = document.querySelectorAll('[data-cell]');
console.log(CellsElements)
const Board = document.querySelector('[data-board]');
const WinnerCombinations = [
    [0,1,2],
    [3,4,5],
    [5,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let TurnoCicle;
const CheckForWin =(currentplayer) =>{
    return WinnerCombinations.some(combination =>{
        return combination.every((index) => {
            return CellsElements[index].classList.contains(currentplayer)
        })
    })
}

const placeMark = (cell,AddClasse) =>{
    cell.classList.add(AddClasse);
}
const StartGame = ()=>{
    TurnoCicle = false;
    Board.classList.add('x');
}
const swapTurns = ()=>{
    TurnoCicle = !TurnoCicle

    Board.classList.remove('x');
    Board.classList.remove('circle');
    if(TurnoCicle){
        Board.classList.add('circle');
    }else Board.classList.add('x');
}

const handclick = (e)=>{
    // marcar com x ou circle
    const cell = e.target;
    
    const AddClasse = TurnoCicle ? 'circle' : 'x';
    placeMark(cell,AddClasse);
    // verificar por vitoria
    const isWin = CheckForWin(AddClasse);
    if(isWin){
        console.log('winner')
    }
    //verificar por empate
    // mudar simbolo
    swapTurns();
}
for(const cell of CellsElements){
    cell.addEventListener('click', handclick, {once:true});
}
StartGame()