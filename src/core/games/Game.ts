import Board from "../boards/Board";
import PieceFactory from "../pieces/PieceFactory";
import Cell from "../boards/Cell";
import Position from "../boards/Position";
import RuleValidator from "./RuleValidator";
import Player from "./Player";
import TurnManager from "./TurnManager";
import Piece from "../pieces/Piece";
import BoardUtils from "../boards/BoardUtil";
export default class Game {
    board: Board;
    players: [Player, Player];
    pieceFactory : PieceFactory;
    turnManager: TurnManager;

    constructor (player1Name: string , player2Name: string, boardSize: number = 10)
    {
        this.board = new Board(boardSize);
        this.pieceFactory = new PieceFactory();
        this.players = [new Player(player1Name,true), new Player(player2Name,false)];
        this.turnManager = new TurnManager(this.players);
        this.setUpBoard();
    }

    getCurrentPlayer():Player{
        return this.turnManager.getCurrentPlayer();
    }

    move (from: Position , to: Position): boolean{
        const cell = this.board.getCell(from);
        if (!cell) return false;

        const piece = cell.getPiece();
        if (!piece) return false;

        if (piece.isRedPiece() !== this.getCurrentPlayer().isRed) return false;

        if (!RuleValidator.canMove(piece, to, this.board)) return false;

        const targetCell = this.board.getCell(to);
        if (targetCell?.getPiece)
            if (!this.capture(piece, to))
                return false;
        
        cell.setPiece(null);
        piece.setPosition(to);
        targetCell?.setPiece(piece);

        const myGeneral = BoardUtils.findGeneral(this.board,this.getCurrentPlayer().isRed);
        if (RuleValidator.isInCheck(myGeneral!,this.board))
        {
            cell.setPiece(piece);
            piece.setPosition(from);
            if (targetCell) targetCell.setPiece(targetCell.getPiece());
            return false;
        }

        this.turnManager.nextTurn();
        return true;
    }


        private setUpBoard()
    {
        const pieces = this.pieceFactory.createAllPieces();
        for (const piece of pieces)
        {
            const pos = piece.getPosition();
            this.board.getCell(pos)?.setPiece(piece);
        }
    }

    private capture(piece: Piece, to: Position): boolean
    {
        const targetCell = this.board.getCell(to);
        const targetPiece = targetCell?.getPiece();
        if (!targetPiece) return false;
        targetCell?.setPiece(null);
        piece.setPosition(to);
        targetCell?.setPiece(piece);
        return true;
    }

    findMyGeneral (isRed: boolean) : Piece | null
    {
        return BoardUtils.findGeneral(this.board, isRed);
    }

    isCheckmate (isRed: boolean) :boolean
    {
        const general = BoardUtils.findGeneral(this.board, isRed);
        if (!general) return false;
        return RuleValidator.isInCheckmate(general,this.board)
    }
}