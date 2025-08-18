import Cell from "../boards/Cell";
import Piece from "../pieces/Piece";

class Move {
    private from : Cell[][]
    private to : Cell[][]
    private pieceMove: Piece
    private pieceCapture: Piece | null;

    constructor(from: Cell[][], to: Cell[][], pieceMove: Piece, pieceCapture: Piece | null) {
        this.from = from;
        this.to = to;
        this.pieceMove = pieceMove;
        this.pieceCapture = pieceCapture;
    }

    getFrom(): Cell[][] {
        return this.from;
    }
    getTo(): Cell[][] {
        return this.to;
    }
    getPieceMove(): Piece {
        return this.pieceMove;
    }
    getPieceCapture(): Piece | null {
        return this.pieceCapture;
    }
}

export default Move;