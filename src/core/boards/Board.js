"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cell_1 = require("./Cell");
var Position_1 = require("./Position");
var Board = /** @class */ (function () {
    function Board(cells, size) {
        this.size = size;
        this.cells = this.initializeBoard();
    }
    Board.prototype.initializeBoard = function () {
        var board = [];
        for (var i = 0; i < this.size; i++) {
            var row = [];
            for (var j = 0; j < this.size; j++) {
                row.push(new Cell_1.default(new Position_1.default(i, j)));
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
        return this.cells[position.x][position.y];
    };
    Board.prototype.setPiece = function (position, piece) {
        var cell = this.getCell(position);
        if (cell && cell.isEmpty()) {
            cell.setPiece(piece);
            return true;
        }
        return false;
    };
    Board.prototype.removePiece = function (position) {
        var cell = this.getCell(position);
        if (cell && !cell.isEmpty())
            cell.setPiece(null);
    };
    Board.prototype.printBoard = function () {
        for (var i = 0; i < this.size; i++) {
            var row = this.cells[i].map(function (cell) { var _a, _b; return cell.isEmpty() ? "." : (_b = (_a = cell.getPiece()) === null || _a === void 0 ? void 0 : _a.getName().charAt(0)) !== null && _b !== void 0 ? _b : "?"; });
            console.log(row.join(" "));
        }
    };
    return Board;
}());
exports.default = Board;
