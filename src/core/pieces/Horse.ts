import Piece from "./Piece";
import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";

class HorseMoveStrategy implements MoveStrategy {
  getAvailableMoves(
    position: Position,
    isRed: boolean,
    board?: Piece[][]
  ): Position[] {
    const moves: Position[] = [];
    const directions = [
      { x: 2, y: 1 },
      { x: 2, y: -1 },
      { x: -2, y: 1 },
      { x: -2, y: -1 },
      { x: 1, y: 2 },
      { x: -1, y: 2 },
      { x: 1, y: -2 },
      { x: -1, y: -2 },
    ];

    for (const dir of directions) {
      const newX = position.x + dir.x;
      const newY = position.y + dir.y;
      if (newX >= 1 && newX <= 9 && newY >= 1 && newY <= 10) {
        moves.push(new Position(newX, newY));
      }
    }

    return moves;
  }
}

class Horse extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, new HorseMoveStrategy(), isRed);
  }

  getName(): string {
    return "Horse (Mã)";
  }
}

export default Horse;
