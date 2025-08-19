import Piece from "./Piece";
import Position from "../boards/Position";
import ChariotMoveStrategy from "../moves/PiecesMovement/ChariotMovement";

class Chariot extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new ChariotMoveStrategy());
  }

  getName(): string {
    return "Chariot";
  }
  getClone(): Piece {
    return new Chariot(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}


export default Chariot;
