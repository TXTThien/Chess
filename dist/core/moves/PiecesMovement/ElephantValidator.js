"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var BoardUtil_1 = require("../../boards/BoardUtil");
var ElephantMovement = /** @class */ (function () {
    function ElephantMovement() {
    }
    ElephantMovement.prototype.getAvailableMoves = function (position, board, isRed) {
        var moves = [];
        var directions = [
            { dx: 2, dy: 2 },
            { dx: 2, dy: -2 },
            { dx: -2, dy: 2 },
            { dx: -2, dy: -2 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newPos = new Position_1.default(position.x + dir.dx, position.y + dir.dy);
            if (!BoardUtil_1.default.isInside(board, newPos))
                continue;
            if (isRed && newPos.y > 4)
                continue;
            if (!isRed && newPos.y < 5)
                continue;
            var eyePos = new Position_1.default(position.x + dir.dx / 2, position.y + dir.dy / 2);
            if (!BoardUtil_1.default.isEmpty(board, eyePos))
                continue;
            moves.push(newPos);
        }
        return moves;
    };
    return ElephantMovement;
}());
exports.default = ElephantMovement;
