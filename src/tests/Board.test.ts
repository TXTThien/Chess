import Position from "../core/boards/Position";
import Chariot from "../core/pieces/Chariot";
import Board from "../core/boards/Board";
import General from "../core/pieces/General";

const board = new Board([], 10);
const xe = new Chariot(new Position(0, 0), true);
const tuong = new General(new Position(0, 0), false);

board.setPiece(new Position(0, 0), tuong);
board.printBoard();
