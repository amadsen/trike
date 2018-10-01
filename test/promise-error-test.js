const test = require('tape');

const trike = require('../');
test(
  'Should return a Promise when passed a function that returns a Promise that will catch and not awaited',
  (t) => {
    const anError = new Error('An Error!');
    const result = trike(
      (e) => Promise.reject(e),
      anError
    );
    t.ok(!Array.isArray(result), 'result is not an array');
    t.ok(typeof result.then === 'function' && typeof result.catch === 'function', 'result has then() & catch() methods');
    result.then((r) => setImmediate(() => {
      t.ok(Array.isArray(r), 'result resolves to an array');
      t.ok(r.length === 1, 'resolved array has 1 element');
      t.equals(r[0], anError, 'resolved array has the expected error');

      t.end();
    }));
  }
);
