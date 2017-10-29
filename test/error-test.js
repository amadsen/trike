const test = require('tape');

const trike = require('../');
test(
    'Should catch an error and return it as the only argument in an array',
    (t) => {
        const anError = new Error('This is a test error');
        const result = trike(
            (e) => {
                throw e;
            },
            anError
        );
        t.ok(Array.isArray(result), 'result is an array');
        t.ok(result.length === 1, 'result has only one element');
        t.equals(result[0], anError, 'caught and returned the error');

        t.end();
    }
);
