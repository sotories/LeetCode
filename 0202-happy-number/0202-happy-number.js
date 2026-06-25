/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const map = new Map();

    while (n !== 1) {
        const newNum = `${n}`.split("").map(v => (Number(v)) * Number(v)).reduce((acc, cur) => acc += cur, 0);
        if (newNum === 1) {
            return true;
        }
        if (map.has(newNum)) {
            return false;
        } else {
            map.set(newNum, true)
            n = newNum
        }
    }

    return true
};