"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = require("./Cell");
var Position_1 = require("./Position");
var Board = /** @class */ (function () {
    function Board(size, cells) {
        this.size = size;
        this.cells = cells !== null && cells !== void 0 ? cells : this.initializeBoard();
    }
    Board.prototype.getSize = function () {
        return this.size;
    };
    Board.prototype.initializeBoard = function () {
        var board = [];
        for (var i = 0; i < this.size; i++) {
            var row = [];
            for (var j = 0; j < this.size; j++) {
                row.push(new Cell_1.default(new Position_1.default(j, i)));
            }
            board.push(row);
        }
        return board;
    };
    Board.prototype.getCell = function (position) {
        if (position.x < 0 ||
            position.x >= this.size ||
            position.y < 0 ||
            position.y >= this.size) {
            return null;
        }
        return this.cells[position.y][position.x];
    };
    Board.prototype.setPiece = function (position, piece) {
        var cell = this.getCell(position);
        if (cell) {
            piece.setPosition(position);
            cell.setPiece(piece);
        }
    };
    Board.prototype.removePiece = function (position) {
        var cell = this.getCell(position);
        if (cell && !cell.isEmpty()) {
            var piece = cell.getPiece();
            if (piece) {
                piece.setPosition(new Position_1.default(-1, -1));
            }
            cell.setPiece(null);
        }
    };
    Board.prototype.printBoard = function () {
        for (var i = 0; i < this.size; i++) {
            var row = this.cells[i].map(function (cell) {
                var piece = cell.getPiece();
                if (!piece)
                    return ".";
                return piece.isRedPiece()
                    ? piece.getName().charAt(0).toUpperCase()
                    : piece.getName().charAt(0).toLowerCase();
            });
            console.log(row.join(" "));
        }
    };
    return Board;
}());
exports.default = Board;
