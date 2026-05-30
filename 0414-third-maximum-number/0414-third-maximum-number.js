/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const set = new Set();

    let count = 0;
    const firstMax = Math.max(...nums)
    let max = 0;

    while (count < 4 || nums.length > 0) {
        if (count < 3 && nums.length === 0) {
            return firstMax
        }
        if (count === 3 || nums.length === 0) {
            return max;
        }

        max = Math.max(...nums);
        nums.splice(nums.indexOf(max), 1)
        if (!set.has(max)) {
            set.add(max)
            count++;
        }
    }
    return max;
};