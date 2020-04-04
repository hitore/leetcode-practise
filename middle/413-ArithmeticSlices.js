/* 
如果一个数列至少有三个元素，并且任意两个相邻元素之差相同，则称该数列为等差数列。

例如，以下数列为等差数列:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
以下数列不是等差数列。

1, 1, 2, 5, 7

数组 A 包含 N 个数，且索引从0开始。数组 A 的一个子数组划分为数组 (P, Q)，P 与 Q 是整数且满足 0<=P<Q<N 。

如果满足以下条件，则称子数组(P, Q)为等差数组：

元素 A[P], A[p + 1], ..., A[Q - 1], A[Q] 是等差的。并且 P + 1 < Q 。

函数要返回数组 A 中所有为等差数组的子数组个数。

2020-04-04
15 / 15 个通过测试用例
执行用时 : 136 ms, 在JavaScript提交中击败了85.00% 的用户
内存消耗 : 36.6 MB, 在JavaScript提交中击败了87.00% 的用户
*/

var numberOfArithmeticSlices = function(A) {
    if (A.length < 3) return 0;
    let dp = new Array(A.length).fill(0);
    let res = 0;

    for (let i = 2; i < A.length; i += 1) {
        if (A[i] - A[i -1] === A[i - 1] - A[i - 2]) {
            dp[i] = dp[i - 1] + 1;
            res += dp[i];
        }
    }

    return res;
};