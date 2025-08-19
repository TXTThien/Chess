import Piece from "./Piece";
import Position from "../boards/Position";
import ElephantMovement from "../moves/PiecesMovement/ElephantValidator";

class Elephant extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new ElephantMovement());
  }

  getName(): string {
    return "Elephant";
  }

  getClone(): Piece {
    return new Elephant(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}

export default Elephant;
