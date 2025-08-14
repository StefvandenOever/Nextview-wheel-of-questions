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
=======
(function (global, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    global.ShuffleBag = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const cryptoObj = (typeof globalThis !== 'undefined' && globalThis.crypto) ? globalThis.crypto : (typeof require === 'function' ? require('crypto').webcrypto : null);
  if (!cryptoObj || typeof cryptoObj.getRandomValues !== 'function') {
    throw new Error('crypto.getRandomValues is required');
  }

  function randomInt(max) {
    const buf = new Uint32Array(1);
    cryptoObj.getRandomValues(buf);
    return buf[0] % max;
  }

  class ShuffleBag {
    constructor(items = []) {
      this.items = [];
      this.index = 0;
      this.reset(items);
    }

    reset(items = []) {
      this.items = Array.from(items);
      this.shuffle();
    }

    shuffle() {
      const arr = this.items;
      for (let i = arr.length - 1; i > 0; i--) {
        const j = randomInt(i + 1);
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      this.index = 0;
    }

    next() {
      if (this.items.length === 0) return undefined;
      if (this.index >= this.items.length) {
        this.shuffle();
      }
      return this.items[this.index++];
    }
  }

  return ShuffleBag;
});

