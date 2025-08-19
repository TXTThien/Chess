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
var GeneralMovement_1 = require("../moves/PiecesMovement/GeneralMovement");
var General = /** @class */ (function (_super) {
    __extends(General, _super);
    function General(position, isRed) {
        return _super.call(this, position, isRed, new GeneralMovement_1.default()) || this;
    }
    General.prototype.getName = function () {
        return "General";
    };
    General.prototype.getClone = function () {
        return new General(new Position_1.default(this.getPosition().x, this.getPosition().y), this.isRedPiece());
    };
    return General;
}(Piece_1.default));
exports.default = General;
