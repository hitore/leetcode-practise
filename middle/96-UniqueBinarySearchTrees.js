/* 
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
示例:

输入: 3
输出: 5

2019-03-22
19 / 19 个通过测试用例
执行用时 : 88 ms, 在Unique Binary Search Trees的JavaScript提交中击败了36.73% 的用户
内存消耗 : 33.9 MB, 在Unique Binary Search Trees的JavaScript提交中击败了0.00% 的用户
*/

var numTrees = function(n) {
    let res = new Array(n + 1).fill(0);
    res[0] = 1;
    res[1] = 1;
    for (let i = 2; i <= n; i += 1) {
        for (let n = 1; n <= i; n += 1) {
            res[i] += res[n - 1] * res[i - n];
        }
    }
    return res[n];
};