// Horse.ts
import Piece from "./Piece";
import Position from "../boards/Position";
import HorseMovement from "../moves/PiecesMovement/HorseMovement";
class Horse extends Piece {
  getName(): string {
    return "Horse";
  }

  constructor(position: Position, isRed: boolean) {
    super(position, isRed, new HorseMovement());
  }
  getClone(): Piece {
    return new Horse(
      new Position(this.getPosition().x, this.getPosition().y),
      this.isRedPiece()
    );
  }
}


export default Horse;