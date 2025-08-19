"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var SoldierMovement = /** @class */ (function () {
    function SoldierMovement() {
    }
    SoldierMovement.prototype.getAvailableMoves = function (position, board, isRed) {
        var _a, _b;
        var moves = [];
        var direction = isRed ? 1 : -1;
        var forwardPos = new Position_1.default(position.x, position.y + direction);
        var forwardPiece = (_a = board.getCell(forwardPos)) === null || _a === void 0 ? void 0 : _a.getPiece();
        if (BoardUtil_1.default.isInside(board, forwardPos)) {
            var forwardPiece_1 = (_b = board.getCell(forwardPos)) === null || _b === void 0 ? void 0 : _b.getPiece();
            if (!forwardPiece_1 || forwardPiece_1.isRedPiece() !== isRed) {
                moves.push(forwardPos);
            }
        }
        if (!forwardPiece || forwardPiece.isRedPiece() !== isRed) {
            moves.push(forwardPos);
        }
        var crossedRiver = isRed ? position.y >= 5 : position.y <= 4;
        if (crossedRiver) {
            var leftPos = new Position_1.default(position.x - 1, position.y);
            var rightPos = new Position_1.default(position.x + 1, position.y);
            [leftPos, rightPos].forEach(function (pos) {
                var _a;
                var piece = (_a = board.getCell(pos)) === null || _a === void 0 ? void 0 : _a.getPiece();
                if (pos.x >= 0 &&
                    pos.x <= 8 &&
                    (!piece || piece.isRedPiece() !== isRed)) {
                    moves.push(pos);
                }
            });
        }
        return moves;
    };
    return SoldierMovement;
}());
exports.default = SoldierMovement;
