import Board from "../../boards/Board";
import Position from "../../boards/Position";
import Piece from "../../pieces/Piece";
import CaptureValidator from "./CaptureValidator";
import GeneralFaceToFace from "./GeneralFaceRule ";
import BoardUtils from "../../boards/BoardUtil";
export default class CheckValidator {
  static isInCheck(king: Piece, board: Board): boolean {
    const enemyPieces: Piece[] = [];

    for (let x = 0; x < board.getSize(); x++) {
      for (let y = 0; y < board.getSize(); y++) {
        const piece = board.getCell(new Position(x, y))?.getPiece();
        if (piece && piece.isRedPiece() !== king.isRedPiece()) {
          enemyPieces.push(piece);
        }
      }
    }

    const opponentGeneral = BoardUtils.findGeneral(board, !king.isRedPiece());
    if (opponentGeneral && GeneralFaceToFace.areFacing(board, king, opponentGeneral)) {
      return true; 
    }

    return enemyPieces.some(p =>
      CaptureValidator.canCapture(p, king.getPosition(), board)
    );
  }
}
