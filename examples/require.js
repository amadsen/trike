const trike = require('../');

const [err, foo] = trike(require, 'foo');

if (err) {
    console.error('Foo could not be required', err);
    return;
}

// use foo...
