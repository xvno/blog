console.log('heya------------------------main.js: __dirname')
console.log(__dirname);
console.log('------------------------yahe')

const { dirname } = require('./src/lib/tim.js');
console.log('heya------------------------main.js after require, get a dirname')
console.log(dirname)
console.log('------------------------yahe')