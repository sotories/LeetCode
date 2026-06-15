/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    const leftSum = [0];
    for (let i = 0; i < nums.length - 1; i++) {
        const sum = leftSum[i] + nums[i];
        leftSum.push(sum)
    }

    const rightSum = [0];
    for (let i = nums.length - 1; i > 0; i--) {
        const sum = rightSum[0] + nums[i]
        rightSum.unshift(sum)
    }



    return leftSum.map((v, i) => Math.abs(v - rightSum[i]))
};