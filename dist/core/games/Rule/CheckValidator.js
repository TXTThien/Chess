"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var CaptureValidator_1 = require("./CaptureValidator");
var GeneralFaceRule_1 = require("./GeneralFaceRule ");
var BoardUtil_1 = require("../../boards/BoardUtil");
var CheckValidator = /** @class */ (function () {
    function CheckValidator() {
    }
    CheckValidator.isInCheck = function (king, board) {
        var _a;
        var enemyPieces = [];
        for (var x = 0; x < board.getSize(); x++) {
            for (var y = 0; y < board.getSize(); y++) {
                var piece = (_a = board.getCell(new Position_1.default(x, y))) === null || _a === void 0 ? void 0 : _a.getPiece();
                if (piece && piece.isRedPiece() !== king.isRedPiece()) {
                    enemyPieces.push(piece);
                }
            }
        }
        var opponentGeneral = BoardUtil_1.default.findGeneral(board, !king.isRedPiece());
        if (opponentGeneral && GeneralFaceRule_1.default.areFacing(board, king, opponentGeneral)) {
            return true;
        }
        return enemyPieces.some(function (p) {
            return CaptureValidator_1.default.canCapture(p, king.getPosition(), board);
        });
    };
    return CheckValidator;
}());
exports.default = CheckValidator;
