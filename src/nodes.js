//buttons
const switchButton = document.querySelector('#switch-button');
const startButton = document.querySelector('#start-button');
const historyButton = document.querySelector('#history-button');

//lines when winning
const lines = document.querySelectorAll('.line');
let linesArray = [...lines];

//divs
const divs = document.querySelectorAll('.game-container__box');
let divsArray = [...divs];

//player boxes
const player1Name = document.querySelector('#player1-name');
const player1Victories = document.querySelector('#player1-victories');
const player1Defeats = document.querySelector('#player1-defeats');
const player2Name = document.querySelector('#player2-name');
const player2Victories = document.querySelector('#player2-victories');
const player2Defeats = document.querySelector('#player2-defeats');

//ties
const numberOfTies = document.querySelector('#number-of-ties');
numberOfTies.textContent = `${0}`;


//buttons
const resetButton = document.querySelector('#reset-button');
const checkHistoryButton = document.querySelector('#history-button');