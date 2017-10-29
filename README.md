# Trike - try/c(atch)

Trike is a simple try/catch wrapper around a function that returns an array similar to the common node error-first callback convention. This serves two main purposes:

1. Successful and errored calls can be easily distinguished through simple array destructuring.
2. the try/catch is extracted from the calling and called functions, allow for better optimization.

## Installation

~~~bash
npm install trike
~~~

## Use

~~~javascript
const trike = require('trike');

const [err, foo] = trike(require, 'foo');

if (err) {
	console.error('Foo could not be required', err);
	return;
}

// use foo...
~~~

### trike(fn[, ...args])

Trike takes a function to be called as it first argument. Any additional arguments passed to trike will be passed to this function.

~~~javascript
const trike = require('trike');

const [err, joined] = trike((...args) => (
	args.join(' ')
), 'One', 'fish.', 'Two', 'fish.');

console.error(err); // 'null'

console.log(joined); // 'One fish. Two fish.'
~~~