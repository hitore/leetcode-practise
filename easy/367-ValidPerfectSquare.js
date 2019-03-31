/* 
给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。

说明：不要使用任何内置的库函数，如  sqrt。

示例 1：

输入：16
输出：True

2019-03-31
68 / 68 个通过测试用例
执行用时 : 100 ms, 在Valid Perfect Square的JavaScript提交中击败了36.57% 的用户
内存消耗 : 33.5 MB, 在Valid Perfect Square的JavaScript提交中击败了0.00% 的用户
*/

var isPerfectSquare = function(num) {
    let r = num;

    while(r * r > num) {
        r = ~~((r + num/r) / 2);
    }

    return r * r === num;
};

