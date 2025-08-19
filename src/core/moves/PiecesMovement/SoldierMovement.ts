import Board from "../../boards/Board";
import Position from "../../boards/Position";
import MoveStrategy from "../MoveStrategy";
import BoardUtils from "../../boards/BoardUtil";
class SoldierMovement implements MoveStrategy {
  getAvailableMoves(
    position: Position,
    board: Board,
    isRed: boolean
  ): Position[] {
    const moves: Position[] = [];
    const direction = isRed ? 1 : -1;

    const forwardPos = new Position(position.x, position.y + direction);
    const forwardPiece = board.getCell(forwardPos)?.getPiece();
    if (BoardUtils.isInside(board,forwardPos)) {
      const forwardPiece = board.getCell(forwardPos)?.getPiece();
      if (!forwardPiece || forwardPiece.isRedPiece() !== isRed) {
        moves.push(forwardPos);
      }
    }

    if (!forwardPiece || forwardPiece.isRedPiece() !== isRed) {
      moves.push(forwardPos);
    }

    const crossedRiver = isRed ? position.y >= 5 : position.y <= 4;
    if (crossedRiver) {
      const leftPos = new Position(position.x - 1, position.y);
      const rightPos = new Position(position.x + 1, position.y);

      [leftPos, rightPos].forEach((pos) => {
        const piece = board.getCell(pos)?.getPiece();
        if (
          pos.x >= 0 &&
          pos.x <= 8 &&
          (!piece || piece.isRedPiece() !== isRed)
        ) {
          moves.push(pos);
        }
      });
    }

    return moves;
  }
}

export default SoldierMovement;
