/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let i = 0, j = 0;
    let result = -1;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result = nums1[i];
            return result
        }

        if (nums1[i] > nums2[j]) {
            j++
        } else if (nums1[i] < nums2[j]) {
            i++
        }
    }
    return result
};