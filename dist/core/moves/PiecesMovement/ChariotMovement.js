"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var ChariotMovement = /** @class */ (function () {
    function ChariotMovement() {
    }
    ChariotMovement.prototype.getAvailableMoves = function (position, board, isRed) {
        var moves = [];
        var directions = [
            { dx: 1, dy: 0 },
            { dx: -1, dy: 0 },
            { dx: 0, dy: 1 },
            { dx: 0, dy: -1 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newPos = new Position_1.default(position.x + dir.dx, position.y + dir.dy);
            while (BoardUtil_1.default.isInside(board, newPos)) {
                if (!BoardUtil_1.default.isEmpty(board, newPos)) {
                    moves.push(newPos);
                    break;
                }
                moves.push(newPos);
                newPos = new Position_1.default(newPos.x + dir.dx, newPos.y + dir.dy);
            }
        }
        return moves;
    };
    return ChariotMovement;
}());
exports.default = ChariotMovement;
