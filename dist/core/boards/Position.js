"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    Position.prototype.equals = function (other) {
        return this.x === other.x && this.y === other.y;
    };
    Position.prototype.toString = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Position.prototype.clone = function () {
        return new Position(this.x, this.y);
    };
    return Position;
}());
exports.default = Position;
