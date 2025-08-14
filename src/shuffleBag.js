let secureRandomInt;
if (typeof window !== 'undefined' && typeof window.secureRandomInt === 'function') {
  secureRandomInt = window.secureRandomInt;
} else if (typeof require === 'function') {
  secureRandomInt = require('./random').secureRandomInt;
} else {
  throw new Error('secureRandomInt is not available');
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

