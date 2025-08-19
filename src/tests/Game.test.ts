import { describe, it, expect } from 'vite';
import Game from '../core/games/Game';
import Position from '../core/boards/Position';

describe("Game class", () => {
  it("should initialize board with generals", () => {
    const game = new Game("Alice", "Bob");
    const redGeneral = game.findMyGeneral(true);
    const blackGeneral = game.findMyGeneral(false);
    expect(redGeneral).not.toBeNull();
    expect(blackGeneral).not.toBeNull();
  });

  it("should allow valid move", () => {
    const game = new Game("Alice", "Bob");
    const redGeneral = game.findMyGeneral(true)!;
    const from = redGeneral.getPosition();
    const to = new Position(from.x, from.y + 1); 
    const result = game.move(from, to);
    expect(result).toBe(true);
  });
});
