const trike = require('../');

const [err, joined] = trike((...args) => (
    args.join(' ')
), 'One', 'fish.', 'Two', 'fish.');

console.error('Error:', err); // 'Error: null'

console.log(joined); // 'One fish. Two fish.'
