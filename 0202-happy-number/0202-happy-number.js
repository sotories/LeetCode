/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    const set = new Set();

    while (n !== 1) {
        const newNum = `${n}`.split("").map(v => (Number(v)) * Number(v)).reduce((acc, cur) => acc += cur, 0);
        if (newNum === 1) {
            return true;
        }
        if (set.has(newNum)) {
            return false;
        } else {
            set.add(newNum)
            n = newNum
        }
    }

    return true
};