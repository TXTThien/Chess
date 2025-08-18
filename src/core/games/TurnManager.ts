import Player from "./Player";

class TurnManager {
    private players: Player[];
    private currentTurnIndex: number;

    constructor(players: Player[]) {
        this.players = players;
        this.currentTurnIndex = 0;
    }

    getCurrentPlayer(): Player {
        return this.players[this.currentTurnIndex];
    }

    nextTurn(): void {
        this.currentTurnIndex = (this.currentTurnIndex + 1) % this.players.length;
    }
}

export default TurnManager;