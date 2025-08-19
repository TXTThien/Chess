import Board from "../../boards/Board";
import Position from "../../boards/Position";
import Piece from "../../pieces/Piece";
import BoardUtils from "../../boards/BoardUtil";

export default class CaptureValidator {
  static canCapture(piece: Piece, to: Position, board: Board): boolean {
    const target = board.getCell(to)?.getPiece();
    if (!target || target.isRedPiece() === piece.isRedPiece()) return false;

    if (piece.getName().toLowerCase() === "cannon") {
      return this.canCannonCapture(piece, to, board);
    }

    return true; 
  }

  private static canCannonCapture(piece: Piece, to: Position, board: Board): boolean {
    const from = piece.getPosition();
    if (from.x !== to.x && from.y !== to.y) return false; 

    let countBetween = 0;

    if (from.x === to.x) {
      const [minY, maxY] = [Math.min(from.y, to.y), Math.max(from.y, to.y)];
      for (let y = minY + 1; y < maxY; y++) {
        if (!BoardUtils.isEmpty(board,new Position(from.x, y))) countBetween++;
      }
    } else {
      const [minX, maxX] = [Math.min(from.x, to.x), Math.max(from.x, to.x)];
      for (let x = minX + 1; x < maxX; x++) {
        if (!BoardUtils.isEmpty(board,new Position(x, from.y))) countBetween++;
      }
    }

    return countBetween === 1;
  }
}
