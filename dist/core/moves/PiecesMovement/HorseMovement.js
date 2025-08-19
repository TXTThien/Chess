"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var HorseMovement = /** @class */ (function () {
    function HorseMovement() {
    }
    HorseMovement.prototype.getAvailableMoves = function (position, board) {
        var moves = [];
        var directions = [
            { dx: 2, dy: 1 },
            { dx: 2, dy: -1 },
            { dx: -2, dy: 1 },
            { dx: -2, dy: -1 },
            { dx: 1, dy: 2 },
            { dx: 1, dy: -2 },
            { dx: -1, dy: 2 },
            { dx: -1, dy: -2 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newPos = new Position_1.default(position.x + dir.dx, position.y + dir.dy);
            if (!BoardUtil_1.default.isInside(board, newPos))
                continue;
            var blockPos = void 0;
            if (Math.abs(dir.dx) === 2) {
                blockPos = new Position_1.default(position.x + dir.dx / 2, position.y);
            }
            else {
                blockPos = new Position_1.default(position.x, position.y + dir.dy / 2);
            }
            if (!BoardUtil_1.default.isEmpty(board, blockPos))
                continue;
            moves.push(newPos);
        }
        return moves;
    };
    return HorseMovement;
}());
exports.default = HorseMovement;
