/* 
给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c。

2019-06-28
124 / 124 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 94.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 10.62% 的用户
*/

var judgeSquareSum = function(c) {
    let i = 0;
    while(i * i <= c) {
        let num = c - i * i;
        if (Number.isInteger(Math.sqrt(num))) {
            return true;
        }
        i += 1;
    }
    return false;
};