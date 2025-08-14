// Attempt to use a cryptographically secure RNG if available, but
// gracefully fall back to Math.random so the app can still function
// in environments where `secureRandomInt` hasn't been defined yet.
let secureRandomInt = (max) => Math.floor(Math.random() * max);
if (typeof window !== 'undefined' && typeof window.secureRandomInt === 'function') {
  secureRandomInt = window.secureRandomInt;
} else if (typeof require === 'function') {
  try {
    secureRandomInt = require('./random').secureRandomInt;
  } catch (e) {
    // ignore and use the Math.random fallback
  }
}

class ShuffleBag {
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
      const j = secureRandomInt(i + 1);
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

if (typeof module !== 'undefined') {
  module.exports = ShuffleBag;
}
if (typeof window !== 'undefined') {
  window.ShuffleBag = ShuffleBag;
}
