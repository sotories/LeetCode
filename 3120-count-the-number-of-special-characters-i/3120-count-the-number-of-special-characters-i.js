/**
 * @param {string} word
 * @return {number}
 */

function isLowerChar(char) {
    const code = char.charCodeAt(0);
    return code >= 97 && code <= 122
};

var numberOfSpecialChars = function (word) {
    const set = new Set(word)
    let count = 0;

    set.forEach(c => {
        const upper = c.toUpperCase()
        const lower = c.toLowerCase()
        if (isLowerChar(c) && set.has(upper) && set.has(lower)) {
            count++
        }
    })

    return count
};