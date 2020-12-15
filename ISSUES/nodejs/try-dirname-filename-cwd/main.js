console.log('heya------------------------main.js: __dirname')
console.log(__dirname);
console.log('------------------------yahe')

console.log('heya------------------------main.js: __filename')
console.log(__filename);
console.log('------------------------yahe')

console.log('heya------------------------main.js: process.cwd()')
console.log(process.cwd());
console.log('------------------------yahe')


const tim = require('./src/lib/tim.js');
console.log('heya------------------------main.js after require, get a tim')
console.log(tim)
console.log('------------------------yahe')