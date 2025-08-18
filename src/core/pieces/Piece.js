"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Piece = /** @class */ (function () {
    function Piece(position, moveStrategy, isRed) {
        this.isRed = true;
        this.position = position;
        this.moveStrategy = moveStrategy;
        this.isRed = isRed;
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
    Piece.prototype.getAvailableMoves = function () {
        return this.moveStrategy.getAvailableMoves(this.position, this.isRed);
    };
    return Piece;
}());
exports.default = Piece;
