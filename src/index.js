//buttons
const switchButton = document.querySelector('#switch-button');
const startButton = document.querySelector('#start-button');
const historyButton = document.querySelector('#history-button');

//lines wehbn winning
const lines = document.querySelectorAll('.line')
let linesArray = [...lines]

//divs
const divs = document.querySelectorAll('.game-container__box');
let divsArray = [...divs]

//switch to know the turn
let sw = 0;


const draw = (event) => {
    if (sw === 0) {
        event.target.textContent = 'x';
        event.target.removeEventListener('click', draw);
        sw = 1;      
    } else if (sw === 1) {
        event.target.textContent = 'o';
        event.target.removeEventListener('click', draw);
        sw = 0;      
    }

    verifyGameState();

}
divsArray.forEach(div => {
    div.addEventListener('click', draw);
});


//verify if there is a winner

const verifyGameState = () => {
    let game = divsArray.map(item => {
        return item.textContent;
    });
    // console.log("rows x " + verifyRows(game, 'x'));
    // console.log("rows o " + verifyRows(game, 'o'));
    // console.log("columns x " + verifyColumns(game, 'x'));
    // console.log("columns o " + verifyColumns(game, 'o'));
    // console.log("diagonals x " + verifyDiagonals(game, 'x'));
    // console.log("diagonals o " + verifyDiagonals(game, 'o'));
}

const verifyRows = (game, value) => {
    let row = [`${value}`, `${value}`, `${value}`];

    let gameRow1 = [...game].splice(0,3); 
    let gameRow2 = [...game].splice(3,3);
    let gameRow3 = [...game].splice(6,3);


    if(JSON.stringify(gameRow1) === JSON.stringify(row) 
    || JSON.stringify(gameRow2) === JSON.stringify(row) 
    || JSON.stringify(gameRow3) === JSON.stringify(row)) {
        return true;
    } else {
        return false;
    }
}
const verifyColumns = (game, value) => {
    if(game[0] === value && game[3] === value && game[6] === value
    ||game[1] === value && game[4] === value && game[7] === value
    ||game[2] === value && game[5] === value && game[8] === value
    ) {
        return true;
    } else {
        return false;
    }
}
const verifyDiagonals = (game, value) => {
    if(game[0] === value && game[4] === value && game[8] === value
    ||game[2] === value && game[4] === value && game[6] === value
    ) {
        return true;
    } else {
        return false;
    }
}

