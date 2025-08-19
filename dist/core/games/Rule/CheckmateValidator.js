"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckValidator_1 = require("./CheckValidator");
var CaptureValidator_1 = require("./CaptureValidator");
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var CheckmateValidator = /** @class */ (function () {
    function CheckmateValidator() {
    }
    CheckmateValidator.isCheckmate = function (king, board) {
        if (!CheckValidator_1.default.isInCheck(king, board))
            return false;
        var isRed = king.isRedPiece();
        for (var y = 0; y < board.getSize(); y++) {
            for (var x = 0; x < board.getSize(); x++) {
                var cell = board.getCell(new Position_1.default(x, y));
                var piece = cell === null || cell === void 0 ? void 0 : cell.getPiece();
                if (!piece || piece.isRedPiece() !== isRed)
                    continue;
                var moves = piece.getAvailableMoves(board);
                for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
                    var move = moves_1[_i];
                    var targetCell = board.getCell(move);
                    if ((targetCell === null || targetCell === void 0 ? void 0 : targetCell.getPiece()) && !CaptureValidator_1.default.canCapture(piece, move, board)) {
                        continue;
                    }
                    // clone board và di chuyển thử
                    var clonedBoard = BoardUtil_1.default.cloneBoard(board);
                    var fromPos = piece.getPosition();
                    var fromCell = clonedBoard.getCell(fromPos);
                    var toCell = clonedBoard.getCell(move);
                    var movingPiece = fromCell === null || fromCell === void 0 ? void 0 : fromCell.getPiece();
                    if (!fromCell || !toCell || !movingPiece)
                        continue;
                    fromCell.setPiece(null);
                    movingPiece.setPosition(move);
                    toCell.setPiece(movingPiece);
                    var clonedKing = BoardUtil_1.default.findGeneral(clonedBoard, isRed);
                    if (clonedKing && !CheckValidator_1.default.isInCheck(clonedKing, clonedBoard)) {
                        return false;
                    }
                }
            }
        }
        return true;
    };
    return CheckmateValidator;
}());
exports.default = CheckmateValidator;
