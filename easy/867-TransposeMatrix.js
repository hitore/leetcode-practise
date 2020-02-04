/* 
给定一个矩阵 A， 返回 A 的转置矩阵。

矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。

2020-02-04
36 / 36 个通过测试用例
执行用时 : 80 ms , 在所有JavaScript提交中击败了 87.00% 的用户
内存消耗 : 41.9 MB , 在所有JavaScript提交中击败了 55.62% 的用户
*/

var transpose = function(A) {
    let res = [];
    for (let j = 0; j < A.length; j += 1) {
        for (let k = 0; k < A[0].length; k += 1) {
            if (res[k]) {
                res[k].push(A[j][k]);
            } else {
                res[k] = [A[j][k]];
            }
        }
    }
    return res;
};