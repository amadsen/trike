const test = require('tape');

const trike = require('../');
test(
    'Should return the function result as the second argument in an array',
    (t) => {
        const one = 'one';
        const two = 'two';
        const fish = 'fish';

        const result = trike(
            (...args) => {
                return {
                    args
                };
            },
            one,
            fish,
            two,
            fish
        );
        t.ok(Array.isArray(result), 'result is an array');
        t.ok(result.length === 2, 'result has two elements');
        t.equals(result[0], null, 'returned null in the error position');
        t.deepEquals(
            result[1],
            {
                args: [one, fish, two, fish]
            },
            'passed all arguments to the function and returned expected result'
        );

        t.end();
    }
);
