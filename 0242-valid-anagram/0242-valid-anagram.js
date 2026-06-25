/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    s = [...s].sort().join("");
    t = [...t].sort().join("");
    return s === t
};