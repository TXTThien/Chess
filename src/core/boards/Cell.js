"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell = /** @class */ (function () {
    function Cell(position, piece) {
        this.position = position;
        this.piece = piece || null;
    }
    Cell.prototype.getPosition = function () {
        return this.position;
    };
    Cell.prototype.getPiece = function () {
        return this.piece;
    };
    Cell.prototype.setPiece = function (piece) {
        this.piece = piece;
    };
    Cell.prototype.isEmpty = function () {
        return this.piece === null;
    };
    return Cell;
}());
exports.default = Cell;
