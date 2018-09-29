# Trike - try/c(atch)

Trike is a simple try/catch wrapper around a function that returns an array similar to the common node error-first callback convention. This serves two main purposes:

1. Successful and errored calls can be easily distinguished through simple array destructuring.
2. the try/catch is extracted from the calling and called functions, allowing for better optimization.

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

## `async` / `await` support

Trike now has support for `async` / `await` where the runtime natively supports it. If you pass an async function (or other function that returns a `Promise`) to `trike()` it will return a `Promise` that will resolve to `trike`'s normal error-first callback-like array with the error and result set by resolving or rejecting the passed function.

~~~javascript
// Notice the use of an immediately invoked async function
// expession just to demonstrate awaiting an async trike.
(async () => {
  const [err, result] = await trike(async () => {
    return 'Success!'
  });

  console.error(err);  // null
  console.log(result); // 'Success!'
})();
~~~

## License

Copyright (c) 2018 Aaron Madsen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.