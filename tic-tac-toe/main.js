let playingTurn = 0
let currentPlayer;
let cell00 = cell01 = cell02 = cell10 = cell11 = cell12 = cell20 = cell21 = cell22 = " ";
const cells = [ cell00, cell01, cell02, cell10, cell11, cell12, cell20, cell21, cell22 ]
const cellIds = [ 'cell00', 'cell01', 'cell02', 'cell10', 'cell11', 'cell12', 'cell20', 'cell21', 'cell22'];
const numberCellId1 = [0,3,6,0,1,2,0,2]
const numberCellId2 = [1,4,7,3,4,5,4,4]
const numberCellId3 = [2,5,8,6,7,8,8,6]
const winnerInfo = document.getElementById('winnerInfo');

function checkWinner() {
    let a = 0, b = 0, c = 0;
    while (a < 8 && b < 8 && c < 8) {
        if (cells[numberCellId1[a]] == cells[numberCellId2[b]] && cells[numberCellId2[b]] == cells[numberCellId3[c]] && cells[numberCellId1[a]] !== " ") {
            console.log(a, b, c);
            winnerInfo.innerHTML = currentPlayer + " is the winner";
            return;
        }   
        
        a++
        b++
        c++
    }
}

function cellClick(cellId) {
    currentPlayer = playingTurn % 2 === 0 ? 'X' : 'O';

    for (let i = 0; i < 9; i++)
        if (cellId == cellIds[i]) {
            if (cells[i] !== " ") return;

            document.getElementById(cellId).innerHTML = currentPlayer;
            cells[i] = currentPlayer;    
        }

    playingTurn++;
    checkWinner();
}
    
function resetButton(value) {
    for (let i = 0; i< cellIds.length; i++) {
        document.getElementById(cellIds[i]).innerHTML = ' ';
    }
    cell00 = cell01 = cell02 = cell10 = cell11 = cell12 = cell20 = cell21 = cell22 = " ";
}

