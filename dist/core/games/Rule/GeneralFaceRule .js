"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position_1 = require("../../boards/Position");
var GeneralFaceToFace = /** @class */ (function () {
    function GeneralFaceToFace() {
    }
    GeneralFaceToFace.areFacing = function (board, general1, general2) {
        var _a;
        if (!general1 || !general2)
            return false;
        if (general1.getPosition().x !== general2.getPosition().x)
            return false;
        var x = general1.getPosition().x;
        var minY = Math.min(general1.getPosition().y, general2.getPosition().y) + 1;
        var maxY = Math.max(general1.getPosition().y, general2.getPosition().y);
        for (var y = minY; y < maxY; y++) {
            var piece = (_a = board.getCell(new Position_1.default(x, y))) === null || _a === void 0 ? void 0 : _a.getPiece();
            if (piece)
                return false;
        }
        return true;
    };
    return GeneralFaceToFace;
}());
exports.default = GeneralFaceToFace;
