"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Piece_1 = require("./Piece");
var Position_1 = require("../boards/Position");
var GeneralMoveStrategy = /** @class */ (function () {
    function GeneralMoveStrategy() {
    }
    GeneralMoveStrategy.prototype.getAvailableMoves = function (position, isRed) {
        var moves = [];
        var directions = [
            { x: 0, y: 1 },
            { x: 0, y: -1 },
            { x: 1, y: 0 },
            { x: -1, y: 0 },
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var dir = directions_1[_i];
            var newX = position.x + dir.x;
            var newY = position.y + dir.y;
            if (isRed)
                if (newX >= 4 && newX <= 6 && newY >= 1 && newY <= 3)
                    moves.push(new Position_1.default(newX, newY));
                else if (newX >= 4 && newX <= 6 && newY >= 8 && newY <= 10)
                    moves.push(new Position_1.default(newX, newY));
        }
        return moves;
    };
    return GeneralMoveStrategy;
}());
var General = /** @class */ (function (_super) {
    __extends(General, _super);
    function General(position, isRed) {
        return _super.call(this, position, new GeneralMoveStrategy(), isRed) || this;
    }
    General.prototype.getName = function () {
        return "General (Tướng)";
    };
    return General;
}(Piece_1.default));
exports.default = General;
