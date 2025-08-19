import Piece from "./Piece";
import Position from "../boards/Position";
import AdvisorMovement from "../moves/PiecesMovement/AdvisorMovement";

class Advisor extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new AdvisorMovement());
  }

  getName(): string {
    return "Advisor";
  }
  getClone(): Piece {
    return new Advisor(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}

export default Advisor;