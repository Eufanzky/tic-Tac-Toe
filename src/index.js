//buttons
const switchButton = document.querySelector('#switch-button');
const startButton = document.querySelector('#start-button');
const historyButton = document.querySelector('#history-button');

//lines wehbn winning
const lines = document.querySelectorAll('.line');
let linesArray = [...lines];

//divs
const divs = document.querySelectorAll('.game-container__box');
let divsArray = [...divs];

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
    verifyRows(game,'x');
    verifyRows(game,'o');
    verifyColumns(game, 'x');
    verifyColumns(game, 'o');
    verifyDiagonals(game, 'x');
    verifyDiagonals(game, 'o');
}

const verifyRows = (game, value) => {
    let row = [`${value}`, `${value}`, `${value}`];

    let gameRow1 = [...game].splice(0,3); 
    let gameRow2 = [...game].splice(3,3);
    let gameRow3 = [...game].splice(6,3);


    if(JSON.stringify(gameRow1) === JSON.stringify(row))  {
        const rowRedLine = document.querySelector('.row1-line');
        rowRedLine.classList.toggle('element--display-none');
        finishGame();
    } else if (JSON.stringify(gameRow2) === JSON.stringify(row) ) {
        const rowRedLine = document.querySelector('.row2-line');
        rowRedLine.classList.toggle('element--display-none');
        finishGame();

    } else if (JSON.stringify(gameRow3) === JSON.stringify(row)) {
        const rowRedLine = document.querySelector('.row3-line');
        rowRedLine.classList.toggle('element--display-none');
        finishGame();

    }
}
const verifyColumns = (game, value) => {
    if(game[0] === value && game[3] === value && game[6] === value) {
        const columnLine = document.querySelector('.column1-line')
        columnLine.classList.toggle('element--display-none');
        finishGame();

    } else if (game[1] === value && game[4] === value && game[7] === value) {
        const columnLine = document.querySelector('.column2-line');
        columnLine.classList.toggle('element--display-none');
        finishGame();

    } else if(game[2] === value && game[5] === value && game[8] === value) {
        const columnLine = document.querySelector('.column3-line');
        columnLine.classList.toggle('element--display-none');
        finishGame();

    }
    
}
const verifyDiagonals = (game, value) => {
    if(game[0] === value && game[4] === value && game[8] === value) {
        const diagonalLine = document.querySelector('.diagonal1-line');
        diagonalLine.classList.toggle('element--display-none');
        finishGame();

    } else if (game[2] === value && game[4] === value && game[6] === value) {
        const diagonalLine = document.querySelector('.diagonal2-line');
        diagonalLine.classList.toggle('element--display-none');
        finishGame();

    }
}


const finishGame = (winner) => {
    divsArray.forEach(div => {
        div.removeEventListener('click', draw);
    });

    if(winner === '') {
        console.log('a');
    } else {
        const winnerElement = document.querySelector('.winner');
        winnerElement.textContent = `Winner! ${winner}`;
    }
}
