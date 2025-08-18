import Position from "../boards/Position";

interface MoveStrategy {
    getAvailableMoves(position: Position, isRed: boolean): Position[];
}

export default MoveStrategy;