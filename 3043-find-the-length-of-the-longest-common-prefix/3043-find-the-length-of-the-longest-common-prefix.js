/**
 * @param {number[]} arr1 [1,10,100]
 * @param {number[]} arr2 [1000]
 * @return {number}
 */
var longestCommonPrefix = function (arr1, arr2) {
    const prefixes = new Set();

    for (const num of arr1) {
        const str = String(num)

        for (let i = 1; i <= str.length; i++) {
            const prefix = str.slice(0, i)
            prefixes.add(prefix)
        }
    }

    let ans = 0

    for (const num of arr2) {
        const str = String(num)

        for (let i = 1; i <= str.length; i++) {
            const prefix = str.slice(0, i)
            if (prefixes.has(prefix)) {
                ans = Math.max(ans, i)
            }
        }
    }
    return ans
};
// arr1 = [1234, 5678]
// arr2 = [123, 12345]