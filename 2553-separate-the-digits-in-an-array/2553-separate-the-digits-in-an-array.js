/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    return nums.map(v => `${v}`.split("").map(x => Number(x))).flat()
};