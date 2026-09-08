/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function (nums, k) {
    const suf = [];
    let pref = -1;
    nums.reduceRight((a, c, i) => suf[i] = Math.min(a, c), Infinity);
    return nums.findIndex((c, i) => (pref = Math.max(pref, c)) - suf[i] <= k);
};