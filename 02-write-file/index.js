const process = require('node:process');
const fileSys = require('fs');
const newFile = fileSys.createWriteStream('./02-write-file/write-file.txt');
const readline = require('node:readline');
const stream = fileSys.createReadStream(__dirname + `/write-file.txt`);


const response = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        prompt: `Enter a name of some animal \n`,
    }
)
response.prompt();

    response.on('line', (animal) => {  
        if (animal === 'exit') {
            console.log('Have a nice day/ evening/ Good night!');
            response.close();
        } else {
            newFile.write(`${animal}\n`, (err) => {
                if (err) {
                    console.log('Stop')
                }
                else console.log('Written');
            })
        }
    })

  response.on('SIGINT', () => {
    console.log('Have a nice day/ evening/ Good night then!');
    response.close();
});