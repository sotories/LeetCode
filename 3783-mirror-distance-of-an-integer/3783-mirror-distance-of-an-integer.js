/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    const reverse = Number(`${n}`.split('').reverse().join(''))

    return Math.abs(n - reverse)
};