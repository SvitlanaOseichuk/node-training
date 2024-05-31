const fs = require('node:fs/promises');

fs.appendFile('append.txt', 'i really like node \n')
  .then(res => console.log({res}))
  .catch((error) => console.error(error));

