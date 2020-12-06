function runOnKeys(func, ...keyCodes) {
  let numberOfKeys = keyCodes.length;
  let keySet = new Set();

  document.addEventListener('keydown', function(event) {
    if (keyCodes.includes(event.code)) {
      keySet.add(event.code);
    }

    document.onkeyup = function(event) {
      if (keyCodes.includes(event.code)) {
        keySet.delete(event.code);
      }
    };

    if (keySet.size == numberOfKeys) {
      func();
    };
  });
}

runOnKeys(
  () => document.body.append('Multiply KeyDown'),
  'KeyQ',
  'KeyW'
);