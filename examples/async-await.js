const trike = require('../');

// Notice the use of Immediately invoked async function
// expessions just to demonstrate awaiting an async trike

// If you do not await the trike, you'll just get a
// Promise back.
(() => {
  const p = trike(async () => {
    return 'A Promise!'
  });

  console.log('Promise:', p);
})();

// await on a trike that has been given an async function
// (or other function that returns a promise) will give
// you the [err, result] array you should expect.
(async () => {
  const [e1, r1] = await trike(async () => {
    return 'Success!'
  });

  console.log('Resolving async function - Error:', e1);
  console.log('Resolving async function - Result:', r1);

  const [e2, r2] = await trike(async () => {
    throw new Error('Thrown!');
  });

  console.log('Rejecting async function - Error:', e2);
  console.log('Rejecting async function - Result:', r2);

  const [e3, r3] = await trike(() => {
    return new Promise((resolve, reject) => {
      Math.round(Math.random()) > 0 ?
        resolve('Success!') :
        reject(new Error('Failure!'));
    });
  });

  console.log('Promise returning function - Error:', e3);
  console.log('Promise returning function - Result:', r3);
})();
