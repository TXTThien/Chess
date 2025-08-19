"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var GeneralMovement = /** @class */ (function () {
    function GeneralMovement() {
    }
    GeneralMovement.prototype.getAvailableMoves = function (position, board, isRed) {
        var moves = [];
        var directions = [
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newPos = new Position_1.default(position.x + dir.dx, position.y + dir.dy);
            if (!BoardUtil_1.default.isInside(board, newPos))
                continue;
            if (isRed) {
                if (newPos.x < 3 || newPos.x > 5 || newPos.y < 7 || newPos.y > 9)
                    continue;
            }
            else {
                if (newPos.x < 3 || newPos.x > 5 || newPos.y < 0 || newPos.y > 2)
                    continue;
            }
            moves.push(newPos);
        }
        return moves;
    };
    return GeneralMovement;
}());
exports.default = GeneralMovement;
