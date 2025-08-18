import Piece from "./Piece";
import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";

class SoldierMoveStrategy implements MoveStrategy {
  getAvailableMoves(position: Position, isRed: boolean): Position[] {
    const moves: Position[] = [];
    const direction = isRed ? 1 : -1; // Red moves down, Black moves up
    const newY = position.y + direction;

    if (newY >= 1 && newY <= 10) {
      moves.push(new Position(position.x, newY));
    }

    if (isRed && position.y > 5) {
      if (position.x > 1) moves.push(new Position(position.x - 1, position.y));
      if (position.x < 9) moves.push(new Position(position.x + 1, position.y));
    }

    if (!isRed && position.y <= 5) {
      if (position.x > 1) moves.push(new Position(position.x - 1, position.y));
      if (position.x < 9) moves.push(new Position(position.x + 1, position.y));
    }
    return moves;
  }
}

class Soldier extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, new SoldierMoveStrategy(), isRed);
  }

  getName(): string {
    return "Soldier (Tốt)";
  }
}

export default Soldier;
