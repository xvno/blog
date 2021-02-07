module.exports = (function () {
    const fn = Object.prototype.toString;
    const startIdx = 8;
    const endIdx = -1;

    return function getType(obj, idx = startIdx, end = endIdx) {
        let raw = fn.call(obj);
        return raw.slice(idx, end);
    };
})();
