import Piece from "./Piece";
import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";

class AdvisorMoveStrategy implements MoveStrategy {
  getAvailableMoves(position: Position, isRed: boolean): Position[] {
    const moves: Position[] = [];
    const directions = [
      { x: -1, y: -1 },
      { x: -1, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 1 },
    ];

    for (const dir of directions) {
      const newX = position.x + dir.x;
      const newY = position.y + dir.y;

      if (newX >= 1 && newX <= 9 && newY >= 1 && newY <= 10) {
        if (isRed)
          if (newX >= 4 && newX <= 6 && newY >= 1 && newY <= 3)
            moves.push(new Position(newX, newY));
          else if (newX >= 4 && newX <= 6 && newY >= 8 && newY <= 10)
            moves.push(new Position(newX, newY));
      }
    }

    return moves;
  }
}

class Advisor extends Piece {
  constructor(position: Position, isRed: boolean) {
    super(position, new AdvisorMoveStrategy(), isRed);
  }

  getName(): string {
    return "Advisor (Sĩ)";
  }
}

export default Advisor;