class Player {
    constructor(name, wins, defeats) {
        this.name = name;
        this.wins = wins;
        this.defeats = defeats;
    }
    getName() {
        return this.name;
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

    show() {
        console.log(`Name: ${this.name}`);
        console.log(`Wins: ${this.wins}`);
        console.log(`Defeats: ${this.defeats}`);
    }
}

