const fileSys = require('fs');
const path = require('path');
const pathToTextFile = path.join(__dirname, './text.txt');
const stream = fileSys.createReadStream(pathToTextFile);

stream.on('data', (text) => {
  process.stdout.write(text);
});
