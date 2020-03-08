/* 
给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。

2020-03-08
15 / 15 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了77.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了71.00% 的用户
*/

var countBits = function(num) {
    let res = [0];

    for (let i = 1; i <= num; i += 1) {
        res[i] = res[i & (i - 1)] + 1;
    }

    return res;
};