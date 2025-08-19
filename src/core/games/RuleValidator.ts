import Piece from "../pieces/Piece";
import Board from "../boards/Board";
import Position from "../boards/Position";
import CheckValidator from "./Rule/CheckValidator";
import CheckmateValidator from "./Rule/CheckmateValidator";
import MovementValidator from "./Rule/MovementValidator";

export default class RuleValidator{
  static canMove (piece: Piece, to: Position , board: Board): boolean{
    return MovementValidator.isValidMove(piece,to,board);
  }

  static isInCheck (king: Piece, board: Board): boolean{
    return CheckValidator.isInCheck(king,board);
  }

  static isInCheckmate (king: Piece, board: Board): boolean{
    return CheckmateValidator.isCheckmate(king, board);
  }
}