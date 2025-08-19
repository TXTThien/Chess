import Board from "../../boards/Board";
import Position from "../../boards/Position";
import Piece from "../../pieces/Piece";
import CaptureValidator from "./CaptureValidator";
import BoardUtils from "../../boards/BoardUtil";
import GeneralFaceToFace from "./GeneralFaceRule ";
export default class MovementValidator {
  static isValidMove(piece: Piece, to: Position, board: Board): boolean {
    const moves = piece.getAvailableMoves(board);
    const canMove = moves.some((pos) => pos.equals(to));
    if (!canMove) return false;
    const target = board.getCell(to)?.getPiece();

    if (target) {
      return CaptureValidator.canCapture(piece, to, board);
    }
    const opponentGeneral = BoardUtils.findGeneral(board, !piece.isRedPiece());
    const myGeneral = BoardUtils.findGeneral(board, piece.isRedPiece());
    if (opponentGeneral && myGeneral && GeneralFaceToFace.areFacing(board, myGeneral, opponentGeneral)) return false;

    return true;
  }
}
