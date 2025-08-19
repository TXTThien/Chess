"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("../boards/Board");
var PieceFactory_1 = require("../pieces/PieceFactory");
var RuleValidator_1 = require("./RuleValidator");
var Player_1 = require("./Player");
var TurnManager_1 = require("./TurnManager");
var BoardUtil_1 = require("../boards/BoardUtil");
var Game = /** @class */ (function () {
    function Game(player1Name, player2Name, boardSize) {
        if (boardSize === void 0) { boardSize = 10; }
        this.board = new Board_1.default(boardSize);
        this.pieceFactory = new PieceFactory_1.default();
        this.players = [new Player_1.default(player1Name, true), new Player_1.default(player2Name, false)];
        this.turnManager = new TurnManager_1.default(this.players);
        this.setUpBoard();
    }
    Game.prototype.getCurrentPlayer = function () {
        return this.turnManager.getCurrentPlayer();
    };
    Game.prototype.move = function (from, to) {
        var cell = this.board.getCell(from);
        if (!cell)
            return false;
        var piece = cell.getPiece();
        if (!piece)
            return false;
        if (piece.isRedPiece() !== this.getCurrentPlayer().isRed)
            return false;
        if (!RuleValidator_1.default.canMove(piece, to, this.board))
            return false;
        var targetCell = this.board.getCell(to);
        if (targetCell === null || targetCell === void 0 ? void 0 : targetCell.getPiece)
            if (!this.capture(piece, to))
                return false;
        cell.setPiece(null);
        piece.setPosition(to);
        targetCell === null || targetCell === void 0 ? void 0 : targetCell.setPiece(piece);
        var myGeneral = BoardUtil_1.default.findGeneral(this.board, this.getCurrentPlayer().isRed);
        if (RuleValidator_1.default.isInCheck(myGeneral, this.board)) {
            cell.setPiece(piece);
            piece.setPosition(from);
            if (targetCell)
                targetCell.setPiece(targetCell.getPiece());
            return false;
        }
        this.turnManager.nextTurn();
        return true;
    };
    Game.prototype.setUpBoard = function () {
        var _a;
        var pieces = this.pieceFactory.createAllPieces();
        for (var _i = 0, pieces_1 = pieces; _i < pieces_1.length; _i++) {
            var piece = pieces_1[_i];
            var pos = piece.getPosition();
            (_a = this.board.getCell(pos)) === null || _a === void 0 ? void 0 : _a.setPiece(piece);
        }
    };
    Game.prototype.capture = function (piece, to) {
        var targetCell = this.board.getCell(to);
        var targetPiece = targetCell === null || targetCell === void 0 ? void 0 : targetCell.getPiece();
        if (!targetPiece)
            return false;
        targetCell === null || targetCell === void 0 ? void 0 : targetCell.setPiece(null);
        piece.setPosition(to);
        targetCell === null || targetCell === void 0 ? void 0 : targetCell.setPiece(piece);
        return true;
    };
    Game.prototype.findMyGeneral = function (isRed) {
        return BoardUtil_1.default.findGeneral(this.board, isRed);
    };
    Game.prototype.isCheckmate = function (isRed) {
        var general = BoardUtil_1.default.findGeneral(this.board, isRed);
        if (!general)
            return false;
        return RuleValidator_1.default.isInCheckmate(general, this.board);
    };
    return Game;
}());
exports.default = Game;
