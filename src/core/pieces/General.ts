import Piece from "./Piece";
import Position from "../boards/Position";
import GeneralMovement from "../moves/PiecesMovement/GeneralMovement";
class General extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position,  isRed , new GeneralMovement());
  }

  getName(): string {
    return "General";
  }
  getClone(): Piece {
    return new General(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}

export default General;