import Position from "../boards/Position";
import MoveStrategy from "../moves/MoveStrategy";

abstract class Piece {
    protected position: Position;
    protected moveStrategy: MoveStrategy;
    protected isRed: boolean = true;

    constructor(position: Position, moveStrategy: MoveStrategy, isRed: boolean) {
        this.position = position;
        this.moveStrategy = moveStrategy;
        this.isRed = isRed;
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

    abstract getName(): string;

    getAvailableMoves(): Position[]{
        return this.moveStrategy.getAvailableMoves(this.position, this.isRed);
    }
}

export default Piece;
