import Game from "../core/games/Game";
import Board from "../core/boards/Board";
import PieceFactory from "../core/pieces/PieceFactory";

describe("Game", () => {
  let game: Game;

  beforeEach(() => {
    const board = new Board([], 10);
    game = new Game(["Player1", "Player2"], board);
  });

  test("should initialize game correctly", () => {
    expect(game.board).toBeDefined();
    expect(game.pieceFactory).toBeDefined();
  });

//   test("should make a valid move", () => {
//     const moveResult = game.makeMove();
//     expect(moveResult).toBe(true); // tùy logic
//   });
});
