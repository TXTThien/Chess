import Piece from "./Piece";
import Position from "../boards/Position";
import SoldierMovement from "../moves/PiecesMovement/SoldierMovement";
class Soldier extends Piece {

  getName(): string {
    return "Soldier";
  }

  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new SoldierMovement());
  }
  getClone(): Piece {
    return new Soldier(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}

export default Soldier;
