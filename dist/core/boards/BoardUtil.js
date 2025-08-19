"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Board_1 = require("../boards/Board");
var Position_1 = require("../boards/Position");
var General_1 = require("../pieces/General");
var BoardUtils = /** @class */ (function () {
    function BoardUtils() {
    }
    BoardUtils.findGeneral = function (board, isRed) {
        for (var x = 0; x < board.getSize(); x++) {
            for (var y = 0; y < board.getSize(); y++) {
                var cell = board.getCell(new Position_1.default(x, y));
                var piece = cell === null || cell === void 0 ? void 0 : cell.getPiece();
                if (piece && piece instanceof General_1.default && piece.isRedPiece() !== isRed) {
                    return piece;
                }
            }
        }
        return null;
    };
    BoardUtils.cloneBoard = function (board) {
        var newBoard = new Board_1.default(board.getSize());
        for (var i = 0; i < board.getSize(); i++) {
            for (var j = 0; j < board.getSize(); j++) {
                var cell = board.getCell(new Position_1.default(j, i));
                var piece = cell === null || cell === void 0 ? void 0 : cell.getPiece();
                if (piece) {
                    newBoard.setPiece(new Position_1.default(j, i), piece.getClone());
                }
            }
        }
        return newBoard;
    };
    BoardUtils.isEmpty = function (board, position) {
        var cell = board.getCell(position);
        return cell !== null && cell.isEmpty();
    };
    BoardUtils.isInside = function (board, position) {
        return (position.x >= 0 &&
            position.x < board.getSize() &&
            position.y >= 0 &&
            position.y < board.getSize());
    };
    return BoardUtils;
}());
exports.default = BoardUtils;
