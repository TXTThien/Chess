"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var CaptureValidator = /** @class */ (function () {
    function CaptureValidator() {
    }
    CaptureValidator.canCapture = function (piece, to, board) {
        var _a;
        var target = (_a = board.getCell(to)) === null || _a === void 0 ? void 0 : _a.getPiece();
        if (!target || target.isRedPiece() === piece.isRedPiece())
            return false;
        if (piece.getName().toLowerCase() === "cannon") {
            return this.canCannonCapture(piece, to, board);
        }
        return true;
    };
    CaptureValidator.canCannonCapture = function (piece, to, board) {
        var from = piece.getPosition();
        if (from.x !== to.x && from.y !== to.y)
            return false;
        var countBetween = 0;
        if (from.x === to.x) {
            var _a = [Math.min(from.y, to.y), Math.max(from.y, to.y)], minY = _a[0], maxY = _a[1];
            for (var y = minY + 1; y < maxY; y++) {
                if (!BoardUtil_1.default.isEmpty(board, new Position_1.default(from.x, y)))
                    countBetween++;
            }
        }
        else {
            var _b = [Math.min(from.x, to.x), Math.max(from.x, to.x)], minX = _b[0], maxX = _b[1];
            for (var x = minX + 1; x < maxX; x++) {
                if (!BoardUtil_1.default.isEmpty(board, new Position_1.default(x, from.y)))
                    countBetween++;
            }
        }
        return countBetween === 1;
    };
    return CaptureValidator;
}());
exports.default = CaptureValidator;
