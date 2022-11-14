//switch for knowing the turn
let sw = 0;

let plays = 0;

//pplayer 1 and 2 objects
let p1 = new Player('you', 0, 0);
let p2 = new Player('cpu', 0, 0);
let p1Wins = 0;
let p2Wins = 0;
let p1Defeats = 0;
let p2Defeats = 0;
let nOfTies = 0;

const draw = (event) => {
    if (sw === 0) {
        event.target.textContent = 'x';
        event.target.removeEventListener('click', draw);
        sw = 1;
        plays++;
    } else if (sw === 1) {
        event.target.textContent = 'o';
        event.target.removeEventListener('click', draw);
        sw = 0;  
        plays++;    
    }

    verifyGameState(plays);
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


//finishes the game
const finishGame = (tie) => {
    divsArray.forEach(div => {
        div.removeEventListener('click', draw);
    });

    if(plays%2!==0) {
        const winnerElement = document.querySelector('.winner');
        winnerElement.textContent = `Winner! ${p1.getName()}`;
        p1Wins++;
        p1.setWins(p1Wins);
        p2Defeats++;
        p2.setDefeats(p2Defeats);
        updateBox();
        toggle();
    } else if(plays%2===0){
        const winnerElement = document.querySelector('.winner');
        winnerElement.textContent = `Winner! ${p2.getName()}`;
        p2Wins++;
        p2.setWins(p2Wins);
        p1Defeats++;
        p1.setDefeats(p1Defeats);
        updateBox();
        toggle();
    }
}
const toggle = () => {
    const blur = document.querySelector('#blur');
    blur.classList.toggle('blur-effect');

    const popup = document.querySelector('.popup');
    popup.classList.toggle('element--visibility-hidden');

    popup.addEventListener('click',toggle);
}



//PLAYER BOXES and TIES

const updateBox = () => {
    player1Name.textContent = `x (${p1.getName()})`;
    player1Victories.textContent = `Victories: ${p1.getWins()}`;
    player1Defeats.textContent = `Defeats: ${p1.getDefeat()}`;
    
    player2Name.textContent = `o (${p2.getName()})`;
    player2Victories.textContent = `Victories: ${p2.getWins()}`;
    player2Defeats.textContent = `Defeats: ${p2.getDefeat()}`;
}
updateBox();






//RESET BUTTON
const resetGame = () => {
    divsArray.forEach(div => {
        div.textContent = '';
        div.addEventListener('click', draw);
    })
    linesArray.forEach(line => {
        line.classList.remove('element--display-none');
        line.classList.add('element--display-none');

    })
    plays = 0;
}
resetButton.addEventListener('click', resetGame);