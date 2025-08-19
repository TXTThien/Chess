import Board from "../boards/Board";
import Position from "../boards/Position";

interface MoveStrategy {
    getAvailableMoves(position: Position, board: Board, isRed?: boolean): Position[];
}

export default MoveStrategy;