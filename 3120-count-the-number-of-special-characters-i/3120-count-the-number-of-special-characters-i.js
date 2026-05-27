/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let res = 0;
    for (let i = 0; i < 26; i++) {
        let u = String.fromCharCode(i + 65);
        let l = String.fromCharCode(i + 97);
        if (word.includes(u) && word.includes(l)) res++;
    }
    return res;
};
