/* 
对于字符串 S 和 T，只有在 S = T + ... + T（T 与自身连接 1 次或多次）时，我们才认定 “T 能除尽 S”。

返回最长字符串 X，要求满足 X 能除尽 str1 且 X 能除尽 str2。

2020-03-12
103 / 103 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 97.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 81.62% 的用户
*/

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    // 辗转相除法
    function gcd(a, b) {
        let c = a % b;
        if (c === 0) return b;
        return gcd(b, c);
    }

    return str1.slice(0, gcd(str1.length, str2.length));
};