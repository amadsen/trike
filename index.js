
// If we can initialize asyncTrike using eval
// then we have async function support.
// NOTE: we are explicitly using var here so
// that our call to trike does not have issues
// with hoisted functions and the temporal dead
// zone causing trike's check for asyncTrike to
// throw a reference error.
var [e, asyncTrike] = trike(() => eval(`(() => {
  const asyncTrike = async (p) => {
    try {
      let r = await Promise.resolve(p);
      return [null, r];
    } catch(e) {
      return [e];
    }
  }
  return asyncTrike;
})()`));

function trike(fn, ...args) {
  try {
    const r = fn(...args);
    // if r is Promise-like, await it
    if (asyncTrike && r.then && r.catch) {
      return asyncTrike(r);
    }
    return [null, r];
  } catch(e) {
    return [e];
  }
}

module.exports = trike;
