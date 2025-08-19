"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CaptureValidator_1 = require("./CaptureValidator");
var BoardUtil_1 = require("../../boards/BoardUtil");
var GeneralFaceRule_1 = require("./GeneralFaceRule ");
var MovementValidator = /** @class */ (function () {
    function MovementValidator() {
    }
    MovementValidator.isValidMove = function (piece, to, board) {
        var _a;
        var moves = piece.getAvailableMoves(board);
        var canMove = moves.some(function (pos) { return pos.equals(to); });
        if (!canMove)
            return false;
        var target = (_a = board.getCell(to)) === null || _a === void 0 ? void 0 : _a.getPiece();
        if (target) {
            return CaptureValidator_1.default.canCapture(piece, to, board);
        }
        var opponentGeneral = BoardUtil_1.default.findGeneral(board, !piece.isRedPiece());
        var myGeneral = BoardUtil_1.default.findGeneral(board, piece.isRedPiece());
        if (opponentGeneral && myGeneral && GeneralFaceRule_1.default.areFacing(board, myGeneral, opponentGeneral))
            return false;
        return true;
    };
    return MovementValidator;
}());
exports.default = MovementValidator;
