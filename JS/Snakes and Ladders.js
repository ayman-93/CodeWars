function SnakesLadders() {
    this.playerOne = {
        turn: true,
        currentPlace: 0
    }

    this.playerTwo = {
        turn: false,
        currentPlace: 0,
    }

    this.gameOver = false;

};

SnakesLadders.prototype.takeShortCute = (currentPlace) => {
    if (currentPlace === 2)
        return 38;
    else if (currentPlace === 7)
        return 14;
    else if (currentPlace === 8)
        return 31;
    else if (currentPlace === 15)
        return 26;
    else if (currentPlace === 16)
        return 6;
    else if (currentPlace === 21)
        return 42;
    else if (currentPlace === 28)
        return 84;
    else if (currentPlace === 36)
        return 44;
    else if (currentPlace === 46)
        return 25;
    else if (currentPlace === 49)
        return 11;
    else if (currentPlace === 51)
        return 67;
    else if (currentPlace === 62)
        return 19;
    else if (currentPlace === 64)
        return 60;
    else if (currentPlace === 71)
        return 91;
    else if (currentPlace === 74)
        return 53;
    else if (currentPlace === 78)
        return 98;
    else if (currentPlace === 87)
        return 94;
    else if (currentPlace === 89)
        return 68;
    else if (currentPlace === 92)
        return 88;
    else if (currentPlace === 95)
        return 75;
    else if (currentPlace === 99)
        return 80;
    else
        return currentPlace;
}

SnakesLadders.prototype.move = function (player, die1, die2) {
    if (player.currentPlace + die1 + die2 <= 100)
        player.currentPlace += die1 + die2;
    else
        player.currentPlace = 100 - ((player.currentPlace + die1 + die2) - 100);
}


SnakesLadders.prototype.play = function (die1, die2) {
    if (this.gameOver) return "Game over!";
    if (this.playerOne.turn) {


        this.move(this.playerOne, die1, die2)
        this.playerOne.currentPlace = this.takeShortCute(this.playerOne.currentPlace)
        if (die1 === die2) {
            if (this.playerOne.currentPlace === 100) {
                this.gameOver = true;
                return "Player 1 Wins!"
            }
            return `Player 1 is on square ${this.playerOne.currentPlace}`
        } else {
            this.playerOne.turn = false;
            this.playerTwo.turn = true;
            if (this.playerOne.currentPlace === 100) {
                this.gameOver = true;
                return "Player 1 Wins!"
            }
            else
                return `Player 1 is on square ${this.playerOne.currentPlace}`
        }
    } else {

        this.move(this.playerTwo, die1, die2)
        this.playerTwo.currentPlace = this.takeShortCute(this.playerTwo.currentPlace)
        if (die1 === die2) {
            if (this.playerTwo.currentPlace === 100) {
                this.gameOver = true;
                return "Player 2 Wins!"
            }
            return `Player 2 is on square ${this.playerTwo.currentPlace}`
        } else {
            this.playerOne.turn = true;
            this.playerTwo.turn = false;
            if (this.playerTwo.currentPlace === 100) {
                this.gameOver = true;
                return "Player 2 Wins!"
            }
        }
        return `Player 2 is on square ${this.playerTwo.currentPlace}`
    }
}


var game = new SnakesLadders();

console.log(game.play(1, 1), "--Player 1 is on square 38", "Should return: '**Player 1 is on square 38'");
console.log(game.play(1, 5), "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
console.log(game.play(6, 2), "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
console.log(game.play(1, 1), "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
