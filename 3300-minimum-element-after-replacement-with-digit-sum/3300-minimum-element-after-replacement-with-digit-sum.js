/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    // [10,12,13,14]


    for (let i = 0; i < nums.length; i++) {
        const sum = String(nums[i]).split("").reduce((acc, cur) => Number(acc) + Number(cur), 0)
        nums[i] = sum;
    }

    return Math.min(...nums)
};