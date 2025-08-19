// Piece.ts
import Position from "../boards/Position";
import Board from "../boards/Board";
import MoveStrategy from "../moves/MoveStrategy";
export default abstract class Piece {
  protected position: Position;
  protected isRed: boolean;
  protected moveStrategy!: MoveStrategy;

  constructor(position: Position, isRed: boolean, moveStrategy: MoveStrategy) {
    this.position = position;
    this.isRed = isRed;
    this.moveStrategy = moveStrategy;
  }

  getPosition(): Position {
    return this.position;
  }

  setPosition(position: Position): void {
    this.position = position;
  }

  isRedPiece(): boolean {
    return this.isRed;
  }

  getMoveStrategy(): MoveStrategy {
    return this.moveStrategy;
  }
  
  abstract getName(): string;
  abstract getClone(): Piece;

  getAvailableMoves(board: Board): Position[] {
    return this.moveStrategy.getAvailableMoves(
      this.position,
      board,
      this.isRed
    );
  }
}
