import Cell from "./Cell";
import Position from "./Position";
import Piece from "../pieces/Piece";
class Board {
  private cells: Cell[][];
  private size: number;

  constructor(cells: Cell[][], size: number) {
    this.size = size;
    this.cells = this.initializeBoard();
  }

  private initializeBoard(): Cell[][] {
    const board: Cell[][] = [];
    for (let i = 0; i < this.size; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell(new Position(i, j)));
      }
      board.push(row);
    }
    return board;
  }

  public getCell(position: Position): Cell | null {
    if (
      position.x < 0 ||
      position.x >= this.size ||
      position.y < 0 ||
      position.y >= this.size
    ) {
      return null;
    }
    return this.cells[position.x][position.y];
  }

  public setPiece(position: Position, piece: Piece): boolean {
    const cell = this.getCell(position);
    if (cell && cell.isEmpty()) {
      cell.setPiece(piece);
      return true;
    }
    return false;
  }

  public removePiece(position: Position): void {
    const cell = this.getCell(position);
    if (cell && !cell.isEmpty()) cell.setPiece(null);
  }

  public printBoard(): void {
    for (let i = 0; i < this.size; i++) {
      const row = this.cells[i].map((cell) =>
        cell.isEmpty() ? "." : cell.getPiece()?.getName().charAt(0) ?? "?"
      );
      console.log(row.join(" "));
    }
  }
}

export default Board;
