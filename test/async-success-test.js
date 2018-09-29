let nodeSupportsAsync = false;
try {
  nodeSupportsAsync = eval(`(() => {async () => 1; return true;})()`);
} catch (e) { /* ignore it */ }

if (nodeSupportsAsync) {
  require('./_async-success.js');
}
