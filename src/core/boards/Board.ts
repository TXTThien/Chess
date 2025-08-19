import Cell from "./Cell";
import Position from "./Position";
import Piece from "../pieces/Piece";
class Board {
  private cells: Cell[][];
  private size: number;

  constructor(size: number, cells?: Cell[][]) {
    this.size = size;
    this.cells = cells ?? this.initializeBoard();
  }
  public getSize(): number {
    return this.size;
  }
  private initializeBoard(): Cell[][] {
    const board: Cell[][] = [];
    for (let i = 0; i < this.size; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell(new Position(j, i)));
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
    return this.cells[position.y][position.x];
  }
  public setPiece(position: Position, piece: Piece): void {
    const cell = this.getCell(position);
    if (cell) {
      piece.setPosition(position);
      cell.setPiece(piece);
    }
  }
  public removePiece(position: Position): void {
    const cell = this.getCell(position);
    if (cell && !cell.isEmpty()) {
      const piece = cell.getPiece();
      if (piece) {
        piece.setPosition(new Position(-1, -1));
      }
      cell.setPiece(null);
    }
  }

  public printBoard(): void {
    for (let i = 0; i < this.size; i++) {
      const row = this.cells[i].map((cell) => {
        const piece = cell.getPiece();
        if (!piece) return ".";
        return piece.isRedPiece()
          ? piece.getName().charAt(0).toUpperCase()
          : piece.getName().charAt(0).toLowerCase();
      });
      console.log(row.join(" "));
    }
  }
}

export default Board;
