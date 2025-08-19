"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var AdvisorMovement = /** @class */ (function () {
    function AdvisorMovement() {
    }
    AdvisorMovement.prototype.getAvailableMoves = function (position, board, isRed) {
        var _a;
        var moves = [];
        var directions = [
            { dx: 1, dy: 1 },
            { dx: -1, dy: 1 },
            { dx: 1, dy: -1 },
            { dx: -1, dy: -1 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newPos = new Position_1.default(position.x + dir.dx, position.y + dir.dy);
            if (this.isInPalace(newPos, isRed)) {
                var piece = (_a = board.getCell(newPos)) === null || _a === void 0 ? void 0 : _a.getPiece();
                if (!piece || piece.isRedPiece() !== isRed) {
                    moves.push(newPos);
                }
            }
        }
        return moves;
    };
    AdvisorMovement.prototype.isInPalace = function (position, isRed) {
        return isRed
            ? position.x >= 3 && position.x <= 5 && position.y >= 7 && position.y <= 9
            : position.x >= 3 && position.x <= 5 && position.y >= 0 && position.y <= 2;
    };
    return AdvisorMovement;
}());
exports.default = AdvisorMovement;
