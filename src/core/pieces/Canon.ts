import Piece from "./Piece";
import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";

class CanonMoveStrategy implements MoveStrategy {
  getAvailableMoves(position: Position, isRed: boolean): Position[] {
    const moves: Position[] = [];
    for (let i = 1; i <= 9; i++) {
      if (i !== position.x) {
        moves.push(new Position(i, position.y));
      }
    }

    for (let j = 1; j <= 10; j++) {
      if (j !== position.y) {
        moves.push(new Position(position.x, j));
      }
    }

    return moves;
  }
}

class Canon extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, new CanonMoveStrategy(), isRed);
  }

  getName(): string {
    return "Canon (Pháo)";
  }
}

export default Canon;