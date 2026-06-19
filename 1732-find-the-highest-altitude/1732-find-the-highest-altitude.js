/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let max = 0;

    gain.reduce((cur, acc) => {
        acc = acc + cur
        max = Math.max(max, acc)
        return acc
    }, 0)

    return max
};