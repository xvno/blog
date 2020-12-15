module.exports = (function () {
    console.log('heya------------------------src/lib/tim.js: __dirname');
    console.log(__dirname);
    console.log('------------------------yahe');

    console.log('heya------------------------src/lib/tim.js: __filename');
    console.log(__filename);
    console.log('------------------------yahe');

    console.log('heya------------------------src/lib/tim.js: process.cwd()');
    console.log(process.cwd());
    console.log('------------------------yahe');
    return { dirname: __dirname, filename: __filename, cwd: process.cwd() };
})();
