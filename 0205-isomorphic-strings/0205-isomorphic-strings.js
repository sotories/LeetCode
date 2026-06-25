/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const sMap = new Map();
    const tMap = new Map();

    if (s.length === 1) return true;

    for (let i = 0; i < s.length; i++) {

        if (!sMap.get(s[i])) {
            sMap.set(s[i], t[i])
        }
        if (!tMap.get(t[i])) {
            tMap.set(t[i], s[i])
        }


        if (t[i] !== sMap.get(s[i])) {
            return false;
        }

        if (s[i] !== tMap.get(t[i])) {
            return false;
        }
    }

    return true;
};
