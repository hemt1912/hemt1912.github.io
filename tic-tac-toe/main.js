let currentPlayer = 'X';
let finished = false;
const emptyString = ' ';
let cell00 = cell01 = cell02 = cell10 = cell11 = cell12 = cell20 = cell21 = cell22 = emptyString;
let cells = [ cell00, cell01, cell02, cell10, cell11, cell12, cell20, cell21, cell22 ]

const cellIds = ['cell00', 'cell01', 'cell02', 'cell10', 'cell11', 'cell12', 'cell20', 'cell21', 'cell22'];
const winnerCellIds1 = [0,3,6,0,1,2,0,2]
const winnerCellIds2 = [1,4,7,3,4,5,4,4]
const winnerCellIds3 = [2,5,8,6,7,8,8,6]
const winnerInfo = document.getElementById('winnerInfo');

function setGoFirst(player) {
    for (let i = 0; i < 8; i++)
        if (cells[i] != emptyString) return;

    currentPlayer = player;
}

function checkWinner() {
    // check winner
    let a = 0, b = 0, c = 0;
    while (a < 8 && b < 8 && c < 8) {
        let cellIdIndex1 = winnerCellIds1[a];
        let cellIdIndex2 = winnerCellIds2[b];
        let cellIdIndex3 = winnerCellIds3[c];

        if (cells[cellIdIndex1] == cells[cellIdIndex2] && cells[cellIdIndex2] == cells[cellIdIndex3] && cells[cellIdIndex1] !== emptyString) {
            winnerInfo.innerHTML = '<strong>' + currentPlayer + '</strong> won!';

            document.getElementById(cellIds[cellIdIndex1]).style.color = '#EDBD3E';
            document.getElementById(cellIds[cellIdIndex2]).style.color = '#EDBD3E';
            document.getElementById(cellIds[cellIdIndex3]).style.color = '#EDBD3E';

            finished = true;

            return;
        }
        
        a++
        b++
        c++
    }

    // check draw
    if (cells.every(cell => cell != emptyString)) {
        winnerInfo.innerHTML = "It's tie!";
        finished = true;
        
        return;
    }
}

function cellClick(cellId) {
    if (finished) return;

    for (let i = 0; i < 9; i++)
        if (cellId == cellIds[i]) {
            if (cells[i] !== emptyString) return;

            document.getElementById(cellId).innerText = currentPlayer;
            cells[i] = currentPlayer;
        }

        checkWinner();

    if (currentPlayer == 'X') currentPlayer = 'O'
    else currentPlayer = 'X'

}
    
function restartGame() {
    console.log('about to reset')
    for (let i = 0; i < cellIds.length; i++) {
        document.getElementById(cellIds[i]).innerText = '';
        document.getElementById(cellIds[i]).style.color = 'cadetblue';
    }
    
    winnerInfo.innerHTML = 'Ready!'
    document.getElementById('goFirstX').checked = true;


    currentPlayer = 'X';
    finished = false;
    
    cell00 = cell01 = cell02 = cell10 = cell11 = cell12 = cell20 = cell21 = cell22 = emptyString;
    cells = [ cell00, cell01, cell02, cell10, cell11, cell12, cell20, cell21, cell22 ]
}