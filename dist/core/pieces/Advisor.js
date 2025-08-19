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
var AdvisorMovement_1 = require("../moves/PiecesMovement/AdvisorMovement");
var Advisor = /** @class */ (function (_super) {
    __extends(Advisor, _super);
    function Advisor(position, isRed) {
        return _super.call(this, position, isRed, new AdvisorMovement_1.default()) || this;
    }
    Advisor.prototype.getName = function () {
        return "Advisor";
    };
    Advisor.prototype.getClone = function () {
        return new Advisor(new Position_1.default(this.getPosition().x, this.getPosition().y), this.isRedPiece());
    };
    return Advisor;
}(Piece_1.default));
exports.default = Advisor;
