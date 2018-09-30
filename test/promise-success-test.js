const test = require('tape');

const trike = require('../');
test(
  'Should return a Promise when passed a function that returns a Promise and not awaited',
  (t) => {
    const aSuccess = ['Success'];
    const result = trike(
      async (r) => r,
      aSuccess
    );
    t.ok(!Array.isArray(result), 'result is not an array');
    t.ok(typeof result.then === 'function' && typeof result.catch === 'function', 'result has then() & catch() methods');
    result.then((r) => setImmediate(() => {
      t.ok(Array.isArray(r), 'result resolves to an array');
      t.ok(r.length === 2, 'resolved array has two elements');
      t.ok(r[0] === null, 'resolved array has null in the error position');
      t.equals(r[1], aSuccess, 'resolved array has the expected result');

      t.end();
    }));
  }
);
