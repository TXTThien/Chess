import Board from "../boards/Board";
import Position from "../boards/Position";
import General from "../pieces/General";
import Piece from "../pieces/Piece";

class BoardUtils {
  static findGeneral(board: Board, isRed: boolean): Piece | null {
    for (let x = 0; x < board.getSize(); x++) {
      for (let y = 0; y < board.getSize(); y++) {
        const cell = board.getCell(new Position(x, y));
        const piece = cell?.getPiece();
        if (piece && piece instanceof General && piece.isRedPiece() !== isRed) {
          return piece;
        }
      }
    }
    return null;
  }

  static cloneBoard(board: Board): Board {
    const newBoard = new Board(board.getSize());

    for (let i = 0; i < board.getSize(); i++) {
      for (let j = 0; j < board.getSize(); j++) {
        const cell = board.getCell(new Position(j, i));
        const piece = cell?.getPiece();
        if (piece) {
          newBoard.setPiece(new Position(j, i), piece.getClone());
        }
      }
    }

    return newBoard;
  }

  static isEmpty(board: Board, position: Position): boolean {
    const cell = board.getCell(position);
    return cell !== null && cell.isEmpty();
  }

  static isInside(board: Board, position: Position): boolean {
    return (
      position.x >= 0 &&
      position.x < board.getSize() &&
      position.y >= 0 &&
      position.y < board.getSize()
    );
  }
}

export default BoardUtils;
