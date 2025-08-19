import Piece from "./Piece";
import Position from "../boards/Position";
import CanonMoveStrategy from "../moves/PiecesMovement/CanonMovement";

class Canon extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new CanonMoveStrategy());
  }

  getName(): string {
    return "Canon";
  }

  getClone(): Piece {
    return new Canon(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}

export default Canon;