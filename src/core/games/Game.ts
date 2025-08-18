import Player from "./Player";
import TurnManager from "./TurnManager";
import PieceFactory from "../pieces/PieceFactory";
import Board from "../boards/Board";

class Game{
    board: Board;
    pieceFactory: PieceFactory;
    turnManager: TurnManager;

    constructor(playerNames: string[], size: number = 10) {
        this.board = new Board([],size);
        this.pieceFactory = new PieceFactory();
        const players = playerNames.map((name, index) => new Player(name, index === 0));
        this.turnManager = new TurnManager(players);
    }

    makeMove(from: string, to: string): boolean {
        console.log("Making move from", from, "to", to);
        this.turnManager.nextTurn();
        return true;
    }
}

export default Game;