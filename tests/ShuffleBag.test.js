const ShuffleBag = require('../src/shuffleBag');

describe('ShuffleBag', () => {
  test('provides each item once before repeating', () => {
    const bag = new ShuffleBag(['a', 'b', 'c']);
    const firstCycle = [bag.next(), bag.next(), bag.next()];
    expect(new Set(firstCycle).size).toBe(3);
    const secondCycle = [bag.next(), bag.next(), bag.next()];
    expect(new Set(secondCycle).size).toBe(3);
  });

  test('reset reshuffles items', () => {
    const bag = new ShuffleBag([1, 2, 3]);
    const a = bag.next();
    bag.reset(['x', 'y']);
    expect(['x', 'y']).toContain(bag.next());
  });

  test('returns undefined when empty', () => {
    const bag = new ShuffleBag([]);
    expect(bag.next()).toBeUndefined();
  });
});
