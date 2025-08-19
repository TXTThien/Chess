"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piece = /** @class */ (function () {
    function Piece(position, isRed, moveStrategy) {
        this.position = position;
        this.isRed = isRed;
        this.moveStrategy = moveStrategy;
    }
    Piece.prototype.getPosition = function () {
        return this.position;
    };
    Piece.prototype.setPosition = function (position) {
        this.position = position;
    };
    Piece.prototype.isRedPiece = function () {
        return this.isRed;
    };
    Piece.prototype.getMoveStrategy = function () {
        return this.moveStrategy;
    };
    Piece.prototype.getAvailableMoves = function (board) {
        return this.moveStrategy.getAvailableMoves(this.position, board, this.isRed);
    };
    return Piece;
}());
exports.default = Piece;
