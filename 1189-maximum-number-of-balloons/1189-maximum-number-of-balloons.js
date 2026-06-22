/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
    const hash = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0,
    }

    for (const char of text) {
        if (Object.hasOwn(hash, char)) {
            hash[char] += 1
        }
    }

    return Math.min(hash.b, hash.a, Math.floor(hash.l / 2), Math.floor(hash.o / 2), hash.n)

};