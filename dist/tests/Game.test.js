"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = require("../core/games/Game");
var Position_1 = require("../core/boards/Position");
describe("Game class", function () {
    var game;
    beforeEach(function () {
        game = new Game_1.default("Alice", "Bob");
    });
    test("should initialize game with 2 players and pieces on board", function () {
        expect(game.getCurrentPlayer().isRed).toBe(true);
        // Kiểm tra General đỏ có trên bàn
        var redGeneral = game.findMyGeneral(true);
        var blackGeneral = game.findMyGeneral(false);
        expect(redGeneral).toBeDefined();
        expect(blackGeneral).toBeDefined();
    });
    test("should switch turns correctly", function () {
        var currentPlayer = game.getCurrentPlayer();
        game.move(new Position_1.default(0, 0), new Position_1.default(0, 1)); // Giả sử hợp lệ
        var nextPlayer = game.getCurrentPlayer();
        expect(nextPlayer).not.toBe(currentPlayer);
    });
    test("should not move opponent's piece", function () {
        var blackPiecePos = new Position_1.default(0, 9); // Ô của quân đen
        var moveResult = game.move(blackPiecePos, new Position_1.default(0, 8));
        expect(moveResult).toBe(false);
    });
    test("should capture opponent piece", function () {
        var _a, _b, _c;
        // Giả sử có quân đỏ ở (0,1) và quân đen ở (0,2)
        var from = new Position_1.default(0, 1);
        var to = new Position_1.default(0, 2);
        // Đặt thử quân đỏ và quân đen
        var redPiece = (_a = game["board"].getCell(from)) === null || _a === void 0 ? void 0 : _a.getPiece();
        var blackPiece = (_b = game["board"].getCell(to)) === null || _b === void 0 ? void 0 : _b.getPiece();
        if (!redPiece)
            throw new Error("Red piece missing");
        if (!blackPiece) {
            // Tạo quân đen giả nếu chưa có
            throw new Error("Setup black piece manually if needed");
        }
        var result = game.move(from, to);
        expect(result).toBe(true);
        expect((_c = game["board"].getCell(to)) === null || _c === void 0 ? void 0 : _c.getPiece()).toBe(redPiece);
    });
    test("should not allow move putting own general in check", function () {
        var redGeneral = game.findMyGeneral(true);
        if (!redGeneral)
            throw new Error("Red general missing");
        var from = redGeneral.getPosition();
        var to = new Position_1.default(from.x, from.y + 1); // Giả sử move này bị check
        var result = game.move(from, to);
        expect(result).toBe(false);
        expect(redGeneral.getPosition()).toEqual(from);
    });
});
