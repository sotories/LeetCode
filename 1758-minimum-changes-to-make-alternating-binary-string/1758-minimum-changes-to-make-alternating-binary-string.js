/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    const help = (s, ch) => {
        let ans = 0;

        for (let i = 0; i < s.length; i++) {
            if (i % 2 === 0 && s[i] !== ch) ans++;
            else if (i % 2 === 1 && s[i] === ch) ans++;
        }

        return ans;
    };

    const opt1 = help(s, '0');
    const opt2 = help(s, '1');

    return Math.min(opt1, opt2);

};