import Board from "../boards/Board";
import Position from "../boards/Position";
class RuleValidator {
  private board: Board;
  constructor(board: Board) {
    this.board = board;
  }

  validateHorseMove(from: Position, to: Position): boolean {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    if (!((dx === 2 && dy === 1) || (dx === 1 && dy === 2))) return false;
    // Check if the horse's path is blocked
    if (
      !(
        (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
        (Math.abs(dx) === 1 && Math.abs(dy) === 2)
      )
    )
      return false;

    if (Math.abs(dx) === 2) {
      const blockX = from.x + dx / 2;
      const blockY = from.y;
      if (!this.board.getCell(new Position(blockX, blockY))?.isEmpty()) {
        return false;
      }
    } else {
      const blockX = from.x;
      const blockY = from.y + dy / 2;
      if (!this.board.getCell(new Position(blockX, blockY))?.isEmpty()) {
        return false;
      }
    }
    return true;
  }

  validateElephantMove(from: Position, to: Position): boolean {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    if (!(Math.abs(dx) === 2 && Math.abs(dy) === 2)) return false;
    const blockX = from.x + dx / 2;
    const blockY = from.y + dy / 2;
    if (!this.board.getCell(new Position(blockX, blockY))?.isEmpty()) {
      return false;
    }
    return true;
  }
}

export default RuleValidator;
