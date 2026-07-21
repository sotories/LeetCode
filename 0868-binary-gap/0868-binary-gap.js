/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let s = n.toString(2);

    let i = 0, j = 0;
    let x = s.length;
    let maxi = 0;

    while (j < x && i < x) {
        if (s[i] === '1') {
            j = i + 1;
            while (j < x && s[j] !== '1') {
                j++;
            }
            if (j < x && s[j] === '1') {
                maxi = Math.max(maxi, j - i);
            }
        }
        i++;
    }

    return maxi;
};