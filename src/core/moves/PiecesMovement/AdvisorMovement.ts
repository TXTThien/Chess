import Board from "../../boards/Board";
import Position from "../../boards/Position";
import MoveStrategy from "../MoveStrategy";
class AdvisorMovement implements MoveStrategy {
  getAvailableMoves(position: Position, board: Board, isRed: boolean): Position[] {
    const moves: Position[] = [];
    const directions = [
      { dx: 1, dy: 1 },
      { dx: -1, dy: 1 },
      { dx: 1, dy: -1 },
      { dx: -1, dy: -1 },
    ];

    for (const dir of directions) {
      const newPos = new Position(position.x + dir.dx, position.y + dir.dy);
      if (this.isInPalace(newPos, isRed)) {
        const piece = board.getCell(newPos)?.getPiece();
        if (!piece || piece.isRedPiece() !== isRed) {
          moves.push(newPos);
        }
      }
    }

    return moves;
  }

  private isInPalace(position: Position, isRed: boolean): boolean {
    return isRed
      ? position.x >= 3 && position.x <= 5 && position.y >= 7 && position.y <= 9
      : position.x >= 3 && position.x <= 5 && position.y >= 0 && position.y <= 2;
  }
}

export default AdvisorMovement;