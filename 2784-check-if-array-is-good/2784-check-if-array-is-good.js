/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let mx = nums[n - 1];

    if (n !== mx + 1) {
        return false;
    }

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== i + 1) {
            return false;
        }
    }

    return nums[n - 1] === mx;

};
