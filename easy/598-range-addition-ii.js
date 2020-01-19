/* 
给定一个初始元素全部为 0，大小为 m*n 的矩阵 M 以及在 M 上的一系列更新操作

操作用二维数组表示，其中的每个操作用一个含有两个正整数 a 和 b 的数组表示，含义是将所有符合 0 <= i < a 以及 0 <= j < b 的元素 M[i][j] 的值都增加 1。

在执行给定的一系列操作后，你需要返回矩阵中含有最大整数的元素个数

2019-06-25
69 / 69 个通过测试用例
执行用时 : 128 ms , 在所有JavaScript提交中击败了 79.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 5.62% 的用户
*/

var maxCount = function(m, n, ops) {
    let res = [m, n];

    function merge(a, b) {
        return [Math.min(a[0], b[0]), Math.min(a[1], b[1])];
    }

    for (let i = 0; i < ops.length; i += 1) {
        res = merge(res, ops[i]);
    }

    return res[0] * res[1];
};