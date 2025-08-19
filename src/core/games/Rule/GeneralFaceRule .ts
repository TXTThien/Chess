import Board from "../../boards/Board";
import Position from "../../boards/Position";
import Piece from "../../pieces/Piece";

export default class GeneralFaceToFace {
  static areFacing(board: Board, general1: Piece, general2: Piece): boolean {
    if (!general1 || !general2) return false;
    if (general1.getPosition().x !== general2.getPosition().x) return false;

    const x = general1.getPosition().x;
    const minY =
      Math.min(general1.getPosition().y, general2.getPosition().y) + 1;
    const maxY = Math.max(general1.getPosition().y, general2.getPosition().y);

    for (let y = minY; y < maxY; y++) {
      const piece = board.getCell(new Position(x, y))?.getPiece();
      if (piece) return false; 
    }

    return true;
  }
}
