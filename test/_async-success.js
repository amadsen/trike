const test = require('tape');

const trike = require('../');

test(
  'Should return a callback-like array to await',
  (t) => (async () => {
    const aSuccess = ['Success', '!'];
    const expected = 'Success!';
    const result = await trike(
      async (...args) => args.join(''),
      ...aSuccess
    );
    t.ok(Array.isArray(result), 'result is an array');
    t.ok(result.length === 2, 'result has two elements');
    t.ok(result[0] === null, 'returned null in the error position');
    t.equals(result[1], expected, 'returned the expected result');

    t.end();
  })()
);
