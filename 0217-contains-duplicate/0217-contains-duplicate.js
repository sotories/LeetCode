/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    nums.sort()
    let num;
    // [1,1,2,3]
    for (let i = 1; i < nums.length; i++) {
        num = nums[i - 1]
        if (num === nums[i]) {
            return true
        } else {
            num = nums[i]
        }
    }
    return false
};