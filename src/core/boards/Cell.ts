import Piece from "../pieces/Piece";
import Position from "./Position";
class Cell {
    private position: Position;
    private piece: Piece | null;

    constructor(position:Position, piece?: Piece) {
        this.position = position;
        this.piece = piece || null;
    }

    getPosition(): Position {
        return this.position;
    }

    getPiece(): Piece | null {
        return this.piece;
    }

    setPiece(piece: Piece | null): void {
        this.piece = piece;
    }

    isEmpty(): boolean {
        return this.piece === null;
    }
}

export default Cell;