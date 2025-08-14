import { secureRandomInt } from './random.js';

// Generate a random integer using a cryptographically secure RNG if available,
// but gracefully fall back to Math.random when `secureRandomInt` isn't defined.
const randInt = (max) => {
  if (typeof secureRandomInt === 'function') {
    return secureRandomInt(max);
  }
  return Math.floor(Math.random() * max);
};

export default class ShuffleBag {
  constructor(items = []) {
    this.original = [...items];
    this.bag = [];
    this.reset(items);
  }

  reset(items = this.original) {
    this.original = [...items];
    this.bag = [...this.original];
    this._shuffle();
  }

  _shuffle() {
    for (let i = this.bag.length - 1; i > 0; i--) {
      const j = randInt(i + 1);
      [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
    }
  }

  next() {
    if (this.bag.length === 0) {
      this.reset();
    }
    return this.bag.pop();
  }
}
