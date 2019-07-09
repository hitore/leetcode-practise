/* 
在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积。

2019-07-09
68 / 68 个通过测试用例
执行用时 : 136 ms, 在Ugly Number II的JavaScript提交中击败了95.54% 的用户
内存消耗 : 36.6 MB, 在Ugly Number II的JavaScript提交中击败了52.00% 的用户
*/

var maximalSquare = function(matrix) {
    if (matrix.length === 0) return 0;
    let res = 0;
    matrix.unshift(new Array(matrix[0].length).fill(0));
    for (let i = 0; i < matrix.length; i += 1) {
        matrix[i].unshift(0);
    }
    for (let j = 1; j < matrix.length; j += 1) {
        for (let k = 1; k < matrix[j].length; k += 1) {
            matrix[j][k] = +matrix[j][k];
            if (matrix[j][k] && matrix[j - 1][k] && matrix[j][k - 1] && matrix[j - 1][k - 1]) {
                matrix[j][k] = Math.min(matrix[j - 1][k], matrix[j][k - 1], matrix[j - 1][k - 1]) + 1;
            }
            res = Math.max(res, matrix[j][k]);
        }
    }
    return res * res;
};