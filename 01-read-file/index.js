const fileSys = require('fs');
const path = require('path');
// const stdout = require('process');
const pathToTextFile = path.join(__dirname, './text.txt');
const stream = fileSys.createReadStream(pathToTextFile);

stream.on('data', (text) => {
  process.stdout.write(text);
});

// fileSys.readFile(pathToTextFile, (error, response) => {
//     if (error) {
//         console.log("Error!", error);
//     }
//     console.log(response.toString());
// })
