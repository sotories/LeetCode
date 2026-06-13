/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    const l = colors.length;
    let ans = 0;

    for (let i = l - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            ans = Math.max(ans, i);
            break;
        }
    }

    for (let i = 0; i < l; i++) {
        if (colors[i] !== colors[l - 1]) {
            ans = Math.max(ans, l - 1 - i);
            break;
        }
    }

    return ans;
};