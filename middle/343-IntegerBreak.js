/* 
给定一个正整数 n，将其拆分为至少两个正整数的和，并使这些整数的乘积最大化。 返回你可以获得的最大乘积。

2020-03-16
50 / 50 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了86.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了86.00% 的用户
*/

var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;

    let num = ~~(n / 3);
    let sur = n % 3;

    if (sur === 1) {
        num -= 1;
        sur += 3;
    }

    if (sur > 0) return 3 ** num * sur;

    return 3 ** num;
};