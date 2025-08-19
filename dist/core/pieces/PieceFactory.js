"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../boards/Position");
var Horse_1 = require("./Horse");
var Advisor_1 = require("./Advisor");
var Canon_1 = require("./Canon");
var Chariot_1 = require("./Chariot");
var General_1 = require("./General");
var Elephant_1 = require("./Elephant");
var Soldier_1 = require("./Soldier");
var PieceFactory = /** @class */ (function () {
    function PieceFactory() {
    }
    PieceFactory.prototype.createPiece = function (type, position, isRed) {
        switch (type.toLowerCase()) {
            case "horse":
                return new Horse_1.default(position, isRed);
            case "advisor":
                return new Advisor_1.default(position, isRed);
            case "canon":
                return new Canon_1.default(position, isRed);
            case "chariot":
                return new Chariot_1.default(position, isRed);
            case "general":
                return new General_1.default(position, isRed);
            case "elephant":
                return new Elephant_1.default(position, isRed);
            case "soldier":
                return new Soldier_1.default(position, isRed);
            default:
                throw new Error("Unknown piece type: ".concat(type));
        }
    };
    PieceFactory.prototype.createAllPieces = function () {
        var pieces = [];
        // Red side
        pieces.push(this.createPiece("chariot", new Position_1.default(0, 0), true));
        pieces.push(this.createPiece("horse", new Position_1.default(1, 0), true));
        pieces.push(this.createPiece("elephant", new Position_1.default(2, 0), true));
        pieces.push(this.createPiece("advisor", new Position_1.default(3, 0), true));
        pieces.push(this.createPiece("general", new Position_1.default(4, 0), true));
        pieces.push(this.createPiece("advisor", new Position_1.default(5, 0), true));
        pieces.push(this.createPiece("elephant", new Position_1.default(6, 0), true));
        pieces.push(this.createPiece("horse", new Position_1.default(7, 0), true));
        pieces.push(this.createPiece("chariot", new Position_1.default(8, 0), true));
        pieces.push(this.createPiece("canon", new Position_1.default(1, 2), true));
        pieces.push(this.createPiece("canon", new Position_1.default(7, 2), true));
        for (var i = 0; i <= 8; i += 2) {
            pieces.push(this.createPiece("soldier", new Position_1.default(i, 3), true));
        }
        // Black side
        pieces.push(this.createPiece("chariot", new Position_1.default(0, 9), false));
        pieces.push(this.createPiece("horse", new Position_1.default(1, 9), false));
        pieces.push(this.createPiece("elephant", new Position_1.default(2, 9), false));
        pieces.push(this.createPiece("advisor", new Position_1.default(3, 9), false));
        pieces.push(this.createPiece("general", new Position_1.default(4, 9), false));
        pieces.push(this.createPiece("advisor", new Position_1.default(5, 9), false));
        pieces.push(this.createPiece("elephant", new Position_1.default(6, 9), false));
        pieces.push(this.createPiece("horse", new Position_1.default(7, 9), false));
        pieces.push(this.createPiece("chariot", new Position_1.default(8, 9), false));
        pieces.push(this.createPiece("canon", new Position_1.default(1, 7), false));
        pieces.push(this.createPiece("canon", new Position_1.default(7, 7), false));
        for (var i = 0; i <= 8; i += 2) {
            pieces.push(this.createPiece("soldier", new Position_1.default(i, 6), false));
        }
        return pieces;
    };
    return PieceFactory;
}());
exports.default = PieceFactory;
