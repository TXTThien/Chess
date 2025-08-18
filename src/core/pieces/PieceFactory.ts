import Piece from "./Piece";
import Position from "../boards/Position";
import Horse from "./Horse";
import Advisor from "./Advisor";
import Canon from "./Canon";
import Chariot from "./Chariot";
import General from "./General";
import Elephant from "./Elephant";
import Soldier from "./Soldier";

class PieceFactory {
  static createPiece(type: string, position: Position, isRed: boolean): Piece {
    switch (type.toLowerCase()) {
      case "horse":
        return new Horse(position, isRed);
      case "advisor":
        return new Advisor(position, isRed);
      case "canon":
        return new Canon(position, isRed);
      case "chariot":
        return new Chariot(position, isRed);
      case "general":
        return new General(position, isRed);
      case "elephant":
        return new Elephant(position, isRed);
      case "soldier":
        return new Soldier(position, isRed);

      default:
        throw new Error(`Unknown piece type: ${type}`);
    }
  }
}


export default PieceFactory;