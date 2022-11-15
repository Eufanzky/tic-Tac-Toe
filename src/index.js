let turn = 1;//turn 1 for p1 and 2 for p2
let numberOfPlays = 0;
let rounds = 0; //still not used for nothing
let tie = false; //to know if the game is a tie
//pplayer 1 and 2 objects
let p1 = new Player('you', 'x',0, 0);
let p2 = new Player('cpu', 'o',0, 0);

//data
let nOfTies = 0;


const draw = (event) => {
    if (turn === 1) {
        event.target.textContent = 'x';
        event.target.removeEventListener('click', draw);
        turn = 2;
        numberOfPlays++;
    } else if (turn === 2) {
        event.target.textContent = 'o';
        event.target.removeEventListener('click', draw);
        turn = 1;  
        numberOfPlays++;    
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
    finishGame('');
    
}

const verifyRows = (game, value) => {
    let row = [`${value}`, `${value}`, `${value}`];

    let gameRow1 = [...game].splice(0,3); 
    let gameRow2 = [...game].splice(3,3);
    let gameRow3 = [...game].splice(6,3);


    if(JSON.stringify(gameRow1) === JSON.stringify(row))  {
        const rowRedLine = document.querySelector('.row1-line');
        rowRedLine.classList.toggle('element--display-none');

        finishGame(value);

    } else if (JSON.stringify(gameRow2) === JSON.stringify(row) ) {
        const rowRedLine = document.querySelector('.row2-line');
        rowRedLine.classList.toggle('element--display-none');
 
        finishGame(value);

    } else if (JSON.stringify(gameRow3) === JSON.stringify(row)) {
        const rowRedLine = document.querySelector('.row3-line');
        rowRedLine.classList.toggle('element--display-none');

        finishGame(value);
    }
    
}
const verifyColumns = (game, value) => {
    if(game[0] === value && game[3] === value && game[6] === value) {
        const columnLine = document.querySelector('.column1-line')
        columnLine.classList.toggle('element--display-none');

        finishGame(value);
    } else if (game[1] === value && game[4] === value && game[7] === value) {
        const columnLine = document.querySelector('.column2-line');
        columnLine.classList.toggle('element--display-none');

        finishGame(value);

    } else if(game[2] === value && game[5] === value && game[8] === value) {
        const columnLine = document.querySelector('.column3-line');
        columnLine.classList.toggle('element--display-none');

        finishGame(value);
    } 

}
const verifyDiagonals = (game, value) => {
    if(game[0] === value && game[4] === value && game[8] === value) {
        const diagonalLine = document.querySelector('.diagonal1-line');
        diagonalLine.classList.toggle('element--display-none');

        finishGame(value);

    } else if (game[2] === value && game[4] === value && game[6] === value) {
        const diagonalLine = document.querySelector('.diagonal2-line');
        diagonalLine.classList.toggle('element--display-none');

        finishGame(value);
    }
}


//finishes the game
const finishGame = (value) => {

    if (numberOfPlays===9 && linesArray.every( line => {return [...line.classList][2] === 'element--display-none'} )) {
        divsArray.forEach(div => {
            div.removeEventListener('click', draw);
        });
        nOfTies++;
        numberOfTies.textContent = `${nOfTies}`;

    } else if (value === p1.getSymbol()) {
        divsArray.forEach(div => {
            div.removeEventListener('click', draw);
        });
        const winnerElement = document.querySelector('.winner');
        winnerElement.textContent = `Winner! ${p1.getName()}`;
        p1.increaseWins();
        p2.increaseDefeats();
        updateBox();
        toggle();

    } else if (value === p2.getSymbol()){
        divsArray.forEach(div => {
            div.removeEventListener('click', draw);
        });
        const winnerElement = document.querySelector('.winner');
        winnerElement.textContent = `Winner! ${p2.getName()}`;
        p2.increaseWins();
        p1.increaseDefeats();
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
    turn = 1;
    numberOfPlays = 0;
}
resetButton.addEventListener('click', resetGame);

