import Board from "../../boards/Board";
import Position from "../../boards/Position";
import MoveStrategy from "../MoveStrategy";
import BoardUtils from "../../boards/BoardUtil";
class GeneralMovement implements MoveStrategy {
  getAvailableMoves(
    position: Position,
    board: Board,
    isRed?: boolean
  ): Position[] {
    const moves: Position[] = [];
    const directions = [
      { dx: 0, dy: 1 },
      { dx: 0, dy: -1 },
      { dx: 1, dy: 0 },
      { dx: -1, dy: 0 },
    ];

    for (const dir of directions) {
      const newPos = new Position(position.x + dir.dx, position.y + dir.dy);

      if (!BoardUtils.isInside(board,newPos)) continue;

      if (isRed) {
        if (newPos.x < 3 || newPos.x > 5 || newPos.y < 7 || newPos.y > 9)
          continue;
      } else {
        if (newPos.x < 3 || newPos.x > 5 || newPos.y < 0 || newPos.y > 2)
          continue;
      }

      moves.push(newPos);
    }

    return moves;
  }
}

export default GeneralMovement;
