import Board from "../../boards/Board";
import Position from "../../boards/Position";
import MoveStrategy from "../MoveStrategy";
import BoardUtils from "../../boards/BoardUtil";
class CanonMovement implements MoveStrategy {
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
      let newPos = new Position(position.x + dir.dx, position.y + dir.dy);

      while (BoardUtils.isInside(board,newPos)) {
        if (!BoardUtils.isEmpty(board,newPos)) {
          moves.push(newPos);
          break;
        }
        newPos = new Position(newPos.x + dir.dx, newPos.y + dir.dy);
      }
    }

    return moves;
  }
}

export default CanonMovement;