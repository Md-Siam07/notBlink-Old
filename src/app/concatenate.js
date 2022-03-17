const fs = require('fs-extra');
const concat = require('concat');


(async function build() {
  const files = [
    './dist/screen-recording-app/runtime.js',
    './dist/screen-recording-app/polyfills.js',
    './dist/screen-recording-app/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/screen-recording.js');
})()