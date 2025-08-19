import Piece from "./Piece";
import Position from "../boards/Position";
import Horse from "./Horse";
import Advisor from "./Advisor";
import Canon from "./Canon";
import Chariot from "./Chariot";
import General from "./General";
import Elephant from "./Elephant";
import Soldier from "./Soldier";

class PieceFactory {
  createPiece(type: string, position: Position, isRed: boolean): Piece {
    switch (type.toLowerCase()) {
      case "horse":
        return new Horse(position, isRed);
      case "advisor":
        return new Advisor(position, isRed);
      case "canon":
        return new Canon(position, isRed);
      case "chariot":
        return new Chariot(position, isRed);
      case "general":
        return new General(position, isRed);
      case "elephant":
        return new Elephant(position, isRed);
      case "soldier":
        return new Soldier(position, isRed);

      default:
        throw new Error(`Unknown piece type: ${type}`);
    }
  }
  createAllPieces(): Piece[] {
    const pieces: Piece[] = [];

    // Red side
    pieces.push(this.createPiece("chariot", new Position(0, 0), true));
    pieces.push(this.createPiece("horse", new Position(1, 0), true));
    pieces.push(this.createPiece("elephant", new Position(2, 0), true));
    pieces.push(this.createPiece("advisor", new Position(3, 0), true));
    pieces.push(this.createPiece("general", new Position(4, 0), true));
    pieces.push(this.createPiece("advisor", new Position(5, 0), true));
    pieces.push(this.createPiece("elephant", new Position(6, 0), true));
    pieces.push(this.createPiece("horse", new Position(7, 0), true));
    pieces.push(this.createPiece("chariot", new Position(8, 0), true));
    pieces.push(this.createPiece("canon", new Position(1, 2), true));
    pieces.push(this.createPiece("canon", new Position(7, 2), true));
    for (let i = 0; i <= 8; i += 2) {
      pieces.push(this.createPiece("soldier", new Position(i, 3), true));
    }

    // Black side
    pieces.push(this.createPiece("chariot", new Position(0, 9), false));
    pieces.push(this.createPiece("horse", new Position(1, 9), false));
    pieces.push(this.createPiece("elephant", new Position(2, 9), false));
    pieces.push(this.createPiece("advisor", new Position(3, 9), false));
    pieces.push(this.createPiece("general", new Position(4, 9), false));
    pieces.push(this.createPiece("advisor", new Position(5, 9), false));
    pieces.push(this.createPiece("elephant", new Position(6, 9), false));
    pieces.push(this.createPiece("horse", new Position(7, 9), false));
    pieces.push(this.createPiece("chariot", new Position(8, 9), false));
    pieces.push(this.createPiece("canon", new Position(1, 7), false));
    pieces.push(this.createPiece("canon", new Position(7, 7), false));
    for (let i = 0; i <= 8; i += 2) {
      pieces.push(this.createPiece("soldier", new Position(i, 6), false));
    }
    return pieces;
  }
}

export default PieceFactory;
