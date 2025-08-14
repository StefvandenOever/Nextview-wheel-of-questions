require('jest-canvas-mock');
const ConfettiEngine = require('../ConfettiEngine');

describe('ConfettiEngine addBurst', () => {
  test('creates the requested number of particles with expected properties', () => {
    const canvas = document.createElement('canvas');
    const engine = new ConfettiEngine(canvas);
    engine.start = jest.fn();
    const count = 10;
    engine.addBurst({ count });
    expect(engine.particles).toHaveLength(count);
    for (const p of engine.particles) {
      expect(p).toEqual(expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number),
        vx: expect.any(Number),
        vy: expect.any(Number),
        g: expect.any(Number),
        w: expect.any(Number),
        h: expect.any(Number),
        rot: expect.any(Number),
        vr: expect.any(Number),
        alpha: expect.any(Number),
        fade: expect.any(Number),
        color: expect.any(String),
      }));
    }
  });
});
