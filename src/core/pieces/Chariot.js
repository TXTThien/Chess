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
var ChariotMoveStrategy = /** @class */ (function () {
    function ChariotMoveStrategy() {
    }
    ChariotMoveStrategy.prototype.getAvailableMoves = function (position, isRed) {
        var moves = [];
        for (var i = 1; i < 9; i++) {
            if (i !== position.x) {
                moves.push(new Position_1.default(i, position.y));
            }
        }
        for (var j = 1; j < 10; j++) {
            if (j !== position.y) {
                moves.push(new Position_1.default(position.x, j));
            }
        }
        return moves;
    };
    return ChariotMoveStrategy;
}());
var Chariot = /** @class */ (function (_super) {
    __extends(Chariot, _super);
    function Chariot(position, isRed) {
        return _super.call(this, position, new ChariotMoveStrategy(), isRed) || this;
    }
    Chariot.prototype.getName = function () {
        return "Chariot (Xe)";
    };
    return Chariot;
}(Piece_1.default));
exports.default = Chariot;
