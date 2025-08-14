function secureRandomInt(max){
  if(!Number.isInteger(max) || max <= 0){
    throw new Error('max must be a positive integer');
  }
  const cryptoObj = globalThis.crypto || (typeof require === 'function' ? require('crypto').webcrypto : null);
  if(!cryptoObj || typeof cryptoObj.getRandomValues !== 'function'){
    throw new Error('crypto.getRandomValues is not available');
  }
  const arr = new Uint32Array(1);
  const maxUint = 0x100000000; // 2^32
  const limit = Math.floor(maxUint / max) * max;
  let value;
  do {
    cryptoObj.getRandomValues(arr);
    value = arr[0];
  } while (value >= limit);
  return value % max;
}

if (typeof module !== 'undefined') {
  module.exports = { secureRandomInt };
}
if (typeof window !== 'undefined') {
  window.secureRandomInt = secureRandomInt;
}
