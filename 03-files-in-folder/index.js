const fileSys = require('fs/promises');
const dirint = require('fs');
const path = require('path');
const folderPath = path.join(__dirname, '/secret-folder/');

async function showFiles() {
  try {
    const files = await fileSys.readdir(folderPath, {withFileTypes: true});
    console.log('\nFiles in /secret-folder: \n');
    for (const file of files){
      if (file.isFile()) {
        dirint.stat(path.join(folderPath, `\\${file.name}`), (err, stats) => {
          console.log((file.name + '.' + stats.size).split('.').join('-') + ' bytes');
        });
      }
    }
  } catch (err) {
    console.error(err);
  }
}

showFiles();


// fileSys.readdir(folderPath, {withFileTypes: true}, (err, files) => {
//     if (err) {
//         console.log(err, 'error');
//     }
//       for (const file of files) {
//         if (file.isFile()) {
//             console.log(file.name);
//         }
//       }
// })

// const pathsToCheck = [`${folderPath}/text.txt`];

// for (let i = 0; i < pathsToCheck.length; i++) {
//   dirint.stat(pathsToCheck[i], (err, stats) => {
//         console.log(stats);
//     });
// }