"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckValidator_1 = require("./Rule/CheckValidator");
var CheckmateValidator_1 = require("./Rule/CheckmateValidator");
var MovementValidator_1 = require("./Rule/MovementValidator");
var RuleValidator = /** @class */ (function () {
    function RuleValidator() {
    }
    RuleValidator.canMove = function (piece, to, board) {
        return MovementValidator_1.default.isValidMove(piece, to, board);
    };
    RuleValidator.isInCheck = function (king, board) {
        return CheckValidator_1.default.isInCheck(king, board);
    };
    RuleValidator.isInCheckmate = function (king, board) {
        return CheckmateValidator_1.default.isCheckmate(king, board);
    };
    return RuleValidator;
}());
exports.default = RuleValidator;
