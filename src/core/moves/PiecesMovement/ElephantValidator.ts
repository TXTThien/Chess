import Board from "../../boards/Board";
import Position from "../../boards/Position";
import MoveStrategy from "../MoveStrategy";
import BoardUtils from "../../boards/BoardUtil";
class ElephantMovement implements MoveStrategy {
  getAvailableMoves(
    position: Position,
    board: Board,
    isRed?: boolean
  ): Position[] {
    const moves: Position[] = [];
    const directions = [
      { dx: 2, dy: 2 },
      { dx: 2, dy: -2 },
      { dx: -2, dy: 2 },
      { dx: -2, dy: -2 },
    ];

    for (const dir of directions) {
      const newPos = new Position(position.x + dir.dx, position.y + dir.dy);

      if (!BoardUtils.isInside(board,newPos)) continue;

      if (isRed && newPos.y > 4) continue;
      if (!isRed && newPos.y < 5) continue; 

      const eyePos = new Position(
        position.x + dir.dx / 2,
        position.y + dir.dy / 2
      );
      if (!BoardUtils.isEmpty(board,eyePos)) continue;

      moves.push(newPos);
    }

    return moves;
  }
}
export default ElephantMovement;
