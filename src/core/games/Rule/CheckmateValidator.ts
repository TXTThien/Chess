// CheckmateValidator.ts
import Board from "../../boards/Board";
import Piece from "../../pieces/Piece";
import CheckValidator from "./CheckValidator";
import CaptureValidator from "./CaptureValidator";
import Position from "../../boards/Position";
import BoardUtils from "../../boards/BoardUtil";
export default class CheckmateValidator {
  static isCheckmate(king: Piece, board: Board): boolean {
    if (!CheckValidator.isInCheck(king, board)) return false;

    const isRed = king.isRedPiece();

    for (let y = 0; y < board.getSize(); y++) {
      for (let x = 0; x < board.getSize(); x++) {
        const cell = board.getCell(new Position(x, y));
        const piece = cell?.getPiece();
        if (!piece || piece.isRedPiece() !== isRed) continue;

        const moves = piece.getAvailableMoves(board);
        for (const move of moves) {
          const targetCell = board.getCell(move);
          if (targetCell?.getPiece() && !CaptureValidator.canCapture(piece, move, board)) {
            continue;
          }

          // clone board và di chuyển thử
          const clonedBoard = BoardUtils.cloneBoard(board);
          const fromPos = piece.getPosition();
          const fromCell = clonedBoard.getCell(fromPos);
          const toCell = clonedBoard.getCell(move);
          const movingPiece = fromCell?.getPiece();
          if (!fromCell || !toCell || !movingPiece) continue;

          fromCell.setPiece(null);
          movingPiece.setPosition(move);
          toCell.setPiece(movingPiece);

          const clonedKing = BoardUtils.findGeneral(clonedBoard, isRed);

          if (clonedKing && !CheckValidator.isInCheck(clonedKing, clonedBoard)) {
            return false;
          }
        }
      }
    }

    return true; 
  }
}