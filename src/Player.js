class Player {
    constructor(name, symbol, wins, defeats) {
        this.name = name;
        this.symbol = symbol;
        this.wins = wins;
        this.defeats = defeats;
    }
    getName() {
        return this.name;
    }
    getSymbol() {
        return this.symbol;
    }
    getWins() {
        return this.wins;
    }
    getDefeat() {
        return this.defeats;
    }
    setName(name) {
        this.name = name;
    }
    setWins(wins) {
        this.wins = wins;
    }
    setDefeats(defeats) {
        this.defeats = defeats;
    }
    setSymbol(symbol) {
        this.symbol = symbol;
    }


    increaseWins() {
        this.wins++;
    }
    increaseDefeats() {
        this.defeats++;
    }
    show() {
        console.log(`Name: ${this.name}`);
        console.log(`Wins: ${this.wins}`);
        console.log(`Defeats: ${this.defeats}`);
    }
}

