const fs = require('node:fs/promises');

fs.writeFile('write.txt', 'i like Node.js')
//   .then((res) => console.log(res)) повертає undefind бо виконано успішно
  .then(() => console.log('done'))
  .catch((error) => console.error(error));
