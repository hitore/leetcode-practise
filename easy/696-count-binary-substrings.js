/* 
给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。

重复出现的子串要计算它们出现的次数。

2019-07-04
90 / 90 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 99.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 52.62% 的用户
*/

var countBinarySubstrings = function(s) {
    s = s.split('');
    let res = 0;
    let one = 0;
    let zero = 0;
    for (let i = 0; i < s.length; i += 1) {
        if (i > 0 && s[i] !== s[i - 1] && one && zero) {
            if (s[i] === '0') {
                zero = 0;
            } else {
                one = 0;
            }
        }
        if (s[i] === '0') {
            zero += 1;
            if (one >= zero) {
                res += 1;
            }
        } else {
            one += 1;
            if (zero >= one) {
                res += 1;
            }
        }
    }
    return res;
};