/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    return Math.max(nums.at(-1) * nums.at(-2) * nums.at(-3), nums.at(-1) * nums[0] * nums[1])
}