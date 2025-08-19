import Board from "../../boards/Board";
import Position from "../../boards/Position";
import BoardUtils from "../../boards/BoardUtil";
import MoveStrategy from "../MoveStrategy";
class HorseMovement implements MoveStrategy {
  getAvailableMoves(position: Position, board: Board): Position[] {
    const moves: Position[] = [];
    const directions = [
      { dx: 2, dy: 1 },
      { dx: 2, dy: -1 },
      { dx: -2, dy: 1 },
      { dx: -2, dy: -1 },
      { dx: 1, dy: 2 },
      { dx: 1, dy: -2 },
      { dx: -1, dy: 2 },
      { dx: -1, dy: -2 },
    ];

    for (const dir of directions) {
      const newPos = new Position(position.x + dir.dx, position.y + dir.dy);

      if (!BoardUtils.isInside(board,newPos)) continue;

      let blockPos: Position;
      if (Math.abs(dir.dx) === 2) {
        blockPos = new Position(position.x + dir.dx / 2, position.y);
      } else {
        blockPos = new Position(position.x, position.y + dir.dy / 2);
      }

      if (!BoardUtils.isEmpty(board,blockPos)) continue;
      moves.push(newPos);
    }
    return moves;
  }
}

export default HorseMovement;
