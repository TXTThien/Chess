"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TurnManager = /** @class */ (function () {
    function TurnManager(players) {
        if (players.length !== 2) {
            throw new Error("TurnManager requires exactly 2 players.");
        }
        this.players = players;
        this.currentTurnIndex = 0;
    }
    TurnManager.prototype.getCurrentPlayer = function () {
        return this.players[this.currentTurnIndex];
    };
    TurnManager.prototype.nextTurn = function () {
        this.currentTurnIndex = (this.currentTurnIndex + 1) % this.players.length;
    };
    return TurnManager;
}());
exports.default = TurnManager;
