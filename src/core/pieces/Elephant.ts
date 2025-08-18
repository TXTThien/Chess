import Piece from "./Piece";
import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";
class ElephanMoveStrategy implements MoveStrategy {
  getAvailableMoves(
    position: Position,
    isRed: boolean,
  ): Position[] {
    const moves: Position[] = [];
    const directions = [
      { x: -2, y: -2},
      { x: -2, y: 2},
      { x: 2, y: -2},
      { x: 2, y: 2},
    ];

    for (const dir of directions) {
      const newX = position.x + dir.x;
      const newY = position.y + dir.y;
      if (newX >= 1 && newX <= 9 && newY >= 1 && newY <= 10) {
        if (isRed && newY <5) continue;
        if (!isRed && newY >= 5) continue;
          moves.push(new Position(newX, newY));
        }
      }
    return moves;
  }
}

class Elephant extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, new ElephanMoveStrategy(), isRed);
  }

  getName(): string {
    return "Elephant (Tượng)";
  }
}

export default Elephant;
